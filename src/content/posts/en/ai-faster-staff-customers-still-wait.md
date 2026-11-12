---
title: "AI makes staff faster, so why do customers wait as long as before?"
seoTitle: "AI makes staff faster. Why do customers still wait?"
description: "AI's benefit sits at the value stream's bottleneck, not in hours saved. Where and when to measure it, so you don't misjudge it at the bottom of the J-curve."
translationOf: ai-lam-nhanh-hon-sao-khach-van-cho
station: 1
published: 2026-11-12
verified: 2026-11-11
sources:
  - title: "Theory of Constraints Institute. Theory of Constraints"
    url: https://www.tocinstitute.org/theory-of-constraints.html
  - title: "Lean Production. Theory of Constraints (five focusing steps)"
    url: https://www.leanproduction.com/theory-of-constraints/
  - title: "Lean Enterprise Institute. Lean Lexicon: Value stream"
    url: https://www.lean.org/lexicon-terms/value-stream/
  - title: "Kingman, J. F. C. (1961). The single server queue in heavy traffic. Math. Proc. Cambridge Philos. Soc. 57(4)"
    url: https://doi.org/10.1017/S0305004100036094
  - title: "Little, J. D. C. (1961). A Proof for the Queuing Formula: L = λW. Operations Research 9(3)"
    url: https://ideas.repec.org/a/inm/oropre/v9y1961i3p383-387.html
  - title: "Noy, S. & Zhang, W. (2023). Experimental Evidence on the Productivity Effects of Generative Artificial Intelligence. MIT working paper"
    url: https://economics.mit.edu/sites/default/files/inline-files/Noy_Zhang_1.pdf
  - title: "Brynjolfsson, E., Li, D. & Raymond, L. (2023). Generative AI at Work. NBER WP 31161"
    url: https://www.nber.org/papers/w31161
  - title: "DORA (2025). State of AI-assisted Software Development 2025"
    url: https://dora.dev/research/2025/dora-report/
  - title: "DORA (2026). ROI of AI-assisted Software Development, v. 2026.1"
    url: https://dora.dev/ai/
  - title: "Faros AI (2025). The AI Productivity Paradox Report 2025"
    url: https://www.faros.ai/blog/ai-software-engineering
  - title: "Atlassian (2025). State of Developer Experience Report 2025"
    url: https://www.atlassian.com/blog/developer/developer-experience-report-2025
  - title: "METR (2025). Becker et al., arXiv 2507.09089"
    url: https://arxiv.org/abs/2507.09089
  - title: "Klarna (27/02/2024). Klarna AI assistant handles two-thirds of customer service chats in its first month"
    url: https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/
  - title: "Ivanova, I. (09/05/2025). As Klarna flips from AI-first to hiring people again... Fortune"
    url: https://fortune.com/2025/05/09/klarna-ai-humans-return-on-investment/
  - title: "Microsoft Learn. Copilot Dashboard"
    url: https://learn.microsoft.com/en-us/viva/insights/org-team-insights/copilot-dashboard
  - title: "Brynjolfsson, E., Rock, D. & Syverson, C. (2021). The Productivity J-Curve. AEJ: Macroeconomics 13(1); NBER WP 25148"
    url: https://www.nber.org/system/files/working_papers/w25148/w25148.pdf
  - title: "McElheran, K., Yang, M.-J., Kroff, Z. & Brynjolfsson, E. (2025). The Rise of Industrial AI in America. Census CES WP 25-27"
    url: https://mackinstitute.wharton.upenn.edu/wp-content/uploads/2025/04/McElheran-et-al.-Industrial_AI_April-20-2025.pdf
  - title: "HM Treasury (2026). Guidance on Developing Business Cases for Projects and Programmes"
    url: https://www.gov.uk/government/publications/guidance-on-developing-business-cases
  - title: "HM Treasury (2026). The Green Book 2026"
    url: https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2026
---

A bank lends working capital to small businesses. It buys an AI tool that reads the customer's financial statements and account statements and writes a draft *loan proposal*: the document an officer prepares for the approving authority, with the financial analysis and a recommendation on how much to lend and on what terms. Three months later, the tool's dashboard says it saves 12 working days a week. But customers still wait as long as before for their money, and some weeks longer. This is a model built to illustrate the point, not the story of any bank; every number in it is an assumption and is worked out below.[^0]

