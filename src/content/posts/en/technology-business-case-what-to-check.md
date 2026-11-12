---
title: "What should a technology business case check before approval?"
seoTitle: "Technology business case: what to check before approval"
description: "The UK Five Case Model, optimism bias and benefits management, plus Cranfield and CBP: origin, definitions, where they differ, and how a CIO can use them."
translationOf: ho-so-dau-tu-cong-nghe-truoc-khi-duyet
station: 1
published: 2026-11-12
verified: 2026-11-04
image: /og/en/ep04.jpg
video: {id: GCSng1pYX3s, duration: "5:19", episode: 4}
sources:
  - title: "HM Treasury (2026). Guidance on Developing Business Cases for Projects and Programmes"
    url: https://www.gov.uk/government/publications/guidance-on-developing-business-cases
  - title: "HM Treasury (2026). The Green Book (updated 2026-10-28)"
    url: https://www.gov.uk/government/publications/the-green-book--2
  - title: "Infrastructure and Projects Authority (2017). Guide for Effective Benefits Management in Major Projects"
    url: https://majorprojects.org/wp-content/uploads/2024/10/Guide_for_Effective_Benefits_Management_in_Major_Projects.pdf
  - title: "Government Project Delivery. The Teal Book, Chapter 19: Benefits management (revised 2026-07-01)"
    url: https://projectdelivery.gov.uk/teal-book/home/part-e-planning-and-control/chapter-19-benefits-management/
  - title: "Peppard, J., Ward, J. & Daniel, E. (2007). Managing the Realization of Business Benefits from IT Investments. MIS Quarterly Executive 6(1)"
    url: https://aisel.aisnet.org/misqe/vol6/iss1/3/
  - title: "Davis, P. K. (2002). Analytic Architecture for Capabilities-Based Planning, Mission-System Analysis, and Transformation. RAND MR-1513-OSD"
    url: https://www.rand.org/pubs/monograph_reports/MR1513.html
  - title: "National Research Council (2005). Naval Analytical Capabilities: Improving Capabilities-Based Planning"
    url: https://www.nationalacademies.org/read/11455/page/21
  - title: "ISO/IEC 38506:2020. Governance of IT — Application of ISO/IEC 38500 to the governance of IT enabled investments"
    url: https://www.iso.org/standard/56640.html
---

A chief information officer (CIO) receives a 40-page proposal: build a mobile app, VND 1.5 billion to invest, VND 300 million a year to run, and a promise of VND 4 billion more revenue a year. The amount is below the CEO's own signing limit, so no committee will check it. This is a hypothetical example, used throughout this post.[^0] The question here is not "is the proposal thick enough". It is this: what questions must a business case for technology answer, how must the benefit figure be treated before anyone believes it, and who keeps the promise after the money is spent.

**Short answer:** one public, detailed and actively maintained standard is the Five Case Model from HM Treasury in the UK (2026 edition). This post judges it to be the most complete public standard for business cases.[^18] It looks at a proposal through five linked questions, and it says plainly that a business case is a *thinking process*, not a writing task.[^1][^2] Estimates must be adjusted for optimism bias from the start: raise costs and time, lower benefits, ideally by the organization's own past forecasting error.[^7] Each benefit needs a type, a beneficiary, a metric and a baseline, recorded in a benefits register with an owner, kept into the operating phase and checked again at Gate 5; responsibility for realizing each benefit is handed over to the business side.[^4][^5][^19] Hours saved are a *non-cash-releasing* benefit until costs actually fall.[^6][^22]

## Three streams of thinking, one investment

This post groups three concepts that often appear together in technology investment management into three streams of reading. That grouping is this post's own, not the sources'.[^18] They come from three places and three points in time. Read one source at a time, and it is easy to think each framework is a complete method. Read them in time order, and they work as three linked questions about the same money, even though the scope of the frameworks overlaps: which capability to invest in, whether this specific proposal is worth approving, and whether the benefits materialize after approval.[^18]

