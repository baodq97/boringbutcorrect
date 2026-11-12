---
title: "We switched to a new warehouse system, so why are customers still getting orders cancelled for being out of stock?"
seoTitle: "New warehouse system, so why are orders still cancelled?"
description: "A project delivered on time and on budget can still deliver no benefit. Six questions to answer before approving money for a technology investment."
translationOf: he-thong-kho-moi-khach-van-bi-huy-don
station: 1
published: 2026-11-12
verified: 2026-11-06
image: /og/en/ep00.jpg
video:
  id: sK5H9nj-bUo
  duration: "9:20"
  episode: 0
sources:
  - title: "Porter, M. E. (1996). What Is Strategy? Harvard Business Review, Nov–Dec 1996"
    url: https://hbr.org/1996/11/what-is-strategy
  - title: "Rumelt, R. (2011). The perils of bad strategy. McKinsey Quarterly, June 2011"
    url: https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/the-perils-of-bad-strategy
  - title: "Weill, P. & Woodham, R. (2002). Don't Just Lead, Govern: Implementing Effective IT Governance. MIT CISR WP 326"
    url: https://cisr.mit.edu/publication/MIT_CISRwp326_ImplementingEffectiveITGov
  - title: "Weill, P. (2004). Don't Just Lead, Govern: How Top-Performing Firms Govern IT. MIT CISR WP 341"
    url: https://cisr.mit.edu/publication/MIT_CISRwp341_HowTopPerfFirmsGovIT
  - title: "ISACA Support (2025). Are governance and management activities the responsibility of the BoD?"
    url: https://support.isaca.org/s/article/Governance-and-management-activities-are-the-responsibility-of-the-BoD-1597877237345
  - title: "HM Treasury (2026). Guidance on Developing Business Cases for Projects and Programmes"
    url: https://www.gov.uk/government/publications/guidance-on-developing-business-cases
  - title: "HM Treasury (2026). The Green Book"
    url: https://www.gov.uk/government/publications/the-green-book--2
  - title: "Shpilberg, D. et al. (2007). Avoiding the Alignment Trap in IT. MIT Sloan Management Review (Bain)"
    url: https://www.bain.com/insights/avoiding-the-alignment-trap-in-it/
  - title: "The Open Group (2022). The TOGAF Standard, 10th Edition: Business Architecture (publisher's description)"
    url: https://books.google.com/books/about/The_TOGAF_Standard_10th_Edition_Business.html?id=xveBEAAAQBAJ
---

An online retailer puts a new warehouse management system into production, on time and on budget. A year later, out of every 100 orders, a few are still cancelled because the item is out of stock. This is a hypothetical example, but the question is real: did that project succeed or fail?

**Short answer:** nobody can say, because nobody set a baseline to measure against. The project only replaced software. The benefit does not come from the software but from the change in ways of working that the software makes possible. To know whether a technology investment is worth it, put it on the map of the whole company, then ask all six questions before approving the money.

## The map: two axes, not one tower

The familiar picture is a tower of layers: strategy, business, data and applications, infrastructure. The tower is right but incomplete. It describes what the company *is*, but not how the company *changes*. This post uses two axes:


<figure class="fig fig-axes">
<div class="axes-col">
<p class="axes-h"><span class="no">A</span> What the company is</p>
<ol class="tower">
<li>Strategy and business model</li>
<li>Business architecture<small>capability, value stream, organization, information</small></li>
<li class="hit">Data and applications<small>The project only replaces software at this layer</small></li>
<li>Infrastructure</li>
</ol>
</div>
<p class="axes-gap">A gap in A becomes an investment in B</p>
<div class="axes-col">
<p class="axes-h"><span class="no">B</span> How the company changes</p>
<ol class="loop">
<li>Governance<small>who may decide, under which rules</small></li>
<li>Portfolio<small>which investments to pick</small></li>
<li>Delivery<small>build or buy</small></li>
<li>Operate<small>run it</small></li>
<li>Measure<small>measure the benefit, then return to Governance</small></li>
</ol>
</div>
<figcaption><span class="fig-no">Figure <span class="no">1</span></span> Two axes. Axis A describes the company; axis B is the decision loop that cuts across every layer of A. The red box is the only place the project in the example touches.</figcaption>
</figure>

A technology investment sits where the two axes meet. Axis B picks an investment to close a gap on axis A.

This split into two axes is this post's own arrangement, not an industry standard. It is anchored in two sources. TOGAF 10 places business model, capability and value stream in the same Business Architecture guidance, which means they sit inside enterprise architecture rather than forming a separate layer.[^1] ISACA separates governance (evaluate, direct, monitor) from management (plan, build, run, monitor).[^2]

In the example, the project touches only one box of axis A: data and applications. Warehouse staff still record outgoing goods at the end of the day, so all day long the sales page keeps selling against a stale number.