**Short answer:** AI speeds up one step of a process. The company only benefits when that step is the bottleneck, or when the bottleneck downstream can absorb the extra work AI pushes into it. The studies this post read all measure AI at the *drafting* step; the *approval* step behind it is tied to one person's authority, so it does not speed up with it. Faster drafting becomes a queue in front of the approver, and when a queue is nearly full, waiting time shoots up.[^25] So the benefit has to be measured at the output of the whole value stream (what the customer receives, and after how long), not at the level of AI usage. And a baseline must be taken before the tool is switched on, with a conclusion drawn only once the metric at the bottleneck has turned, because the early phase usually gets worse before it gets better. No source says how deep that worse phase is or how long it lasts.[^20]

## Speeding up one step does not speed up the whole process

Theory of Constraints (TOC) starts from one sentence: *"Every system has a limiting factor or constraint. Focusing improvement efforts to better utilize this constraint is normally the fastest and most effective way to improve profitability."* In short: every system has a limiting factor, and putting improvement effort there is usually the fastest way to raise profit. Improvement elsewhere only builds inventory: *"if sales orders are the constraint, optimizing production output can result in overproduction."*[^1]

TOC gives five focusing steps: Identify (find the bottleneck), Exploit (get the most out of the bottleneck with the resources already there), Subordinate (make every other step serve the bottleneck), Elevate (raise the bottleneck's capacity), then Repeat (the bottleneck moves, start again).[^2] Applied to an AI investment, the least intuitive step is Subordinate. If the drafting step is not the bottleneck, its spare speed has no value, so sometimes you must *deliberately* not use all of the AI's speed. That is this post's reading, not a sentence from the source.[^25]

### Why waiting shoots up instead of rising evenly

Two formulas from queueing theory explain the rest. Little's Law: work in progress equals the output per day times the time each item spends in the system. For the same output, more work in progress means longer waits for customers.[^3] Kingman: waiting time at a step is proportional to ρ/(1−ρ), where ρ is the *load*, the amount of work arriving divided by the step's processing capacity.[^3]

| Load on the step | 50% | 70% | 80% | 87.5% | 90% | 95% |
|---|---|---|---|---|---|---|
| Waiting time, in multiples of processing time | 1 | 2.3 | 4 | 7 | 9 | 19 |

The table is computed with a variability factor of 1, the simplest case.[^3] The curve is flat below 70% and steep above 85%. A modest rise in the work flowing in can push the approver from the flat zone into the steep zone. That is the whole mechanism of this post.

## The model: AI helps prepare loan proposals

Back to the bank at the start. The value stream has three stages the customer can see; the middle stage zooms into six actions.

<figure class="fig" aria-label="The lending value stream has three stages: capturing the funding need, assessment and funding, and loan management. The middle stage contains receiving complete documents, preparing the loan proposal, waiting for approval, approval, signing the contract, and disbursement. AI sits at the proposal step; the bottleneck is approval.">
<div class="vmap vmap-three">
<p class="vmap-l">Value stream<small>stages the customer sees</small></p>
<p class="vmap-s">Capture the funding need</p>
<p class="vmap-s">Assessment and funding<small>zoomed in below</small></p>
<p class="vmap-s">Loan management</p>
<p class="vmap-l">Lean<small>every action</small></p>
<div class="vmap-steps"><span>Intake, complete documents</span><span>Prepare loan proposal</span><span class="wait">Wait for approval</span><span>Approval</span><span>Sign contract</span><span>Disbursement</span></div>
<p class="vmap-l">Where it sits<small>in the model</small></p>
<p class="vmap-a vmap-w hit">AI drafts at the proposal step; the bottleneck is the person with approval authority</p>
</div>
<figcaption><span class="fig-no">Figure <span class="no">1</span></span> Two zoom levels of the same loan. Dashed boxes are waiting, which creates no value. The stage names, the actions and the position of the bottleneck are assumptions of the model.</figcaption>
</figure>

These two zoom levels have their own names. According to the Lean Enterprise Institute, a value stream is *"All of the actions, both value-creating and nonvalue-creating"* needed to get a product to the customer. The bottleneck is *found* at the level of actions. The benefit is *reported* at the level of stages, where the customer receives value.[^26]

### Before AI is switched on

Assumed parameters: 14 files are submitted each week; the approval level can handle 20 files a week, and each file takes 0.25 days to read. The load is 70%, so by Kingman each file waits about 2.3 × 0.25 ≈ 0.58 days.[^0]

| Step | Work (days) | Wait (days) | Why it waits |
|---|---|---|---|
| Intake, complete documents | 1.0 | 2.0 | Customer supplies missing documents |
| Prepare loan proposal | 2.0 | 0.5 | Officer is busy with other files |
| Approval | 0.25 | 0.58 | Queue in front of the approver |
| Contract signing, collateral | 0.5 | 1.5 | Signing schedule and formalities |
| Disbursement | 0.25 | 1.0 | Document check before the transfer |
| **Total** | **4.0** | **5.58** | |

The time from the customer submitting complete documents to the money reaching the account is about 9.6 days. Approval is not yet the longest wait. But the approver is at 70% load, close to the steep zone. The question to ask is not only "where is the longest wait", but also "which step has the least headroom".[^0]

### Three scenarios after AI is switched on

- **Only switch on the tool.** Proposal preparation is 35% faster (2.0 down to 1.3 days), the number of files submitted rises 25%, and the approver takes the same time to read each file. Load rises to 87.5%, and the approval wait rises to 1.75 days.
- **Only switch on the tool, and proposals are harder to check.** The approver spends 20% more time per file, because the figures the AI extracted must be checked against the source documents. Approval capacity falls to 16.7 files a week, below the 17.5 files flowing in. The queue never stabilizes: nearly one more file piles up each week.
- **Switch on the tool and change how approval works.** Small, low-risk loans go through a fast approval lane at a lower authority level; every figure in the proposal links to its source document; AI flags anomalies for the approver. Reading each file takes 0.2 days, capacity is 25 files a week, load falls to 70%, and the approval wait is 0.47 days.

Every ratio in the three scenarios is an assumption.[^0]

| | Before | Tool only | Harder to check | Approval changed |
|---|---|---|---|---|
| Files submitted per week | 14 | 17.5 | 17.5 | 17.5 |
| Load at approval level | 70% | 87.5% | about 105% | 70% |
| Approval wait (days) | 0.58 | 1.75 | grows forever | 0.47 |
| **Time to money (days)** | **9.6** | **10.1** | **grows forever** | **8.7** |
| Files disbursed per week | 14 | 17.5 | 16.7 | 17.5 |
| **"Hours saved" on the dashboard** | — | **12 working days/week** | **12 working days/week** | **12 working days/week** |

Read the table from the last row first. The dashboard reports the same number in all three scenarios: 0.7 days saved per file, times 17.5 files.[^0] A usage metric cannot tell the successful scenario from the one where the queue blows up.

Four more things follow from the table, all this post's reading of the model:[^25]

1. **More disbursements, yet customers wait longer.** With the tool only, disbursements rise 25% but the time to money rises from 9.6 to 10.1 days.
2. **Making proposals 35% faster makes the whole process only about 9% faster, and only when done right.** That step is 2 of the 9.6 days; the rest is waiting for the customer, for signing, for document checks. The benefit must be estimated across the whole value stream, not at the step that has AI.
3. **The difference lies in a decision about authority, not in the tool.** The fourth scenario does not use AI better than the second. It changes the approval matrix and standardizes the proposal template. The Elevate step in business is often a change of decision rights, not buying more technology.
4. **Then the bottleneck moves.** The longest wait is now the customer supplying missing documents, 2 days. The next investment should look there, and may not need AI at all, just a clear document checklist from the start.

## What the evidence says

### At the level of one office task

Noy and Zhang (MIT, 02/03/2023, a working paper not yet peer reviewed) gave a writing task to 444 college-educated professionals in occupations such as *"marketers, grant writers, consultants, data analysts, human resource professionals, and managers"*, then randomly gave half of them ChatGPT. The result: *"time taken decreases by 0.8 SDs and output quality rises by 0.4 SDs"*. And ChatGPT *"restructures tasks towards idea-generation and editing and away from rough-drafting"*: the work moves from drafting to generating ideas and editing.[^4]

The second sentence is this post's mechanism at the level of one person: drafting goes down, editing and checking go up. When the checker is *someone else* (the approval level, legal, the line manager), that extra work lands on them. This is the post's inference from the study, not the authors' conclusion.[^25]

### At the level of the whole process: most measurements come from software development

Software has timestamps for every step, so it is where process-level measurements are most plentiful. The phenomenon has the same shape as the lending model, with code in the place of the loan proposal and review in the place of approval. That mapping is the post's own.[^25]

- DORA (Google) describes exactly the second scenario: *"a developer might write code significantly faster using an automated assistant, but that code simply piles up in front of manual security reviews or brittle deployment pipelines."* DORA calls the extra checking work a *verification tax*: *"the tools increase the sheer volume of code produced, which expands the overall review burden"*.[^5]
- Faros AI, a company that sells engineering-effectiveness software, analyzed data on about 10,000 developers: teams using AI heavily *"complete 21% more tasks and merge 98% more pull requests, but PR review time increases 91%, revealing a critical bottleneck: human approval."* At the company level: *"Any correlation between AI adoption and key performance metrics evaporates at the company level."* This is correlational data, published by a vendor.[^6]
- DORA 2025: *"AI adoption now improves software delivery throughput, a key shift from last year. However, it still increases delivery instability."* And: *"AI creates localized pockets of productivity that are often lost to downstream chaos."*[^7]
- Atlassian surveyed 3,500 people (self-reported): *"developers saving 10 hours a week using AI and losing 10 hours a week to inefficiencies."*[^8]

This post found no equivalent process-level measurement for credit, insurance or purchasing.[^24]

### Evidence to the contrary, and it fits too

When AI is placed *right at* the bottleneck, output does rise. Brynjolfsson, Li and Raymond studied 5,179 customer support agents who got AI-suggested answers right at the step where they resolve requests. The measure was issues resolved per hour, the output of the bottleneck step itself: up *"14% on average, including a 34% improvement for novice and low-skilled workers but with minimal impact on experienced and highly skilled workers."* The study also notes that AI *"improves customer sentiment, increases employee retention"*.[^9]

The same kind of tool gives opposite results because the bottleneck is in a different place, not because the tool is good or bad. That is how this post reads the sources together.[^25] DORA sums it up in one sentence: *"We don’t measure AI by the code it writes but by the bottlenecks it clears."*[^10]

## Where to measure

### Four kinds of metric, four roles

The Cranfield Benefits Dependency Network links technology to benefits through changes in ways of working. This post uses four layers, following a common presentation; the layer names appear only in secondary sources, and the original confirms the ends, ways, means structure.[^12] Place each metric of the model in its layer:

| Metric | Layer | Is it a benefit? | In the model |
|---|---|---|---|
| Number of licenses, number of proposals AI drafted, usage rate, tokens, "hours saved" | Technology in use | No. Tokens are a cost | 12 working days/week, the same in every scenario |
| New authority matrix, standardized proposal template, routing rules | Change that makes it possible | No, but without it there is no benefit | Only in the approval-changed scenario |
| Load and waiting time at the approval level, rate of proposals returned | Change in operations, early signal | Not yet | 70% to 87.5%, or held at 70% |
| Time to money, number of loans disbursed, rate of customers dropping out | Benefit | Yes, when someone is accountable and there is a baseline to compare | 9.6 down to 8.7 days |

The table is built by this post; placing the metrics in layers is the post's reading.[^25]

<figure class="fig fig-benefit">
<ol class="chain">
<li><p class="chain-h">Technology</p><p>AI drafts loan proposals</p><p class="chain-note">The dashboard measures here</p></li>
<li><p class="chain-h">Change in how approval works</p><p>Route by risk, proposal template links to source documents</p><p class="chain-note">The part often skipped</p></li>
<li class="hit"><p class="chain-h">Benefit</p><p>Customers get their money sooner</p><dl class="chain-tags"><div><dt>Metric</dt><dd>Weekly median time to money</dd></div><div><dt>Baseline</dt><dd>9.6 days, measured before the tool is switched on</dd></div><div><dt>Accountable</dt><dd>Head of the small business customer division</dd></div><div><dt>Guardrail metric</dt><dd>Overdue debt of the fast-lane approval group</dd></div></dl></li>
</ol>
<figcaption><span class="fig-no">Figure <span class="no">2</span></span> From technology to benefit in the model. The first three cards are what HM Treasury requires for each benefit; the guardrail metric card is this post's addition. The contents are assumptions.</figcaption>
</figure>

HM Treasury requires each benefit to have a type, a beneficiary, a measure, a baseline and a person accountable, recorded in a benefits register.[^11] There are three common mistakes when recording this line for AI:

- **Recording "12 working days a week" as money saved.** HM Treasury classes this as *non-cash-releasing*: it can be monetized but does not change income or spending unless costs actually fall.[^11] The model adds another layer: hours saved at a step that is not the bottleneck may only make the queue longer.[^25]
- **The accountable person is the tool's manager.** That person controls the technology layer, not the time to money or the authority matrix.[^25]
- **No guardrail metric.** If the fast approval lane approves wrongly, the time benefit is paid for with bad debt, and bad debt shows up much later than the benefit.[^25]

### When the measure has only one dimension

Klarna (27/02/2024) announced that its AI customer service assistant did *"the equivalent work of 700 full-time agents"*. The release also had quality metrics for the first month: resolution time *"less than 2 mins compared to 11 mins previously"*, *"25% drop in repeat inquiries"*, and *"on par with human agents in regard to customer satisfaction score"*.[^13] In May 2025 the CEO told Bloomberg, as Fortune recounts: *"As cost unfortunately seems to have been a too predominant evaluation factor when organizing this, what you end up having is lower quality"*.[^14]

Klarna *did* have a guardrail metric, but it was a first-month number, published by the company itself. A year later, the CEO himself said quality was lower. The post draws three lessons: guardrail metrics must be measured continuously; the person accountable for quality should differ from the person accountable for cost; and customers who ask again must count toward service time. No source says what Klarna measured after the first month.[^25]

### Vendor dashboards and employee perception

Microsoft's Copilot Dashboard splits its metrics into four groups: *"Readiness, adoption, impact, and sentiment"*.[^15] It *does* have an impact group, so it cannot be said to measure only usage. But three of the four groups belong to the technology layer, and impact measures behavior inside the tool, not the output of the value stream. That is how this post classifies it, not Microsoft's description.[^25]

A survey of "employees feel AI makes them faster" cannot replace measurement either. METR ran a randomized trial with 16 experienced developers, on tools from early 2025: *"developers expected AI to speed them up by 24%, and even after experiencing the slowdown, they still believed AI had sped them up by 20%"*, while the measurement showed them 19% slower. The 19% figure is not current, because METR changed its experiment design in 2026; what is still usable is the gap between perception and measurement.[^16] DORA also notes that most of its productivity evidence is perception: *"more than 80% of survey respondents reported a perception that AI had increased their productivity"*.[^17]

## When to measure: the J-curve

### Why it gets worse before it gets better

Brynjolfsson, Rock and Syverson write that general-purpose technologies need *"co-invention of new processes, products, business models and human capital"*. This intangible investment is poorly measured, so productivity is *"initially dipping while the investment rate in unmeasured capital is larger"*, and only then rises: the J shape.[^18] In the lending model, this "co-invention" is the new authority matrix, the standardized proposal template, the routing rules. None of it is in the license price.[^25]

McElheran, Yang, Kroff and Brynjolfsson (20/04/2025) used data on about 28,500 US factories: *"We find causal evidence of J-curve-shaped returns, where short-term performance losses precede longer-term gains."* They record that AI *"increases work-in-progress inventory"*, meaning work in progress rises, which is exactly the model's queue seen at the factory level. The losses are *"concentrating among older businesses"*, and for this group *"abandonment of structured production-management practices accounts for roughly one-third of these losses"*. Two limits: this is industrial AI, not GenAI; and the authors state plainly *"we do not directly estimate how long it takes for the J-curve to reverse direction"*.[^19]

DORA applies the J-curve to software: *"a temporary productivity dip and period of instability associated with early adoption"*, *"with the depth of the decline directly correlating to the magnitude of the change"*. DORA also says the size and *"the duration before growth accelerates remain unpredictable"*.[^20]

### Numbers not to cite as data

- DORA's 15% dip over 3 months is an *input assumption* of its sample ROI calculator. DORA itself warns: *"Treat these calculations as a high-uncertainty estimate"*.[^21]
- A payback time of 6–9 months for small teams and 12–18 months for large rollouts is a "rule of thumb" for setting targets, not a measurement.[^21]

### Benefits arrive fast, risks show up slowly

In the lending model, time to money changes as soon as the way of approving changes. Overdue debt on loans that went through the fast approval lane only appears when those loans reach their repayment dates. Insurance claims may have the same shape: fast payouts are visible at once, wrong payouts later. The consequence for the measurement schedule is that the point of conclusion must wait for the slowest guardrail metric, not only for the benefit. This is the post's inference, with no measured source.[^25]

### Measurement schedule

<figure class="fig fig-day" aria-label="Four measurement points over time: before approval, before the tool is switched on, the early phase for diagnosis only, and a conclusion once the metric at the bottleneck has turned and the slowest guardrail metric has a number.">
<ol class="tower">
<li>Before approval<small>evaluation plan: choose the bottleneck, the benefit, the guardrail metric, the stop conditions</small></li>
<li>Before the tool is switched on<small>take the baseline: time to money, load and wait at the approval level, return rate, overdue debt</small></li>
<li>Early phase<small>diagnosis only: have the early signals changed, has the approval change happened; no conclusion on returns yet</small></li>
<li class="hit">Conclusion<small>when the metric at the bottleneck has turned over several periods and the slowest guardrail metric has a number</small></li>
</ol>
<figcaption><span class="fig-no">Figure <span class="no">3</span></span> The measurement schedule, read from top to bottom. The first point follows the Green Book; the second and third follow DORA; the condition for concluding is this post's proposal.</figcaption>
</figure>

Each point has an anchor. The Green Book 2026 requires organizations to *"develop an evaluation plan as soon as they have identified a preferred option"*, before the final approval submission.[^22] DORA asks directly *"Do you have a baseline?"*, and treats operational metrics as an *"operational early warning system"* to track *"before looking for lagging financial returns"*.[^23] The condition for concluding at the last point is this post's proposal.[^25]

### At a review point: at the bottom, or failing?

The sentence "we are at the bottom, wait longer" is never wrong if there is no stop condition. DORA warns about one error: leaders who *"misinterprets this learning phase as a failure and pulls funding during the inevitable dip"*.[^20] The opposite error is also possible: never cutting. The post proposes reading each review point with two questions.[^25]

<figure class="fig fig-review">
<div class="quad" role="img" aria-label="Two-dimensional matrix. Vertical axis: whether the approval change is done. Horizontal axis: whether the early signal at the bottleneck has changed direction. Done and changed: on the way up, start measuring the benefit. Done but not changed: may be at the bottom or may have chosen the wrong bottleneck. Not done but changed: the improvement comes from elsewhere, check the guardrail metric. Not done and not changed: not a J-curve, complementary investment is missing, fix or stop.">
<p class="quad-y">Approval change is done</p>
<div class="quad-cell"><p>May be at the bottom, or the wrong bottleneck</p><p class="quad-d">Re-measure the load of each step, one more period</p></div>
<div class="quad-cell"><p>On the way up</p><p class="quad-d">Start comparing the benefit with the baseline</p></div>
<div class="quad-cell hit"><p>Not a J-curve</p><p class="quad-d">Complementary investment is missing: make the approval change, or stop</p></div>
<div class="quad-cell"><p>Improvement comes from elsewhere</p><p class="quad-d">Check the guardrail metric and the measurement before believing it</p></div>
<p class="quad-x">Early signal at the bottleneck has changed direction</p>
</div>
<figcaption><span class="fig-no">Figure <span class="no">4</span></span> Reading a review point. The red cell is the case often mistaken for the bottom of the J-curve. The matrix is this post's proposal, not from a source.</figcaption>
</figure>

For the lending model, the conditions written before approval could look like this; the number of weeks and the thresholds are assumptions, for each organization to set:[^0]

- **First review, about 4 weeks after switch-on.** Risk governance has approved the new authority matrix; the standardized proposal template is in use; the approval wait has not risen for three weeks in a row.
- **Second review, about 12 weeks after switch-on.** The median time to money is below 9.6 days; the rate of returned proposals is not higher than the baseline.
- **Conclusion.** When the group of loans that went through the fast lane has passed enough repayment periods to compare overdue debt with the baseline.
- **Stop or fix.** By the second review, the authority matrix has still not changed and the approval wait is still rising: that is the red cell, not the bottom of the J-curve.

McElheran and coauthors found that older organizations suffer more.[^19] The post infers that for an older organization with a large change, the first review point should be set later. No number exists for "how much later".[^25]

## The same mechanism in other business processes

The table below is a pattern the post derived from the mechanism, with no measurement for each row yet. Use it to ask questions, not to quote numbers.[^24]

| Process | Step AI makes cheaper | Where the bottleneck is likely to move | Benefit measured at the output | Guardrail metric |
|---|---|---|---|---|
| Insurance claims | Reading loss files, estimating damage | Adjuster; approving payouts above the limit | Time from loss report to payout | Wrong payouts, fraud that slips through, complaints |
| B2B sales, answering tenders | Drafting proposals, price sheets | Discount approval; legal approving terms | Win rate; time from request to signature | Contract margin; exception terms |
| Procure to pay | Reading invoices, matching to orders and receipts | Handling mismatched invoices; approving spend | Payment cycle time | Wrong or duplicate payments |
| Recruiting | Writing job descriptions, screening résumés | Hiring manager's interview schedule | Time until the new hire starts | Leaving during probation; bias in screening |
| Marketing content | Drafting articles, ad variants | Brand and legal approval | Content published on the campaign schedule | Advertising rule violations |
| Contracts | Reviewing clauses, drafting revisions | In-house counsel; the person with signing authority | Time from request to contract in force | Risky clauses slipping through |

What the six rows share: the step AI makes cheaper is the *drafting* step; the bottleneck is the person with authority to *decide*; the benefit is in time or results on the customer's side; the guardrail metric is exactly what the approver is there to prevent.[^25]

## What to read carefully

- **The lending model is very simple.** One queue, variability of 1, other steps unchanged. A real process has several approval levels, files that arrive unevenly by season, and later steps can become bottlenecks too. The model shows only the shape of the phenomenon; it gives no numbers to use.[^0]
- **Process-level evidence exists almost only for software**, and most of it is correlation or surveys, with some sources published by vendors. No source proves causally that review time *causes* the loss of benefit at the company level.[^6][^24]
- **Controlled evidence for office work is at the task level.** Noy and Zhang measured a 20–30 minute writing task in an online experiment, not a process in operation.[^4]
- **The J-curve has causal evidence only in manufacturing.** Applying it to GenAI is an extrapolation under the same theory, with no direct evidence at the company level yet.[^19][^24]
- **Letting AI decide is a different question.** When AI also does the approval step, the bottleneck may move to input data or to exception cases that pile up on people. That also touches authority and industry regulation, outside the scope of this post.[^25]
- **The TOC five steps were read through a training site**, not through Goldratt's book *The Goal*.[^2]

## Applying it: six questions for a business case with AI

| # | Question | Answer for the lending model |
|---|---|---|
| 1 | Which value stream, and what does the customer get at the output? | The assessment and funding stage; money in the customer's account |
| 2 | Where is the current bottleneck, and how much headroom is left? | The approval level, at 70% load; AI at the proposal step will push more files into it |
| 3 | What is the change in ways of working, who makes it, who has the authority to approve it? | New authority matrix (approved by risk governance), standardized proposal template, no bonus by number of proposals |
| 4 | Benefit and guardrail metric? | Time to money; guarded by overdue debt and the number of policy exceptions |
| 5 | Is there a baseline yet? | 9.6 days, taken before the tool is switched on |
| 6 | Condition for concluding and condition for stopping? | Two reviews, conclude once overdue debt has a number, stop condition written before approval |

The six questions and their order are the post's own, assembled from TOC, HM Treasury, the Green Book and DORA.[^25] If question 2 or 3 cannot be answered, the model predicts the result is the tool-only scenario, even though the dashboard keeps reporting hours saved.

[^0]: Assumption · The lending model is an example built by this post and does not describe any bank. All of its numbers (14 and 17.5 files/week, capacity of 20, 16.7 and 25 files/week, 0.25, 0.3 and 0.2 days per file, work and wait time for each step, 35%, 25%, 20%, 4 and 12 weeks) are assumed parameters; 9.6, 10.1, 8.7 days and 12 working days/week are results computed with Little and Kingman, not measurements.
[^1]: Verified · [Theory of Constraints Institute](https://www.tocinstitute.org/theory-of-constraints.html): "Every system has a limiting factor or constraint…"; "if sales orders are the constraint, optimizing production output can result in overproduction." The institute's page, not a text by Goldratt.
[^2]: Verified · [Lean Production](https://www.leanproduction.com/theory-of-constraints/): the five steps Identify, Exploit, Subordinate, Elevate, Repeat. A secondary source (a training site); the book *The Goal* has not been read. Medium confidence.
[^3]: Verified · [Little (1961)](https://ideas.repec.org/a/inm/oropre/v9y1961i3p383-387.html) for L = λW; [Kingman (1961)](https://doi.org/10.1017/S0305004100036094) for waiting time proportional to ρ/(1−ρ), the formula read through a secondary presentation. The factor table was computed by this post with variability of 1.
[^4]: Verified · [Noy & Zhang (02/03/2023)](https://economics.mit.edu/sites/default/files/inline-files/Noy_Zhang_1.pdf), working paper, "not peer reviewed" in the version read: 444 people, six occupations, a 20–30 minute writing task; time down 0.8 SD, quality up 0.4 SD; the shift from drafting to editing.
[^5]: Verified · [DORA, ROI of AI-assisted Software Development v. 2026.1](https://dora.dev/ai/): code "piles up in front of manual security reviews"; the verification tax increases the review burden.
[^6]: Verified · [Faros AI (23/07/2025)](https://www.faros.ai/blog/ai-software-engineering): about 10,000 developers; +21% tasks, +98% PRs, review time +91%; correlation disappears at the company level. Vendor, correlational data; medium confidence.
[^7]: Verified · [DORA 2025](https://dora.dev/research/2025/dora-report/), executive summary: AI raises throughput but still raises instability; local productivity is lost to "downstream chaos". Survey data.
[^8]: Verified · [Atlassian (2025)](https://www.atlassian.com/blog/developer/developer-experience-report-2025): 3,500 people, six countries; saving 10 hours and losing 10 hours a week. Self-reported, vendor.
[^9]: Verified · [Brynjolfsson, Li & Raymond, NBER WP 31161](https://www.nber.org/papers/w31161) (04/2023, revised 11/2023), abstract: 5,179 agents; +14% issues resolved per hour, +34% for novices; higher customer satisfaction and employee retention.
[^10]: Verified · [DORA ROI v. 2026.1](https://dora.dev/ai/): "We don’t measure AI by the code it writes but by the bottlenecks it clears."
[^11]: Verified · [HM Treasury (2026)](https://www.gov.uk/government/publications/guidance-on-developing-business-cases), 7.24, 11.21 and Table 5: type, beneficiary, measure, baseline, a benefits register with an accountable owner; cash-releasing differs from non-cash-releasing. The "hours saved" example is this post's application of Table 5.
[^12]: Disputed · Benefits Dependency Network (Ward & Daniel, Cranfield): the original confirms the ends, ways, means structure; the layer names appear only in secondary sources.
[^13]: Verified · [Klarna (27/02/2024)](https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/): 700 agents; under 2 minutes versus 11 minutes; repeat inquiries down 25%; satisfaction on par with human agents. Self-published numbers, from the first month.
[^14]: Verified · [Fortune (09/05/2025)](https://fortune.com/2025/05/09/klarna-ai-humans-return-on-investment/), recounting a Bloomberg interview: "As cost unfortunately seems to have been a too predominant evaluation factor…". Secondary source; the Bloomberg version has not been read. No source for Klarna "rehiring" former staff.
[^15]: Verified · [Microsoft Learn, Copilot Dashboard](https://learn.microsoft.com/en-us/viva/insights/org-team-insights/copilot-dashboard): four groups: readiness, adoption, impact, sentiment.
[^16]: Verified · [METR (07/2025)](https://arxiv.org/abs/2507.09089): 16 developers, early-2025 tools; expected 24% faster, afterwards still believed 20% faster, measured 19% slower. In 2026 METR changed its experiment design; 19% is not the current number.
[^17]: Verified · [DORA ROI v. 2026.1](https://dora.dev/ai/), citing DORA 2025: more than 80% of respondents perceived that productivity rose. A perception number.
[^18]: Verified · [Brynjolfsson, Rock & Syverson, NBER WP 25148](https://www.nber.org/system/files/working_papers/w25148/w25148.pdf) (10/2018, revised 01/2020); published version AEJ: Macroeconomics 13(1):333–372, 2021: co-invention; productivity falls before it rises.
[^19]: Verified · [McElheran et al. (20/04/2025)](https://mackinstitute.wharton.upenn.edu/wp-content/uploads/2025/04/McElheran-et-al.-Industrial_AI_April-20-2025.pdf), Census CES WP 25-27: about 28,500 factories; causal evidence for the J-curve; work in progress rises; losses concentrated in older businesses, one third due to abandoning structured management practices; no estimate of how long the reversal takes. Industrial AI, not GenAI.
[^20]: Verified · [DORA ROI v. 2026.1](https://dora.dev/ai/): the J-curve is a temporary dip; depth is proportional to the size of the change; size and duration "remain unpredictable"; leaders misread it and pull funding at the bottom. DORA's judgment, not a measurement.
[^21]: Verified · [DORA ROI v. 2026.1](https://dora.dev/ai/), sample calculator appendix: a 15% dip over 3 months is an assumption; "Treat these calculations as a high-uncertainty estimate"; payback of 6–9 and 12–18 months is a "rule of thumb".
[^22]: Verified · [Green Book 2026](https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2026): draw up the evaluation plan as soon as the option is chosen, before the final approval submission. A UK public-sector framework.
[^23]: Verified · [DORA ROI v. 2026.1](https://dora.dev/ai/): "Do you have a baseline?"; operational metrics are an "operational early warning system", tracked before financial returns.
[^24]: OPEN · Measurements of the queue in front of the approver after using GenAI in credit, insurance, purchasing and other business processes; the J-curve of GenAI at the company level. This post found no source.
[^25]: Our reasoning · Assembled from the cited sources: how the TOC five steps are applied, the reading of the three scenarios, the mapping between software and the lending process, the four-layer metric table, the reading of the Klarna case and the dashboard, "risks show up slowly", the review matrix, the six-process table and the six application questions. Not the words of the sources.
[^26]: Verified · [Lean Enterprise Institute, Lean Lexicon](https://www.lean.org/lexicon-terms/value-stream/): "All of the actions, both value-creating and nonvalue-creating…". Separating "find the bottleneck at the action level, report the benefit at the stage level" is this post's.
