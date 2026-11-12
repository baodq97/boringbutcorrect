---
title: "How does IT governance differ from IT management, and who should decide what?"
seoTitle: "IT governance vs IT management: who decides what?"
description: "ISO/IEC 38500:2024, ISACA's governance-management line and MIT CISR's decision rights: definitions, where they diverge, their limits, and how to apply them."
translationOf: quan-tri-cong-nghe-va-quyen-quyet-dinh
station: 1
published: 2026-11-12
verified: 2026-11-04
image: /og/en/ep05.jpg
video: {id: KetPsojYkwU, duration: "5:53", episode: 5}
sources:
  - title: "ISO/IEC 38500:2024. Information technology — Governance of IT for the organization, 3rd edition (preview)"
    url: https://gso-sims-preview-doc-aws.s3-eu-west-1.amazonaws.com/iso-iec-38500-2024-en.html
  - title: "ISO/IEC JTC 1/SC 40 (2024). White paper on the differences between ISO/IEC 38500:2015 and 38500:2024"
    url: https://committee.iso.org/sites/jtc1sc40/home/projects/wg-1/published-wg1/content-left-area/isoiec-sc-40-wg-1-develops-the-s/white-paper-on-the-differences-b.html
  - title: "ISO/TC 309. ISO 37000:2021 Governance of organizations — Guidance"
    url: https://committee.iso.org/ISO_37000_Governance
  - title: "Weill, P. & Woodham, R. (2002). Don't Just Lead, Govern: Implementing Effective IT Governance. MIT CISR WP 326"
    url: https://cisr.mit.edu/publication/MIT_CISRwp326_ImplementingEffectiveITGov
  - title: "Weill, P. (2004). Don't Just Lead, Govern: How Top-Performing Firms Govern IT. MIT CISR WP 341"
    url: https://cisr.mit.edu/publication/MIT_CISRwp341_HowTopPerfFirmsGovIT
  - title: "ISACA Support (2025). Are governance and management activities the responsibility of the BoD?"
    url: https://support.isaca.org/s/article/Governance-and-management-activities-are-the-responsibility-of-the-BoD-1597877237345
  - title: "ISACA. Intellectual Property and Licensing"
    url: https://www.isaca.org/about-us/intellectual-property-and-licensing
---

"IT governance" is easily read as the way the technology department manages itself: a request approval process, an architecture board, a project scorecard. When two departments fight over the technology team's capacity, the question usually becomes "whose job is this?". The hypothetical example in this post: the sales director wants to keep building an app, the technology director wants to train one more person who understands the warehouse system, the team can take only one more item this quarter, and three days pass with nobody doing anything.[^0] This post re-reads two sources: the ISO/IEC 38500:2024 standard and MIT CISR's decision rights research. The goal is to answer two questions: exactly how governance differs from management, and how "who decides what" should be designed.

**Short answer:** according to ISO/IEC 38500:2024, governance is a system made of directing, overseeing and accountability (3.3); governance of IT is the system by which the use of IT is governed (3.4); management fulfills objectives *within* the authority that governance has set (3.7).[^3] This is not something the IT department does for itself: governance of IT is a domain of organizational governance.[^5] The practical question of governance is decision rights. Weill and Woodham define IT governance as *"specifying the decision rights and accountability framework to encourage desirable behavior in the use of IT"*.[^7] Weill (2004) surveyed more than 250 companies in 23 countries, with five types of decisions and six decision-maker archetypes.[^8] This post summarizes the findings: there is no single best design, and IT governance should be designed to reinforce the performance goal the company has chosen.[^16]

## Where the concept comes from: an Australian standard to three ISO editions

The international standard for governance of IT has its roots in Australia. ISO/IEC 38500:2008 was drafted by Standards Australia from AS 8015:2005 and accepted by JTC 1 through the fast-track route.[^6] Some selected milestones (leaving out COBIT 2019, ISO/IEC 38507:2022 and COBIT 7):[^14]

