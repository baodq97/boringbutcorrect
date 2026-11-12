---
title: "Which three costs does an AI feature's business case usually miss?"
seoTitle: "AI feature business case: three costs it usually misses"
description: "An AI feature runs on three clocks a software business case rarely counts: cost per task, model retirement dates, and the depreciation of prompts and harnesses."
translationOf: tinh-nang-ai-thieu-ba-khoan-chi
station: 1
published: 2026-11-12
verified: 2026-11-11
image: /og/en/ai-feature-business-case-missing-costs.jpg
sources:
  - title: "a16z (12/11/2024). Welcome to LLMflation"
    url: https://a16z.com/llmflation-llm-inference-cost/
  - title: "Epoch AI (12/03/2025). LLM inference prices have fallen rapidly but unequally across tasks"
    url: https://epoch.ai/data-insights/llm-inference-price-trends
  - title: "FinOps Foundation (10/05/2026). Token Economics: The Atomic Unit of AI Value"
    url: https://www.finops.org/insights/token-economics-the-atomic-unit-of-ai-value/
  - title: "FinOps Foundation (updated 28/10/2026). FinOps for AI Overview"
    url: https://www.finops.org/wg/finops-for-ai-overview/
  - title: "Cursor (04/07/2025). Clarifying our pricing"
    url: https://cursor.com/blog/june-2025-pricing
  - title: "GitHub Blog (27/04/2026). Copilot moves to usage-based billing"
    url: https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/
  - title: "Semafor (28/10/2026). Anthropic's key number is its 85% gross margin"
    url: https://www.semafor.com/article/10/28/2026/anthropics-key-number-is-its-85-gross-margin
  - title: "Epoch AI (revised 06/03/2026). Can AI companies become profitable?"
    url: https://epoch.ai/gradient-updates/can-ai-companies-become-profitable
  - title: "Anthropic. Prompt caching"
    url: https://platform.claude.com/docs/en/build-with-claude/prompt-caching
  - title: "OpenAI. Deprecations"
    url: https://developers.openai.com/api/docs/deprecations
  - title: "Anthropic. Model deprecations"
    url: https://platform.claude.com/docs/en/about-claude/model-deprecations
  - title: "Google Cloud. Model versions and lifecycle"
    url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/learn/model-versions
  - title: "Google AI Studio. Deprecations"
    url: https://aistudio.google.com/docs/deprecations
  - title: "Microsoft Learn (updated 24/07/2026). Foundry Models lifecycle and support policy"
    url: https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirements
  - title: "AWS. Amazon Bedrock User Guide: Model lifecycle"
    url: https://docs.aws.amazon.com/bedrock/latest/userguide/model-lifecycle.html
  - title: "Chen, L., Zaharia, M. & Zou, J. (2023). How is ChatGPT's behavior changing over time? arXiv 2307.09009"
    url: https://arxiv.org/abs/2307.09009
  - title: "Anthropic (04/11/2025). Commitments on model deprecation and preservation"
    url: https://www.anthropic.com/research/deprecation-commitments
  - title: "Sutton, R. (13/03/2019). The Bitter Lesson"
    url: http://www.incompleteideas.net/IncIdeas/BitterLesson.html
  - title: "OpenAI. Reasoning best practices"
    url: https://developers.openai.com/api/docs/guides/reasoning-best-practices
  - title: "Anthropic. Prompting best practices"
    url: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices
  - title: "Anthropic. Agent SDK overview"
    url: https://platform.claude.com/docs/en/agent-sdk/overview
  - title: "YC Root Access (27/07/2026). Boris Cherny: Building Claude Code"
    url: https://www.ycrootaccess.com/p/boris-cherny-building-claude-code
  - title: "Stop Comparing LLM Agents Without Disclosing the Harness, arXiv 2605.23950 (07/05/2026)"
    url: https://arxiv.org/abs/2605.23950
  - title: "Anthropic (29/09/2025). Effective context engineering for AI agents"
    url: https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
  - title: "Manus. Context Engineering for AI Agents: Lessons from Building Manus"
    url: https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus
  - title: "Anthropic (19/12/2024). Building effective agents"
    url: https://www.anthropic.com/research/building-effective-agents
  - title: "Google (19/05/2026). Google I/O 2026: Sundar Pichai's opening keynote"
    url: https://blog.google/innovation-and-ai/sundar-pichai-io-2026/
---