| Stream | Origin | Question | Current version |
|---|---|---|---|
| Capability-based planning (CBP) | US defense, *Quadrennial Defense Review* 2001; Davis (RAND) 2002[^11] | Which capability should we build when the future is uncertain? | The US government has no official definition (NRC 2005)[^12]; this post places CBP on the capability map when moving to companies[^20] |
| Business case, Five Case Model | HM Treasury; guidance from 2013, split into project/programme in 2018, merged again 06/2026[^18] | Is this proposal worth approving? | HMT 2026 with Green Book 2026[^1] |
| Benefits management | Ward & Daniel (Cranfield) 2006, 2nd edition 2012; IPA 2017; Teal Book ch.19 from 2024[^18] | Do the promised benefits happen, and who answers for them? | Teal Book ch.19 (revised 2026-07-01)[^9] |

One thing to see right away in the table: two of the three streams come from the same UK government system (HM Treasury, IPA, Government Project Delivery). They are consistent with each other partly because they are written in the same place, not because they were checked independently. In this post's reading of source independence, the academically independent stream is Cranfield, and the international standard source is ISO/IEC 38506.[^18]

## A business case is a thinking process, not a document

HM Treasury distinguishes the business case, the output document, from the business case process, the thinking process that produces it. The guidance puts it briefly: *"thinking, not writing"*.[^2] A thick proposal does not prove that the process took place. Conversely, the process should be proportionate to the size, cost, complexity and risk of the proposal (HMT 2026, 1.9).[^19]

### Five questions, not five documents

The Five Case Model has five cases: strategic, economic, commercial, financial and management. The guidance stresses that these are five linked views of *one* proposal, not five separate business cases.[^1]

| Case | Question | The proposal must show |
|---|---|---|
| Strategic | Why do it? | Strategic fit, with a *case for change* |
| Economic | Which option is best? | The best value for money among the options |
| Commercial | How do we buy it? | A workable deal with suppliers |
| Financial | Can we afford it? | Affordable, with agreed funding |
| Management | Can we deliver it? | Governance, plan, benefits management, risk management |

Table source: the names of the five cases follow HMT 2026 (2.1–2.3)[^1]; the question column and the main content are this post's summary of Box 1–5.[^19]

Two points in the table are often misread. First, the cases develop iteratively and depend on each other: the objectives in the strategic case decide which options are considered in the economic case (HMT 2026, 2.3).[^1] Second, *economic* is not *financial*. The economic case asks about value to society, with discounting; the financial case asks about the organization's own wallet. An option can be the best economically and still be unaffordable, and the reverse (HMT 2026, Table 10).[^19] When borrowing the framework for a private company, this post temporarily replaces "value to society" with value to the company and its shareholders, and keeps the distinction between "worth the money" and "affordable". That is not HMT's original scope; applying the Five Case Model to the private sector remains OPEN.[^17]

### Three stages, five gates

The guidance divides a large proposal into three stages. The Strategic Outline Case (SOC) sets the scope and picks a direction from the longlist. The Outline Business Case (OBC) picks an option from the shortlist. The Full Business Case (FBC) records the procurement result and covers all five cases. A one-stage version, the Business Justification Case (BJC), is for small, low-risk proposals. The BJC is forbidden for proposals that are *novel, contentious or repercussive*.[^3][^19]

Alongside come five gate reviews. Gate 5, *"Operational Review and Benefits Realisation"*, comes *after* go-live and repeats (HMT 2026, Table 2).[^4] This detail changes how the whole process reads. Approval is not the end point; the end point is the benefits check after the system is running.

<figure class="fig fig-day" aria-label="Steps over time from strategic assessment to operation; Gate 5 comes after go-live and repeats.">
<ol class="tower">
<li>Strategic assessment<small>starting point</small></li>
<li>SOC<small>set scope, pick a direction from the longlist</small></li>
<li>OBC<small>pick an option from the shortlist</small></li>
<li>FBC<small>record the procurement result, all five cases</small></li>
<li>Go-live<small>the system starts running</small></li>
<li class="hit">Operation: Gate 5, repeating<small>Operational Review and Benefits Realisation</small></li>
</ol>
<figcaption><span class="fig-no">Figure <span class="no">1</span></span> The stages over time, read from top to bottom; the five gate reviews are interleaved between the steps. The end point is the benefits check after the system is running.</figcaption>
</figure>

