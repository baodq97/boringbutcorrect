---
title: "What is a business model, and how does it differ from strategy and process?"
seoTitle: "Business model vs strategy vs process: the difference"
description: "Osterwalder's 2004 thesis and the Business Model Canvas: the original definition, three layers, nine blocks, three value configurations, and remaining gaps."
translationOf: mo-hinh-kinh-doanh-khac-chien-luoc-va-quy-trinh
station: 1
published: 2026-11-12
verified: 2026-11-04
image: /og/en/ep03.jpg
video: {id: PwAZOpCxsIw, duration: "5:12", episode: 3}
sources:
  - title: "Osterwalder, A. (2004). The Business Model Ontology: A Proposition in a Design Science Approach. PhD thesis, HEC, Université de Lausanne"
    url: https://www.csi.im/pub/BMcanvas/2004-Osterwalder_PhD_BM_Ontology.pdf
  - title: "Thesis record on UNIL IRIS"
    url: https://iris.unil.ch/entities/publication/2946a1c2-6d59-4440-99e7-f768ca26b8d3
  - title: "Strategyzer. The Business Model Canvas"
    url: https://www.strategyzer.com/library/the-business-model-canvas
  - title: "Object Management Group (2026). Business Architecture Core Metamodel (BACM) 1.1"
    url: https://www.omg.org/spec/BACM/1.1/PDF
---

"Business model" is often used interchangeably with "strategy", and the Business Model Canvas is often drawn as a one-page plan for a whole company. Both uses go further than the original source of the concept says. This post rereads the thesis of Alexander Osterwalder (2004), the ontology that the Business Model Canvas later condensed into a one-page tool, to answer three questions: what a business model is, where it sits between strategy and process, and why a new customer group may need its own canvas rather than just one more sales channel.

**Short answer:** in the original thesis, a business model is a conceptual tool that expresses a company's *logic of earning money*: what value it offers, to which customer segments, and with which company architecture and partner network it creates, markets and delivers that value. The author himself notes that this definition is not shared by all researchers. It is the architectural layer between strategy (the planning layer) and process (the implementation layer), and the "glue" that links strategy, organization and technology. The nine-block canvas is a one-page tool drawn from that ontology. Strategyzer itself says to draw one canvas for *one* business model, not for the whole company. Changing the customer segment usually pulls the left-hand blocks and the two money blocks with it; when they change significantly, treat it as a different business model.

## Where the concept comes from: an ontology, not a sheet of paper

The concept comes from Osterwalder's PhD thesis at HEC Lausanne in 2004, supervised by Yves Pigneur, not from TOGAF or any enterprise architecture framework. The canvas itself, Strategyzer says, comes from the two authors' book *Business Model Generation* (2010). These three layers of sources should be kept apart when reading: the 2004 ontology, the 2010 canvas, and the guidance now on Strategyzer's page.[^1] The thesis defines a business model as a conceptual tool containing elements and the relationships between them, expressing a company's logic of earning money. That logic covers the value the company gives to one or more customer segments, plus the architecture of the company and its partner network for creating, marketing and delivering that value.[^2] A shorter sentence in the thesis sums up the *business logic*: *"what it offers, to whom it offers this and how it can accomplish this"*.[^2]

From this definition, the thesis builds an ontology of four pillars and nine elements (Table 16).[^3] The canvas can be read as a one-page version of those nine elements, with most of the names changed (see the section on the nine blocks below); this is the post's own comparison, based on putting the two lists side by side.[^7] The distinction matters. The ontology has definitions and relationships between elements; the canvas template has only boxes. To read a box at the conceptual level, and its relationship with the other boxes, you need to go back to the thesis, not just look at the sheet.

## Three layers: strategy, business model, process

Osterwalder (Figure 6) arranges three layers, at three levels of abstraction around the same question: how the company earns money.[^4] The top layer has its own post: [What is business strategy, and why is a revenue target not a strategy?](/en/business-strategy-porter-rumelt-mintzberg)

