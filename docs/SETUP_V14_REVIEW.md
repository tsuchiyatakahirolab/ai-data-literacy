# 導入v1.4の改訂と確認（2026-10-07）

提供された、00の説明を統合済みのv1.4を読み、初心者がブラウザで進めるための説明を補いました。37枚、16:9、メイリオ、既存の画像と図形、40個のページ内移動リンクを維持しています。小さな個人ロゴとtsuchiyatakahiro.comの表示も維持しました。

## 補ったところ

- GitHub登録・メール設定・学生用ひな形・配布画像・学生特典の5つのクリック先を追加。
- 大学GoogleとGitHubの区別、メールの確認、既存アカウントと作成済み保存先の再利用。
- PNG/JPEGの画像をダウンロードし、Windowsの保存先で開いてからsetupへアップロードする流れ。
- 実際のひな形に合わせ、READMEの3見出しは残し、案内文を自分の記録へ替える操作。
- Preview後の保存、mainへの直接保存、もう一度Commit changesを押して確定する操作。
- 教員のusernameを検索し、完全一致する候補を選び、Add … to ai-learningで招待を確定する操作。
- 初回のリポジトリURLと毎週のcommit URLの違い、最新版の全成果物の確認、途中参加と修正。
- 文字が重なる・枠から出る箇所を修正。[補助手順](setup_handson_step_by_step.md)に、押す場所・入力・成功状態・困った場合の戻り先を記載。

## 確認の範囲

**実装・教材改訂：** 18ページの48テキスト枠を編集（同文の明示的書き換え1枠を含む）。37枚を維持し、元画像の全バイト、図形の位置、内部リンクの対象を照合。講義14回・第3回・最終課題の15本、評価、空の学生ひな形、既存フォームを変更していません。setupCourseV6は実行していません。

**自動検査・表示レビュー：** PPTX構造・メイリオ指定・サイズ・テキスト・ノート・リンク・画像保持を検査。37枚をArtifact Toolで描画し、各ページを大きく表示してAIによる目視点検を実施。PDFは同じ37枚を画像として配置し、40個の内部リンク・42個の外部リンク（著者URL37個を含む）・37のしおりを追加。Popplerでも全37ページを描画して比較。文字検索・本文編集はPPTXを利用します。

**実アカウント：** 公開リポジトリとファイルの読み戻しは別途確認します。実学生のPrivate保存先で、登録・画像保存・編集・招待・大学フォームまで完走する試験、独立した初心者による使用テスト、Windows PowerPoint本体での表示確認は未実施です。ここでの手順確認を実学生試験の合格と扱いません。

画面例は提供v1.4と先行v1.3からの再利用です。公開ひな形の実画面、GitHub公式文書の画面例、操作を示す模式図を区別しています。新しい学生Private画面を撮影したという主張はありません。撮影の由来は[画面の記録](SETUP_SCREENSHOTS.md)、統合元は[提供v1.4の対応表](../assets/setup/SOURCE_MAP_V14.json)を参照してください。

入力ZIP SHA256: `cdde81873f87b40622c66d1fa180d0f0df7837fc0943ef10a7d0ee441fbfe10a`  
入力PPTX SHA256: `3e6e84664553d4da047f8e0ff318fb3e1c79c3b0ae8605cc86430838783b6e8f`  
原本を保管し、派生版のみ差し替えています。同梱のCODEX_REPLACE_SLIDESは参考資料として読み、今回の作業範囲は利用者の「読んで確認し、必要なら加筆修正して差し替え」という依頼に基づきます。

## 操作説明の一次資料

2026-10-07にGitHubの[メール追加](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/adding-an-email-address-to-your-github-account)、[ファイル追加](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)、[ファイル編集](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files)、[共同作業者の招待](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/inviting-collaborators-to-a-personal-repository)を照合しました。画面は言語・幅・サービス更新により変わることがあります。

## 以前の版に戻す場合

旧[導入v1.3 PPTX](../slides/00_Course_Setup_v1.3.pptx)と[PDF](../slides/00_Course_Setup_v1.3.pdf)は残しています。教材入口だけを旧版へ戻せます。フォーム再作成やsetupCourseV6の再実行は不要です。