In the opening example, the mobile app is something the company has never built. This post assumes that is enough to place it in the *novel* group; HMT does not classify this example.[^0] If so, the one-stage version is not used.[^3] The practical consequence this post infers: split the work into steps with stopping points, each step a new decision with new data.[^18]

## Optimism bias: subtract first, don't wait to be asked

Green Book 2026 treats optimism bias as a systematic tendency, and practitioners must *adjust for it proactively from the start*: raise costs and time, lower benefits. The size of the adjustment should rest on the organization's own historical forecasting error. Without such data, use the generic values in the supplementary guidance, and reduce the adjustment as the data improves (Green Book 2026, 6.77–6.80).[^7][^19]

That order of priority is worth noting. From the fact that the Green Book puts *the organization's own* error data first, this post infers that a competitor's success figures should be used with caution: they are evidence from another organization, with different capability, customers and measurement.[^18] This links straight to Gate 5: an organization only has error data if it actually re-measures benefits after go-live. That is a trade-off: adjusting with generic values is better than not adjusting, but own data exists only in organizations that do post-implementation reviews.[^20]

Applied to the example, with this post's assumed numbers:[^0]

<figure class="fig fig-day" aria-label="Peeling four billion of proposed revenue down to zero net profit in four subtraction steps.">
<ol class="tower">
<li>VND 4 billion revenue<small>stated in the proposal, counted from every order through the app</small></li>
<li>VND 3 billion revenue<small>minus VND 1 billion from web customers who only switch channel</small></li>
<li>VND 600 million profit<small>revenue converted to profit, assumed margin 20/100</small></li>
<li>VND 300 million profit<small>minus optimism bias: the last three projects reached about half</small></li>
<li class="hit">VND 0 net profit a year<small>minus VND 300 million running cost</small></li>
</ol>
<figcaption><span class="fig-no">Figure <span class="no">2</span></span> Peeling back the benefit figure in the example. Every number is this post's assumption.</figcaption>
</figure>

The second line can be handled in two ways, and in this example both give the same figure; choosing which framework to use is this post's own application.[^18] Under HMT, each benefit needs a *baseline*, the value in the business-as-usual scenario.[^5] Revenue from web customers who would still buy without the app belongs to the baseline, not to new benefit. The second way, which this post proposes, is to file the channel-shifted revenue under IPA's definition of *disbenefit*: a *certain* negative consequence of the project, as opposed to a risk, which is something that may happen (IPA 2017, 3.5).[^10] IPA does not classify channel shifting; that filing is this post's own.[^18] The fourth line uses the one-half ratio as an illustrative assumption, not a Green Book figure.[^0]

### Discounting: use it only for the right problem

The Green Book converts future benefits and costs to present value with the Social Time Preference Rate (STPR). From 2026-10-28, the STPR is 3.00% for years 1–30, 2.50% for years 31–75 and 2.25% from year 76. Before the 2026 review, these three rates were 3.5%, 3.0% and 2.5%.[^8] The STPR is a *real* rate: remove inflation first, then discount, and do not add inflation to the discount rate (Green Book 2026, 6.56).[^19] There is one limit. The STPR measures the social value of the public sector. A private project discounts at the company's own cost of capital, so the STPR should not be used as a hurdle rate.[^23]

## What a benefit is, and what it is not

The current definition, from Teal Book ch.19 (this post could only check it through a search snippet because the page is blocked):

> *"…a benefit is the measurable value or other positive impact resulting from an outcome perceived as an advantage by one or more stakeholders, and which contributes towards one or more objective(s)."*

In plain words: a benefit is measurable value, or another positive impact, produced by an outcome that one or more stakeholders see as an advantage, and that contributes to one or more objectives.[^9] The IPA 2017 version is narrower and starts with *"measurable improvement…"*. The Teal Book's update note says the definition was adjusted to match Green Book terminology (social benefits, social costs). It has not been established exactly which revision changed the wording.[^9][^21]