<figure class="fig fig-gov" aria-label="Three stacked layers: strategy, business model, process; the business model translates strategy downward and evaluates strategy upward.">
<div class="gov-band"><p class="gov-who">Strategy<small>Planning</small></p><p class="gov-verbs">Strategic layer</p><p class="gov-out">Vision, goals</p></div>
<p class="gov-link"><span>Translates into a blueprint</span><span>Evaluates whether the strategy is still right</span></p>
<div class="gov-band"><p class="gov-who">Business model<small>Architectural</small></p><p class="gov-verbs">Business model layer</p><p class="gov-out">Logic of earning money</p></div>
<p class="gov-link"><span>Takes physical form</span><span aria-hidden="true" style="visibility:hidden"></span></p>
<div class="gov-band"><p class="gov-who">Process<small>Implementation</small></p><p class="gov-verbs">Process layer</p><p class="gov-out">Organization and work processes</p></div>
<figcaption><span class="fig-no">Figure <span class="no">1</span></span> The three layers in Osterwalder's Figure 6, around the same question: how the company earns money.</figcaption>
</figure>

The relationship between layers runs both ways. From the top down, the business model *translates* strategy into a blueprint. From the bottom up, the business model is the place to *evaluate* whether the strategy is still right.[^4] For the lower layer, the thesis calls the organization (departments, units, processes) the *physical form* of the business model.[^4] The thesis's example is Compaq: the company added a direct sales channel over the Internet without adjusting its organization, so its own resellers reacted because they were being competed against.[^4] The lesson is not "don't sell directly", but this: change one block of the business model without changing its physical form, and two parts of the company will collide.

The thesis also states that a business model is different from a business process model, two concepts that, in the author's view, are often confused.[^5] Put briefly in this post's words: a process model describes the flow of work (activities, roles, order, dependencies), while a business model describes why that work brings in money.

The boundary between strategy and business model is not settled by the thesis. Osterwalder notes that views on the two concepts *"differ widely"* and deliberately does not pick a side.[^4] Readers should keep the three layers as a useful way of arranging things, not as an agreed truth.

## The glue between strategy, organization and technology

The thesis places the business model in the middle of a triangle: business strategy on top, organization and ICT at the two bottom corners, and external pressures (competition, customer demand, legal, social, technology) pressing on all three.[^6] The reason a "glue" is needed is that three groups of people look at the company from three angles. Business people set direction; process designers and system designers have to make it real. The business model gives them a common vocabulary.[^6]

From there Osterwalder asks two questions in opposite directions between the business model and technology (Figure 11):[^6]

| Direction | Question | Who usually asks |
|---|---|---|
| Technology → business model | *"How can the business model be improved through ICT?"* | technology people |
| Business model → technology | *"What kind of ICT does a business ask for in order to be implemented?"* | business people |

The thesis distinguishes two kinds of ICT impact. Direct: the business model relies entirely on technology (Amazon, eBay; product recommendations, ratings). Indirect: communication and coordination costs fall, so a company can more easily work as a network, outsource non-essential parts, combine value with partners, and add information elements to products.[^6]

The consequence for the project portfolio is this post's reasoning, not the thesis's. Every technology proposal should be able to answer which block of which business model it *improves* (the first question), or which block the business side has already decided on that it *implements* (the second question). For a business model that has not run a single day, this post suggests asking the second question first: if you do not yet know what the model needs, it is hard to know where technology improves it.

## From ontology to canvas: nine blocks and six new names

| Pillar | Element in the thesis (2004) | Name on the Strategyzer canvas |
|---|---|---|
| Product | Value Proposition | Value Propositions |
| Customer Interface | Target Customer | Customer Segments |
| | Distribution Channel | Channels |
| | Relationship | Customer Relationships |
| Infrastructure Management | Value Configuration | Key Activities |
| | Capability | Key Resources |
| | Partnership | Key Partnerships |
| Financial Aspects | Cost Structure | Cost Structure |
| | Revenue Model | Revenue Streams |

Most names changed, some only by becoming plural; by this post's count, six of the nine names differ in meaning.[^7] Two mappings in the table are inferences with no source saying so directly. Value Configuration corresponds to Key Activities, and Capability corresponds to Key Resources: in the ontology, a capability is created from resources, so the two are not the same thing.[^7] The ninth block on the original canvas is named "Cost Structure", singular.[^8] Strategyzer's canvas template carries a CC BY-SA 3.0 license line, so the template itself is shared and reusable under that license; this does not apply to Strategyzer's books, courses or paid tools.[^9]

Strategyzer describes how to read the canvas in two halves. The right half is the market (customers, channels, relationships), the left half is what is needed to serve that market (key activities, resources, partners), and the value given to the customer sits in the middle. The two money blocks at the bottom only make sense when read together with the seven blocks above.[^10] Read this way, changing the customer block is rarely a local change: you need to check each of the channel, key activities and cost structure blocks to see whether it must change too.