| Year | Document | Main change |
|---|---|---|
| 2002 | Weill & Woodham, MIT CISR WP 326 | IT governance = decision rights + accountability framework[^7] |
| 2004 | Weill, MIT CISR WP 341 | 5 decisions × 6 archetypes, more than 250 companies[^8] |
| 2005 | AS 8015 | A standard describing governance of ICT without describing a management system[^14] |
| 2008 | ISO/IEC 38500:2008 | Fast-track from AS 8015; 6 principles[^2][^6]; evaluate–direct–monitor model[^14] |
| 2015 | ISO/IEC 38500:2015 | 2nd edition[^14], still 6 principles[^2] |
| 2021 | ISO 37000 | Governance of organizations in general, 11 principles[^5] |
| 2024-02 | ISO/IEC 38500:2024 | 3rd edition: aligned with ISO 37000, 11 principles, adds "engage stakeholders", framework taken from TR 38502[^1][^2] |

One point to remember when reading secondary material: the vocabulary of "6 principles + evaluate–direct–monitor" belongs to the 2008 and 2015 editions and is now outdated.[^2][^14] The six old principles are Responsibility, Strategy, Acquisition, Performance, Conformance and Human Behaviour.[^2] In our reading, any material that still teaches these six principles is teaching the pre-2024 version.[^15]

## Definitions: governance, management, and where they get misread

The 2024 edition defines (clause 3, preview):[^3]

| Term | Definition as written | Rough translation |
|---|---|---|
| Governance (3.3) | *"human-based system comprising directing, overseeing and accountability"* | a system run by people, made of directing, overseeing and accountability |
| Governance of IT (3.4) | *"system by which the current and future use of IT is governed"* | the system by which the current and future use of IT is governed |
| Management (3.7) | *"fulfilment of the organization's objectives within the authority and accountability established by governance"* | fulfilling the organization's objectives within the authority and accountability that governance sets |
| Investment (3.6) | *"allocation of resources to achieve defined objectives and other benefits"* | allocating resources to achieve defined objectives and benefits |

Three details in these definitions are often overlooked.

**Direct is not the governing body's monopoly.** According to 3.1, direct means communicating the intended purpose and results: setting objectives, strategy and policy. Management *can* set them if it is delegated to do so.[^3] From this the post infers that the boundary is therefore not the *type* of document (policy or procedure) but the *source* of authority: who gives authority to whom.[^15]

**"Use of IT" covers both demand and supply.** Definition 3.9 states that use of IT includes the *demand for* and *supply of* IT.[^3] In our reading, governance of IT therefore covers the demand side of technology, usually the business departments, and not only the supply side, the IT department.[^15]

<figure class="fig" aria-label="Governance of IT sits inside organizational governance, and covers both sides: the demand side of technology and the supply side of technology.">
<div class="nest">
<p class="nest-t">Organizational governance<small>ISO 37000, 11 principles</small></p>
<div class="nest">
<p class="nest-t">Governance of IT<small>ISO/IEC 38500:2024, a domain inside, with the same 11 principle names</small></p>
<div class="nest-2">
<p class="vmap-c">Demand (demand for IT)<small>the departments that request technology</small></p>
<p class="vmap-c">Supply (supply of IT)<small>the IT department and providers</small></p>
</div>
</div>
</div>
<figcaption><span class="fig-no">Figure <span class="no">1</span></span> The scope of governance of IT under ISO/IEC 38500:2024. Placing the business departments on the demand side is our reading.</figcaption>
</figure>

**Investment is not only money.** 3.6 says "allocation of resources", not "of money".[^3] In our reading, a technology team's capacity is a resource, so dividing it between this task and that one is also an investment decision, even if no extra money is spent.[^15]

### The standard's three tools

The standard gives the governing body three tools: principles, a model and a framework. It states only principles and does not describe detailed implementation.[^16]

