from pathlib import Path
from zipfile import ZipFile,ZIP_DEFLATED
from lxml import etree
import sys
A='http://schemas.openxmlformats.org/drawingml/2006/main'; NS={'a':A}
def normalize(p):
 with ZipFile(p) as z:entries={n:z.read(n) for n in z.namelist()}
 for n,b in list(entries.items()):
  if not n.startswith('ppt/') or not n.endswith('.xml'):continue
  try:r=etree.fromstring(b)
  except etree.XMLSyntaxError:continue
  for e in r.iter():
   if e.get('typeface') is not None:e.set('typeface','Meiryo')
   if e.tag in {f'{{{A}}}rPr',f'{{{A}}}defRPr',f'{{{A}}}endParaRPr'}:
    e.set('lang','ja-JP')
    for tag in ('latin','ea','cs'):
     child=e.find(f'{{{A}}}{tag}')
     if child is None:child=etree.SubElement(e,f'{{{A}}}{tag}')
     child.set('typeface','Meiryo')
  entries[n]=etree.tostring(r,xml_declaration=True,encoding='UTF-8',standalone=True)
 temp=p.with_suffix('.tmp.pptx')
 with ZipFile(temp,'w',ZIP_DEFLATED) as z:
  for n,b in entries.items():z.writestr(n,b)
 temp.replace(p)
if __name__=='__main__':
 for arg in sys.argv[1:]:
  for p in ([Path(arg)] if Path(arg).is_file() else Path(arg).glob('*.pptx')):normalize(p);print(p.name)