<figure class="fig" aria-label="Nine-block Business Model Canvas for a hypothetical retail company.">
<div class="canvas">
<p class="canvas-half" style="grid-area:hl">What it takes to serve the market</p>
<p class="canvas-half" style="grid-area:hm">Value</p>
<p class="canvas-half" style="grid-area:hr">Market</p>
<div class="canvas-cell" style="grid-area:kp"><p class="canvas-n">Key partners<small>Key Partnerships</small></p><p class="canvas-d">Refrigerator maker</p></div>
<div class="canvas-cell" style="grid-area:ka"><p class="canvas-n">Key activities<small>Key Activities</small></p><p class="canvas-d">Delivery, advertising</p></div>
<div class="canvas-cell" style="grid-area:kr"><p class="canvas-n">Key resources<small>Key Resources</small></p><p class="canvas-d">Warehouse, vehicle fleet</p></div>
<div class="canvas-cell" style="grid-area:vp"><p class="canvas-n">Value given to customers<small>Value Propositions</small></p><p class="canvas-d">Refrigerators, fast delivery for customers near the warehouse</p></div>
<div class="canvas-cell" style="grid-area:cr"><p class="canvas-n">Customer relationships<small>Customer Relationships</small></p><p class="canvas-d">Self-service ordering, pay immediately</p></div>
<div class="canvas-cell" style="grid-area:ch"><p class="canvas-n">Channels<small>Channels</small></p><p class="canvas-d">Website</p></div>
<div class="canvas-cell" style="grid-area:cs"><p class="canvas-n">Customer segments<small>Customer Segments</small></p><p class="canvas-d">Retail customers</p></div>
<div class="canvas-cell" style="grid-area:co"><p class="canvas-n">Cost structure<small>Cost Structure</small></p><p class="canvas-d">Warehouse, fleet, advertising</p></div>
<div class="canvas-cell" style="grid-area:re"><p class="canvas-n">Revenue streams<small>Revenue Streams</small></p><p class="canvas-d">VND 100 billion a year, paid immediately</p></div>
</div>
<figcaption><span class="fig-no">Figure <span class="no">2</span></span> Nine blocks for the retail company in the example. The layout follows Strategyzer's Business Model Canvas (CC BY-SA 3.0); the content of the blocks is assumed. The two money blocks sit at the bottom and only make sense when read together with the seven blocks above.</figcaption>
</figure>

## One canvas for one business model

Strategyzer writes: *"Fill it once for one business model, not for the whole company."*[^11] A group with several business models needs several canvases. The hypothetical example below shows how this principle applies to a retailer that wants to sell wholesale to shops. The customer changes from consumers to reselling shops, and the other blocks change with it:

| Block | Retail | Wholesale to shops (hypothetical example) |
|---|---|---|
| Customer | consumers | electronics stores |
| Channel | website | staff calling, quoting prices |
| Relationship | self-service ordering, pay immediately | quantity-based quotes |
| Key activities | delivery to each home | trucks, by trip |
| Revenue | paid immediately | paid after thirty days |
| Cost | warehouse, fleet, advertising | more working capital: paying for goods up front before collecting |

<figure class="fig" aria-label="Nine-block Business Model Canvas for hypothetical wholesale, with the customer segment block highlighted in red.">
<div class="canvas">
<p class="canvas-half" style="grid-area:hl">What it takes to serve the market</p>
<p class="canvas-half" style="grid-area:hm">Value</p>
<p class="canvas-half" style="grid-area:hr">Market</p>
<div class="canvas-cell" style="grid-area:kp"><p class="canvas-n">Key partners<small>Key Partnerships</small></p><p class="canvas-d">Refrigerator maker</p></div>
<div class="canvas-cell" style="grid-area:ka"><p class="canvas-n">Key activities<small>Key Activities</small></p><p class="canvas-d">20 trucks per trip</p></div>
<div class="canvas-cell" style="grid-area:kr"><p class="canvas-n">Key resources<small>Key Resources</small></p><p class="canvas-d">Warehouse, trucks</p></div>
<div class="canvas-cell" style="grid-area:vp"><p class="canvas-n">Value given to customers<small>Value Propositions</small></p><p class="canvas-d">Wholesale-priced refrigerators, pay after 30 days</p></div>
<div class="canvas-cell" style="grid-area:cr"><p class="canvas-n">Customer relationships<small>Customer Relationships</small></p><p class="canvas-d">Quantity-based quotes</p></div>
<div class="canvas-cell" style="grid-area:ch"><p class="canvas-n">Channels<small>Channels</small></p><p class="canvas-d">Staff calling</p></div>
<div class="canvas-cell hit" style="grid-area:cs"><p class="canvas-n">Customer segments<small>Customer Segments</small></p><p class="canvas-d">Electronics stores</p></div>
<div class="canvas-cell" style="grid-area:co"><p class="canvas-n">Cost structure<small>Cost Structure</small></p><p class="canvas-d">Money for goods paid up front</p></div>
<div class="canvas-cell" style="grid-area:re"><p class="canvas-n">Revenue streams<small>Revenue Streams</small></p><p class="canvas-d">Paid after 30 days</p></div>
</div>
<figcaption><span class="fig-no">Figure <span class="no">3</span></span> Same company, second canvas, for wholesale. The red block is the first one to change; the other blocks are rechecked against it. The content is assumed.</figcaption>
</figure>