The business case for traditional software rests on a familiar kind of cost: build once, run at a nearly fixed cost, depreciate over a few years. The post [What should a technology business case check before approval?](/en/technology-business-case-what-to-check) walks through the approval questions for that kind of business case. An AI feature already shipped to customers does not have that cost shape.

**Short answer:** a business case for an AI feature usually misses three items. One is the cost range per *task*, because a hard task can cost dozens of times more than an easy one. Two is a budget for switching models on a recurring basis, because every model version has a retirement date set by the provider, usually within 12–29 months. Three is a budget for reworking prompts and the harness after each model generation. The three items run on three clocks at different speeds; grouping them into one frame is our reading.[^0]

| Clock | Question for the business case | Strongest evidence |
|---|---|---|
| **1. Cost** | What does one task cost, and how many times more does the hardest task cost? | Cursor: the hardest tasks cost "an order of magnitude" more than easy ones; it had to change the Pro plan and issue refunds |
| **2. Model lifecycle** | How long will the model we call stay alive, and how much notice do we get? | Notice from 45 days (Vertex, Bedrock) to 6 months (OpenAI); Azure: retirement dates "aren't extendable" |
| **3. Engineering** | How long will the prompt, harness and eval set stay correct? | The Claude Code team: an eval lives about "one, two, three model generations" |

The post [With AI, which four assumptions of technology governance no longer hold?](/en/four-it-governance-assumptions-ai-breaks) explains why these assumptions wobble at the organizational level. This post goes into the numbers of a single feature.

## 1. The cost clock: count per task, not per token

**The price for the same level of capability is falling very fast.** a16z estimates that LLM prices for the same performance are *"decreasing by 10x every year"*, and admits the method is *"far from perfect"*.[^1] Epoch AI measures the decline at 9 to 900 times per year depending on the capability threshold; the fastest declines fall in the recent period, so *"it's less clear that those will persist"*.[^2]

**But the bill does not follow the token price.** The FinOps Foundation writes that a query through RAG, a reasoning model and three tool calls can cost *"one to two orders of magnitude more tokens than a direct prompt to a smaller model"*. Their conclusion: *"A token may get cheaper; tokens, in aggregate, are not."* Token volume also jumps with unplanned changes: *"Token volumes can move by orders of magnitude"* when the product changes, the model changes or users change how they use it.[^3]

**The break happens when how you sell does not match how you pay.** Cursor once sold a Pro plan with a limit of 500 requests per month. In 2025 they switched to $20 of usage per month at API prices, because *"the hardest requests cost an order of magnitude more than simple ones"*, and then refunded people who were charged unexpectedly from 16/06 to 04/07/2025.[^4] GitHub Copilot took the same path in 2026.[^5] Both sold fixed plans while paying by the token; when users moved to agents, the gap fell on the seller.[^0]

**Are model providers subsidizing prices?** This is still disputed. Semafor, citing Anthropic's IPO filing, reports an 85% gross margin *"on the core work of running its existing AI models"*, and that this figure *"excludes the cost of training new models"*.[^6] Epoch AI estimates GPT-5's gross margin at *"about 30%"*, and argues that the GPT-5 lineup was *"decidedly unprofitable over its full lifecycle"*.[^7] The two figures measure two companies under two definitions and cannot be compared directly. For a buyer, the practical question is narrower: how long the fixed-price plan you use will last. Cursor and Copilot are two times the answer was "not long".[^0]

**Ways to cut cost that have primary sources:**

- Pick the cheapest model that meets the criteria for each task: *"Model routing applies this automatically by sending simple requests to small models."*[^8]
- Cache the stable beginning of the prompt. With Claude, reading from cache costs *"0.1 times the base input tokens price"*; writing to cache costs 1.25 times (kept 5 minutes) or 2 times (kept 1 hour).[^9]
- Set *"approved model lists, quotas, rate limits, and budget thresholds"*, and review before letting an autonomous agent run.[^8]
- Watch for anomalies such as *"agent loops, prompt changes that double token use"*, measuring tokens per minute at the application level, not only daily spend.[^8]

## 2. The model lifecycle clock: every snapshot has a death date

A snapshot is a fixed model version with a date in its name, for example `claude-sonnet-4-5-20250929`. Each provider has its own policy on notice before retirement:

| Provider | Minimum notice | What to know |
|---|---|---|
| OpenAI API | 6 months for GA models; 3 months for specialized variants and image models | Preview versions may get only *"much shorter notice"*, for example 2 weeks[^10] |
| Anthropic | *"at least 60 days' notice before model retirement"* for public models | Reason for retirement: *"to ensure capacity for new model releases"*[^11] |
| Google Vertex AI | Stable models have at least 12 months; when a retirement date is set, at least 45 days are given | Gemini API says the date in the table is *"earliest possible"*, with no fixed number of days of notice[^12] |
| Azure (Foundry) | Retirement date set at launch: 18 months for GA models; from month 12 only existing customers can keep using it | Retirement dates *"aren't extendable"*; after that *"all inference returns 410 Gone"*[^13] |
| AWS Bedrock | Legacy period of 6 months or 45 days; *"Most models have a 6-month Legacy period"* | *"migration will not happen automatically"*[^14] |

Figure 1 places four snapshots released in 2025 under a hypothetical 36-month contract signed in June 2025. All four are retired before the contract is halfway through, or exactly at the halfway point. The retirement dates are the real dates on the official pages; the 36-month term is the post's assumption, because there is no data on typical contract terms.[^0][^11][^10]

<figure class="fig fig-day" aria-label="Four model snapshots released in 2025 are all retired between 06/2026 and 12/2026, while a hypothetical 36-month contract runs from 06/2025 to 06/2028.">
<div class="day-scale" aria-hidden="true"><span>01/2025</span><span>10/2026</span><span>07/2028</span></div>
<div class="day-track"><p class="day-label">Hypothetical contract<small>36 months, 06/2025–06/2028</small></p><div class="day-bar day-bar-gap" style="margin-left: 11.9%; width: 85.7%"><span>Commitment to the customer</span></div></div>
<div class="day-track"><p class="day-label">claude-sonnet-4<small>05/2025 → 15/06/2026</small></p><div class="day-bar day-bar-sell" style="margin-left: 10.5%; width: 31.2%"><span>~13 months</span></div></div>
<div class="day-track"><p class="day-label">claude-opus-4-1<small>08/2025 → 05/08/2026</small></p><div class="day-bar day-bar-sell" style="margin-left: 17%; width: 28.6%"><span>12 months</span></div></div>
<div class="day-track"><p class="day-label">claude-sonnet-4-5<small>09/2025 → 30/11/2026</small></p><div class="day-bar day-bar-sell" style="margin-left: 21.2%; width: 33.5%"><span>~14 months</span></div></div>
<div class="day-track"><p class="day-label">gpt-5<small>08/2025 → 11/12/2026</small></p><div class="day-bar day-bar-sell" style="margin-left: 17.2%; width: 38.3%"><span>~16 months</span></div></div>
<figcaption><span class="fig-no">Figure <span class="no">1</span></span> Start dates come from the date in the model ID and may differ by a few days from the release date; retirement dates come from the Anthropic and OpenAI deprecation pages, read 2026-11-11. The contract bar is the post's assumption.</figcaption>
</figure>

**Switching models breaks code, not just quality.** Anthropic's deprecation page says the parameters `temperature`, `top_p`, `top_k` are *"Removed in API version 2026-10-21"*; sending them *"Returns a 400 error"*. Old code that sets these parameters has to be fixed before moving to the new API version.[^11]

**A model with the same name also changes behavior.** Chen, Zaharia and Zou measured GPT-4 identifying prime numbers correctly 84% of the time in the 03/2023 version and 51% in the 06/2023 version, and wrote that *"when and how these models are updated over time is opaque"*. Part of the drop came from a fall in GPT-4's *"amenity to follow chain-of-thought prompting"*: a prompting technique stopped working under the same model name.[^15] With an API, pinning a snapshot avoids this kind of silent change; in return, the snapshot has a death date, as in Figure 1.[^0]

**Preserving weights is not preserving access.** Anthropic commits to preserving the weights of all public models *"for, at minimum, the lifetime of Anthropic as a company"*, to keep the ability to *"make past models available again"*.[^16] This commitment does not say customers can keep calling the API of a retired model.

**Consequence for the business case: switching models is a recurring cost, not an incident.** Each switch costs one round of evaluating a replacement model (Azure advises evaluating on *"your own application, prompts, and representative data"*[^13]), one round of fixing prompts, sometimes fixing code because a parameter was dropped, and one release with a way back. Who may decide to switch, and how fast, is a governance question that post 08 already covered.[^0]

## 3. The engineering clock: what depreciates, what holds value