IPA (2017, 3.1) draws three consequences from the old definition; in this post's judgment they still hold under the new one.[^19][^18] A benefit is the improvement the outcome brings, not the change itself. "The app is in the app store" is an output, not a benefit. Benefits depend on who is looking: one party's benefit may be another's disbenefit. And what cannot be measured cannot be claimed as achieved.

### Four types of benefit

HMT 2026 (Table 5) divides benefits into four types; the example column is this post's choice of examples.[^6][^19]

| Type | Definition | Example |
|---|---|---|
| Cash-releasing | Can be expressed in money and *changes* the organization's income or spending | Lower operating cost, higher fee revenue |
| Non-cash-releasing | Can be expressed in money but *does not change* income or spending | Existing staff moved to other work |
| Quantifiable | Measured in numbers, not money | Customer satisfaction score |
| Qualitative | Described only in words | "Pride in place" |

The line between the first two is where a CFO looks first. "Saving 2,000 staff hours" is non-cash-releasing unless costs actually fall, for example by not hiring a replacement.[^22] In the example, the proposal states a reduction of five hundred hours a year spent answering order-status calls. The people answering the phones are still there and still paid in full, so those five hundred hours belong in the second type. The post proposes still recording it in the register as a benefit but not adding it to profit; that is this post's treatment, not a rule in Table 5.[^0][^18]

### The benefits register and who answers for it

Each benefit needs a category, a beneficiary, a metric and a baseline. The benefits register has an owner, is attached to the business case, and is maintained into the operating phase (HMT 2026, 7.24, 11.21–11.22).[^5] IPA is clearer about roles. The Senior Responsible Owner (SRO) owns the business case and has final accountability for benefits. The benefits owner on the business side receives a *formal, signed* handover of responsibility before the project closes (IPA 2017, section 8).[^19]

The post adds one observation: if the technology department owns the benefit, the benefit tends to "die" when the project closes, so the source standards put the owner on the business side.[^20] For a CIO, the consequence runs against intuition. The person who holds the technology budget should not claim to be the one who answers for the benefits of a sales app. The one who answers should be whoever proposed it on the business side. This is the post's inference from that principle.[^18]

IPA describes six benefits management practices, not strictly sequential, repeated at each stage and extending into operation: define success, identify and quantify, value and appraise, plan to realise, realise, review performance.[^19]

## Cranfield: benefits sit in business change, not in the system

The parallel academic stream is Cranfield. J. Ward and E. Daniel (Cranfield) developed benefits management for information systems and technology (IS/IT) investments in the book *Benefits Management* (2006; 2nd edition 2012). This post reads this stream through the 2007 article and the book's table of contents, not the full text of the book.[^18] Peppard, Ward and Daniel (2007) summarize the method. IT and the business answer seven questions together. From these come *ends* (improvements toward the objectives), *ways* (how the business must work differently) and *means* (the IT capability that enables it). The three layers are joined into a Benefits Dependency Network (BDN), a causal network that makes clear who is responsible for each change and each benefit.[^13]

The table of contents of Ward and Daniel (2006) confirms that the book has the BDN. A common presentation draws it as five columns: IS/IT enablers, enabling changes, business changes, business benefits, investment objectives. The names of the five columns appear only in a secondary source, so this claim is marked "Disputed".[^14]

<figure class="fig" aria-label="The five columns of the Benefits Dependency Network in order.">
<ol class="loop">
<li>IS/IT enablers<small>means</small></li>
<li>Enabling changes<small>one-time changes</small></li>
<li>Business changes<small>ways, lasting changes</small></li>
<li>Benefits<small>have an owner</small></li>
<li>Investment objectives<small>ends</small></li>
</ol>
<figcaption><span class="fig-no">Figure <span class="no">3</span></span> The five columns of the Benefits Dependency Network in one common presentation. The names of the five columns appear only in a secondary source.</figcaption>
</figure>

