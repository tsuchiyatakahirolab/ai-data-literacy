# 提出方法：会話共有ではなくcommit URLで固定する

この授業では、AIとの会話全文や共有リンクを原則として提出させません。AIサービス、契約形式、大学アカウントの設定によって、会話共有やファイル付き会話の公開可否が異なるためです。

学生は、成果物と短いAI利用記録を自分のprivate repositoryに置きます。その後、提出時点の変更をcommitし、教員が指定した提出フォームへcommit URLを送ります。この方法なら、提出時点の内容を後から確認でき、提出後の修正とも区別できます。

## 学生が毎回行うこと

1. 今週の課題を行う。
2. `weekXX/README.md` に、成果物、使用AI、AIに任せたこと、自分で確認・修正したことを書く。
3. 必要なファイルを同じ `weekXX/` フォルダに置く。
4. 変更をcommitする。
5. GitHubでcommitを開き、commit URLをコピーする。
6. 提出フォームへcommit URLを送る。

## 提出するURL

```text
正しい例: https://github.com/username/repository/commit/abcdef123456...
不十分な例: https://github.com/username/repository
不十分な例: https://github.com/username
```

repository URLだけでは、提出時点の内容を固定できません。必ずcommit URLを提出します。

## 再提出

提出後に修正した場合は、修正後のcommit URLを再提出します。教員は、原則として最新の提出を採用します。

## 公開しない情報

学生のrepositoryはprivateにします。個人情報、非公開資料、授業外の私的なAI会話、他者の提出物は置きません。最終課題などを公開ポートフォリオにしたい場合は、教員に確認し、公開してよい内容だけを別途整理します。


## ブラウザとDesktopの違い

GitHubのWeb画面で編集しcommitした場合、その変更はGitHub上に保存されるため、別のpush操作は不要です。GitHub Desktopでローカルファイルを編集した場合は、保存、差分確認、commit、Push originの順に進め、Web画面で反映を確認します。

commitのページは主に差分を表示します。提出した版に含まれるすべてのファイルを確認する場合は、そのcommitからBrowse files等でファイル一覧を開きます。履歴の存在だけで作業の本人性や内容の正しさを証明できるわけではありません。