The origin of this idea is often cited as Sutton's *The Bitter Lesson*: *"general methods that leverage computation are ultimately the most effective"*, and *"building in how we think we think does not work in the long run"*.[^17] Sutton wrote about 70 years of AI research, not about prompts or the ROI of a product team; applying it here is an extrapolation. The part below relies on the providers' own documentation, not on Sutton.

**What depreciates fast:**

| Technique | What the source says |
|---|---|
| "think step by step" prompt for reasoning models | OpenAI: this approach *"may not enhance performance"* and can even hurt; *"Avoid chain-of-thought prompts"*[^18] |
| Writing in the style of "CRITICAL: You MUST use this tool" | Anthropic: newer models *"might now overtrigger"*; the fix is to *"soften any aggressive language"*[^19] |
| A self-written agent loop | The Agent SDK provides *"the same tools, agent loop, and context management that power Claude Code"*[^20] |
| A system prompt that compensates for the weakness of an old model | Cherny, Claude Code team: *"we deleted 80% of the system prompt"*; a prompt written for a model three months ago *"might not translate at all to the next model"*[^21] |
| Eval set | Cherny: an eval lives about *"one, two, three model generations"*; evals *"outlive the harness a little bit"*[^21] |

**What still holds value:**

- **The harness still decides a lot of performance.** A 2026 position paper argues the harness *"is often a stronger determinant of agent performance than the model it wraps"*, and that current evaluation *"misattribute harness-level gains to model improvements"*. This is an argument; the post has not read per-harness measurements.[^22]
- **Context management.** Anthropic writes that as context grows longer, the ability to *"accurately recall information from that context decreases"*. Manus says they *"rebuilt our agent framework four times"*, each time after finding a better way to build context.[^23]
- **Simplicity discipline.** Anthropic advises finding the *"simplest solution possible"* and adding complexity only when needed.[^24]
- **The rework process.** With each new model, the Claude Code team *"delete the entire system prompt and then bring it back line by line"* to measure what each line still contributes.[^21]

<figure class="fig" aria-label="An AI feature splits into two parts: the long-term investment that outlives one model, and the rework budget for each model generation.">
<div class="nest">
<p class="nest-t">An AI feature already shipped to customers</p>
<div class="nest-2">
<div class="nest">
<p class="nest-t">Long-term investment<small>outlives one model</small></p>
<p class="vmap-c">The company's own data</p>
<p class="vmap-c">Tools and APIs designed for the business</p>
<p class="vmap-c">Permissions and cost limits</p>
<p class="vmap-c">Test cases taken from production failures</p>
<p class="vmap-c">The ability to measure and rework</p>
</div>
<div class="nest">
<p class="nest-t">Rework budget<small>every model generation</small></p>
<p class="vmap-c hit">Prompts written for one model</p>
<p class="vmap-c hit">Harness code that compensates for a model's weakness</p>
<p class="vmap-c hit">Eval sets built around one model</p>
<p class="vmap-c hit">Code tied to one API version</p>
</div>
</div>
</div>
<figcaption><span class="fig-no">Figure <span class="no">2</span></span> The post's split, with no study measuring it directly. The left column should be counted as an investment; the right column should be counted as a recurring operating cost.</figcaption>
</figure>

**Our reading.** Harness and prompt *code* depreciates with each model generation; the harness-building *capability* (measuring, removing things and measuring again, managing context) and things tied to the business do not. There is no study that directly measures the latter.[^0] Consequence for the business case: do not capitalize the part that the next model will replace. A team cannot wait for a better model when customers need the feature today, so it still has to write prompts and harnesses; it just records them in the right column. Post 08 has the accounting section (IAS 38) for this.[^0]

## What to read carefully

- **No named company has been found to have shut down because of inference costs.** The evidence available is price changes, limits, and paused sales.[^25]
- **The two gross margin figures cannot be compared.** 85% and about 30% are two companies and two definitions; the 85% figure was read through Semafor, and the original filing was not read.[^6][^7]
- **Total token volume rising is not tokens per task rising.** Google says it processed 9.7 trillion tokens per month in 2024 and more than 3.2 quadrillion in 2026, but that is the total across all products. No primary source measures how fast tokens per task grow when moving to agents.[^26]
- **Self-hosting an open-weight model** lets you set your own retirement schedule, in exchange for carrying GPUs and operations. The post has no source measuring the cost of this option.[^25]
- **Retirement policies change often.** The table in section 2 was read on 11/11/2026; before using it for a contract, re-read the original pages.