<figure class="fig fig-day">
<div class="day-scale" aria-hidden="true"><span>08:00</span><span>12:00</span><span>17:00</span></div>
<div class="day-track"><p class="day-label">Sales page</p><div class="day-bar day-bar-sell"><span>Sells all day on the stock count fixed at 08:00</span></div></div>
<div class="day-track"><p class="day-label">Warehouse<small>each tick is one dispatch</small></p><div class="day-bar day-bar-ship"><i></i><i></i><i></i><i></i><i></i><b>Outgoing goods recorded once</b></div></div>
<div class="day-track day-gap"><p class="day-label">Number on the web</p><div class="day-bar day-bar-gap"><span>Drifts from the real warehouse, orders sold for items already gone</span></div></div>
<figcaption><span class="fig-no">Figure <span class="no">2</span></span> One day in the hypothetical example. Goods leave all day but are recorded only at the end of the day, so the web sells against an old number. The new warehouse system cannot change this recording rhythm.</figcaption>
</figure>

## A goal is not yet a strategy

"Increase revenue" is a goal. Porter writes that the essence of strategy is choosing what not to do.[^3] Rumelt calls strategy coherent action backed by an argument, with three parts: a diagnosis, a guiding policy, and coherent actions.[^4]


<figure class="fig fig-kernel">
<ol class="kernel">
<li><p class="kernel-h"><span class="no">1</span> Diagnosis</p><p class="kernel-def">What the real challenge is</p><p class="kernel-ex">Delivery promises are not credible because stock numbers are wrong</p></li>
<li><p class="kernel-h"><span class="no">2</span> Guiding policy</p><p class="kernel-def">How to approach that challenge</p><p class="kernel-ex">Promise delivery only when stock is certain, favor customers near the warehouse</p></li>
<li><p class="kernel-h"><span class="no">3</span> Coherent actions</p><p class="kernel-def">Actions that support each other</p><p class="kernel-ex">Fix how outgoing goods are recorded first, connect the systems after</p></li>
</ol>
<p class="kernel-cost"><strong>The price</strong> Drop distant orders and items that are hard to keep in stock. The revenue target may have to come down.</p>
<figcaption><span class="fig-no">Figure <span class="no">3</span></span> The three parts of a strategy according to Rumelt, applied to the example. The last line is what Porter stresses: choosing also means giving up.</figcaption>
</figure>

If you cannot say which choice the investment serves, then it is doing better what you already do. That may still be worth doing, but it is not strategy. The post [What is business strategy, and why is a revenue target not a strategy?](/en/business-strategy-porter-rumelt-mintzberg) goes deeper into Porter, Rumelt and Mintzberg.

## Who may decide: governance is not management

IT governance is about setting who has the right to decide what, and who is accountable.[^5] The board does not score each option. It sets the rules of the game, the criteria and the thresholds, then monitors. The executive team scores, chooses and does the work within those rules.[^2] So the highest-scoring option is still not the approved option.

<figure class="fig fig-gov">
<div class="gov-band"><p class="gov-who">Board of directors<small>Governance</small></p><p class="gov-verbs">Evaluate, Direct, Monitor</p><p class="gov-out">Sets the rules, criteria, approval thresholds</p></div>
<p class="gov-link"><span>Delegates authority by threshold</span><span>Reports, accounts</span></p>
<div class="gov-band"><p class="gov-who">Executive team<small>Management</small></p><p class="gov-verbs">Plan, Build, Run, Monitor</p><p class="gov-out">Scores, chooses, does the work within those rules</p></div>
<figcaption><span class="fig-no">Figure <span class="no">4</span></span> Two decision levels as ISACA distinguishes them. The highest-scoring option at the lower level must still fall within the thresholds the upper level sets.</figcaption>
</figure>

There is no single best way to divide decision rights. In a survey of more than 250 companies, the growth leaders leaned toward decentralization, and the profit leaders leaned toward centralization.[^6] The way you divide authority should serve the goal the company has chosen. The post [How does IT governance differ from IT management, and who should decide what?](/en/it-governance-vs-it-management) goes into this boundary and how to design decision rights.

## A business case is a thinking process

The HM Treasury business case guidance says it plainly: a business case is a thinking process, not a paper to ask for approval. It runs five perspectives over the same proposal: strategic, economic, commercial, financial, management.[^7] Two points are worth borrowing:

- **Discount optimism from the start.** Every forecast is optimistic. Best to discount by the amount the organization's own past projects have overrun.[^8]
- **Benefits must be measurable.** Each benefit has a metric, a baseline and an owner. The benefits register is kept into the operating phase and is not closed with the project.[^9]

<figure class="fig fig-benefit">
<ol class="chain">
<li><p class="chain-h">Output</p><p>New warehouse system running, on time</p><p class="chain-note">Only a precondition</p></li>
<li><p class="chain-h">Change in ways of working</p><p>Warehouse records goods the moment they leave</p><p class="chain-note">The part the project skipped</p></li>
<li class="hit"><p class="chain-h">Benefit</p><p>Fewer orders cancelled for being out of stock</p><dl class="chain-tags"><div><dt>Metric</dt><dd>Rate of orders cancelled for being out of stock</dd></div><div><dt>Baseline</dt><dd>Measured before the change</dd></div><div><dt>Accountable</dt><dd>The business side</dd></div></dl></li>
</ol>
<figcaption><span class="fig-no">Figure <span class="no">5</span></span> From output to benefit. The bottom three cards are what HM Treasury requires for each benefit; the example filled in is an assumption.</figcaption>
</figure>

