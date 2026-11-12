---
title: "With AI, which four assumptions of technology governance no longer hold?"
seoTitle: "Four technology governance assumptions AI breaks"
description: "AI does not replace technology governance frameworks; it replaces their unit of measure: from seat to outcome, from year to month, from usage to bottleneck."
translationOf: bon-gia-dinh-lung-lay-khi-co-ai
station: 1
published: 2026-11-12
verified: 2026-11-11
sources:
  - title: "GitHub Blog (27/04/2026). Copilot moves to usage-based billing"
    url: https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/
  - title: "Intercom. Fin pricing"
    url: https://fin.ai/pricing
  - title: "Zendesk (19/05/2026). Relate 2026"
    url: https://www.zendesk.com/newsroom/press-releases/relate-2026/
  - title: "Salesforce (15/05/2025). Flexible Agentforce pricing"
    url: https://www.salesforce.com/news/press-releases/2025/05/15/agentforce-flexible-pricing-news/
  - title: "Aleph (06/2026). What's a good SaaS gross margin? (summary of the Benchmarkit survey)"
    url: https://www.getaleph.com/answers/saas-gross-margin-2026
  - title: "OMB (03/04/2025). M-25-22: Driving Efficient Acquisition of Artificial Intelligence in Government"
    url: https://www.whitehouse.gov/wp-content/uploads/2025/02/M-25-22-Driving-Efficient-Acquisition-of-Artificial-Intelligence-in-Government.pdf
  - title: "Anthropic. Model deprecations"
    url: https://platform.claude.com/docs/en/about-claude/model-deprecations
  - title: "Microsoft Learn. Azure OpenAI model retirements"
    url: https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirements
  - title: "IFRS Foundation. IAS 38 Intangible Assets (2026 edition)"
    url: https://www.ifrs.org/content/dam/ifrs/publications/html-standards/english/2026/issued/ias38.html
  - title: "FASB (09/2025). ASU 2025-06"
    url: https://storage.fasb.org/ASU%202025-06.pdf
  - title: "KPMG Switzerland. Accounting for AI software investments"
    url: https://kpmg.com/ch/en/insights/reporting/accounting-for-ai-software.html
  - title: "NIST (01/2023). AI Risk Management Framework 1.0, NIST AI 100-1"
    url: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf
  - title: "UK Government (10/02/2025). AI Playbook for the UK Government"
    url: https://www.gov.uk/government/publications/ai-playbook-for-the-uk-government
  - title: "Thoughtworks (11/2026). Technology Radar Vol. 35, blip LiteLLM"
    url: https://www.thoughtworks.com/radar/platforms/litellm
  - title: "OpenAI (29/04/2025). Sycophancy in GPT-4o"
    url: https://openai.com/index/sycophancy-in-gpt-4o/
  - title: "OpenAI (02/05/2025). Expanding on what we missed with sycophancy"
    url: https://openai.com/index/expanding-on-sycophancy/
  - title: "DORA (2025). State of AI-assisted Software Development 2025"
    url: https://dora.dev/research/2025/dora-report/
  - title: "DORA (2026). ROI of AI-assisted Software Development, v. 2026.1; DORA Insights"
    url: https://dora.dev/insights/
  - title: "METR (24/02/2026). We are changing our developer productivity experiment design"
    url: https://metr.org/blog/2026-02-24-uplift-update/
  - title: "Stanford HAI (2026). AI Index 2026, chapter 4 Economy"
    url: https://hai.stanford.edu/assets/files/ai_index_report_2026_chapter_4_economy.pdf
  - title: "Azoulay, P., Krieger, J. & Nagaraj, A. (2024). Old Moats for New Models. NBER WP 32474"
    url: https://www.nber.org/system/files/working_papers/w32474/w32474.pdf
  - title: "Agrawal, A., Gans, J. & Goldfarb, A. (18/11/2024). Generative AI Is Still Just a Prediction Machine. HBR"
    url: https://hbr.org/2024/11/generative-ai-is-still-just-a-prediction-machine
