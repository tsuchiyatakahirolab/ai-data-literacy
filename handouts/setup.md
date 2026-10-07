# 画像を保存して、課題の提出先を準備する


## 第2回以降に参加する人も、ここから進める

初回を欠席していても、同じひな形と初回登録フォームを使います。すでに途中まで作業した人は、自分の保存先を開いて続きから進めてください。リポジトリを作り直したり、確認済みの画像を再びアップロードしたりする必要はありません。

今日の目標は、練習画像と短い記録を自分の非公開リポジトリへ保存し、教員が確認できるようにすることです。リポジトリは、ファイルと変更履歴をまとめて保存する場所です。画像の出来栄えは評価しません。

外部の自習者は大学アカウント・初回フォーム・教員招待を必要としません。自分の保存練習として利用できます。

## 1. 大学Googleアカウントで授業ページを開く

右上のアイコンからログイン中のメールを確認します。私用Gmailのままアクセスできない場合は、大学アカウントへ切り替えて開き直します。私用メールでアクセス申請を送らないでください。GoogleとGitHubは別のアカウントです。

## 2. GitHubへログインし、usernameを確かめる

初めての人は授業ページのGitHub登録案内を開き、大学メールで登録してメールの確認を終えます。すでにアカウントがある人は、そのアカウントを使い、大学メールを追加して確認します。公開プロフィールに大学メールや学籍番号を載せる必要はありません。

GitHubへログインした状態で、右上の丸いプロフィール画像を押します。開いたメニューの上部に表示されるアカウント名がusernameです。登録時のUsername欄で決めた名前を控えます。表示名やメールアドレスとは別なので、このusernameを初回登録に入力します。プロフィールURLがgithub.com/example-studentなら、usernameはexample-studentです。

## 3. 自分の非公開リポジトリを作る

授業ページの「学生用ひな形」を開き、Use this templateからCreate a new repositoryへ進みます。Ownerが自分になっていることを確認し、名前をai-learning、公開範囲をPrivateにして作成します。学籍番号は名前に入れません。提出先の作成にはForkを使いません。

作成後、画面上部に自分のusernameとPrivateが表示されるか見ます。tsuchiyatakahirolabのままなら先生の教材を見ているので、自分のai-learningを開き直してください。すでに作成済みの人は、同じ保存先を使います。

## 4. 画像を1枚、パソコンに保存する

画像生成を使える人は、普段のAIに「机の上の本と鉛筆を、人物・文字・ロゴを入れずにイラストにしてください」と頼んでみましょう。使えない、無料枠が終わった、保存が難しい場合は、授業ページの練習用画像を使います。配布画像を使っても評価は変わりません。

ダウンロードしたファイルを開き、画像を表示できることを確かめます。例ではpractice.pngを使いますが、別のファイル名でも構いません。画像のページURLをコピーするだけでは保存になりません。JPEGをPNGにしたいという理由で、拡張子だけを書き換えないでください。

## 5. setupフォルダへ画像を追加する

自分のai-learningでsetupを開きます。Add fileからUpload filesを選び、choose your filesで先ほどの画像を選択します。表示されたファイル名を確認し、変更内容に「練習用の画像を追加」と書いてCommit changesで保存します。commitは、この時点のファイルと変更内容を残す記録です。

setupへ戻り、画像ファイルをクリックして開きます。パソコンで見た画像が表示されれば、保存できています。README編集欄やコメント欄へ画像を貼り付ける操作とは区別してください。

## 6. READMEに短い記録を書く

READMEは、そのフォルダの説明や記録を書くファイルです。

setupのREADME.mdを開き、鉛筆ボタンで編集します。画像ファイル名、使ったAIまたは配布画像、自分で確認したことを見出しの下へ記入します。AIとの会話全文は不要です。

配布画像を使った場合なら、「practice.pngを保存した。配布画像を使った。GitHubで画像を開き、文字が読めることを確かめた」と書けます。実際に行ったことに合わせて記入し、Previewで表示を見てCommit changesで保存します。ブラウザで保存したので、別のpush操作は要りません。

## 7. 教員を招待する

自分のai-learningのSettingsを開き、Collaborators、Add peopleへ進みます。検索欄にtsuchiyatakahirolabと入力し、候補のusernameが最後まで一致することを確認して招待を送ります。アカウント全体のSettingsではなく、このリポジトリのSettingsです。