This framework is written for public spending. Using it for private companies is a borrowing that has not been verified.[^10] The post [What should a technology business case check before approval?](/en/technology-business-case-what-to-check) walks through each question to check before signing.

## What to read carefully

A Bain survey of more than 500 executives found that about 11% of companies fall into the "alignment trap": they spend about 13% more than average on technology, yet their three-year growth is 14% below average.[^11] Their conclusion: first make technology run reliably and at a reasonable cost, then pull it into line with strategy.

<figure class="fig fig-bain">
<div class="quad" role="img" aria-label="Two-dimensional matrix: alignment with strategy and operational efficiency. The aligned but inefficient group: 11 percent of companies, technology spend 13 percent above average, three-year growth 14 percent below average. The efficient but not aligned group: 8 percent. The other two groups have no verified numbers.">
<p class="quad-y">Aligned with strategy</p>
<div class="quad-cell hit"><p class="quad-n">11%</p><p>Aligned but inefficient</p><p class="quad-d">Technology spend <span class="no">+13%</span>; 3-year growth <span class="no">−14%</span> versus average</p></div>
<div class="quad-cell empty"><p>Aligned and efficient</p><p class="quad-d">No verified number</p></div>
<div class="quad-cell empty"><p>Not aligned, inefficient</p><p class="quad-d">No verified number</p></div>
<div class="quad-cell"><p class="quad-n">8%</p><p>Efficient but not aligned</p></div>
<p class="quad-x">Operational efficiency</p>
</div>
<figcaption><span class="fig-no">Figure <span class="no">6</span></span> Bain's alignment trap, a survey of more than 500 executives. Only the numbers this post could verify are shown; the two empty boxes have no verified number.</figcaption>
</figure>

Read this number only as a signal. Part of the data is self-assessed, and Bain is a consulting firm that sells technology services.

## Take it to the investment meeting

Next time a technology proposal is on the table, ask six questions. How closely you ask depends on the size of the spend.

1. Which strategic choice does it serve?
2. Which capability does it touch, and which gap does it fill?
3. Which options has it been compared with, counting the yearly running cost?
4. Who has the authority to approve, and at which threshold?
5. Do we have enough people with the right skills to do it?
6. Which benefit, who is accountable, against which baseline?

In the example, the sixth question is the one nobody asked. That is why, to this day, nobody knows whether the project succeeded or failed.

[^1]: Verified · [The Open Group, TOGAF Standard 10th Edition: Business Architecture (2022)](https://books.google.com/books/about/The_TOGAF_Standard_10th_Edition_Business.html?id=xveBEAAAQBAJ), the publisher's description on Google Books; full text not read.
[^2]: Verified · [ISACA Support (2025-07-02)](https://support.isaca.org/s/article/Governance-and-management-activities-are-the-responsibility-of-the-BoD-1597877237345): governance is evaluate, direct, monitor, usually belonging to the board; management is plan, build, run, monitor, belonging to the executive team.
[^3]: Verified · [Porter (1996), "What Is Strategy?", HBR](https://hbr.org/1996/11/what-is-strategy): "The essence of strategy is choosing what not to do."
[^4]: Verified · [Rumelt (2011), McKinsey Quarterly](https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/the-perils-of-bad-strategy): the kernel of strategy has diagnosis, guiding policy, coherent actions; strategy is "coherent action backed by an argument". Read through a search excerpt; the original page failed to load at the time of checking.
[^5]: Verified · [Weill & Woodham (2002), MIT CISR WP 326](https://cisr.mit.edu/publication/MIT_CISRwp326_ImplementingEffectiveITGov): IT governance is "specifying the decision rights and accountability framework to encourage desirable behavior in the use of IT".
[^6]: Verified · [Weill (2004), MIT CISR WP 341](https://cisr.mit.edu/publication/MIT_CISRwp341_HowTopPerfFirmsGovIT): more than 250 companies in 23 countries.
[^7]: Verified · [HM Treasury (2026), Guidance on Developing Business Cases](https://www.gov.uk/government/publications/guidance-on-developing-business-cases), sections 1.2, 2.1–2.3, 3.2, 3.4.
[^8]: Verified · [HM Treasury (2026), The Green Book](https://www.gov.uk/government/publications/the-green-book--2), sections 6.77–6.80.
[^9]: Verified · [HM Treasury (2026), Guidance on Developing Business Cases](https://www.gov.uk/government/publications/guidance-on-developing-business-cases), sections 7.24, 11.21–11.22.
[^10]: OPEN · [HM Treasury](https://www.gov.uk/government/publications/guidance-on-developing-business-cases) wrote only for the public sector; no primary source measuring the effectiveness of the Five Case Model in private companies has been found.
[^11]: Verified · [Shpilberg et al. (2007), MIT Sloan Management Review, version published on bain.com](https://www.bain.com/insights/avoiding-the-alignment-trap-in-it/); read through a search excerpt.