By the post's reasoning, drawing these two columns on one canvas would give a sheet where every block has two contents and the two money blocks can no longer be read. From the Compaq example, this post infers that two business models inside one company tend to collide at the physical form: the channel, the unit, the way people are scored, the relationship with resellers. Drawing two separate canvases helps show where the organization needs rearranging. Strategyzer also advises treating the canvas as a hypothesis, not a plan: date it, version it, and redraw it when new evidence arrives.[^10] This is advice from a commercial party (Strategyzer sells tools and courses), even though it comes from the framework's own authors.[^12]

## Value configuration: the value chain is only one of three types

The thesis describes the Value Configuration block using the classification of Stabell and Fjeldstad (1998), which builds on Thompson's (1967) classification of technologies.[^13]

| Type | Logic of creating value | Relationship between activities | Example in the thesis |
|---|---|---|---|
| Value chain (Porter) | turns inputs into a product | sequential | manufacturing |
| Value shop | solves a customer's particular problem | loop: find the problem, solve it, choose, carry out, evaluate | consulting |
| Value network | connects customers who depend on each other | mediating | banking, telecoms |

The consequence: if you use only Porter's value chain to read every business, you risk missing the logic of the value shop and the value network, that is, misreading where a service or intermediary business creates value.[^13] Some industries are unclear about which type they belong to. Whether insurance is a value network, the thesis does not say. The thesis names only banking and telecoms, and this post has not read the full text of Stabell and Fjeldstad.[^14]

## Osterwalder's "capability" is not a business capability

In the ontology, a capability is *"the ability to execute a repeatable pattern of actions that is necessary in order to create value for the customer"*.[^3] OMG BACM 1.1 defines a business capability as the ability to produce an outcome *without saying how that outcome is produced*.[^15] A "pattern of actions" is a way of doing things, closer to BACM's CapabilityBehavior.[^15] When a project takes the word "capability" from the canvas to connect with the capability map in business architecture, it needs to be retranslated, not copied directly. Business capability in the business architecture sense has its own post: [Business capability and value stream: the original definitions, where they differ, and how to use them](/en/business-capability-and-value-stream).

## What to read carefully

- **The definition is not agreed.** The thesis itself admits its definition *"may not be shared in detail by all the authors in business model research"*, and the debate over strategy versus business model is still open.[^4]
- **One page easily leaves things out.** The canvas has no block for competitors or regulation. The thesis puts competition, legal, social and technological change under external pressures, outside the model.[^6] So for a heavily regulated industry, those pressures need separate analysis. This is the post's reasoning; no verified critical source has been found.[^16]
- **The usage guidance comes from a seller.** The sentences "one canvas for one model" and "treat the canvas as a hypothesis" come from Strategyzer's page. They are reasonable and come from the framework's authors, but they are still the presentation of a commercial party.[^12]
- **The two mappings from element to block are inferences** (Value Configuration → Key Activities, Capability → Key Resources).[^7]

## Applying it: before adding a customer group

The steps below combine the thesis and Strategyzer's guidance. The threshold in step 3, plus steps 4 and 5, are the post's reasoning.

1. **Draw the canvas for the business model that is running now**, with a date. One canvas, one model.
2. **Replace the customer block with the new customer group** and go in turn through channel, relationship, key activities, resources, partners, cost, revenue. Write down each block that has to change.
3. **If many blocks have to change, draw a second canvas** instead of editing the old one. This post uses a threshold of three blocks to force the team to discuss it; that is a working convention, not a standard of Osterwalder or Strategyzer.
4. **Find where the two canvases collide at the physical form**: the same customer, the same warehouse, the same sales team scored by two different measures. That is the Compaq lesson.
5. **For each technology proposal, ask Osterwalder's two questions in the order this post suggests** (the thesis sets no order): what the new model needs to run, and only then where technology improves it. A proposal that cannot say which block, of which canvas, it serves is a proposal that needs its value questioned again.