- **Principles (5.2–5.12):** 11 principles, with the same names as the 11 principles of ISO 37000. The only difference in naming is "Value generation" in 38500 versus "Value generation model" in 37000.[^2][^5]
- **Model (6):** governance practice consists of engage stakeholders, evaluate, direct, monitor (6.2), separate from management practice (6.3).[^1][^16]
- **Framework (7.2):** six elements: Direction, Capability, Policy, Delegation, Performance, Accountability (only the section titles could be checked).[^4]

For the framework, the verification table confirms only the *names* of the elements. The detailed content is outside the preview.[^4] So this post does not explain each element.

The standard also defines monitor (3.8) as reviewing as a basis for decisions and adjustments, including compliance with laws, regulations and policy.[^3] Here monitor means reviewing in order to decide and adjust, not re-approving every task that was delegated. This is our reading.[^15]

## The governance-management boundary: ISO and ISACA

ISACA, the organization behind COBIT, draws the same boundary in different words: governance is evaluate, direct, monitor; management is plan, build, run, monitor. ISACA notes that in most companies, governance belongs to the board of directors, while management belongs to the executive team under the CEO.[^9] A more detailed reading: governance ensures that stakeholder needs are *evaluated* to arrive at balanced objectives, *direction* is set through prioritization and decision making, and *performance and compliance* are monitored; management *"plans, builds, runs and monitors activities"* in line with the direction governance sets.[^18]

<figure class="fig" aria-label="Two layers. The governance layer has engage stakeholders, evaluate, direct, monitor. The management layer has plan, build, run, monitor. Authority flows down, accountability flows up.">
<div class="vmap">
<p class="vmap-l">Governance<small>upper layer</small></p>
<p class="vmap-s">Engage<small>stakeholders</small></p>
<p class="vmap-s">Evaluate<small>assess</small></p>
<p class="vmap-s">Direct<small>give direction</small></p>
<p class="vmap-s">Monitor<small>follow</small></p>
<span class="vmap-lgap"></span>
<p class="vmap-a vmap-w">Set direction, delegate authority, demand accountability</p>
<span class="vmap-lgap"></span>
<p class="gov-link vmap-w"><span>Delegate authority</span><span>Account for results and compliance</span></p>
<p class="vmap-l">Management<small>lower layer</small></p>
<p class="vmap-s">Plan<small>plan</small></p>
<p class="vmap-s">Build<small>build</small></p>
<p class="vmap-s">Run<small>operate</small></p>
<p class="vmap-s">Monitor<small>follow</small></p>
<span class="vmap-lgap"></span>
<p class="vmap-a vmap-w">Fulfill objectives within the authority that was delegated</p>
</div>
<figcaption><span class="fig-no">Figure <span class="no">2</span></span> Two layers according to ISO/IEC 38500:2024 (upper layer) and ISACA (verbs of the lower layer). Both layers have monitor, but the lower layer only monitors within the authority it was given.</figcaption>
</figure>

| | ISO/IEC 38500:2024 | ISACA (COBIT) |
|---|---|---|
| Type of source | International standard, states principles only[^16] | More detailed framework[^17], needs a license[^12][^13] |
| Governance | Engage stakeholders, evaluate, direct, monitor[^1][^16] | Evaluate, direct, monitor (EDM)[^9][^11] |
| Management | Management practice (6.3), works within the authority governance sets[^3][^16] | Plan, build, run, monitor[^9] |
| Who holds governance | Governing body (the board or a delegated level, in our reading)[^18] | Usually the board of directors[^9] |
| Current version | 38500:2024, 3rd edition[^1] | COBIT 7 according to ISACA; the release date is still conflicting[^10] |

The two sources agree on the boundary and differ in level of detail. 38500 gives the governing body principles; COBIT gives a set of objectives to operate with. This post treats the two frameworks as complementary.[^19] According to secondary sources, COBIT 2019 has 40 objectives, including the governance domain EDM and four management domains APO, BAI, DSS, MEA. This list has not been checked against ISACA's own sources.[^11]