---

Post 00 of this blog built a two-axis map for technology in a company: axis A describes what the company *is* (strategy, business architecture, data and applications, infrastructure), and axis B describes how the company *changes* (governance, portfolio, delivery, operate, measure). The frameworks placed on that map, from business case to FinOps, were written when software had three properties: costs were mostly fixed, assets were used for years, and value could be measured after go-live. AI shakes all three at once.

**Short answer:** AI does not replace the frameworks; it replaces their *unit of measure*. This post offers four claims, each one a base assumption of the map that no longer holds in full. The first three have fairly solid evidence; the fourth is a hypothesis. The four claims are this post's reading, assembled from the sources below, not the conclusion of any one source.[^0]

| # | Old assumption | What is happening | Confidence |
|---|---|---|---|
| 1 | Software is sold by the seat, and adding users costs almost nothing extra | The economic unit moves to the *task* and the *outcome* | High in customer support and coding tools; not yet across the industry |
| 2 | Foundation components change more slowly than the commitments placed on them | The model, the fastest-changing part, sits *beneath* the longest commitments, on the provider's schedule | High |
| 3 | If the system runs, value arrives, measured by the system's KPIs | What is easy to measure (usage, tokens, A/B) misleads easily; value sits in a bottleneck outside the AI | High on the limits of measurement; low on how to measure correctly |
| 4 | Advantage comes from hard-to-build technical capability | Model-bound engineering depreciates with each generation; advantage is not there, but no one has shown where it is | Low |

## 1. The economic unit moves from seat to outcome

Traditional software costs almost nothing extra when a user is added, so selling by the seat made sense: fixed revenue matched fixed cost. Each time AI does a task, it costs compute, and a hard task costs many times more than an easy one. When cost follows the task, selling by the seat puts the provider at a loss on exactly its heaviest users.[^0]

GitHub said just this when it dropped Copilot's old pricing: *"Today, a quick chat question and a multi-hour autonomous coding session can cost the user the same amount."* The old model *"is no longer sustainable"*, and all Copilot plans moved to usage-based pricing from 1 June 2026.[^1]

<figure class="fig fig-unit">
<ol class="chain">
<li><p class="chain-h">By seat</p><p>One price per user per month</p><p class="chain-note">Makes sense when cost is fixed</p></li>
<li><p class="chain-h">By task</p><p>Copilot, Cursor: priced by usage; Salesforce: $0.10 per action</p><p class="chain-note">Cost follows the work the AI does</p></li>
<li class="hit"><p class="chain-h">By outcome</p><p>Intercom: $0.99 per outcome; Zendesk: charges only for outcomes they verify as resolved</p><p class="chain-note">Who defines "outcome"?</p></li>
</ol>
<figcaption><span class="fig-no">Figure <span class="no">1</span></span> Three billing units, with the providers that have moved. Arranging them as a chain is this post's reading; not every provider goes through all three steps.</figcaption>
</figure>

Customer support has gone furthest. Intercom lists Fin at *"$0.99 per outcome"*.[^2] Zendesk said in 2026 that its AI agents are *"priced solely on the outcomes Zendesk verifiably resolves"*.[^3] Salesforce moved Agentforce from $2 per conversation to Flex Credits, $0.10 per action.[^4]

**When the seller changes the unit, the buyer must change with it at every step of axis B.** A business case no longer estimates "how many licenses" but "how many tasks, what each task costs, and which way the trend goes". The US government's AI procurement guidance (OMB M-25-22) already includes a criterion for *stopping use* when cost, demand or model performance changes.[^5] Finance moves the spend from something close to an asset (a multi-year license) to variable operating cost. Measurement has to measure outcomes, because usage is now a cost, not a value.[^0]

**The most notable point is who defines "outcome".** Charging by outcome shifts cost risk to the provider, but also hands them the right to define what counts as an outcome. Zendesk stresses that outcomes are verified by *them*.[^3] For the buyer, the definition of an outcome and how it is verified become a contract term as important as price. This is this post's reasoning; no independent source yet assesses which side benefits.[^0]

