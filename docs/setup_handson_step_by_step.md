# 初回の準備を、1つずつ進める

導入v1.4のスライドを開き、次の順に進めます。パソコンのブラウザだけで操作できます。途中で止めた人は、同じ保存先を開いて未完了の手順から続けます。

授業ページと登録フォームは、教員から案内された学内の入口を使います。学外の独習者は初回登録・教員招待を行う必要はありません。

## 1. アカウントを確かめる（5〜9ページ）

1. 大学の授業ページを開き、右上のアカウントが大学メールか確かめます。私用Googleアカウントなら大学アカウントへ切り替えます。
2. GitHubのアカウントがある人は[Sign in](https://github.com/login)、初めての人は[登録ページ](https://github.com/signup)を開きます。GitHubはGoogleと別のアカウントです。すでに持っている人は作り直しません。
3. 初めての人は、大学メール・自分で決めたusername・パスワードなどを入力し、画面の案内に従って登録します。確認メールが届いたら、その案内でメールを確認します。
4. GitHub右上のプロフィール画像 → Settings → Emailsを開きます。[メール設定へのリンク](https://github.com/settings/emails)からも開けます。既存アカウントなら「Add email address」に大学メールを入力し、Addを押して確認メールの案内を進めます。追加済みならVerified（確認済み）の表示を確認します。普段のメールをPrimaryから外す必要はありません。
5. Keep my email addresses privateにチェックを入れます。学籍番号や大学メールを公開プロフィールへ書く必要はありません。
6. 右上 → Your profileを開きます。URLの`github.com/`の次にある名前がusernameです。表示名やメールとは違います。自分のusernameを控えます。

**次へ進める目印：** GitHubへログインでき、大学メールの確認が済み、自分のusernameが分かっています。

## 2. 自分の保存先を作る（10〜14ページ）

1. [学生用ひな形](https://github.com/tsuchiyatakahirolab/ai-data-literacy-student-template)を開きます。画面のOwnerは教員の`tsuchiyatakahirolab`です。ここはコピー元です。
2. Use this template → Create a new repositoryを選びます。見えない場合は、GitHubへログインしているか確認します。Forkは使いません。
3. Ownerで自分のアカウントを選び、Repository nameへ`ai-learning`と入力します。名前に学籍番号や氏名は入れません。
4. Privateを選び、Ownerと名前をもう一度見てからCreate repositoryを押します。
5. 画面上部に「自分のusername / ai-learning」とPrivateが表示され、一覧にsetup・week01などがあるか確かめます。
6. この保存先をブラウザのお気に入りへ入れるか、URLを控えます。すでに作成済みなら同じものを使い、作り直しません。

**次へ進める目印：** Ownerが自分、名前がai-learning、公開範囲がPrivateです。まだ教員に見える必要はありません。

## 3. 画像を保存する（15〜20ページ）

1. 画像生成が使える人は、使えるAIで練習用の画像を1枚作り、画像ファイルを保存します。使えない人は[配布画像のページ](../assets/setup/practice.png)を開きます。GitHubでは画像ページ右上のDownload raw file（下向き矢印）を押します。
2. パソコンの「ダウンロード」フォルダなどを開き、保存したPNGまたはJPEGを開きます。画像が表示されるか、ファイル名が何かを確かめます。ページのURLだけでは画像ファイルになりません。
3. 自分のai-learningへ戻ります。見失った場合はGitHub右上 → Your repositories → ai-learningを開きます。
4. setupフォルダを押します。画面上部が自分のusernameで、setupの一覧にREADME.mdがあるか確かめます。
5. Add file → Upload files → choose your filesを選び、パソコンに保存した画像を1枚選びます。画像のファイル名がアップロード画面に見えることを確認します。
6. 下へスクロールし、Commit messageへ「練習用の画像を追加」などと書きます。自分のmainへ直接保存する選択を確認し、画面下のCommit changesを押します。New branchやPropose changesしか出る場合は、教員のコピー元で操作していないか確認し、そのまま提出しません。
7. setupの一覧へ戻ったら、画像ファイル名を押します。パソコンで開いたものと同じ画像が表示されるか確認します。

**次へ進める目印：** 自分の`ai-learning/setup/`に画像ファイルがあり、GitHubで画像を開けます。

## 4. 短い利用記録を書く（21〜25ページ）

1. 自分のsetupへ戻り、README.mdを押します。一番上のREADME.mdではありません。
2. 鉛筆のEdit this fileを押します。見えない場合は右端のメニューも確認し、自分の保存先を開いているか見直します。
3. 3つの見出しは残し、その下の括弧の案内文を自分の記録へ替えます。配布画像を使った例は次のとおりです。自分のファイル名・使ったAI・実際に確認した内容へ替えてください。

```markdown
## 保存した画像のファイル名

practice.png

## 使ったAIまたは配布画像

教員の配布画像を使用

## 自分で確認したこと

GitHubで画像を開き、パソコンの画像と同じだと確認した。
```

4. Previewを押し、見出しと3欄の記録が読めるか確認します。Previewだけでは保存されません。
5. Commit changesを押して保存の画面へ進み、変更内容へ「初回の利用記録を追加」などと書きます。Commit directly to the main branchを確認し、もう一度Commit changesを押します。
6. READMEの表示へ戻り、自分の記録が3欄に残っているか読み返します。

**次へ進める目印：** 保存後の`setup/README.md`で、自分の画像名・利用方法・確認したことが読めます。学籍番号・氏名・大学メール・AI会話全文はここへ書きません。

## 5. 教員を招待する（26〜27ページ）

1. 自分のai-learningの上部にあるSettingsを押します。右上のプロフィールから開くアカウントのSettingsとは違います。タブが見えないときは右端の「…」も見ます。
2. 左側のAccessにあるCollaborators → Add peopleを押します。GitHubが本人確認を求めたら、自分で対応します。
3. 検索欄へ`tsuchiyatakahirolab`を入力します。候補のusernameが最後まで完全に一致することを確かめ、その候補をクリックします。
4. Add … to ai-learningを押して招待を確定します。検索するだけでは招待は送られません。
5. 一覧に教員名と招待中（Pending invite等）が見えれば次へ進めます。すでに教員名が受理済みの協力者として表示されている場合は、再招待しません。

**次へ進める目印：** 教員への招待が送信済み、またはすでに受理済みです。教員の受理を待って、この手順で止まる必要はありません。パスワードや認証コードは教員へ渡しません。

## 6. 初回登録を送る（28〜32ページ）

1. 自分の保存先の上部にあるai-learning、続いてCodeを開き、setupやweek01が並ぶ最上位へ戻ります。
2. ブラウザのURLをコピーします。WindowsではCtrl+LでURL欄を選び、Ctrl+Cでコピーできます。
3. 初回登録へ送るURLは`https://github.com/自分のusername/ai-learning`です。`example-student`のままにしません。`/tree/`・`/blob/`・`/commit/`が付いたURLは初回の保存先登録に使いません。
4. 大学の授業ページから、既存の「初回登録」を開きます。ログイン中のアカウントとフォームのメール表示が大学メールか確かめます。
5. 自分の学籍番号、username、自分のリポジトリURLなど、既存フォームの必要項目を入力します。URLはWindowsならCtrl+Vで貼り付けます。
6. 学籍番号は自分の実際の番号を省略せず、半角10文字（西暦4桁・英大文字2字・数字4桁）で入力します。スライドの例は自分の番号へ替えます。
7. 送信ボタンを押し、完了画面が出たことを確認します。

**自分の準備が終わった目印：** Private、setupの画像、短い記録、教員への招待、初回登録の5つが済んでいます。教員の点検結果は授業ページの実際の案内に従って確認します。結果がすぐ届かなくても、同じ登録を何度も送る必要はありません。

## 7. 毎週の提出と、途中からの再開（33〜35ページ）

1. 読む場所は教員のhandouts/weekXX.md、保存する場所は自分のweekXXフォルダです。その回の成果物と短いAI利用記録を、すべて保存します。
2. 自分のai-learning → Codeへ戻り、一覧の右上にある「○ commits」（履歴）を押します。最新のcommitの説明を押し、そのページを開きます。
3. URLに`/commit/`と長い英数字があるか確認します。Browse filesで、その版にその回の必要なファイルが全部あるかも確かめます。後から追加した場合は、追加後の最新commitを使います。
4. このcommit URLをコピーして、その回の既存の週次フォームへ送ります。初回のリポジトリURLとは違います。
5. 第2回以降の新規参加も、同じひな形・初回登録フォーム・準備資料を使います。途中まで済んだ人は同じai-learningで続けます。
6. 画像・記録だけの修正なら、指定箇所を保存し、初回登録を再送しません。usernameやURLを誤って登録した場合は、授業ページの修正案内に従います。フォームに「回答を編集」が表示されるならその回答を編集し、表示されなければ教員へ修正方法を確認します。アカウントを作り直して解決しようとしません。
7. 過去の課題・締切の扱いは教員へ確認します。学生特典・Star・37ページの学習目標は任意で、準備完了の条件には含めません。

困った場合は、止まったページ番号とエラー文を教員に伝えます。大学Googleのログイン問題は5ページ、GitHubのログイン問題は6〜8ページへ戻ります。見せる画面から、パスワード・認証コード・個人情報を隠します。

## 手順と画面例の根拠

GitHubの[メール追加](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/adding-an-email-address-to-your-github-account)、[ファイル編集](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files)、[教員などの招待](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/inviting-collaborators-to-a-personal-repository)を2026-10-07に照合しました。画面例は提供されたv1.4・v1.3の再利用で、新しく学生のPrivateへログインして撮影した画面ではありません。模式図はそのように表示しています。