**Consequence for demand management.** This post draws a practical split. Scoring, ranking and capacity planning are management. Deciding the *criteria*, the *approval thresholds* and *who may approve which item* is governance (direct and delegation). A demand approval board usually does both, so it needs to record clearly which authority was delegated from where.[^16]

<figure class="fig" aria-label="In choosing which request to do first, governance sets the criteria, the approval thresholds and who may approve which item. Management scores, ranks and plans capacity. An approval board usually does both.">
<div class="vmap vmap-three">
<p class="vmap-l">Governance<small>sets the rules</small></p>
<p class="vmap-c">Scoring criteria</p>
<p class="vmap-c">Approval thresholds</p>
<p class="vmap-c">Who may approve which item</p>
<p class="vmap-l">Management<small>applies the rules</small></p>
<p class="vmap-a">Scoring</p>
<p class="vmap-a">Ranking</p>
<p class="vmap-a">Capacity planning</p>
<p class="vmap-l">Approval board<small>usually does both</small></p>
<p class="vmap-c vmap-w hit">Must record which authority was delegated from where</p>
</div>
<figcaption><span class="fig-no">Figure <span class="no">3</span></span> The same task of choosing requests, two kinds of decisions. This split is drawn by the post from the definitions, not a list from the sources.</figcaption>
</figure>

## Decision rights: five decisions, six archetypes

Weill and Woodham's (2002) definition places governance in decision rights and an accountability framework.[^7] The post reads it as a design question: who may decide which kind of work, and who is accountable.[^15] Weill (2004) surveyed more than 250 companies in 23 countries, using five types of IT decisions and six decision-maker archetypes.[^8]

| IT decision | Question |
|---|---|
| IT principles | What role does IT play for the company |
| IT architecture | How to standardize and integrate data and applications |
| IT infrastructure | Which shared services |
| Business application needs | Which business applications are needed |
| IT investment | How much to invest, where, with what priority |

| Archetype | Who decides |
|---|---|
| Business Monarchy | Senior business leaders |
| IT Monarchy | IT leaders |
| Federal | The center together with the business units |
| Duopoly | IT together with one business group |
| Feudal | Each business unit decides on its own |
| Anarchy | Each individual or small group |

Source of the two tables: the names and questions are our reading of Weill; the WP 341 abstract confirms that there are five decisions and six archetypes.[^8][^16]

The abstract says: companies leading in growth decentralize more, and companies leading in profit centralize more.[^8] More detail, as this post reads the source: the growth group places IT capability in the business units; in the profit group, senior business leaders make the major IT decisions; there is no single best design; IT governance should be designed to reinforce the performance goal the company has chosen and be linked to the governance of other assets.[^16]

In our reading, the finding on growth and profit is a correlation in one sample, not a causal relationship and not a recommendation for any given company.[^15] This post, not the source, draws the following consequence. When a company has a growth goal but scarce IT capability, for example only two people who understand the warehouse system, decentralizing authority to departments can split up exactly the scarcest thing. The goal points one way, the constraint points the other, and the research does not arbitrate between the two.[^15][^0]

The post uses the matrix of five decisions by six archetypes as a tool for drawing the current state. For example, the investment decision might follow Federal while infrastructure follows IT Monarchy. This example is only an illustration, not a finding of the research.[^16]