**Limits.** According to a summary of the Benchmarkit survey, the median software gross margin in 2025 is still about 80%, and AI costs *"have not yet compressed software margins at the median"*. This is a secondary source.[^6] The shift is clear in agent products and customer support; for software that uses little AI, the seat still makes sense.

## 2. The fastest-changing part sits beneath the longest commitments

The map implicitly assumes the lower layer (infrastructure, platform) is more stable than the commitments placed on it: customer contracts, assets on the books, investment approval cycles. AI models reverse this. A model snapshot lives about 12–29 months; providers give notice of retirement from 45 days to 6 months; and that schedule is set by the provider, not the company. For example, Anthropic commits to at least 60 days' notice, and its three retirement rounds in 2026 gave 61–62 days' notice.[^7]

| Long commitment | Short-lived component beneath it | Conflict |
|---|---|---|
| Customer contract, multi-year | Model lives 12–29 months | The model must be changed several times within one contract; each change is a risky change |
| Intangible asset on the books | Prompts, harness, integrations tied to one model | Useful life depends on something that lives shorter than it |
| Exit plan with a provider | About 60 days' notice of retirement | Exiting a core platform is usually a multi-year plan; here you may be forced off a model in 60 days |
| Governance cycle | Each model change | If each change has to wait for an approval meeting, the 60-day schedule cannot be met |
| Change process | A model updated under the same name | Behavior changes while the name does not |

The table is this post's own; the first row is reasoning, with no data yet on contract terms.[^0]

On accounting, IAS 38 treats obsolescence and dependence on other assets as factors in useful life, and says software usually has a short useful life.[^8] FASB, in ASU 2025-06, acknowledges there is no specific guidance yet for AI development costs.[^9] KPMG Switzerland writes that AI assets may be replaced *"within a matter of months"*.[^10]

### The clearest case: GPT-4o "flattering" users, April 2025

The April 2025 update of GPT-4o in ChatGPT made the model flatter users excessively (sycophancy). OpenAI wrote two postmortems on the incident.[^11]

<figure class="fig fig-day" aria-label="Timeline of the GPT-4o sycophancy incident: passed offline evaluations, passed A/B testing, experts felt something was slightly off, released anyway, system prompt fixed overnight, rollback took about 24 hours.">
<ol class="tower">
<li>Offline evaluations<small>passed</small></li>
<li>A/B test with users<small>passed</small></li>
<li>Expert hands-on testing<small>some people felt the model "felt" slightly off</small></li>
<li>Release<small>no dedicated evaluation for sycophancy</small></li>
<li>System prompt fix late Sunday night<small>reduced most of the harm</small></li>
<li class="hit">Full rollback<small>took about 24 hours</small></li>
</ol>
<figcaption><span class="fig-no">Figure <span class="no">2</span></span> The incident according to OpenAI's two postmortems, read from top to bottom. The quantitative checkpoints all showed green before release.</figcaption>
</figure>

The lesson for buyers is not that OpenAI got it wrong. It is that something the company does not control can change behavior without notice, and the quantitative checkpoints can all show green. There is one limit: the two postmortems cover only ChatGPT. In the API, a fixed snapshot is not silently changed, which is why pinning a snapshot has value.[^0][^11]

**Consequence: separate the commitment from the model.** The official sources already have this piece by piece; assembling it into one practice is this post's own.[^0]

- **Engineering:** pin the snapshot instead of using an alias; keep your own evaluation set to choose a replacement model. Azure advises evaluating on *"your own application, prompts, and representative data"*.[^12] A gateway reduces lock-in but cannot remove it: the Thoughtworks Radar warns that using provider-specific features is *"reintroducing the coupling"*.[^13]
- **Contract:** portability and price transparency terms, as OMB M-25-22 requires of US agencies.[^5]
- **Governance:** delegate the right to change models in advance within a set of conditions (evaluation passes, a way back exists), instead of approving each time. The UK government's AI Playbook puts model updates into *"a managed release process"* that can be reverted to an earlier version.[^14] NIST requires mechanisms and responsible people for superseding, disengaging and retiring AI systems.[^15]
- **Accounting:** treat the part tied to one model as a short life-cycle cost; consider capitalizing only the data and business integration that outlive the model. This is reasoning from IAS 38, with no official guidance.[^8][^0]