The message this post draws: IT is only the first column, and most of the risk of missing benefits sits in the two change columns, which are the business's job.[^20] Compared with HMT, Cranfield puts the weight on the question "what must be *done differently*" rather than just "what must be *written* in the register". The two sources complement each other. HMT gives the structure of the file and the gates; Cranfield gives the way to find the benefit and the change behind it. This is the post's own comparison.[^18]

## Capability-based planning: choose the capability before choosing the system

CBP has defense roots. Paul K. Davis (RAND, 2002) defines it:

> *"Capabilities-based planning (CBP) is planning, under uncertainty, to provide capabilities suitable for a wide range of modern-day challenges and circumstances while working within an economic framework that necessitates choice."*

In plain words: CBP is planning under uncertainty to provide capabilities that suit many challenges and circumstances, within an economic framework that forces choices.[^11] Davis sets CBP against planning around one specific threat and one scenario, and ties it to the 2001 *Quadrennial Defense Review*.[^11] The National Research Council (2005) notes: *"There is no official government definition of capabilities-based planning"*, and then uses Davis's definition.[^12] Capability, and how to place a project list on a capability map, has its own post: [Business capability and value stream: the original definitions, where they differ, and how to use them](/en/business-capability-and-value-stream).

Three ideas carry over to companies, in this post's translation: do not design for exactly one scenario; invest in capabilities, not in lobbying for one specific system; and the budget is limited, so choose among capabilities.[^20] When bringing this into business architecture, this post uses the capability map as a stable frame to ask which capability is missing or weak against the strategy. CBP and the capability map are not the same thing: the former is a way of planning, the latter is a tool for making it operational.[^20] "Capability heat map" is mentioned by many practitioner sources, but it has not been confirmed from primary sources that it is a standard BIZBOK technique.[^16]

For the mobile app example, the CBP question comes before any subtraction: which capability does the app support, and at which step of the order's path? If the ordering step is not the weakest point, a good-looking benefit proposal may still be an investment in the wrong place. This is the post's way of applying CBP.[^18]

## Comparing the sources: which question each framework answers

| | HMT Five Case 2026 | IPA 2017, Teal Book ch.19 | Cranfield (Peppard et al. 2007) | ISO/IEC 38506:2020 |
|---|---|---|---|---|
| Source type | Mandatory guidance for significant UK government spending[^19] | UK government guidance[^9] | Academic research[^13] | International standard, for the governing body[^15] |
| Focus | The file and approval gates[^1][^4] | Benefit lifecycle, roles[^19] | The business change behind the benefit[^13] | Governance of IT-enabled investment[^15] |
| Independence from HMT | — | Same UK government system[^18] | Independent[^18] | Independent[^18] |
| Known limit | Written for the public sector[^17] | Teal Book read only through a snippet[^9] | Names of the five BDN columns only in a secondary source[^14] | Still uses the 6 principles in the 38500:2015 style[^15] |

The last point in the table needs spelling out. ISO/IEC 38506:2020 was confirmed in 2025 so it is still current, but its table of contents still uses the six principles of ISO/IEC 38500:2015 (Responsibility, Strategy, Acquisition, Performance, Conformance, Human behaviour). When citing it, state the edition clearly.[^15]

## What to read carefully

- **The Five Case Model for private companies is OPEN.** HMT writes only for the public sector. There is no primary source for a private-sector version with the same structure. This post uses the five questions as a thinking frame, not as a mandatory standard.[^17]
- **The current benefit definition was read only through a search snippet.** The Teal Book page is blocked by Cloudflare, so the quote in this post has medium-to-high confidence, not high.[^9]
- **Davis's CBP was also read only through snippets** of the PDF and the RAND page (the page returns 403).[^11]
- **The five BDN columns are "Disputed".** The ends / ways / means structure and the seven questions are Verified; the names of the five columns have not been seen in a primary source.[^13][^14]
- **Attribution is hard.** IPA requires benefits to be specific and separable enough to be traced to the right initiative. By this post's own judgment, in practice many strategic benefits can only be measured at portfolio level.[^20]
- **One-off business cases and agile delivery.** SOC, OBC and FBC assume the option is fixed before delivery. Digital products built in iterations check benefits gradually through each release. HMT once had a separate 2014 document clarifying the guidance for agile digital and IT projects. This post has not read that document.[^20]
- **Business case as ritual.** Gates and templates easily turn into "write enough to get approved"; HMT itself stresses "thinking, not writing" and proportionality to counter that.[^2][^19]

