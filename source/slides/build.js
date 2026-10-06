'use strict';
const fs = require('fs');
const path = require('path');
const pptxgen = require('pptxgenjs');
const cp = require('child_process');
const ROOT = process.env.COURSE_ROOT || path.resolve(__dirname, '../..');
const CONTENT=JSON.parse(fs.readFileSync(path.join(ROOT,'source/slides/content.json'),'utf8'));
const OUT=path.join(ROOT,'slides');
const ICONS=path.join(ROOT,'assets/icons/lucide');
const CACHE=path.join(require('os').tmpdir(),'ai-data-literacy-icons');fs.mkdirSync(CACHE,{recursive:true});
const C={ink:'1B2D3B',navy:'132B39',teal:'007F82',light:'EAF4F3',paper:'F7F8FA',white:'FFFFFF',muted:'4D626D',line:'CBD7DC',orange:'B05D12',warm:'FFF4E5',soft:'EFF2F5'};
const F='Meiryo';
const SHAPES=[];
function chWidth(str){return [...str].reduce((a,c)=>a+(/[\u0000-\u007f]/.test(c)?(/[il.,:;'|!]/.test(c)?.30:/[MW@]/.test(c)?.90:.56):1),0)}
function wrap(str,width,size){
 const limit=width*72/size*.96;
 return str.split('\n').map(line=>{
  if(chWidth(line)<=limit)return line;
  const tokens=line.match(/[A-Za-z0-9_./%+-]+| +|./gu)||[];
  const lines=[];let row='';
  for(const token of tokens){
   if(chWidth(row+token)>limit && row.trim().length){
    // A closing punctuation mark stays with a preceding character.
    if(/^[。、，．：；！？）」』】]$/.test(token)){
     const chars=[...row]; const last=chars.pop();
     lines.push(chars.join('').trimEnd());row=(last||'')+token;
    }else{lines.push(row.trimEnd());row=token.trimStart();}
   }else row+=token;
  }
  if(row)lines.push(row.trimEnd());
  // Avoid a lone final punctuation mark or one-character fragment.
  if(lines.length>1 && chWidth(lines[lines.length-1])<2.0){
   let tail=lines.pop();let prev=lines.pop();
   while(chWidth(tail)<3.8 && prev.length>4){const chars=[...prev];tail=chars.pop()+tail;prev=chars.join('');}
   lines.push(prev,tail);
  }
  return lines.join('\n');
 }).join('\n');
}
let CURR=null;
function rect(sl,x,y,w,h,fill,line=null,r=0){sl.addShape(r?'roundRect':'rect',{x,y,w,h,rectRadius:r,fill:{color:fill},line:{color:line||fill,width:line?1:0},radius:r});}
function line(sl,x1,y1,x2,y2,color=C.line,width=1){sl.addShape('line',{x:x1,y:y1,w:x2-x1,h:y2-y1,line:{color,width}})}
function text(sl,t,x,y,w,h,size=26,opt={}){
 const wrapped=opt.noWrap?t:wrap(t,w,size);
 const lines=wrapped.split('\n').length;
 SHAPES.push({deck:CURR.deck,page:CURR.page,text:t,wrapped,x,y,w,h,size,lines,estimatedH:lines*size*1.19/72});
 sl.addText(wrapped,{x,y,w,h,fontFace:F,fontSize:size,color:C.ink,breakLine:false,bold:false,margin:0,vertAlign:'baseline',valign:'top',paraSpaceAfterPt:0,lineSpacingMultiple:1.06,lang:'ja-JP',isTextBox:true,...opt});
}
function icon(sl,name,x,y,size=.48,color=C.teal){
 if(name==='triangle-alert' && color===C.teal) color=C.orange;
 const png=path.join(CACHE,`${name}_${color}.png`);
 if(!fs.existsSync(png)){
  const src=fs.readFileSync(path.join(ICONS,`${name}.svg`),'utf8').replaceAll('currentColor','#'+color);
  const tmpsvg=path.join(CACHE,`${name}_${color}.svg`);fs.writeFileSync(tmpsvg,src);
  cp.execFileSync('python',['-c',`import cairosvg; cairosvg.svg2png(url=${JSON.stringify(tmpsvg)},write_to=${JSON.stringify(png)},output_width=256,output_height=256)`]);
 }
 sl.addImage({path:png,x,y,w:size,h:size,altText:`Lucide ${name}`});
}
function heading(sl,title){
 const size=chWidth(title)>24?32:34;
 text(sl,title,.68,.54,11.96,.75,size,{bold:true});
 line(sl,.7,1.36,12.63,1.36,C.line,1);
}
function footer(sl,d,i,total,s){
 if(s.foot)text(sl,s.foot,.73,6.32,11.86,.60,18,{color:C.muted});
 text(sl,'データ科学入門｜演習',.73,7.03,4.2,.34,18,{color:C.muted});
 text(sl,`${d.week===0?'導入':d.week===15?'最終課題':'第'+d.week+'回'}  ${String(i+1).padStart(2,'0')} / ${total}`,9.2,7.03,3.4,.34,18,{color:C.muted,align:'right'});
}
function note(sl,d,s,i){
 const refs=(s.refs||[]).map(k=>CONTENT.sources[k]).filter(Boolean).map(x=>`${x[0]}\n${x[1]}\n確認日：2026-09-17`).join('\n\n');
 const n=[`【進行】${d.title} / ${i+1}ページ`,
  `到達点：${d.objective}`,
  s.notes||'スライドの指示に沿って操作を待つ。学生の画面で結果を確認してから次へ進む。',
  ['prompt','ui','steps'].includes(s.kind)?'操作に詰まった学生には、表示中の画面と止まった箇所を確認する。パスワードや認証コードは見せさせない。':'',
  s.kind==='prompt'?'コピー用の依頼文はhandouts/にある。指示文は例であり、長さや特定の語句を暗記させない。':'',
  s.kind==='ui'?'画面は操作箇所を整理した模式図であり、現行サービスのスクリーンショットではない。ラベルの位置は変わる可能性がある。':'',
  refs?`【参考資料】\n${refs}`:'',
  '【作成】本文・図形・表・数値表示はメイリオ指定。Lucideアイコンのライセンスはassets/icons/lucide/LICENSE.txtを参照。'
 ].filter(Boolean).join('\n\n');
 sl.addNotes(n);
}
function chart(sl,x,y,w,h,values,labels,min,max,color=C.teal,showValues=true){
 // Editable chart drawn with native PowerPoint primitives, never rasterized labels.
 const left=.62,right=.20,top=.5,bot=.5;
 const plotW=w-left-right,plotH=h-top-bot;
 const divisions=(max===5 || min===3)?5:4;
 for(let j=0;j<=divisions;j++){
  const v=min+(max-min)*j/divisions, yy=y+top+plotH-(v-min)/(max-min)*plotH;
  line(sl,x+left,yy,x+left+plotW,yy,C.line,1);
  text(sl,(Number.isInteger(v)?String(v):v.toFixed(1)),x,yy-.13,.50,.32,18,{align:'right',color:C.muted});
 }
 const bw=plotW/values.length*.50;
 values.forEach((v,k)=>{
  const cx=x+left+plotW*(k+.5)/values.length;
  const bh=(v-min)/(max-min)*plotH;
  rect(sl,cx-bw/2,y+top+plotH-bh,bw,bh,color);
  if(showValues)text(sl,v.toFixed(values.length===3?2:1),cx-.55,y+top+plotH-bh-.38,1.1,.33,20,{align:'center',bold:true});
  text(sl,labels[k],cx-(values.length===3?1:.43),y+top+plotH+.14,values.length===3?2:.86,.38,values.length===3?22:18,{align:'center',color:C.muted});
 });
}
function buildSlide(p,d,s,i){
 const sl=p.addSlide();CURR={deck:d.slug,page:i+1};sl.background={color:C.white};
 if(s.kind==='cover'){
  rect(sl,0,0,13.333,7.5,C.navy);rect(sl,0,0,.20,7.5,C.teal);
  text(sl,d.week===0?'はじめに':d.week===15?'最終課題':`第${String(d.week).padStart(2,'0')}回`,.78,.61,6,.55,26,{color:'B1D6D5'});
  text(sl,s.title,.78,1.7,10.3,2.45,42,{color:C.white,bold:true});
  text(sl,s.sub,.82,4.56,10.6,1.3,26,{color:'D9E7EC'});
  icon(sl,s.icon||'target',11.48,.62,.92,'A9D6D5');
  text(sl,'大学生のためのAI・データリテラシー',.82,6.87,10,.37,18,{color:'D9E7EC'});
 }else{
  heading(sl,s.title);
  if(s.kind==='cards'){
   const n=s.items.length, gap=.23, ww=(11.93-gap*(n-1))/n;
   s.items.forEach((a,k)=>{
    const x=.7+k*(ww+gap);rect(sl,x,1.68,ww,4.35,k===1?C.light:C.paper);
    icon(sl,a[0],x+.28,1.99,.58);text(sl,a[1],x+.28,2.91,ww-.56,.8,27,{bold:true});
    text(sl,a[2],x+.28,3.98,ww-.56,1.75,24);
   });
  }else if(s.kind==='steps'){
   s.items.forEach((a,k)=>{
    let yy=1.62+k*1.48;
    text(sl,String(k+1).padStart(2,'0'),.77,yy+.10,.82,.62,32,{color:C.teal,bold:true});
    text(sl,a[0],1.9,yy+.03,10.1,.68,28,{bold:true});
    text(sl,a[1],1.9,yy+.80,10.1,.58,23,{color:C.muted});
    if(k<2)line(sl,1.9,yy+1.39,12.55,yy+1.39,C.line,1);
   });
  }else if(s.kind==='prompt'){
   icon(sl,'keyboard',.78,1.64,.42);text(sl,s.label||'AIに送ってみよう',1.40,1.63,8,.52,22,{color:C.teal,bold:true});
   rect(sl,.7,2.28,11.93,3.14,C.light);
   text(sl,s.text,1.04,2.57,11.25,2.65,27);
   icon(sl,'circle-check',.80,5.72,.37);
   text(sl,s.check,1.34,5.65,11.2,.85,22,{color:C.muted});
  }else if(s.kind==='compare'){
   const panels=[s.left,s.right];
   panels.forEach((a,k)=>{
    let x=.70+k*6.07;const bad=/受け付けない|意味が変わった|意味が弱くなった|支えられない|言えないこと|避けたい/.test(a[0]);
    const good=/正しい例|意味を保った|原文に対応|資料が支える|読めること/.test(a[0]);
    rect(sl,x,1.70,5.86,4.36,bad?C.warm:good?C.light:k===0?C.paper:C.light);
    text(sl,a[0],x+.29,2.02,5.28,.80,26,{bold:true,color:bad?C.orange:good?C.teal:k===0?C.ink:C.teal});
    text(sl,a[1],x+.29,3.22,5.28,2.70,24);
   });
  }else if(s.kind==='notice'||s.kind==='source'){
   rect(sl,.70,1.66,11.93,4.43,s.kind==='source'?C.paper:C.light);
   icon(sl,s.icon||(s.kind==='source'?'file-text':'circle-check'),1.03,1.97,.48);
   text(sl,s.text,1.78,1.98,10.44,3.98,27);
  }else if(s.kind==='checklist'){
   s.items.forEach((a,k)=>{
    let yy=1.80+k*1.04;icon(sl,'circle-check',.8,yy+.04,.44);text(sl,a,1.57,yy,10.81,.93,26);
   });
  }else if(s.kind==='map'){
   const n=s.items.length, cols=n===4?2:3, rows=Math.ceil(n/cols),ww=(11.93-(cols-1)*.2)/cols, hh=(4.2-(rows-1)*.22)/rows;
   s.items.forEach((a,k)=>{
    const x=.7+(k%cols)*(ww+.2), y=1.79+Math.floor(k/cols)*(hh+.22);
    rect(sl,x,y,ww,hh,C.paper);icon(sl,a[0],x+.25,y+.28,.47);
    text(sl,a[1],x+.25,y+.99,ww-.5,.89,25,{bold:true});
   });
  }else if(s.kind==='ui'){
   rect(sl,.7,1.70,7.0,4.4,C.paper,C.line);
   rect(sl,.7,1.70,7,.58,C.soft);text(sl,s.screen,.93,1.84,6.5,.34,18,{color:C.muted});
   s.lines.forEach((a,k)=>{
    const yy=2.65+k*.98;
    rect(sl,1.04,yy-.08,6.28,.84,k===s.lines.length-1?C.light:C.white,k===s.lines.length-1?C.teal:C.line);
    text(sl,a,1.23,yy+.09,5.9,.67,23,{bold:k===s.lines.length-1});
   });
   text(sl,'操作箇所を示した模式図',.90,5.72,6.8,.36,18,{color:C.muted});
   s.actions.forEach((a,k)=>{
    const yy=1.84+k*1.42;
    text(sl,String(k+1),8.10,yy,.5,.44,26,{bold:true,color:C.teal});
    text(sl,a,8.68,yy,3.78,1.13,24);
   });
  }else if(s.kind==='table'){
   const n=s.headers.length;
   let widths=n===2?[3.7,8.23]:n===3?[3.8,4.15,3.98]:n===5?[1.13,2.25,2.5,2.9,3.15]:Array(n).fill(11.93/n);
   // Tables with short cells should leave more room for narrative columns.
   if(s.title.includes('対応させる')&&n===3)widths=[3.45,4.0,4.48];
   const hh=.77, rh=Math.min(.83,3.70/s.rows.length),start=1.70;
   let xx=.7;
   s.headers.forEach((t,j)=>{rect(sl,xx,start,widths[j],hh,C.navy);text(sl,t,xx+.16,start+.17,widths[j]-.32,.56,22,{bold:true,color:C.white});xx+=widths[j]});
   s.rows.forEach((r,k)=>{let x=.7,y=start+hh+k*rh;r.forEach((t,j)=>{
    rect(sl,x,y,widths[j],rh,k%2===0?C.paper:C.white);text(sl,t,x+.16,y+.14,widths[j]-.32,rh-.17,n>=5?24:22,{bold:j===0&&n===5});x+=widths[j];
   });line(sl,.7,y+rh,12.63,y+rh,C.line,1)});
  }else if(s.kind==='submission'){
   rect(sl,.7,1.70,5.75,4.42,C.paper);icon(sl,'folder',1.01,2.0,.49);
   text(sl,s.folder,1.72,1.99,4.4,.60,27,{bold:true,color:C.teal});
   s.files.forEach((a,k)=>text(sl,a,1.04,2.91+k*.90,5.02,.90,22));
   text(sl,'READMEの利用記録',6.99,1.97,5.1,.85,26,{bold:true});
   text(sl,s.record,7.0,3.04,5.26,2.66,24);
  }else if(s.kind==='timeline'){
   const nodes=s.items;nodes.forEach((a,k)=>{
    let x=1.0+k*4.04;
    if(k<nodes.length-1)line(sl,x+.26,2.29,x+4.3,2.29,C.teal,3);
    icon(sl,'git-commit-horizontal',x,1.99,.62);
    text(sl,a[0],x,3.06,3.50,.70,26,{bold:true});text(sl,a[1],x,4.01,3.45,1.5,24);
   });
  }else if(s.kind==='diff'){
   rect(sl,.7,1.71,11.93,4.38,C.paper);
   text(sl,'もともとあった文',1.02,2.00,10.7,.42,20,{color:C.muted});
   text(sl,s.before,1.07,2.68,10.9,1.23,25);
   rect(sl,.89,4.20,11.55,1.58,C.light);text(sl,'＋',1.05,4.45,.65,.7,29,{bold:true,color:C.teal});
   text(sl,s.after,1.85,4.40,10.28,1.25,25);
  }else if(s.kind==='formula'){
   text(sl,s.label,.85,1.76,11.6,.86,25,{color:C.muted});
   rect(sl,.7,2.84,11.93,1.55,C.light);text(sl,s.equation,1.0,3.23,11.3,.85,36,{bold:true,align:'center',color:C.teal});
   text(sl,s.text,.9,5.02,11.6,1.14,25);
  }else if(s.kind==='graphs'){
   s.charts.forEach((c,k)=>{const x=.72+k*6.07;text(sl,c.title,x+.25,1.70,5.52,.52,23,{bold:true});chart(sl,x,2.28,5.70,3.72,s.values,s.years,c.min,4.0,k===0?C.teal:C.orange)});
  }else if(s.kind==='groupchart'){
   chart(sl,1.2,1.56,10.8,4.48,s.values,s.labels,0,5); 
  }else if(s.kind==='itinerary'){
   s.items.forEach((a,k)=>{let y=1.79+k*.82;
    text(sl,a[0],.94,y,3.1,.60,25,{bold:true,color:C.teal});text(sl,a[1],4.45,y,7.7,.68,25);
    if(k<s.items.length-1)line(sl,4.44,y+.71,12.4,y+.71,C.line,1);
   });
  }else if(s.kind==='rubric'){
   s.items.forEach((a,k)=>{let y=1.67+k*1.08;text(sl,a[0],.9,y,1.7,.71,30,{bold:true,color:C.teal});text(sl,a[1],3.02,y,3.55,.69,26,{bold:true});text(sl,a[2],7.00,y,5.5,.86,24)});
  }else throw new Error('Unknown kind '+s.kind);
  footer(sl,d,i,d.slides.length,s);
 }
 note(sl,d,s,i);
}
async function main(){
 fs.mkdirSync(OUT,{recursive:true});
 for(const d of CONTENT.decks){
  const p=new pptxgen();p.layout='LAYOUT_WIDE';p.author='Takahiro Tsuchiya';p.subject='AI・データリテラシー／学生向け演習';p.title=d.title;p.company='Tsuchiya Lab';p.lang='ja-JP';p.theme={headFontFace:F,bodyFontFace:F,lang:'ja-JP'};p.themeName='Meiryo Hands-on';
  d.slides.forEach((s,i)=>buildSlide(p,d,s,i));
  const name=d.week===15?'Final_Project_v1.1.pptx':(d.week===0?'00':`Week${String(d.week).padStart(2,'0')}`)+'_'+d.slug+'_v1.1.pptx';
  await p.writeFile({fileName:path.join(OUT,name)});d.filename=name;console.log(name,d.slides.length);
 }
 cp.execFileSync('python',[path.join(__dirname,'normalize_fonts.py'),OUT]);
 fs.writeFileSync(path.join(ROOT,'source/slides/manifest.json'),JSON.stringify(CONTENT.decks.map(d=>({week:d.week,title:d.title,filename:d.filename,slides:d.slides.length})),null,2));
 fs.writeFileSync(path.join(ROOT,'source/slides/layout_metrics.json'),JSON.stringify(SHAPES,null,2));
}
main().catch(e=>{console.error(e);process.exit(1)});