The concrete numbers for a single feature (cost per task, each provider's retirement schedule, what to capitalize) are in the post [Which three costs does an AI feature's business case usually miss?](/en/ai-feature-business-case-missing-costs)

## 3. What is easy to measure is the wrong thing

With traditional software, function and value sit close together: if the system runs, the process runs. With AI, between "AI can do it" and "the company benefits" there is a gap that AI does not close on its own. DORA 2025 calls AI an *"amplifier"*: it magnifies existing strengths and weaknesses, raising throughput but also raising instability.[^16] DORA's 2026 ROI report names the extra checking work the *"verification tax"*, and proposes measuring AI *"by the bottlenecks it clears"*.[^17]

**Why the public figures contradict each other.** The well-known numbers all come with conditions:

- METR in 2025 measured experienced developers as 19% slower when using AI, across 16 people. In 2026, METR itself said the data from the new experiment gives *"an unreliable signal"*, because developers do not want to take part if they must work without AI.[^18]
- The 2025 MIT NANDA report says 95% of organizations get no profit from GenAI. The report itself notes that the figures rest on interviews and are *"directionally accurate"*. This post could only read a mirror copy.[^19]
- The AI Index 2026 summarizes: the biggest benefits are in work that is *"structured, measurable"*, and *"the evidence is not conclusive nor is it all positive"*.[^20]

Read together, in this post's way: it is not that AI has no value, but that value depends on whether there is structure and a measurable bottleneck. An industry-wide average therefore says little about a specific company.[^0]

**What is easy to measure misleads, in the classic Goodhart way.** DORA warns that treating token spend as a performance metric is *"a dangerous trap"*: tokens are cost, and optimizing them up means optimizing cost up.[^21] The sycophancy case is the same pattern on the provider side: OpenAI wrote that they had *"focused too much on short-term feedback"* (the like and dislike buttons), a good metric with broken behavior.[^11] Filing these two under Goodhart's law (a measure that becomes a target stops being a good measure) is this post's reading.[^0]

This claim has its own post: [AI makes staff faster, so why do customers wait as long as before?](/en/ai-faster-staff-customers-still-wait) goes into which bottleneck to measure at, and when, through the J-curve.

## 4. Advantage: we know where it is not, not yet where it is

This is the weakest claim, and the post says so plainly.

**What has evidence: advantage does not lie in model-bound engineering.** Prompts, harnesses, ways of compensating for a model's weaknesses depreciate with each generation. The Claude Code team deleted 80% of the system prompt when moving to a new model.[^22] An NBER study shows that a foundation model *"can be a chokepoint"* for competition at the application layer: much of the value may flow to whoever holds the model.[^23]

**What has no evidence: where advantage lies.** The common answers (proprietary data, distribution channels, process integration) have no empirical study in the set of sources this post has read.[^24] Agrawal, Gans and Goldfarb ask the right question: *"What are the sustainable sources of competitive advantage as AI continues to improve?"* Their answer is behind a paywall; this post has not read it.[^25]

**Our reading.** By Porter ([post 01](/en/business-strategy-porter-rumelt-mintzberg)), lasting advantage lies in a system of activities that fit together, hard to imitate piece by piece. Applied to AI: the hard-to-copy thing may not be the AI but how work is reorganized around it, including which tasks go to the AI, who checks, and how outcomes are defined and verified. This is a hypothesis to test, not a conclusion.[^0]

## What to read carefully

