# Check a chart's axes and values

Read this sheet alongside the [English slides](../slides/Week10_Read_Charts_EN.pptx). Work in your own private repository. The instructor supplies course-specific accounts, submission links, and deadlines.

[Lesson and requirements](../core/week10.md)

## Practice files

- [chart_claim_data.csv](../assets/week10/chart_claim_data.csv)
- [data_dictionary.md](../assets/week10/data_dictionary.md)
- [misleading_chart.png](../assets/week10/misleading_chart.png)

## Follow the slides

### 2. The same data can look different

Vertical axis starts at 0

0

1

2

3

4

3.1

2022

3.2

2023

3.3

2024

3.4

2025

3.5

2026

Vertical axis starts at 3.0

3

3.2

3.4

3.6

3.8

4

3.1

2022

3.2

2023

3.3

2024

3.4

2025

3.5

2026

Fictional teaching data. Only the axis range differs; the values are identical.

### 3. The data behind the charts

Year

reported_confidence

2022

3.1

2023

3.2

2024

3.3

2025

3.4

2026

3.5

chart_claim_data.csv. The meaning of the scale and measurement method require more information.

### 4. Three checks when reading a chart

Measure

Read the label, unit  
and time period.

How is it displayed?

Check where the vertical axis starts and ends, and read the ticks.

Actual change

Find the difference. Compare it with what you first saw.

### 5. 1. Ask AI to compare the charts

Copy this prompt, then add the specified source material:

```text
Compare these two charts.
Check their values and vertical axis ranges.
Explain why their visual impressions differ.
```

If image upload is unavailable, describe the data and axis ranges in text.

### 6. The increase is 0.4

From 3.1 in 2022 to 3.5 in 2026

3.5 − 3.1 = 0.4

Show the actual difference before describing a sharp rise.  
Also check the scale and survey method.

### 7. Why the vertical axis range matters

Starting at zero

Start the vertical axis at zero when comparing bar lengths.

Showing a narrower range

Makes small changes easier to see.  
Differences also look larger.  
State the axis range clearly.

### 8. What the chart alone cannot show

How many people were surveyed, and how?  
Were measurement conditions the same each year?  
  
If the chart does not show this information,  
record that it cannot establish these details.

### 9. 2. Write an explanation based on the numbers

Copy this prompt, then add the specified source material:

```text
Explain this fictional data in two sentences.
In the first, state the numerical change.
In the second, state what this source cannot establish.
Avoid speculation about the cause.
```

Check the values, period and axis ranges against the source.

### 10. Separate your impression from the numbers

Unsupported claim

It surged in 2026.  
The spread of AI probably  
caused the increase.

Supported by this source

From 2022 to 2026,  
the value rose from 3.1 to 3.5.  
The reason is not established.

### 11. Your chart-checking record

I confirmed both charts use the same five values.

I explained the different vertical axes.

I stated the actual difference of 0.4.

I recorded missing information about the scale or survey.

### 12. Save your work and your checks

week10/

README.md:  
Axis comparison and two-sentence explanation

Your README record

What I delegated to AI  
What I checked myself  
What I could not verify

### 13. Save your README edit

1. Open your own private repository and select `week10/README.md`. Check the owner in the address bar.
2. Select the pencil icon. Add your work and a short record of what you checked.
3. Select **Commit changes** and confirm in the dialog. Check that your edited text appears when the file opens again.

![Pencil icon in GitHub Docs](../../assets/setup/screens/edit-file-edit-button.png)

### 14. Open the commit history

Open the **Code** tab in your repository. Above the file list, choose the clock icon and **Commits**. Look for a page headed **Commits**.

![The Commits link on the public English course template](../../assets/github-handson/en-week-history-entry.png)

### 15. Choose the commit to submit

Find the change you saved and select its message. Check the date and the changes. The detail page shows **Commit** followed by a short identifier.

![Commit messages in the public English course template](../../assets/github-handson/en-week-commit-list.png)

### 16. Check the files and copy the commit URL

1. Select **Browse files** and check the expected work under `week10/`.
2. Return to the commit detail page.
3. Select the full address with **Ctrl+L** on Windows or **Command+L** on Mac. Copy it with **Ctrl+C** or **Command+C**.
4. Check that the address includes `/commit/` and your own GitHub username.
5. In class, submit the full address through the course form under **Week 10** and check the confirmation page. For self-study, keep the address in your practice log.

![Browse files on a commit detail page in the public English course template](../../assets/github-handson/en-week-commit-detail.png)

Use the repository URL for initial registration and the full commit URL for an assignment. Work in your own repository while following the screen examples.

### 17. Before you submit

I compared the chart with the source data.

I distinguished the impression from the actual difference.

I avoided unsupported claims about the cause.

I submitted the commit URL containing my work.

## Save and submit

Save the artifact and a short AI-use record in `week10/README.md`, then commit all required files. Submit the **final commit URL** through the course form. Initial registration uses the repository URL; weekly and final submissions use a commit URL.

Do not include student IDs, university emails, passwords, or confidential source material. Full AI chat histories are not required. Self-study readers can complete the exercise without university forms.

Character limits in prompts follow the source exercise. Follow any language-specific length specified by your instructor.
