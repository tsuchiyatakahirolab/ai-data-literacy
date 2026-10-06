# スライドの編集と再生成

PowerPointで編集する場合は、slides/のPPTXを直接開いてください。全テキストはメイリオ指定です。フォントファイルは含みません。

一括再生成する場合は、content.jsonを編集し、Node.jsとpptxgenjs、Pythonとcairosvgがある環境で`node source/slides/build.js`を実行します。図表と操作図はPowerPointの文字・図形で生成し、Lucide SVGだけをPNGに変換して埋め込みます。スライドノートに出典を残しています。

生成後は字体、改行、表の収まりを実際のPowerPointでも確認してください。メイリオがない環境では代替フォントになるため、この環境での画像は行送りの最終確認には使えません。配布用のPDFは、メイリオが入った端末でPowerPointから書き出してください。

生成用ライブラリは、この作成環境ではpptxgenjs 4.0.0を使いました。Python側はcairosvgとlxmlが必要です。再生成時にnormalize_fonts.pyも自動実行し、テーマやノートを含めたフォント指定をメイリオにそろえます。