- **Claim 1 may be overstated.** The median gross margin has not fallen, and the shift is clear only in a few areas.[^6]
- **Whether charging by outcome favors the buyer** has no independent source assessing it.[^0]
- **Separating the commitment from the model takes effort.** Pinning snapshots, your own evaluation and contract terms all have costs; for an experimental feature, the cost may exceed the risk. Claim 2 applies most strongly to features already sold to customers.[^0]
- **Many of the governance sources come from the UK and US public sectors.** The logic is usable for companies; the thresholds and procedures should not be carried over as they are.[^5][^14]
- **Most of the evidence on measurement comes from software development** and is survey or correlational.[^16][^20]

## Applying it: three questions for every investment with AI

The first three claims give three questions, to put into the business case at the approval gate. The questions are this post's own.[^0]

| # | Question | From claim |
|---|---|---|
| 1 | **What is the economic unit?** Do we pay by seat, by task or by outcome; which unit do customers pay us in; do the two units match; who defines and verifies "outcome"? | 1 |
| 2 | **Which commitment outlasts the model?** Which contract, asset, exit plan or approval process has a term longer than the life cycle of the model in use; if the model changes, who decides, how long does it take, and what is it checked with? | 2 |
| 3 | **At which bottleneck does the value sit?** Where on the value stream is the benefit measured, rather than measuring AI usage; when is it measured, so as not to conclude wrongly at the bottom of the J-curve? | 3 |

The fourth question, where advantage lies, has no sourced answer yet.