<figure class="fig" aria-label="Matrix of five decision types by six archetypes for the hypothetical company. The role of technology is decided by business leaders. Architecture and infrastructure are decided by IT leaders. Application needs are decided by each unit on its own. The investment row does not yet say who decides.">
<div class="dmx">
<span></span>
<p class="dmx-h">Business Monarchy</p>
<p class="dmx-h">IT Monarchy</p>
<p class="dmx-h">Federal</p>
<p class="dmx-h">Duopoly</p>
<p class="dmx-h">Feudal</p>
<p class="dmx-h">Anarchy</p>
<p class="dmx-n">Role of technology<small>IT principles</small></p>
<span class="dmx-c on"></span><span class="dmx-c"></span><span class="dmx-c"></span><span class="dmx-c"></span><span class="dmx-c"></span><span class="dmx-c"></span>
<p class="dmx-n">Architecture<small>IT architecture</small></p>
<span class="dmx-c"></span><span class="dmx-c on"></span><span class="dmx-c"></span><span class="dmx-c"></span><span class="dmx-c"></span><span class="dmx-c"></span>
<p class="dmx-n">Infrastructure<small>IT infrastructure</small></p>
<span class="dmx-c"></span><span class="dmx-c on"></span><span class="dmx-c"></span><span class="dmx-c"></span><span class="dmx-c"></span><span class="dmx-c"></span>
<p class="dmx-n">Application needs<small>Business application needs</small></p>
<span class="dmx-c"></span><span class="dmx-c"></span><span class="dmx-c"></span><span class="dmx-c"></span><span class="dmx-c on"></span><span class="dmx-c"></span>
<p class="dmx-n">Investment<small>IT investment</small></p>
<p class="dmx-r">The cell with no name: the quarter's open slot sits here</p>
</div>
<figcaption><span class="fig-no">Figure <span class="no">4</span></span> Weill's matrix used to draw the current state, filled in for the hypothetical company from the opening. The dots are assumptions. The red row: the quarter's open slot is an investment decision, and nobody has been given it.</figcaption>
</figure>

## What to read carefully

- **The archetype data dates from 2004**, before cloud, agile and AI. Today's product and platform models push many decisions down to teams. The post suggests reading it as a diagnostic framework, not as a current benchmark.[^17] Which assumptions of technology governance wobble once AI arrives is the subject of the post [With AI, which four assumptions of technology governance no longer hold?](/en/four-it-governance-assumptions-ai-breaks)
- **Only the preview of 38500:2024 could be read.** The Foreword, Introduction, clauses 1–3, table of contents and bibliography were checked; the detailed content of the 11 principles and the six framework elements was not.[^4][^16]
- **The status of COBIT 7 is unclear.** ISACA calls COBIT 7 the *"current and actively maintained COBIT offering"*, released only through the Publishing Platform.[^13] The release date is conflicting: ISACA Support says 2026-11-19, one secondary source says 2026-10-27. The COBIT 2019 lifecycle ends 2027-12-31.[^10]
- **The license restricts quoting COBIT 7.** Using COBIT 7 in AI systems, products, training or consulting needs a license; individuals may use it for reference only.[^12] The post chooses not to reproduce COBIT 7 content because of that restriction.
- **Vendor framing.** ISACA both writes the framework and sells licenses, certifications and training.[^17]
- **Governance does not mean adding a board.** The governance-management boundary is easily read as "add another approval layer", and this post holds that most decisions are delegated; governance is setting direction, delegating authority and demanding accountability, not approving each demand. This judgment has no line of its own in the verification table and could not be checked in the 38500 preview.[^17]
- **Principle-based or prescriptive.** 38500 is easy to apply to any organization but does not say what to do on Monday. COBIT is much more detailed but heavy, needs a license and easily turns into an administrative checklist.[^17]

## Applying it: designing decision rights for the technology team's capacity

The steps below combine 38500, ISACA and Weill. The order of steps, treating capacity as an investment, and the thresholds are the post's reasoning, not the sources'.[^15]