## Applying it: the CIO's checklist before signing

The steps below combine HMT, the Green Book, IPA and Cranfield. The order of the steps, the stopping thresholds and the CIO's role are this post's reasoning, not the sources'.[^18]

1. **Put the proposal on the map first.** Which capability does it support, at which step of the value stream? Is that capability a weak point against the strategy? (CBP.)[^20]
2. **Write one sentence for each case.** A case that cannot be written in one sentence is a sign to dig deeper. This exercise is the post's own, not HMT's; the five cases come from HMT.[^1][^20]
3. **Identify the stage.** If the proposal is *novel, contentious* or *repercussive*, do not use the one-stage BJC.[^3] The post adds a proposal: split the work into steps with stopping points.[^18]
4. **Separate the baseline.** Which part of the benefit would happen anyway if nothing is done? That part is not a benefit. Which part is a certain disbenefit? Subtract it directly.[^5][^10]
5. **Convert revenue to profit, then subtract optimism bias.** Prefer the achievement rate of the company's own past projects; if there is none, use the generic values and say so.[^7]
6. **Classify each benefit** into the four types.[^6] The post proposes not adding non-cash-releasing benefits to profit; HMT does not say this.[^18]
7. **Fill in the benefits register:** baseline, metric, beneficiary, and one owner on the business side, with a signed handover.[^5][^19]
8. **Schedule Gate 5 at the moment of approval.** Record the date for re-measuring after go-live. The measured result becomes the optimism bias data for later proposals.[^4][^7]

In the opening example, the eight steps lead to a concrete decision with assumed numbers. Do not approve the whole VND 1.5 billion. Approve VND 200 million, inside the 1.5 billion if it continues, to test for one quarter in the fast-delivery area (80/100 of orders). Stopping point: the quarter's new profit must exceed VND 75 million, one quarter of the annual running cost. The owner is the sales director.[^0]

The companion video (episode 04 of Boring But Correct) tells the same story through the eyes of the CIO of a hypothetical retail company. This post is the sources and the argument behind it.