[^0]: Our reasoning · The four claims, the summary table, the chain seat → task → outcome, the table of long commitments and short-lived models, the way of assembling "separate the commitment from the model", the Goodhart reading and the hypothesis about advantage are the writer's synthesis of the cited sources, not the words of any source.
[^1]: Verified · [GitHub Blog (27/04/2026)](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/) and [GitHub Changelog (01/06/2026)](https://github.blog/changelog/2026-06-01-updates-to-github-copilot-billing-and-plans/): a quick question and a multi-hour agent session "can cost the user the same amount"; the premium request model "is no longer sustainable"; all plans move to usage-based from 01/06/2026.
[^2]: Verified · [Intercom, Fin pricing](https://fin.ai/pricing), read 2026-11-11: "$0.99 per outcome". Fin 2 has charged $0.99 per resolution since 10/2024.
[^3]: Verified · [Zendesk, Relate 2026 (19/05/2026)](https://www.zendesk.com/newsroom/press-releases/relate-2026/): "priced solely on the outcomes Zendesk verifiably resolves". Since 08/2024 Zendesk has charged per resolution the AI solves on its own.
[^4]: Verified · [Salesforce (15/05/2025)](https://www.salesforce.com/news/press-releases/2025/05/15/agentforce-flexible-pricing-news/): Agentforce from $2 per conversation to Flex Credits at $0.10 per action.
[^5]: Verified · [OMB M-25-22 (03/04/2025)](https://www.whitehouse.gov/wp-content/uploads/2025/02/M-25-22-Driving-Efficient-Acquisition-of-Artificial-Intelligence-in-Government.pdf): periodic value review; criteria for stopping use based on cost, demand, vendor requirements, model performance; anti-lock-in terms, data and model portability. Applies to US government agencies.
[^6]: Disputed · [Aleph (06/2026)](https://www.getaleph.com/answers/saas-gross-margin-2026), summary of the Benchmarkit survey: 2025 median gross margin about 80%; AI costs "have not yet compressed software margins at the median". Secondary source; the original survey was not read.
[^7]: Verified · Deprecation pages of [Anthropic](https://platform.claude.com/docs/en/about-claude/model-deprecations), OpenAI, Google Vertex, Azure, AWS Bedrock (read 2026-11-11): notice from 45 days (Vertex, Bedrock) to 6 months (OpenAI GA); Anthropic at least 60 days, three rounds in 2026 with 61–62 days' notice. The 12–29 month life cycle is counted from the date in the model ID to the retirement date; medium confidence on the start date.
[^8]: Verified · [IAS 38 (2026 edition)](https://www.ifrs.org/content/dam/ifrs/publications/html-standards/english/2026/issued/ias38.html), paragraphs 90, 92: obsolescence and dependence on other assets are factors in useful life; software usually has a short useful life. Applying this to prompts and harnesses is this post's reasoning.
[^9]: Verified · [FASB ASU 2025-06 (09/2025)](https://storage.fasb.org/ASU%202025-06.pdf), BC66–BC67: no specific guidance for AI costs.
[^10]: Verified · [KPMG Switzerland](https://kpmg.com/ch/en/insights/reporting/accounting-for-ai-software.html): AI assets may be replaced "within a matter of months". The view of an audit firm; page date not determined. Medium confidence.
[^11]: Verified · OpenAI, [Sycophancy in GPT-4o (29/04/2025)](https://openai.com/index/sycophancy-in-gpt-4o/) and [Expanding on what we missed (02/05/2025)](https://openai.com/index/expanding-on-sycophancy/): offline evaluations and A/B passed; experts felt "slightly off"; no dedicated evaluation for sycophancy; system prompt fix late Sunday night; rollback "took around 24 hours"; "focused too much on short-term feedback". Covers ChatGPT only.
[^12]: Verified · [Microsoft Learn, Azure model retirements](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirements) (updated 24/07/2026): evaluate the replacement model on "your own application, prompts, and representative data".
[^13]: Verified · [Thoughtworks Technology Radar Vol. 35, blip LiteLLM](https://www.thoughtworks.com/radar/platforms/litellm): using provider-specific features through a gateway is "reintroducing the coupling".
[^14]: Verified · [AI Playbook for the UK Government (10/02/2025)](https://www.gov.uk/government/publications/ai-playbook-for-the-uk-government): "Any updates to the model need to go through a managed release process", and it must be possible to be "reverted to an earlier version". A UK public sector framework.
[^15]: Verified · [NIST AI 100-1 (01/2023)](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf), GOVERN 1.7, 2.3, MANAGE 2.4: mechanisms to supersede, disengage, deactivate; safe retirement; leadership owns AI risk decisions.
[^16]: Verified · [DORA 2025](https://dora.dev/research/2025/dora-report/): AI is an "amplifier"; raises throughput but still raises instability. Survey of nearly 5,000 people, correlational.
[^17]: Verified · DORA, ROI of AI-assisted Software Development v. 2026.1: "verification tax"; measure AI "by the bottlenecks it clears".
[^18]: Verified · METR, arXiv 2507.09089 (07/2025): 19% slower, 16 developers, early-2025 tools; [METR (24/02/2026)](https://metr.org/blog/2026-02-24-uplift-update/): the new experiment's data gives "an unreliable signal" because developers do not want to work without AI.
[^19]: Verified · MIT NANDA, The GenAI Divide 2025: 95% of organizations get no profit from GenAI; the report itself notes "directionally accurate". Read through a mirror copy, not checked against MIT's original. Medium confidence.
[^20]: Verified · [AI Index 2026, chapter 4](https://hai.stanford.edu/assets/files/ai_index_report_2026_chapter_4_economy.pdf): the biggest benefits are in work that is "structured, measurable"; "the evidence is not conclusive nor is it all positive".
[^21]: Verified · [DORA Insights (02/06/2026)](https://dora.dev/insights/): treating token spend as a performance metric is "a dangerous trap".
[^22]: Verified · Boris Cherny, YC Root Access (27/07/2026): Claude Code deleted 80% of the system prompt when moving to Opus 5. An insider's word, one source.
[^23]: Verified · [Azoulay, Krieger & Nagaraj, NBER WP 32474 (2024)](https://www.nber.org/system/files/working_papers/w32474/w32474.pdf): a foundation model "can be a chokepoint". Working paper.
[^24]: OPEN · Lasting advantage shifting to proprietary data, distribution channels or process integration: no empirical source in the set that was read.
[^25]: Verified · [Agrawal, Gans & Goldfarb, HBR (18/11/2024)](https://hbr.org/2024/11/generative-ai-is-still-just-a-prediction-machine), opening section: the question about sources of lasting advantage. The answer is behind a paywall, not read.