## Applying it: six questions for an AI feature's business case

The six questions are the post's synthesis, placed into the economic and commercial cases of the Five Case Model in post 04.[^0]

| # | Question | Where to look | Red flag |
|---|---|---|---|
| 1 | **What does one task cost?** | Tokens of a typical task and of the hardest task over one week of real running | Nobody knows how many times more the hardest task costs |
| 2 | **Does how we sell match how we pay?** | The unit the customer pays us, next to the unit we pay the provider | Selling fixed seats, paying by token, with no per-user limit |
| 3 | **Does the cost forecast account for step jumps?** | Scenarios for switching models, changing prompts, users moving to agents | A forecast extrapolated in a straight line from last month's cost |
| 4 | **How many times must we switch models within the committed term?** | The retirement date of each snapshot we call, next to the contract term | The business case has no line for model switching cost |
| 5 | **Are the retirement terms already in the provider evaluation?** | Notice policy, exit plan | Our release cycle is longer than the notice we get |
| 6 | **Which part is an asset, which part is rework cost?** | The two columns in Figure 2 | Prompts and harnesses capitalized as multi-year assets |

Questions 2 and 3 connect to the post [How should technology spend be read: accounting, TBM or FinOps?](/en/technology-spend-accounting-tbm-finops), because FinOps is where usage-based cost is tracked daily.

