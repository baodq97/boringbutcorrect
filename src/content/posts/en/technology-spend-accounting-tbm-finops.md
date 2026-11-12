---
title: "How should technology spend be read: accounting, TBM or FinOps?"
seoTitle: "Technology spend: accounting, TBM or FinOps?"
description: "IAS 38, IFRIC 2021, ASU 2018-15 and 2025-06, TBM Taxonomy 5.0.1 and FinOps: which question each framework answers about technology spend, and where they differ."
translationOf: tien-cong-nghe-ba-cach-nhin
station: 1
published: 2026-11-12
verified: 2026-11-04
image: /og/en/ep06.jpg
video: {id: NJzyzAHkbUo, duration: "7:09", episode: 6}
sources:
  - title: "IFRS Foundation. IAS 38 Intangible Assets"
    url: https://www.ifrs.org/issued-standards/list-of-standards/ias-38-intangible-assets/
  - title: "IFRS Interpretations Committee (03/2021). Configuration or Customisation Costs in a Cloud Computing Arrangement (IAS 38)"
    url: https://www.ifrs.org/content/dam/ifrs/supporting-implementation/agenda-decisions/2021/configuration-or-customisation-costs-in-a-cloud-computing-arrangement-mar-21.pdf
  - title: "FASB (2018). ASU 2018-15, Implementation Costs Incurred in a Cloud Computing Arrangement That Is a Service Contract"
    url: https://storage.fasb.org/ASU_2018-15.pdf
  - title: "FASB (2025-09-18). ASU 2025-06, Internal-Use Software (Subtopic 350-40): Targeted Improvements"
    url: https://fasb.org/news-and-meetings/in-the-news/fasb-issues-standard-that-makes-targeted-improvements-to-internal-use-software-guidance-423046
  - title: "TBM Council. TBM Taxonomy (5.0.1), Taxonomy Migration Guide, Allocation Methods, TBM & ITFM, History"
    url: https://www.tbmcouncil.org/taxonomy/
  - title: "FinOps Foundation. What is FinOps?, Framework, Domains, Introducing FOCUS 1.4"
    url: https://www.finops.org/introduction/what-is-finops/
---

A company rents sales software as a subscription (SaaS) and pays the vendor another VND 1 billion to configure it. In the budget meeting, the chief accountant says that amount is an expense, deducted straight from profit. The CTO asks why VND 1 billion serving the sales department sits entirely in the technology budget. The engineer in charge worries that the company is paying for fifty accounts while only thirty people log in. This is the hypothetical example that comes with the post.[^0] This post asks: through which frameworks can a technology payment be read, what question does each answer, and why does mixing them up cause so many budget arguments.

**Short answer:** this post reads "IT money" through three lenses.[^17] *Accounting* asks whether an item is an asset (capitalise) or an expense this period (expense); the anchor standards are IAS 38 for IFRS and ASC 350-40 for US GAAP.[^17] *Governance cost transparency* asks where the money goes and who uses it; the anchor is TBM Taxonomy 5.0.1, whose last layer even includes the value stream.[^8][^10] *Usage-based variable spend* asks whether what is in use is worth it; the anchor framework is FinOps, defined as a cultural practice.[^14] A budget table split by type of money (salaries, rented software, cloud servers) is only the first layer of the second lens. This is our reading.[^16]

## Three lenses: a classification by this post

The opening claim: mixing up the three lenses is the source of most IT budget arguments.[^17] This is the post's judgment, not that of any standard. The three lenses differ in their *unit of classification*:

| Lens | Question | Unit of classification | Anchor standard | Typical owner |
|---|---|---|---|---|
| Accounting | Asset or expense this period? | Legal-economic substance: does it create a controlled asset | IAS 38, ASC 350-40 | Finance, auditors |
| Cost transparency | Where does the money go, who uses it, what does each unit cost? | Consumption chain: from general-ledger account to consumer | TBM Taxonomy 5.0.1 | Office of the CIO, ITFM |
| Usage-based spend | Who is using it, is it worth it, how to optimize right now? | Usage and metadata (tag, account, scope) | FinOps Framework, FOCUS 1.4 | Engineering, Finance, Product |

Table compiled by this post.[^17]