1. **Draw the current-state matrix.** Five decisions in rows, archetypes in columns. Mark the cells where nobody clearly holds the authority.[^16] Also: mark the cells where two people each think the authority is theirs.[^15]
2. **Find the source of authority for each decision.** For each cell, ask: who did the governing body give this authority to, and in which document? A money approval threshold usually exists; the authority to divide capacity usually does not. The last sentence is the post's observation.[^3][^15]
3. **Separate who sets the criteria from who applies them.** Criteria and thresholds are direct and delegation; scoring and ranking are management.[^16]
4. **Choose an archetype based on the chosen goal, then check it against your own constraints**, without copying another company or copying the 2004 finding as a standard. This is the post's suggestion, based on how this post summarizes the findings and on the limits of the 2004 data.[^15][^16][^17]
5. **Record which authority was delegated from where**, even when the person prioritizing work is a board.[^16]
6. **Set monitor as a periodic review of results**, with metrics recorded in advance, as the basis for keeping or fixing the rules. Do not turn it into re-approving every task.[^3][^15]

In the opening example, the steps lead to one solution, also an assumption. The board of directors sets one rule: keep delivery promises first, revenue from new work second, and gives the CEO the authority to apply that rule. The two directors prioritize work themselves under the rule; where they disagree, the CEO decides the next day.[^0]

<figure class="fig" aria-label="Before and after in the opening example. Before: no allocation rule, two directors fight over one open slot, three days with nobody doing anything. After: the board sets the rule, the CEO applies the rule, the two directors prioritize work themselves, disagreements are decided the next day.">
<div class="vmap vmap-two">
<span class="vmap-lgap"></span>
<p class="vmap-s">Before</p>
<p class="vmap-s">After</p>
<p class="vmap-l">Allocation rule</p>
<p class="vmap-a">Not written anywhere</p>
<p class="vmap-a">Set by the board: keep delivery promises first, revenue from new work second</p>
<p class="vmap-l">Who applies the rule</p>
<p class="vmap-a">Given to no one; the CEO tells the two to agree among themselves</p>
<p class="vmap-a">The CEO, with authority delegated by the board</p>
<p class="vmap-l">Who prioritizes work</p>
<p class="vmap-a">Two directors fight over the same open slot</p>
<p class="vmap-a">The two directors prioritize under the rule</p>
<p class="vmap-l">When they disagree</p>
<p class="vmap-a hit">Three days with nobody doing anything</p>
<p class="vmap-a">The CEO decides the next day</p>
</div>
<figcaption><span class="fig-no">Figure <span class="no">5</span></span> The solution in the opening example. The company and the allocation rule are assumptions.</figcaption>
</figure>

The accompanying video (episode 05 of Boring But Correct) tells the same story of one open slot and three days of waiting. This post is the sources and reasoning behind it.