[^0]: Our reasoning · The three-clock frame, the hypothetical 36-month contract in Figure 1, the two-column split in Figure 2, the reading about harness code versus harness-building capability, and the six questions are the author's synthesis of the cited sources, not the sources' own words.
[^1]: Verified · [a16z, Welcome to LLMflation (12/11/2024)](https://a16z.com/llmflation-llm-inference-cost/): price for the same performance "is decreasing by 10x every year"; method "far from perfect". Analysis by an investment fund; medium reliability.
[^2]: Verified · [Epoch AI (12/03/2025)](https://epoch.ai/data-insights/llm-inference-price-trends): decline "ranging from 9x to 900x per year" depending on the capability threshold; the fastest decline "less clear that those will persist".
[^3]: Verified · [FinOps Foundation, Token Economics (10/05/2026)](https://www.finops.org/insights/token-economics-the-atomic-unit-of-ai-value/): "one to two orders of magnitude more tokens than a direct prompt to a smaller model"; "A token may get cheaper; tokens, in aggregate, are not"; "Token volumes can move by orders of magnitude".
[^4]: Verified · [Cursor, Clarifying our pricing (04/07/2025)](https://cursor.com/blog/june-2025-pricing): previously a limit of 500 requests per month; now "$20 of frontier model usage per month at API pricing"; "the hardest requests cost an order of magnitude more than simple ones"; refunds of unexpected usage from 16/06 to 04/07.
[^5]: Verified · [GitHub Blog (27/04/2026)](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/): the premium request model "no longer sustainable"; all plans move to usage-based from 01/06/2026. Details in post 08.
[^6]: Disputed · [Semafor (28/10/2026)](https://www.semafor.com/article/10/28/2026/anthropics-key-number-is-its-85-gross-margin), citing Anthropic's IPO filing: 85% gross margin "on the core work of running its existing AI models"; "excludes the cost of training new models"; net loss of USD 80 billion. Original filing not read.
[^7]: Disputed · [Epoch AI, Can AI companies become profitable? (revised 06/03/2026)](https://epoch.ai/gradient-updates/can-ai-companies-become-profitable): GPT-5 gross margin "about 30%"; the GPT-5 lineup "decidedly unprofitable over its full lifecycle". Independent estimate.
[^8]: Verified · [FinOps Foundation, FinOps for AI Overview (updated 28/10/2026)](https://www.finops.org/wg/finops-for-ai-overview/): model routing; "approved model lists, quotas, rate limits, and budget thresholds"; monitor "agent loops, prompt changes that double token use"; "Monitor tokens per minute at the application level, not only daily spend".
[^9]: Verified · [Anthropic, Prompt caching](https://platform.claude.com/docs/en/build-with-claude/prompt-caching), read 2026-11-11: cache read "0.1 times the base input tokens price"; cache write 1.25 times (5-minute TTL), 2 times (1-hour TTL).
[^10]: Verified · [OpenAI, Deprecations](https://developers.openai.com/api/docs/deprecations), read 2026-11-11: GA models at least 6 months; specialized variants and image models at least 3 months; preview "much shorter notice". `gpt-5-2025-08-07` retires 11/12/2026.
[^11]: Verified · [Anthropic, Model deprecations](https://platform.claude.com/docs/en/about-claude/model-deprecations), read 2026-11-11: "at least 60 days' notice before model retirement"; "to ensure capacity for new model releases"; retirement dates of the snapshots in Figure 1; `temperature`, `top_p`, `top_k` "Removed in API version 2026-10-21", "Returns a 400 error".
[^12]: Verified · [Google Cloud, Model versions and lifecycle](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/learn/model-versions): stable models at least 12 months, at least 45 days to migrate; [Google AI Studio, Deprecations](https://aistudio.google.com/docs/deprecations): the date is "earliest possible". Read 2026-11-11.
[^13]: Verified · [Microsoft Learn, Foundry Models lifecycle (updated 24/07/2026)](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirements): retirement 18 months after launch; from month 12 only existing customers; "aren't extendable"; "all inference returns 410 Gone"; evaluate on "your own application, prompts, and representative data".
[^14]: Verified · [AWS, Bedrock Model lifecycle](https://docs.aws.amazon.com/bedrock/latest/userguide/model-lifecycle.html), read 2026-11-11: Legacy 6 months or 45 days; "Most models have a 6-month Legacy period"; "migration will not happen automatically".
[^15]: Verified · [Chen, Zaharia & Zou, arXiv 2307.09009 (2023)](https://arxiv.org/abs/2307.09009), abstract section: GPT-4 correct 84% (03/2023) and 51% (06/2023) on the prime number task; "when and how these models are updated over time is opaque"; "amenity to follow chain-of-thought prompting".
[^16]: Verified · [Anthropic, Commitments on model deprecation and preservation (04/11/2025)](https://www.anthropic.com/research/deprecation-commitments): preserves weights "for, at minimum, the lifetime of Anthropic as a company"; "make past models available again". No commitment on API access.
[^17]: Disputed · [Sutton, The Bitter Lesson (13/03/2019)](http://www.incompleteideas.net/IncIdeas/BitterLesson.html): the quotes are verbatim; applying them to prompts and harnesses is an extrapolation, not the point of the original article.
[^18]: Verified · [OpenAI, Reasoning best practices](https://developers.openai.com/api/docs/guides/reasoning-best-practices): chain-of-thought prompts "may not enhance performance"; "Avoid chain-of-thought prompts".
[^19]: Verified · [Anthropic, Prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices): with Opus 4.5 and 4.6, emphatic language "might now overtrigger"; "soften any aggressive language".
[^20]: Verified · [Anthropic, Agent SDK overview](https://platform.claude.com/docs/en/agent-sdk/overview): "the same tools, agent loop, and context management that power Claude Code".
[^21]: Verified · [YC Root Access, Boris Cherny (27/07/2026)](https://www.ycrootaccess.com/p/boris-cherny-building-claude-code), transcript: "we deleted 80% of the system prompt"; "might not translate at all to the next model"; an eval lives "one, two, three model generations"; "evals outlive the harness a little bit"; "delete the entire system prompt and then bring it back line by line". An insider's account, one source.
[^22]: Disputed · [arXiv 2605.23950 (07/05/2026)](https://arxiv.org/abs/2605.23950), position paper, abstract section: the harness "is often a stronger determinant of agent performance than the model it wraps"; current evaluation "misattribute harness-level gains to model improvements". Per-harness measurements not read.
[^23]: Verified · [Anthropic, Effective context engineering (29/09/2025)](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents): "accurately recall information from that context decreases"; [Manus](https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus): "rebuilt our agent framework four times". Publication date of the Manus post not determined.
[^24]: Verified · [Anthropic, Building effective agents (19/12/2024)](https://www.anthropic.com/research/building-effective-agents): "finding the simplest solution possible, and only increasing complexity when needed".
[^25]: OPEN · No primary source found for a named company shutting down because of inference costs, and no source measuring the cost of self-hosting open-weight models.
[^26]: Verified · [Google I/O 2026, Sundar Pichai's keynote (19/05/2026)](https://blog.google/innovation-and-ai/sundar-pichai-io-2026/): 9.7 trillion tokens per month (2024), about 480 trillion (2025), more than 3.2 quadrillion (2026). A total across all Google products, published by Google itself.