<figure class="fig fig-kernel" aria-label="Hypothetical example: three people in a budget meeting look at the same money through three lenses, each asking a different question.">
<ol class="kernel">
<li><p class="kernel-h">Accounting</p><p class="kernel-def">Asset or expense this period?</p><p class="kernel-ex">How the VND 1 billion of configuration is recorded</p></li>
<li><p class="kernel-h">Cost transparency</p><p class="kernel-def">Where does the money go, who uses it?</p><p class="kernel-ex">Which department that VND 1 billion serves</p></li>
<li><p class="kernel-h">Usage-based</p><p class="kernel-def">Is what is in use worth it?</p><p class="kernel-ex">Fifty accounts, thirty people logging in</p></li>
</ol>
<figcaption><span class="fig-no">Figure <span class="no">1</span></span> Three questions about the same money, applied to the opening example. All numbers are assumptions.</figcaption>
</figure>

One cloud charge can at the same time be an *expense* in accounting, sit in the Cloud Services cost pool and the Compute tower in TBM, and be a FOCUS data line tagged by product in FinOps.[^17] The three readings do not contradict each other; they answer three different questions.

Two common intuitions can also be corrected. "CAPEX/OPEX" is not a standard accounting term; the standards say *capitalise* or *expense*, and the test lies in the substance of the spend, not in what the budget preparer wants. And TBM and FinOps do not compete with each other.[^17]

## The accounting lens: when software cost becomes an asset

### IAS 38: research and development

IAS 38 splits the cost of creating an internal intangible asset into two phases. The research phase is always expensed. The development phase is capitalised when it meets the criteria.[^1] Paragraph 57 sets six conditions, and all six must be demonstrated:[^2]