The companion video (episode 03 of Boring But Correct) tells the same story with a hypothetical retailer that wants to sell wholesale to shops. This post is the sources and the argument behind it.

[^1]: Verified · [Osterwalder (2004)](https://www.csi.im/pub/BMcanvas/2004-Osterwalder_PhD_BM_Ontology.pdf), cover page (HEC Lausanne, supervising professor Y. Pigneur); [Strategyzer](https://www.strategyzer.com/library/the-business-model-canvas): the canvas comes from *Business Model Generation*.
[^2]: Verified · [Osterwalder (2004)](https://www.csi.im/pub/BMcanvas/2004-Osterwalder_PhD_BM_Ontology.pdf), §2.2: definition of business model and business logic.
[^3]: Verified · [Osterwalder (2004)](https://www.csi.im/pub/BMcanvas/2004-Osterwalder_PhD_BM_Ontology.pdf), Table 16: four pillars, nine elements, definition of capability.
[^4]: Verified · [Osterwalder (2004)](https://www.csi.im/pub/BMcanvas/2004-Osterwalder_PhD_BM_Ontology.pdf), §2.2–2.3.1 and Figure 6: three layers; translate and evaluate; the organization is the physical form; the Compaq example; the views that "differ widely"; the definition "may not be shared in detail".
[^5]: Verified · [Osterwalder (2004)](https://www.csi.im/pub/BMcanvas/2004-Osterwalder_PhD_BM_Ontology.pdf), §2.2: a business model differs from a business process model.
[^6]: Verified · [Osterwalder (2004)](https://www.csi.im/pub/BMcanvas/2004-Osterwalder_PhD_BM_Ontology.pdf), §2.3 and Figure 11: triangle of strategy, organization, ICT; external pressures; the two questions; direct and indirect impact.
[^7]: Verified · compares [Osterwalder (2004)](https://www.csi.im/pub/BMcanvas/2004-Osterwalder_PhD_BM_Ontology.pdf) Table 16 with the [Strategyzer](https://www.strategyzer.com/library/the-business-model-canvas) canvas: six of nine names differ. The two mappings Value Configuration → Key Activities and Capability → Key Resources are inferences, medium confidence.
[^8]: Verified · Strategyzer's canvas PDF (versions v2, v3, seen through search results, not opened directly): the block "Cost Structure". Medium-to-high confidence.
[^9]: Verified · the CC BY-SA 3.0 license line printed on Strategyzer's canvas PDF (seen through search results, two versions, not opened directly). Medium-to-high confidence.
[^10]: Verified · [Strategyzer, The Business Model Canvas](https://www.strategyzer.com/library/the-business-model-canvas): the right side is the market, the left side is what is needed to serve it; treat the canvas as a hypothesis, date it and version it.
[^11]: Verified · [Strategyzer, The Business Model Canvas](https://www.strategyzer.com/library/the-business-model-canvas): "Fill it once for one business model, not for the whole company."
[^12]: Verified · [Strategyzer](https://www.strategyzer.com/library/the-business-model-canvas) is a commercial organization that sells tools and paid materials; its usage guidance is the vendor's presentation.
[^13]: Verified · [Osterwalder (2004)](https://www.csi.im/pub/BMcanvas/2004-Osterwalder_PhD_BM_Ontology.pdf), §4.4.3; Stabell, C. B. & Fjeldstad, Ø. D. (1998), "Configuring value for competitive advantage: on chains, shops, and networks", *Strategic Management Journal* 19(5), 413–437, abstract only.
[^14]: OPEN · Whether insurance is a value network (mediating technology): the thesis names only banking and telecoms; the full text of Stabell & Fjeldstad and Thompson (1967) has not been read.
[^15]: Verified · [OMG BACM 1.1](https://www.omg.org/spec/BACM/1.1/PDF), §7.3.2.7: a capability is "the ability a business has to produce an Outcome without specifying how that Outcome is produced"; CapabilityBehavior. The comparison with Osterwalder's Table 16 is the learner's own, medium confidence.
[^16]: OPEN · No verified critical source on the canvas missing competitors, risks and regulation; this is an inference from the way the thesis places external pressures outside the model.
