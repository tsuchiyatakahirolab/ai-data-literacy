# Summarize a CSV and check the results

Read this sheet alongside the [English slides](../slides/Week11_AI_Data_Analysis_EN.pptx). Work in your own private repository. The instructor supplies course-specific accounts, submission links, and deadlines.

[Lesson and requirements](../core/week11.md)

## Practice files

- [ai_study_data.csv](../assets/week11/ai_study_data.csv)
- [ai_study_data_copy.txt](../assets/week11/ai_study_data_copy.txt)
- [data_dictionary.md](../assets/week11/data_dictionary.md)

## Follow the slides

### 2. Verify AI's summary with a spreadsheet

Give AI the supplied CSV and ask it to summarize the data. Check the results against the source or with a spreadsheet. Compare AI's answer with your own calculation.

### 3. Inspect, summarize and verify the data

Inspect

Check the rows, columns and blanks.

Summarize

Calculate counts and means. Show them in a table or chart.

Verify

Check a result another way. Describe what the data supports.

### 4. 60 rows of fictional data

This practice data has 60 rows and 6 columns. It contains group, AI-use time, self-ratings before and after, source checking and on-time submission.

Use en/assets/week11/ai_study_data.csv and data_dictionary.md.

### 5. 1. Attach the CSV to your AI prompt

01

Save the CSV linked in the handout.

Open the file and check that it has column headings.

02

Attach it using the AI's file control.

Check that you selected the correct file.

03

If attachments are unavailable, use the alternative method.

Summarize it in a spreadsheet, then ask AI to explain your results.

### 6. 2. Check the rows and columns

Copy this prompt, then add the specified source material:

```text
Check this CSV's data row count and column names.
Explain what each column represents.
Check for missing values.
Exclude the header row from the data row count.
```

Open the data dictionary and compare it with AI's explanation.

### 7. Read the data dictionary

Column

Meaning

student_group

Groups A, B and C

confidence_before confidence_after

Self-ratings before and after

source_checked

Source checked: yes / no

submitted_on_time

Submitted on time: yes / no

A self-rating is not a measure of academic ability. Read the definitions in the data dictionary.

### 8. 3. Summarize the data by group

Copy this prompt, then add the specified source material:

```text
For each student_group, calculate the count
and mean of confidence_after.
State the columns used and how you handled missing values.
```

Check the group counts as well as the means.

### 9. Compare with the reference values

| Group | Count | Mean after |
| --- | --- | --- |
| A | 27 | 4.00 |
| B | 12 | 3.25 |
| C | 21 | 3.86 |

Calculated from the supplied 60 fictional rows. Means are rounded to two decimal places.

### 10. Verify a calculation another way

Rows with source_checked = yes: 42

42 ÷ 60 × 100 = 70％

Count yes rows with a spreadsheet filter, for example.  
Record your method and whether the result matches AI's.

### 11. 4. Make a bar chart

Copy this prompt, then add the specified source material:

```text
Make a bar chart of mean confidence_after by group.
Use a vertical axis from 0 to 5.
Include the means and group counts.
Label the data as fictional teaching data.
```

If chart creation is unavailable, submit the summary table instead.

### 12. Read counts as well as means

0

1

2

3

4

5

4.00

A: 27 people

3.25

B: 12 people

3.86

C: 21 people

Fictional teaching data. Mean self-ratings after use, by group.

### 13. Separate differences from causes

What the table shows

In the supplied data,  
A's mean of 4.00 is higher  
than B's mean of 3.25.

What this table cannot establish

AI improved A's  
academic ability.  
It works for every student.

### 14. 5. Explain the results and their limits

01

Describe the kind of data.

State clearly that this is fictional teaching data.

02

Describe the results you checked.

Give the means, counts and calculation you verified.

03

Explain what the data cannot show.

This fictional data cannot test an effect on real students.

### 15. Save your work and your checks

week11/

README.md:  
Results and verification method

Summary table and chart, if available

Your README record

What I delegated to AI  
What I checked myself  
What I could not verify

### 16. Save your README edit

1. Open your own private repository and select `week11/README.md`. Check the owner in the address bar.
2. Select the pencil icon. Add your work and a short record of what you checked.
3. Select **Commit changes** and confirm in the dialog. Check that your edited text appears when the file opens again.

![Pencil icon in GitHub Docs](../../assets/setup/screens/edit-file-edit-button.png)

### 17. Open the commit history

Open the **Code** tab in your repository. Above the file list, choose the clock icon and **Commits**. Look for a page headed **Commits**.

![The Commits link on the public English course template](../../assets/github-handson/en-week-history-entry.png)

### 18. Choose the commit to submit

Find the change you saved and select its message. Check the date and the changes. The detail page shows **Commit** followed by a short identifier.

![Commit messages in the public English course template](../../assets/github-handson/en-week-commit-list.png)

### 19. Check the files and copy the commit URL

1. Select **Browse files** and check the expected work under `week11/`.
2. Return to the commit detail page.
3. Select the full address with **Ctrl+L** on Windows or **Command+L** on Mac. Copy it with **Ctrl+C** or **Command+C**.
4. Check that the address includes `/commit/` and your own GitHub username.
5. In class, submit the full address through the course form under **Week 11** and check the confirmation page. For self-study, keep the address in your practice log.

![Browse files on a commit detail page in the public English course template](../../assets/github-handson/en-week-commit-detail.png)

Use the repository URL for initial registration and the full commit URL for an assignment. Work in your own repository while following the screen examples.

### 20. Before you submit

I checked the row count, columns and missing values.

I verified at least one result using another method.

I identified the data as fictional.

I submitted the commit URL containing my work.

## Save and submit

Save the artifact and a short AI-use record in `week11/README.md`, then commit all required files. Submit the **final commit URL** through the course form. Initial registration uses the repository URL; weekly and final submissions use a commit URL.

Do not include student IDs, university emails, passwords, or confidential source material. Full AI chat histories are not required. Self-study readers can complete the exercise without university forms.

Character limits in prompts follow the source exercise. Follow any language-specific length specified by your instructor.