| | Condition (IAS 38.57) | Read in software-project language (the post's reading) |
|---|---|---|
| a | Technical feasibility of completing the asset | Has passed a spike, PoC |
| b | Intention to complete and use or sell it | An investment decision exists |
| c | Ability to use or sell it | Has users, has a deployment channel |
| d | The asset will generate probable future economic benefits (if used internally: demonstrate usefulness) | Ties to the benefits in the business case |
| e | Adequate technical, financial and other resources | Has a budget and has a team |
| f | Ability to measure reliably the cost during development | Timesheets, cost per initiative |

The right column is how this post translates into project language; it is not IAS 38's wording.[^17] The post draws a practical consequence from condition (f): an organization that wants to capitalise must record working hours per initiative, because what cannot be measured cannot be capitalised.[^17]

### SaaS: IFRS and US GAAP go two ways

The IFRS Interpretations Committee (03/2021) considered the case where a customer signs a SaaS contract, has only access to the software, and pays for configuration or customisation. Conclusion: the customer usually has no intangible asset for those costs, because it does not control the software. The exception is when it creates *additional code* that the customer controls.[^3] When there is no asset, the cost is recognized by when the service is received: a service performed by the SaaS provider itself and distinct is expensed when performed; a service by the provider that is not distinct from access is expensed gradually over the contract; a third party's service is expensed when performed; an advance payment is a prepayment.[^4]

Compared with the IFRIC conclusion, US GAAP goes a different way here. ASU 2018-15 treats the implementation cost of a hosting arrangement that is a service contract like an internal-use software project, so the qualifying part can be capitalised.[^5] ASU 2025-06, issued 2025-09-18, removes the project-stage concept. It sets a new threshold: management has authorized and committed funding, plus probable-to-complete. This standard is effective for fiscal years beginning after 15/12/2027 and allows early adoption.[^6]

| | IFRS (IAS 38 + IFRIC 2021) | US GAAP (ASC 350-40 + ASU 2018-15, 2025-06) |
|---|---|---|
| SaaS configuration, customisation | Usually creates no intangible asset, so it is expensed[^3][^4] | The qualifying part is capitalised[^5] |
| Capitalisation threshold for self-built software | The six IAS 38.57 conditions[^2] | Authorize & commit funding + probable-to-complete[^6] |
| Project stage | — | From ASU 2025-06, no more project stage[^6]; the post reads this as neutral to waterfall or agile[^17] |

The post draws two consequences, both its own judgments. One: under IFRS, a large SaaS implementation project usually raises the expense recognized in the implementation year noticeably, so comparing SaaS with building in-house using only first-year CAPEX/OPEX will be off.[^18] Two: the "authorize & commit funding" threshold of ASU 2025-06 coincides with the investment decision in the business case, so the demand management system should store the date and the approver of the funding.[^17] Scope: IFRS and US GAAP only; national standards such as VAS were not checked.[^17]

## The cost transparency lens: TBM

### TBM, ITFM and a vendor origin

The TBM Council describes TBM as covering the foundational processes of IT Financial Management and adding three things: a standard taxonomy, links to operational metrics and consumption, and links to business outcomes.[^7] This post uses ITFM to mean budgeting, forecasting, cost tracking, allocation or chargeback, cost control and reporting.[^17] This description comes from the organization that owns the framework, so the "high" confidence here is high about how the framework defines itself, not about how well it works.[^7]

TBM has its origin in a CIO council advising Apptio from 2007[^12]; Apptio is a vendor of cost transparency software.[^17] The taxonomy had version 1.0 in 2013, 2.0 in 2015, 3.0 in 2017, 4.0 in 2020 and 5.0 in June 2025.[^11] The current version is 5.0.1.[^8] The post suggests reading it as an industry standard maintained by a community but with vendor roots, not as an ISO standard.[^17]

### The four layers of the taxonomy

The taxonomy has four layers: Cost Pools → Technology Resource Towers → Technology Solutions → Technology Consumers.[^9]

| Layer | Classified by | Examples (5.0.1) |
|---|---|---|
| Cost Pools | Nature of the money | Staffing, Outside Services, Cloud Services, Software & SaaS, Hardware, Data Center, Telecom |
| Resource Towers | Technical function | Compute, Storage, Network, Application, Data, Security, Risk/Compliance, End User |
| Solutions | Services, digital products | Business, Workplace, Shared & Corporate, AI, Infrastructure, Delivery |
| Consumers | Who uses it | Business Functions, Business Value Streams, Partners & internal consumers, External Consumers |

Table source: the taxonomy 5.0.1 page; some labels are truncated on the web page, the full labels are in a whitepaper for members only.[^9]

Version 5 adds the Cloud Services and Staffing cost pools, adds the Application, Data and Smart Devices towers, separates Security and Risk, adds a solution type for AI, and expands the consumer layer to value stream, product and portfolio.[^10] For business architects, the most notable point is the value stream in the Consumers layer. Thanks to it, in our reading, technology cost can be mapped to the value streams of the business architecture, through allocation rules.[^17]

<figure class="fig fig-day" aria-label="The four layers of the TBM Taxonomy from Cost Pools to Consumers; the question of who the money serves sits in the last layer.">
<ol class="tower">
<li>Cost Pools<small>nature of the money; the table split by type of money stops here</small></li>
<li>Resource Towers<small>technical function</small></li>
<li>Solutions<small>services, digital products</small></li>
<li class="hit">Consumers<small>who uses it; the question "who does the money serve" sits here</small></li>
</ol>
<figcaption><span class="fig-no">Figure <span class="no">2</span></span> The four layers of TBM Taxonomy 5.0.1. Placing the questions at each layer is our reading.</figcaption>
</figure>

The finance department's table split by type of money, in our reading, stops at the Cost Pools layer. The CTO's question in the example, why VND 1 billion serving the sales department sits in the technology budget, is a question at the Consumers layer, so it cannot be answered from the first layer without allocating through the middle layers.[^16]

### Allocation: source, target, driver

An allocation rule has a source, a target and a driver. The TBM Council sets five quality criteria: traceable, defensible, relevant, consistent, scalable.[^13] The migration guide treats allocation that skips layers (cost pool straight to consumer) and fixed ratios as signs that modernization is needed.[^17]

Precision has a price: each extra driver makes the model harder to explain, and chargeback with disputed drivers shifts organizational energy from optimizing to arguing over numbers. The post reads the TBM Council putting "defensible" on a par with "traceable" as being for this reason.[^18]

### Showback and chargeback

| | Showback | Chargeback |
|---|---|---|
| Does money move in the P&L | No, display only | Yes, charged to the consumer's budget |
| Purpose | Transparency, awareness | Financial accountability, demand control |
| Data requirement | Lower; approximations accepted | High; consumers dispute each driver |

Table compiled by this post.[^17] The "showback first, chargeback later" path is common practice, not set by any standard.[^15] The post also files the question of who may decide the internal price of an IT service under the decision rights of governance.[^17]

## The usage-based spend lens: FinOps

The FinOps Foundation defines FinOps as a cultural practice. FinOps now covers Cloud, SaaS, Licensing, Data Center and other categories, and sits next to ITAM and AI Tokenomics in Technology Value Management.[^14] In the post's reading of the definition, everyone owns the cost and usage of their own work, with a central best-practice group supporting them.[^19] The Foundation stresses: *"If it seems that FinOps is about saving money, think again."*[^19]

The framework has four domains: Understand Usage & Cost, Quantify Business Value, Optimize Usage & Cost, Manage the FinOps Practice. These are not sequential steps.[^15b] FOCUS 1.4, ratified 2026-06-04, adds Invoice Detail and Billing Period[^16b]; in our reading, the purpose is to reconcile usage with invoices.[^17] The FinOps Foundation was founded in 02/2019 from the Customer Advisory Board of Cloudability and joined the Linux Foundation in 06/2020.[^20] The usage-based cost of an AI feature has its own post: [Which three costs does an AI feature's business case usually miss?](/en/ai-feature-business-case-missing-costs)

## TBM and FinOps: where they overlap

| | TBM | FinOps |
|---|---|---|
| Origin | A CIO council around Apptio (2007)[^12] | Cloudability's Customer Advisory Board (2019)[^20] |
| Scope | All technology spend, in our reading[^17] | Originally cloud; now every technology category, in our reading[^17] |
| Rhythm | Monthly, quarterly[^17] | Near real time[^17] |
| Level | Executive, governance[^17] | Engineering, operations[^17] |

The post judges that the boundary today lies in rhythm and level, not in cost type, because FinOps has opened up to every technology category and TBM has added the Cloud Services cost pool for FinOps.[^18]

## What to read carefully

- **Both frameworks have vendor roots**, and most of the detailed content and benchmarks sit behind a membership wall. In the post's judgment, a small organization may need only basic ITFM with a self-defined cost classification.[^18]
- **The TBM Insurance taxonomy extension v2.0 is OPEN**: members only.[^21]
- **ASU 2025-06 was read only through snippets** because fasb.org blocks automated access; ASU 2018-15 was read through a snippet of the FASB PDF and PwC Viewpoint.[^5][^6]
- **The text of IAS 38.57** was checked against a transcription and PwC Viewpoint; EUR-Lex blocks automated access.[^2]
- **Capitalising more is not always better.** Capitalising improves this year's OPEX but creates amortisation and impairment risk in later years.[^18]
- **CAPEX/OPEX conventions in an internal budget may differ from accounting**, for example the value threshold or the contract type. Check them against the real accounting policy.[^18]

## Applying it: answer "what does the money relieve" within a month

The steps below combine TBM, FinOps and the accounting part. The order of the steps, the use of the stages of a value stream as the Consumers layer, and the measurement rhythm are our reasoning.[^16]

1. **Ask which lens the question belongs to.** "How much is capitalised" is accounting; "is there waste this week" is FinOps.[^17] Placing "what does the money relieve" under TBM is our reading.[^16]
2. **Put each spend item in one cost pool and one tower.** Start with the five most recent items.[^17]
3. **Pick one value stream as the Consumers layer**[^10] and list which solutions serve it[^17]; the post suggests going down to each stage of the value stream.[^16]
4. **For shared systems, choose a measurable driver** (the post suggests number of calls, number of transactions) instead of a fixed ratio[^16][^17], and check it against the TBM Council's five criteria.[^13]
5. **Showback first, chargeback later**, once the data is reliable enough; this is practice, not a standard.[^15][^17]
6. **For usage-based spend, let the using team see the data**, with a central group supporting. The specific rhythm is the organization's choice.[^14][^16]
7. **When comparing SaaS with building in-house**, do not compare only first-year CAPEX/OPEX; ask whether the applicable accounting standard is IFRS or US GAAP.[^3][^5][^18]

In the opening example, the three lenses split the argument into three questions. The chief accountant asks how the VND 1 billion of configuration is recorded. The CTO asks whom that VND 1 billion serves. The engineer asks whether twenty accounts that nobody logs in to are worth paying for. No one is wrong, because each is answering a different question.[^0]

The accompanying video (episode 06 of Boring But Correct) tells the story of the same budget meeting. This post is the sources and the reasoning behind it.

[^0]: Assumption · The company, the VND 1 billion of configuration, the fifty accounts and the thirty people logging in are illustrative examples from episode 06, not from a source.
[^1]: Verified · [IFRS Foundation, IAS 38](https://www.ifrs.org/issued-standards/list-of-standards/ias-38-intangible-assets/), summary page: research is expensed; development is capitalised when it meets the criteria.
[^2]: Verified · Text of IAS 38.57, six conditions (a)-(f), via a transcription on sdv.com.mx that matches PwC Viewpoint; EUR-Lex blocks automated access.
[^3]: Verified · [IFRIC agenda decision 03/2021](https://www.ifrs.org/content/dam/ifrs/supporting-implementation/agenda-decisions/2021/configuration-or-customisation-costs-in-a-cloud-computing-arrangement-mar-21.pdf), IASB did not object 04/2021: the customer usually has no intangible asset for configuration and customisation costs; exception for controlled additional code.
[^4]: Verified · As [^3], items (a)-(e): when to expense by distinct, not distinct, third party; an advance payment is a prepayment.
[^5]: Verified (via snippet) · [ASU 2018-15](https://storage.fasb.org/ASU_2018-15.pdf); PwC Viewpoint: the implementation cost of a hosting arrangement that is a service contract is treated like an internal-use software project.
[^6]: Verified (via snippet) · [FASB, ASU 2025-06](https://fasb.org/news-and-meetings/in-the-news/fasb-issues-standard-that-makes-targeted-improvements-to-internal-use-software-guidance-423046): issued 2025-09-18; removes project stage; authorize & commit funding and probable-to-complete threshold; effective for years beginning after 15/12/2027.
[^7]: Verified (self-described by the source) · [TBM Council, TBM & ITFM](https://www.tbmcouncil.org/discover/hot-topics/tbm-itfm/): TBM covers ITFM and adds taxonomy, operational metrics, business outcomes.
[^8]: Verified · [TBM Council, Taxonomy](https://www.tbmcouncil.org/taxonomy/): current version 5.0.1; the 4.1 page is an old document.
[^9]: Verified · [TBM Taxonomy 5.0.1](https://www.tbmcouncil.org/taxonomy/); TBM Model page: four layers and the catalog. Some labels are truncated on the web page; the full labels are in a whitepaper for members only.
[^10]: Verified · [TBM Council, Taxonomy Migration Guide](https://www.tbmcouncil.org/learn-tbm/tbm-modeling/taxonomy-migration/): changes in v5, including value stream, product, portfolio in the consumer layer.
[^11]: Verified, medium to high confidence · [History of the TBM Council](https://www.tbmcouncil.org/about/history-of-tbm-council/): 1.0 (2013), 2.0 (2015), 3.0 (2017), 4.0 (2020), 5.0 (06/2025); read from the text timeline.
[^12]: Verified · As [^11]: TBM has its origin in a CIO council advising Apptio, from 2007.
[^13]: Verified · [TBM Council, Allocation Methods](https://www.tbmcouncil.org/learn-tbm/tbm-modeling/allocation-methods/): an allocation rule has source, target, driver; criteria traceable, defensible, relevant, consistent, scalable.
[^14]: Verified · [FinOps Foundation, What is FinOps?](https://www.finops.org/introduction/what-is-finops/): cultural practice; covers Cloud, SaaS, Licensing, Data Center and other categories; part of Technology Value Management together with ITAM, AI Tokenomics.
[^15]: Common practice, not set by any standard · The path of showback first, chargeback later. Medium confidence.
[^15b]: Verified · [FinOps Foundation, Domains](https://www.finops.org/framework/domains/): four domains, not sequential steps.
[^16]: Our reasoning · The table by type of money stops at the Cost Pools layer; the question "what does the money relieve" belongs to the Consumers layer; using the stages of a value stream as the Consumers layer; the order of the applying steps; the rhythm of looking at the data.
[^16b]: Verified · [FinOps Foundation, Introducing FOCUS 1.4](https://www.finops.org/insights/introducing-focus-1-4/): ratified 2026-06-04; adds Invoice Detail and Billing Period.
[^17]: Our judgment · The three lenses and the claim about budget arguments; the unit of classification; the example of one cloud charge; CAPEX/OPEX is not an accounting term; the column "read in software-project language" for IAS 38.57 and the consequence for working hours; the funding threshold coinciding with the investment decision; the scope of IFRS and US GAAP; reading TBM as a vendor-rooted industry standard; value stream mapping into business architecture; the migration guide's signs of layer skipping and fixed ratios; the showback and chargeback table; showback and chargeback as a decision right; the rhythm and level of TBM and FinOps; the cost pool and value stream exercise.
[^18]: Our judgment · The price of allocation precision; capitalising more is not always better; comparing SaaS with building in-house using only the first year will be off; vendor roots and the membership wall; the TBM and FinOps boundary in rhythm and level; internal conventions that differ from accounting.
[^19]: Read from the source, not checked separately · How the FinOps definition is presented (everyone owns cost and usage, a central group supports); the quote "If it seems that FinOps is about saving money, think again" from the FinOps Foundation.
[^20]: Verified · finops.org/about (via snippet); repo finopsfoundation/framework: founded 02/2019 from Cloudability's Customer Advisory Board; joined the Linux Foundation 06/2020.
[^21]: OPEN · Details of the TBM Insurance taxonomy extension v2.0: members only.
