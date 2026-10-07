<a href="https://tsuchiyatakahiro.com"><img src="assets/branding/personal-author-logo.png" width="180" alt="TSUCHIYA TAKAHIRO"></a>

# 大学生のためのAI・データリテラシー

学外から来た方は、[独習の案内](docs/self_study.md)から始められます。大学アカウントや授業フォームへの登録は不要です。

**AI and Data Literacy for University Students**  
[English README](README_EN.md)

この教材は、生成AIをほとんど使ったことがない大学生を対象にした、14回＋最終課題の演習型教材です。学生は、AIを「質問すると答えを返すチャット」だけでなく、資料を読む、画像を見る、Webで調べる、数字とグラフを確認する、簡単なデータを分析する、成果物を作る、複数手順の作業を進めるための道具として扱います。

授業では暗記試験を行いません。学生は各回の演習でAIを使い、成果物と短いAI利用記録をGitHubに残します。評価の中心は、AIを使った量ではなく、AIに何を任せ、どこを自分で確認し、どのように修正して成果物にしたかです。

この教材は、特定のAIサービスや画面操作に依存しないように設計しています。授業本体は2027年度以降も使える能力を扱い、サービス固有の操作、料金、学生向け特典は `tool-guides/` と `current/` に分けています。


## 配布用PDFと一括ダウンロード