[^0]: Assumption · The company, the directors, one open slot per quarter, three days of waiting, two people who understand the warehouse system and the allocation rule are illustrative examples from episode 05, not from sources.
[^1]: Verified · [ISO/IEC 38500:2024](https://gso-sims-preview-doc-aws.s3-eu-west-1.amazonaws.com/iso-iec-38500-2024-en.html), Foreword (official preview): 3rd edition (2024-02), replaces 38500:2015; principles elaborated and aligned with ISO 37000; model adds "engage stakeholders"; framework taken from TR 38502.
[^2]: Verified · Table of contents of the 38500:2024 preview; table of contents of ISO OBP 38500:2008; [ISO SC 40 white paper](https://committee.iso.org/sites/jtc1sc40/home/projects/wg-1/published-wg1/content-left-area/isoiec-sc-40-wg-1-develops-the-s/white-paper-on-the-differences-b.html): 2024 has 11 principles (5.2–5.12); the 2008 and 2015 editions have 6: Responsibility, Strategy, Acquisition, Performance, Conformance, Human Behaviour.
[^3]: Verified · [ISO/IEC 38500:2024](https://gso-sims-preview-doc-aws.s3-eu-west-1.amazonaws.com/iso-iec-38500-2024-en.html), clause 3 (preview): definitions of governance, governance of IT, management, evaluate, direct (3.1, including the sentence that management can set objectives, strategy, policy if delegated), monitor, use of IT (including demand and supply), investment.
[^4]: Verified (section titles only) · Table of contents of 38500:2024: outcomes (effective performance, responsible stewardship, ethical behaviour); framework with 6 elements (Direction, Capability, Policy, Delegation, Performance, Accountability). Detailed content is outside the preview.
[^5]: Verified · 38500:2024 Introduction and clause 2; [ISO TC 309, ISO 37000](https://committee.iso.org/ISO_37000_Governance): governance of IT is a domain of organizational governance; ISO 37000 is a normative reference; the 11 principles share the same names.
[^6]: Verified (via search snippet) · Foreword of 38500:2008 on ISO OBP (via search snippet): drafted by Standards Australia from AS 8015:2005, accepted by JTC 1 through fast-track.
[^7]: Verified · [Weill & Woodham (2002), MIT CISR WP 326](https://cisr.mit.edu/publication/MIT_CISRwp326_ImplementingEffectiveITGov), abstract: definition of IT governance.
[^8]: Verified · [Weill (2004), MIT CISR WP 341](https://cisr.mit.edu/publication/MIT_CISRwp341_HowTopPerfFirmsGovIT), abstract read directly: more than 250 companies, 23 countries; 5 decisions; 6 archetypes; growth linked to decentralization, profit linked to centralization. Only these points are in the claim.
[^9]: Verified (via search snippet) · [ISACA Support (2025-07-02)](https://support.isaca.org/s/article/Governance-and-management-activities-are-the-responsibility-of-the-BoD-1597877237345): governance is evaluate–direct–monitor; management is plan–build–run–monitor; governance usually belongs to the board of directors, management to the executive team.
[^10]: OPEN, conflicting · Status of COBIT 7: [ISACA IP & Licensing](https://www.isaca.org/about-us/intellectual-property-and-licensing) calls it "current"; ISACA Support gives a release of 2026-11-19; audit-academy.be (secondary) gives 2026-10-27. The COBIT 2019 lifecycle ends 2027-12-31 (ISACA Support).
[^11]: Secondary sources only · COBIT 2019: 40 objectives, EDM together with APO, BAI, DSS, MEA (governancedocs.com; cybersigmacs.com). Medium reliability; not checked against ISACA's own sources.
[^12]: Verified · [ISACA, Intellectual Property and Licensing](https://www.isaca.org/about-us/intellectual-property-and-licensing): using COBIT 7 in AI systems, products, training, consulting needs a license; individuals may use it for reference only.
[^13]: Read from source, not separately verified · COBIT 7 is released only through the Publishing Platform, with no PDF; any organizational or commercial use needs a license.
[^14]: Read from source, not separately verified · The AS 8015 (2005) milestone is the first standard describing governance of ICT without describing a management system; the judgment that "6 principles + E-D-M is outdated" is the post's.
[^15]: Our reasoning · Treating capacity as an investment under 3.6; the reading of monitor; the consequence of "growth goal but scarce capability"; the observation "money thresholds usually exist, authority to divide capacity usually does not"; the order of the steps in applying it.
[^16]: Our reading of the source, not separately verified · The standard's three tools; model 6.2 and 6.3; the two Weill tables with decision names, questions, archetype names; the main finding as the post summarizes it (no single best design, details of the growth group and the profit group, design to reinforce the goal); consequence for demand management (criteria, thresholds, delegation are governance; scoring, ranking are management; record which authority was delegated from where); the Federal and IT Monarchy example is an illustration; the matrix-drawing exercise.
[^17]: Our judgment · 2004 data predates cloud, agile, AI, read as a diagnostic framework; ISACA's vendor framing; governance is not adding a board, most decisions are delegated; principle-based and prescriptive.
[^18]: Read from source, not separately verified · Governance belongs to the governing body (the board or a delegated level); ISACA's more detailed reading of the boundary and the quote "plans, builds, runs and monitors activities".
[^19]: Our judgment · The COBIT framework and ISO/IEC 38500 are complementary: 38500 is principles for the governing body, while COBIT is a detailed set of objectives to operate with.