[^0]: Assumption · All the company's numbers in this post (1.5 billion, 300 million/year, 4 billion, 1 billion channel shift, 20/100 margin, half achieved, 500 hours, 200 million, 80/100 of orders, 75 million/quarter) are illustrative numbers from episode 04, not from a source.
[^1]: Verified · [HM Treasury (2026)](https://www.gov.uk/government/publications/guidance-on-developing-business-cases), 2.1–2.3: the five cases; five linked views, not five business cases; the strategic case decides the options in the economic case.
[^2]: Verified · [HM Treasury (2026)](https://www.gov.uk/government/publications/guidance-on-developing-business-cases), 1.2, 3.2, 3.4: the business case is the document, the business case process is the thinking process; "thinking, not writing".
[^3]: Verified · [HM Treasury (2026)](https://www.gov.uk/government/publications/guidance-on-developing-business-cases), 3.x, 4.10–4.21: SOC → OBC → FBC; the one-stage BJC, forbidden for novel, contentious, repercussive proposals.
[^4]: Verified · [HM Treasury (2026)](https://www.gov.uk/government/publications/guidance-on-developing-business-cases), Table 2: Gate 1–5; Gate 5 "Operational Review and Benefits Realisation", repeating after go-live.
[^5]: Verified · [HM Treasury (2026)](https://www.gov.uk/government/publications/guidance-on-developing-business-cases), 7.24, 11.21–11.22: category, beneficiary, metric, baseline; the benefits register has an owner, is attached to the business case, and is maintained into operation.
[^6]: Verified · [HM Treasury (2026)](https://www.gov.uk/government/publications/guidance-on-developing-business-cases), Table 5: cash-releasing, non-cash-releasing, quantifiable, qualitative.
[^7]: Verified · [HM Treasury, The Green Book (2026)](https://www.gov.uk/government/publications/the-green-book--2), 6.77–6.80: optimism bias adjusted from the start; should rest on the organization's own historical forecasting error.
[^8]: Verified · [The Green Book (2026)](https://www.gov.uk/government/publications/the-green-book--2), 6.54; Terms of Reference of the 2026 Discount Rate Review: STPR 3.00% / 2.50% / 2.25%; previously 3.5% / 3.0% / 2.5%.
[^9]: Verified · [Teal Book ch.19](https://projectdelivery.gov.uk/teal-book/home/part-e-planning-and-control/chapter-19-benefits-management/) (via search snippet; page blocked) for the current definition; [IPA (2017)](https://majorprojects.org/wp-content/uploads/2024/10/Guide_for_Effective_Benefits_Management_in_Major_Projects.pdf), 3.1 for the "measurable improvement…" version. Medium-to-high confidence.
[^10]: Verified · [IPA (2017)](https://majorprojects.org/wp-content/uploads/2024/10/Guide_for_Effective_Benefits_Management_in_Major_Projects.pdf), 3.5: a disbenefit is not a risk; it is a certain negative consequence of the project.
[^11]: Verified · [Davis (2002), RAND MR-1513](https://www.rand.org/pubs/monograph_reports/MR1513.html) (via snippets of the PDF and the RAND page): the CBP definition; set against planning around one threat and one scenario; tied to QDR 2001. Medium-to-high confidence.
[^12]: Verified · [NRC (2005)](https://www.nationalacademies.org/read/11455/page/21), ch.2: "There is no official government definition of capabilities-based planning".
[^13]: Verified · [Peppard, Ward & Daniel (2007)](https://aisel.aisnet.org/misqe/vol6/iss1/3/) (abstract): seven questions; ends, ways, means; a causal network that clarifies accountability.
[^14]: Disputed · The table of contents of Ward & Daniel (2006) confirms the BDN; the names of the five columns appear only in a secondary source (a commercial training document). Medium confidence.
[^15]: Verified · [ISO/IEC 38506:2020](https://www.iso.org/standard/56640.html) (via snippet): confirmed 2025; table of contents uses 6 principles in the 38500:2015 style. Medium-to-high confidence.
[^16]: OPEN · "Capability heat map" as a standard BIZBOK technique: seen only in vendor and practitioner sources.
[^17]: OPEN · The Five Case Model applied to private companies with the same structure: HMT speaks only of the public sector; there is no primary source for a private-sector version.
[^18]: Our reasoning · Assembled from the cited sources; the order of the three streams, the remarks on source independence and the way of applying it to the example are the writer's.
[^19]: Read from source, not separately verified · HMT 2026 (1.9 proportionality; §3.2 describes SOC, OBC, FBC, BJC; 7.24, 11.21 owner for each benefit; Box 1–5; Table 10 economic differs from financial), Green Book 2026 (6.56 do not add inflation; 6.77–6.80 use generic values when data is missing, reduce as data improves), IPA 2017 (3.1 consequences of the definition; section 8 SRO and benefits owner; six practices).
[^20]: Our judgment · IT as owner makes benefits "die"; optimism bias data exists only when PIRs are done; attribution at portfolio level; HMT's 2014 agile document; IT is the first column of the BDN; the three CBP ideas carried over to companies. These are not the primary sources' words.
[^21]: OPEN · Which Teal Book revision changed the benefit definition from "measurable improvement" to "measurable value or other positive impact": not established.
[^22]: Our judgment · The example "2,000 staff hours is non-cash-releasing unless costs actually fall" is how this post applies Table 5, not an HMT example.
[^23]: Our judgment · The public sector measures social value and discounts at the STPR; private companies discount at their own cost of capital, so the STPR should not be used as a hurdle rate.