この操作では、教員に授業用のリポジトリを読み書きする権限を渡します。パスワードは渡しません。招待中の表示になれば送信できています。教員の受理を待って作業を止めず、次の初回登録へ進んでください。確認のために公開へ変える必要もありません。

## 8. 既存の初回登録フォームを送信する

大学アカウントで初回登録フォームを開き、自動取得される大学メールを確認します。学籍番号は2026GT0001のように西暦4桁・英大文字2字・数字4桁を省略せずに入力します。GitHub usernameと、自分のai-learningのURLも入力します。同じ回答から、教員が学籍番号とGitHubを対応づけます。

初回登録で送るのはリポジトリのURLです。週次課題で使うcommit URLとは違います。Week 00専用フォームはありません。送信完了の画面が出れば初回登録は受け付けられています。記入を間違えた場合は、同じフォームの案内に沿って修正登録します。

## 9. 一括点検の結果を確認する

教員側の一括点検で、登録情報、アクセス権、画像、記録を確認します。学生側の作業が済んだ直後は確認待ちです。結果の受け取り方と点検の時期は授業ページの案内に従ってください。通知が有効な授業では本人の大学メールへ結果が届きます。

修正案内が来たら、指定された箇所だけ直します。画像やREADMEを直しただけなら初回登録を再送せず、次の点検を待ちます。usernameや提出先URLを間違えた場合は登録も直してください。第2回以降も同じ点検で確認できるため、先生へ個別の完了コメントを依頼する必要はありません。

## 次からの課題

演習シートは教員の教材にあるhandoutsを読み、回答は自分のweek01、week02などのフォルダへ保存します。必要なファイルを全部入れ終わったら、最後のcommitを開き、そのURLを指定の週次フォームへ送ります。初回設定が後になった場合の過去の課題は、授業ページの案内を確認してください。

教材を探しやすくするには、ブラウザのお気に入りを使えます。GitHubのStarを使っても構いませんが、任意で、成績や設定完了には関係しません。公開教材につけたStarは他の人にも見えます。

操作が止まったときは、どの画面まで進んだかと表示内容を伝えてください。パスワード、ログイン認証コード、秘密のキーは見せないでください。

## 開くリンク

- [学生用ひな形](https://github.com/tsuchiyatakahirolab/ai-data-literacy-student-template)
- [配布画像](https://github.com/tsuchiyatakahirolab/ai-data-literacy/blob/main/assets/setup/practice.png)を開き、Download raw fileで画像そのものを保存します。
- [導入スライド](../slides/00_Course_Setup_v1.4.pptx)

大学の授業ページと初回・週次フォームは、学内の授業ページから開きます。学内URLはこの公開教材には掲載しません。

## ボタンと画面の見方

公開ひな形の実画面と、GitHub公式文書に載る画面例を掲載します。公式例のOwnerやファイル名は例です。自分のOwner・ai-learning・setup/README.mdで操作してください。画面の出典・撮影状況は[撮影案内](../docs/SETUP_SCREENSHOTS.md)に記載しています。

### Use this templateで作成画面へ

![Use this templateで作成画面へ](../assets/setup/screens/use-this-template-button.png)

公式文書の画面例。Create a new repositoryを選びます。

### Ownerは自分、名前はai-learning

![Ownerは自分、名前はai-learning](../assets/setup/screens/create-repository-name.png)

公式文書の画面例。画像のgithubとhelloは使いません。公開範囲はPrivateを選びます。

### setupで画像を追加

![setupで画像を追加](../assets/setup/screens/upload-files-button.png)

公式文書の画面例。Add file → Upload filesで実ファイルを選びます。

### READMEの鉛筆ボタン

![READMEの鉛筆ボタン](../assets/setup/screens/edit-file-edit-button.png)

公式文書の画面例。自分のsetup/README.mdを開いて編集します。

### 保存前のPreview

![保存前のPreview](../assets/setup/screens/edit-readme-preview-changes.png)

公式文書の画面例。3欄の表示を確認し、Commit changesで保存します。

### 招待はリポジトリのSettings

![招待はリポジトリのSettings](../assets/setup/screens/repo-actions-settings.png)

公式文書の画面例。Collaborators → Add peopleでtsuchiyatakahirolabを招待します。


## v1.4を見ながら進める

[導入PDF（37ページ）](../slides/00_Course_Setup_v1.4.pdf)を開き、[1つずつ進める補助手順](../docs/setup_handson_step_by_step.md)を横に置いて、保存後の確認まで進めます。