配布用に、全16本の[ノートなしPDF一覧](slides/README.md)と[全250ページのPDF](slides/AI_Data_Literacy_All_Slides.pdf)を用意しました。[教材一式ZIP](https://raw.githubusercontent.com/tsuchiyatakahirolab/ai-data-literacy/main/downloads/AI_Data_Literacy_Complete_2026-10-07.zip)には編集用PPTX、各回のPDF、演習シート、日英教材、サンプルデータ、空の学生用ひな形を同梱しています。

## 導入v1.4のスライドと演習シート

日本語のPowerPointは、全14回に加えて、初回準備と最終課題の計16ファイルです。本文はメイリオ指定で、操作手順、依頼文、確認表、計算例を含みます。[スライド一覧](slides/README.md)から開けます。授業で投影する本文は原則24〜28 ptとし、補足や出典表示は18〜22 ptにしています。

学生は[演習シート](handouts/week01.md)を横に開き、依頼文をコピーして作業できます。初回は[準備の案内](docs/first_class_setup.md)に従ってGitHubを設定します。ブラウザだけの手順を基本とし、授業の必須操作はすべてブラウザで行います。第13回の基本課題には、検索機能がなくても使える架空の施設・移動表を追加しました。

英語版はREADME、14回の教材本文、最終課題、関連ガイドです。この版のPowerPointは日本語のみです。

## この授業で身につけること

学生は、授業終了時に次のことができるようになることを目指します。

- 課題の目的を整理し、AIに必要な材料と条件を渡す。
- 文章、画像、PDF、表、CSVをAIと一緒に扱う。
- Web調査ではAIの回答だけで終わらず、出典を開いて確認する。
- 数字、グラフ、簡単なデータ分析の結果を元資料と照合する。
- AIに任せた部分と、自分で確認・修正した部分を説明する。
- GitHubで成果物と変更履歴を管理し、提出時点をcommit URLで示す。

## 対象者と前提

想定しているのは、AIを使ったことがない学生、またはChatGPTやGeminiを簡単な質問や課題作成に使ったことがある程度の学生です。PythonやGitの事前知識は不要です。GitHubは使いますが、コマンドライン操作は必須ではありません。

授業では、大学アカウントで利用できるAIがあれば、それを基本環境として推奨できます。ただし、課題の条件を満たせる限り、ChatGPT、Gemini、Claude、Copilotなど他の環境も利用できます。有料版AIの利用は成績要件にしません。

## 14回の構成

| Week | テーマ | 学ぶこと |
|---|---|---|
| 01 | [AIの見取り図](core/week01.md) | AIはチャットだけではない。読む、見る、調べる、分析する、作る、作業を進めるといった使い方を体験する。 |
| 02 | [AIへの依頼](core/week02.md) | 目的、材料、出力形式、確認点を必要に応じて示し、曖昧な依頼を改善する。 |
| 03 | [GitHubで学習記録を残す](core/week03.md) | GitHubを、成果物と変更履歴を残し、提出時点を固定するための道具として使う。 |
| 04 | [画像・PDF・表をAIに読ませる](core/week04.md) | AIに資料を渡し、資料から確認できる内容と、資料だけでは判断できない内容を分ける。 |
| 05 | [要約・翻訳・書き換え](core/week05.md) | 読者、目的、長さに合わせて文章を変換し、元の意味や重要な条件が変わっていないか確認する。 |
| 06 | [AIと成果物を作る](core/week06.md) | AIの提案を材料として使い、目的と読者に合わせた短い成果物を完成させる。 |
| 07 | [AIで調べ、出典を確認する](core/week07.md) | AI検索を入口として使い、出典を開いて発行主体、日付、数字、固有名詞を確認する。 |
| 08 | [AIの間違いと偏り](core/week08.md) | 事実誤認、根拠不足、過度な一般化、断定しすぎた表現を見つけ、より適切な回答へ修正する。 |
| 09 | [数字を扱う](core/week09.md) | 割合、平均、差、分母、単位を確認し、数字が示す範囲を説明する。 |
| 10 | [グラフを読む](core/week10.md) | 軸、範囲、単位、集計方法を確認し、グラフが与える印象とデータが示す内容を区別する。 |
| 11 | [はじめてのAIデータ分析](core/week11.md) | CSVをAIに渡し、データの確認、集計、可視化、解釈、限界の説明までを経験する。 |
| 12 | [AIを学習に使う](core/week12.md) | AIを説明、小テスト、誤答分析に使い、自分の理解を確かめる。 |
| 13 | [AIに複数手順の仕事を任せる](core/week13.md) | 計画、調査、比較、修正を複数の手順に分け、AIに任せる部分と人間が確認する部分を管理する。 |
| 14 | [総合演習の準備](core/week14.md) | 最終課題の問い、資料、確認方法、成果物の形式、GitHub提出までを具体的に計画する。 |

最終課題: [AIを使って根拠付きの成果物を完成させる](core/final_project.md)

## 学生の進め方

1. `docs/github_onboarding_student.md` を使ってGitHubを準備する。
2. 教員が指定したtemplate repositoryから自分のprivate repositoryを作る。
3. 各回の `core/weekXX.md` を読み、演習を行う。
4. 成果物と短いAI利用記録を自分のrepositoryに置く。
5. 変更をcommitし、その回のcommit URLを教員指定の提出フォームへ送る。

AI会話の共有リンクやチャット全文の提出は原則として求めません。サービスや契約形態によって共有方法が異なるためです。代わりに、AIに任せたこと、自分で確認・修正したこと、残った問題を短く記録します。

## 教員の使い方

- `docs/instructor_runbook.md`: 14回の運用方法。
- `docs/assessment_rubric.md`: 評価基準。
- `docs/ai_use_policy.md`: AI利用方針。
- `docs/privacy_and_publication.md`: 個人情報と公開時の注意。
- `docs/submission_workflow.md`: GitHub commit URLを使った提出の考え方。
- `student-template/`: 学生用repositoryの雛形。
- `slides/`: 日本語の授業用PowerPoint。

Google FormsとMaster Dashboardの自動生成スクリプトは、授業運用用の別パックで管理します。公開教材の本体には、学生の個人情報、学内URL、回答用フォーム、Dashboard URLを含めません。

## Repository構成

```text
core/             日本語の14回分教材と最終課題
en/core/          英語版の14回分教材と最終課題
assets/           演習用の架空資料、CSV、画像、チェックリスト
docs/             授業方針、評価、GitHub導入、教員向け資料
tool-guides/      サービス固有の操作メモ
current/          年度別のツール事情と更新メモ
student-template/ 学生用repository template
slides/           日本語の講義用PowerPoint
```

## 評価

標準配点は、成果物50%、根拠確認と修正25%、AI利用記録15%、GitHub提出10%です。AIを使った量や、長いプロンプトを書けたかどうかは評価しません。課題に必要なAIを選び、出力を確認し、自分の判断で成果物を完成させたかを見ます。

## GitHub Education

学生は、条件を満たす場合、GitHub Student Developer Packへの申請を検討できます。特典は変更されるため、授業本体には固定せず `current/` に日付付きで記録します。申請や有料サービスの利用は成績要件ではありません。

## ライセンスと引用

教材本文、スライド、サンプル資料は Creative Commons Attribution 4.0 International License、Apps Script以外のサンプルコードと設定ファイルは MIT License で提供します。詳細は `LICENSE.md` と `LICENSE-CODE.md` を参照してください。Lucideアイコンには別途ISC／MITの条件が適用され、ライセンス全文を同梱しています。引用情報は `CITATION.cff` にあります。

## Maintainer

Takahiro Tsuchiya  
Version: 1.3  
Last updated: 2026-10-06

## 初回と途中参加の準備

[学生用ひな形](https://github.com/tsuchiyatakahirolab/ai-data-literacy-student-template)から自分のPrivateのai-learningを作ります。[導入手順](docs/github_onboarding_student.md)に沿って画像1枚と短い利用記録をsetupへ保存し、教員を招待して学内の既存初回登録フォームへrepository URLを送ります。第2回以降も同じ入口を使います。毎週は指定回の最後のcommit URLを既存週次フォームへ送ります。

handouts/week01.mdは読む資料で、自分のweek01/README.mdが書く場所です。学籍番号・氏名・大学メールはフォームで教員に伝え、公開プロフィールやusernameへ書きません。画像だけを修正した場合、初回登録の再送は不要です。

初回準備は[導入v1.4 PDF（37ページ）](slides/00_Course_Setup_v1.4.pdf)と[1つずつ進める補助手順](docs/setup_handson_step_by_step.md)を横に開いて進められます。
