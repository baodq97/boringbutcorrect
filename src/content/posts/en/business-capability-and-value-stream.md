---
title: "Business capability and value stream: the original definitions, where they differ, and how to use them"
seoTitle: "Business capability vs value stream: definitions and use"
description: "Business capability and value stream per BIZBOK, OMG BACM 1.1 and Homann 2006: original definitions, where sources differ, and how to use them in scoping."
translationOf: nang-luc-kinh-doanh-va-dong-gia-tri
station: 1
published: 2026-11-12
verified: 2026-11-04
image: /og/en/ep02.jpg
video: {id: JJAdjHwJATQ, duration: "5:21", episode: 2}
sources:
  - title: "Business Architecture Guild (2026). BIZBOK Guide v15, Part 1: Introduction"
    url: https://cdn.ymaws.com/www.businessarchitectureguild.org/resource/resmgr/bizbok15/BIZBOKv15_introduction.pdf
  - title: "Business Architecture Guild (2021). BIZBOK Guide v10, Appendix A: Glossary"
    url: https://cdn.ymaws.com/www.businessarchitectureguild.org/resource/resmgr/bizbok_10/glossary_v10_final.pdf
  - title: "Object Management Group (2026). Business Architecture Core Metamodel (BACM) 1.1, formal/26-09-01"
    url: https://www.omg.org/spec/BACM/1.1/PDF
  - title: "Homann, U. (2006). A Business-Oriented Foundation for Service Orientation. Microsoft"
    url: https://cdn.ymaws.com/www.businessarchitectureguild.org/resource/resmgr/homann_article_on_capabiliti.pdf
  - title: "Lean Enterprise Institute. Lexicon: Value Stream"
    url: https://www.lean.org/lexicon-terms/value-stream/
  - title: "Osterwalder, A. (2004). The Business Model Ontology. PhD thesis, HEC Lausanne"
    url: https://www.csi.im/pub/BMcanvas/2004-Osterwalder_PhD_BM_Ontology.pdf
---

When the technology team can take on only one more project and four parties are asking for it, the usual question is "which project is best". That question has no common yardstick: the mobile app is measured by expected revenue, the line-planning software by the kilometers of driving it saves, the warehouse system replacement by how modern the technology is. Business architecture gives one shared map to put those projects on: what the company must be able to do, set under the path that value takes to the customer. This post rereads two concepts from their origins, business capability and value stream, and shows where the sources still disagree.

**Short answer:** a capability is something the company can do; the definition does not say who does it or with what. A value stream is a chain of stages that accumulate value for one recipient. The two are not parent and child; they cross-map: capabilities *support* the stages of a value stream. Process, applications and organization are the implementation layer; the sources argue that process and organization are less stable than capability. BIZBOK suggests scoping each initiative by the business architecture elements it touches. From that, this post proposes (our reasoning, not the sources'): put four different kinds of project on one map to compare them.

## Business architecture: four core views and an outer ring that changes faster

The definition adopted by several associations (FEAPO, 2017) describes business architecture as a multidimensional view of capabilities, end-to-end value delivery, information and organizational structure, and their relationships to strategy, products, policies, initiatives and stakeholders.[^1] BIZBOK v15 splits those domains into two rings. The core ring holds capability, value stream, organization and information, considered relatively stable. The outer ring holds stakeholder, strategy, policy, product, initiative and metric, which change faster.[^2]

<figure class="fig fig-day" aria-label="Two rings of business architecture domains: the outer ring changes faster, the core ring is relatively stable.">
<ol class="tower">
<li>Outer ring: changes faster<small>stakeholder, strategy, policy, product, initiative, metric</small></li>
<li>Core ring: relatively stable<small>capability, value stream, organization, information</small></li>
</ol>
<figcaption><span class="fig-no">Figure <span class="no">1</span></span> The business architecture domains according to BIZBOK v15. The stability here is the source's argument, not a measurement.</figcaption>
</figure>

The stability argument rests on an example, not on measured data. BIZBOK takes an insurer a hundred years old: it still has the same capabilities (Customer Management, Insurance Policy Management, Claims Management), the same value stream *Settle Claim*, the same kinds of information (Customer, Policy, Claim). What changed is how things are automated, and the *instances* of products, stakeholders and strategy.[^2] Homann (2006) makes the same point: a capability is "relatively stable", while how it is implemented is "far less stable".[^3] This is the sources' argument, not an empirical result. This post has not found any study that measures the stability of a capability map over time.[^4]

BIZBOK also separates business architecture from the operating model. The operating model focuses on process, people and technology. BIZBOK argues that it helps optimize cost and performance, but cannot replace the value-and-capability view when executing strategy and choosing investments.[^2]

## Capability: the "what", not the "how"

The three main sources use three different wordings but share one core: a capability says what outcome the company can produce, not who does it or with what technology.

| Source | Definition | Emphasis |
|---|---|---|
| Homann (2006), Microsoft | *"A particular ability or capacity that a business may possess or exchange to achieve a specific purpose or outcome"* | Wraps up people, process, technology and information; "pay employees" remains a capability whether outsourced or automated[^3] |
| BIZBOK Glossary | Reuses Homann's definition[^3] | Adds *level* (depth of decomposition) and *tier*: Strategic, Core/Customer Facing, Supporting[^5] |
| OMG BACM 1.1 (2026) | *"the ability a business has to produce an Outcome without specifying how that Outcome is produced"* | A capability is identified through its Outcome; CapabilityBehavior (behavior variants) and CapabilityImplementation (performer, resource) are kept separate[^6] |

What the definition does *not* say matters as much as what it says. A capability does not say who does it, which software does it, or which procedure it follows. Because a capability is defined independently of who performs it and how, it stays on the map when the company outsources or automates the work. Homann's "pay employees" example is still a capability even when payroll is outsourced.[^3]

BACM 1.1 turns this definition into a modeling constraint. Capabilities decompose along a single tree and may not be *specialized*. To represent variants, use CapabilityBehavior; do not create child capabilities. This constraint has an analytical consequence: if every variant of a capability performs poorly, BACM treats that as a sign of a systemic problem in that very capability.[^6]

<figure class="fig" aria-label="One capability, delivering goods to the customer's home, split into four layers. The capability and outcome stay the same; the behavior variants and the implementation can differ.">
<div class="vmap vmap-two">
<p class="vmap-l">Capability<small>the what</small></p>
<p class="vmap-c vmap-w">Deliver goods to the customer's home</p>
<p class="vmap-l">Outcome<small>the result it produces</small></p>
<p class="vmap-a vmap-w">The item has reached the customer</p>
<p class="vmap-l">Behavior<small>variants of the same capability</small></p>
<p class="vmap-a">Fast delivery near the warehouse</p>
<p class="vmap-a">Standard delivery outside that zone</p>
<p class="vmap-l">Implementation<small>who does it, with what</small></p>
<p class="vmap-a">Today: the company's own fleet</p>
<p class="vmap-a">Suppose tomorrow: fully outsourced</p>
</div>
<figcaption><span class="fig-no">Figure <span class="no">2</span></span> One capability read through the layers of BACM 1.1. Changing who does the work changes only the last row, so the capability stays on the map. Example built by this post.</figcaption>
</figure>

Naming conventions are not consistent across the sources. Homann uses verb phrases ("pay employees", "ship product"), BIZBOK's capability examples use noun phrases ("Claims Management"), and BIZBOK's value streams use verbs again ("Settle Claim"). The public part of BIZBOK states no naming rule. That part (§2.2 Capability Mapping) is for members only.[^2]

## Value stream and value chain: close terms, different meanings

Business architects, Lean practitioners and strategists all say "value stream" or "value chain", but they do not mean the same thing.

| Concept | Unit of analysis | Question it answers |
|---|---|---|
| Business architecture value stream | The stages that accumulate value for a stakeholder | What value does the recipient get, through which stages?[^5] |
| Lean value stream | Every action, including actions that do *not* create value | Where is the waste in the flow?[^7] |
| Porter's value chain | The strategically significant activities of a company | Where does cost or differentiation advantage come from?[^5] |
| Wardley's value chain (compared at concept level only) | A chain of dependent components, anchored to user needs | Which components to build, which to buy?[^4] |

BIZBOK defines a value stream as *"an end-to-end collection of activities that create a result for a customer"*, where the customer can be an end customer or an internal user. The definition is taken from Whittle and Myrick (2005).[^5] BIZBOK itself puts Porter's value chain, value network and Lean value stream in a group called "alternative value mapping approaches".[^2] That means that within BIZBOK's framework they are different tools, not synonyms. Using Lean value stream mapping for BIZBOK's purpose usually drags the map down to individual actions, while BIZBOK only needs named stages. This is the post's inference from the two definitions.

The two figures below put these concepts on the same hypothetical retailer. The value stream and the Lean value stream both draw one order, at different zoom levels.

<figure class="fig" aria-label="The same order at two zoom levels. The value stream has four named stages. The Lean value stream lists every action in the preparation stage, including two waits that create no value.">
<div class="vmap">
<p class="vmap-l">Value stream<small>named stages</small></p>
<p class="vmap-s">Order</p>
<p class="vmap-s">Confirm</p>
<p class="vmap-s">Prepare<small>zoomed in below</small></p>
<p class="vmap-s">Deliver</p>
<p class="vmap-l">Lean<small>every action</small></p>
<div class="vmap-steps"><span>Open pick ticket</span><span class="wait">Wait for turn</span><span>Walk to shelf</span><span>Pick item</span><span class="wait">Wait for packing table</span><span>Pack</span></div>
</div>
<figcaption><span class="fig-no">Figure <span class="no">3</span></span> Two ways to draw the same order. Dashed boxes are actions that create no value, which is what Lean hunts for; BIZBOK's map does not go down to this level. The actions are assumptions.</figcaption>
</figure>

Porter's value chain (1985) is a different kind of model: it divides a company's activities into five primary groups and four support groups.[^14] In this post's reading, the framework does not follow one order but spreads across everything the company does, to ask where advantage and cost sit.

<figure class="fig" aria-label="Porter's value chain for the hypothetical retailer: four support activity groups spread across the top, five primary activity groups in columns below, margin on the right.">
<div class="porter">
<p class="canvas-half porter-h">Support activities</p>
<div class="canvas-cell porter-sup"><p class="canvas-n">Company infrastructure<small>Firm infrastructure</small></p><p class="canvas-d">Executive team, finance</p></div>
<div class="canvas-cell porter-sup"><p class="canvas-n">Human resources<small>Human resource management</small></p><p class="canvas-d">Hiring, training warehouse staff and drivers</p></div>
<div class="canvas-cell porter-sup"><p class="canvas-n">Technology development<small>Technology development</small></p><p class="canvas-d">The technology team</p></div>
<div class="canvas-cell porter-sup"><p class="canvas-n">Procurement<small>Procurement</small></p><p class="canvas-d">Buying trucks, leasing warehouses</p></div>
<p class="canvas-half porter-h">Primary activities</p>
<div class="canvas-cell porter-pri"><p class="canvas-n">Inbound logistics<small>Inbound logistics</small></p><p class="canvas-d">Receiving refrigerators from the maker into the warehouse</p></div>
<div class="canvas-cell porter-pri"><p class="canvas-n">Operations<small>Operations</small></p><p class="canvas-d">Storing, picking, packing</p></div>
<div class="canvas-cell porter-pri"><p class="canvas-n">Outbound logistics<small>Outbound logistics</small></p><p class="canvas-d">The fleet carrying goods to the customer's home</p></div>
<div class="canvas-cell porter-pri"><p class="canvas-n">Marketing and sales<small>Marketing &amp; sales</small></p><p class="canvas-d">Advertising, the website</p></div>
<div class="canvas-cell porter-pri"><p class="canvas-n">Service<small>Service</small></p><p class="canvas-d">Returns, warranty</p></div>
<p class="porter-m">Margin</p>
</div>
<figcaption><span class="fig-no">Figure <span class="no">4</span></span> Porter's nine activity groups, filled in with the retailer from the example. The contents of the cells are assumptions. This figure draws everything a company does, while Figure 3 draws the path of one order.</figcaption>
</figure>

### A value stream is not a process

BACM links the two models with an *implements* relationship: a Process or Activity can implement a whole ValueStream, or implement each of its stages. For the same value stream, BACM does not allow both levels at once. The two models meet through Outcome: the state of a business object that a capability produces or needs.[^6] A customer journey is not a process either. According to BACM, a journey is a view of customer behavior that the company constructs, and it has no alternative branches.[^6]

### Where the two standards differ: the order of stages

BIZBOK defines each stage as having a name, entrance criteria, exit criteria and participating stakeholders. Having entry and exit conditions is easily read as implying a sequence.[^5] BACM 1.1 instead writes that the order of stages has *"no strong semantic interpretation"*. BACM's example is healthcare: triage, diagnosis, treatment and prevention are hard to put in a fixed order, while manufacturing has a natural order.[^8] The consequence when drawing: if your value stream really is sequential, like an order going through order, confirm, prepare, deliver, then entrance and exit criteria help find where orders get stuck. If it is not sequential, do not force it into a straight line just because the drawing tool does.

## Cross-mapping: capabilities support stages, applications automate capabilities

BACM states it directly: *"Capabilities support ValueStreamStages"*.[^9] The map below uses the path of a retail order. This is an example built by this post, not quoted from a source.

<figure class="fig" aria-label="The four stages of an order: order, confirm, prepare, deliver. Under each stage is the capability that supports it: taking orders, knowing how much stock there is, picking and packing, delivering goods to the home. Under the capability of knowing how much stock there is, two applications both hold the inventory number.">
<div class="vmap">
<p class="vmap-l">Value stream<small>stages toward the customer</small></p>
<p class="vmap-s">Order</p>
<p class="vmap-s">Confirm</p>
<p class="vmap-s">Prepare</p>
<p class="vmap-s">Deliver</p>
<p class="vmap-l">Capability<small>supports the stage above</small></p>
<p class="vmap-c">Take orders</p>
<p class="vmap-c">Know how much stock there is</p>
<p class="vmap-c">Pick and pack</p>
<p class="vmap-c">Deliver goods to the home</p>
<p class="vmap-l">Application<small>automates the capability</small></p>
<p class="vmap-a">Website, sales system</p>
<p class="vmap-a hit">Warehouse system and sales system: two inventory numbers</p>
<p class="vmap-a">Warehouse system</p>
<p class="vmap-a">No line-planning software yet</p>
<p class="vmap-l">Process, organization<small>the how</small></p>
<p class="vmap-a vmap-w">Picking procedure, warehouse team, fleet team; by the sources' argument, this layer is less stable than the capability</p>
</div>
<figcaption><span class="fig-no">Figure <span class="no">5</span></span> Cross-map for one order: read down the columns. A capability sits under the stage it supports; applications and process are the implementation. The red cell is where two applications automate the same capability. Example built by this post.</figcaption>
</figure>

Three points of the cross-map are worth keeping when you draw one:

- **In BACM, the capability is the unit of reuse; the stage is not.** A capability such as Claims Management can support many stages, in many value streams. Conversely, BACM does not let two value streams share a stage. If two stages are alike, show that by giving them the same set of supporting capabilities.[^9]
- **Technology appears at the implementation layer, not the capability layer.** A performer in BACM can be an OrgUnit (people) or a System (IT system, robot).[^6] From this the post infers: saying "we have a CRM capability" mixes up the layers, because under BIZBOK's definition of application, a CRM system is an application that implements some capabilities.[^5]
- **An application has boundaries defined by capability.** BIZBOK defines an application as *"a collection of software assets that automates and enables a bounded set of capabilities"*.[^5] From that definition, this post draws a test: when two applications automate the same capability, like the warehouse system and the sales system both holding the inventory number, it is a signal to check for redundancy in the application portfolio, and for the risk of the two numbers diverging.

## From map to project portfolio

BIZBOK's Strategy Execution Framework chain (Figure 1.5) runs as follows. Strategy is assessed for its impact on value streams, capabilities, information, business units and products. From that comes the solution architecture, including a "business-driven IT architecture", then the initiative plan, then implementation. The accompanying principle: *"initiatives are defined by the scope of specific aspects of the business architecture"*.[^10]

That sentence is broader than the common reading "a project fills a capability gap". BIZBOK anchors an initiative to *elements* of the business architecture: value stream, capability, information, business unit, product. From this principle, the post reads the capability gap as just one of several ways to scope an initiative.[^10] For the four projects at the start of the post, scoping by business architecture gives:

| Project | Stage touched | Capability touched | Is that capability weak? |
|---|---|---|---|
| Mobile app | Order | Take orders | No |
| Line-planning software | Deliver | Deliver goods to the home | No |
| Replace the warehouse system | Confirm, prepare | Know how much stock there is | Yes |
| Let the website read the warehouse system's numbers | Confirm | Know how much stock there is | Yes |

<figure class="fig" aria-label="Four projects on the same map. Cancelled orders show up at the prepare stage, but the wrong promise is made at the confirm stage. The capability of knowing how much stock there is is weak; only two projects touch it.">
<div class="vmap">
<p class="vmap-l">Value stream<small>stages toward the customer</small></p>
<p class="vmap-s">Order</p>
<p class="vmap-s">Confirm</p>
<p class="vmap-s">Prepare</p>
<p class="vmap-s">Deliver</p>
<p class="vmap-l">Operational data<small>what happens there</small></p>
<p class="vmap-a"></p>
<p class="vmap-a">The wrong promise is made</p>
<p class="vmap-a">Cancelled orders show up</p>
<p class="vmap-a"></p>
<p class="vmap-l">Capability<small>red means weak</small></p>
<p class="vmap-c">Take orders</p>
<p class="vmap-c hit">Know how much stock there is</p>
<p class="vmap-c">Pick and pack</p>
<p class="vmap-c">Deliver goods to the home</p>
<p class="vmap-l">Project<small>where it touches</small></p>
<p class="vmap-c">Mobile app</p>
<p class="vmap-c">Let the website read the warehouse system's numbers</p>
<span></span>
<p class="vmap-c">Line-planning software</p>
<span class="vmap-lgap"></span>
<span></span>
<p class="vmap-c vmap-2">Replace the warehouse system</p>
<span></span>
</div>
<figcaption><span class="fig-no">Figure <span class="no">6</span></span> The table above, placed on the map. Four different kinds of project can now be compared with one question: does it touch a weak capability. Which capability is weak is the analyst's judgment.</figcaption>
</figure>

The last column of the table is the analyst's judgment based on operational data (for example: cancelled orders show up at the prepare stage but the wrong promise is made at the confirm stage). The sources give no ready-made scoring scale. A "capability heat map", coloring capabilities by how weak or strong they are, does not appear in the public part of BIZBOK or in BACM. This post leaves it unverified.[^11]

## Concepts that are easy to confuse

**Osterwalder's capability and business architecture's capability.** In the business model ontology (2004), a capability is *"the ability to execute a repeatable pattern of actions that is necessary in order to create value for the customer"*, tied to resources.[^12] Read against BACM, a "pattern of actions" is the *how*, closer to CapabilityBehavior than to a business capability, which separates the "what" from the "how". This comparison is the learner's own, based on the two original definitions.[^6] The two definitions are close but not identical.

**Capability tier and DDD subdomain.** The Strategic / Core / Supporting tiers of a capability map and the Core / Supporting / Generic subdomains of Domain-Driven Design sound alike. But a tier classifies by business impact on a company-wide map, while a subdomain is a lens for software design. A one-to-one mapping between the two is an inference that no source has verified.[^4]

**Business architecture and business model.** BIZBOK does not place the business model among its domains; it treats business architecture as something that is "business model enabling", with its own section on the relationship between the two (§3.3). TOGAF, by contrast, files its Business Models guidance under the Business Architecture set. The two frameworks file it differently. This is a disputed point, with no single correct way to file it.[^13]

## What to read carefully

- **BIZBOK and BACM are not two independent sources.** The Business Architecture Guild is a co-author of BACM 1.1. When the two documents say the same thing, that is one school speaking twice, not two pieces of evidence.[^6]
- **The stability of capability is an argument.** Both Homann and BIZBOK argue by example. The sources read contain no empirical data.[^4]
- **The map can become a product in itself.** BIZBOK warns about this with the principle *"Business architecture is not about the deliverables"*. The map has value only when it is used to scope initiatives or analyze impact.[^2]
- **Abstraction brings stability but is hard to act on.** A capability does not contain the "how", so to make a decision you still have to go down to process, applications and people. BACM addresses this with CapabilityBehavior and CapabilityImplementation, and the spec itself admits this makes the model more complex.[^6]
- **Most of BIZBOK is for members only.** This post relies only on the public Part 1 and the Glossary. The naming rules, the detailed mapping method (§2.2) and appendix B.6 are known only from the table of contents.[^2]

## Applying it: put a project list on the map

The method below is how this post combines the sources. Steps 1-4 rest on the sources' definitions, but the order and the conditions are the post's; steps 5-6 are the post's reasoning.

1. **Pick one end-to-end value stream** for one specific recipient (a customer buying goods, a customer claiming compensation), named after the result that recipient receives, like BIZBOK's "Settle Claim" example. The public part of BIZBOK has no naming rule.
2. **Split it into stages.** For each stage, record entrance and exit criteria, if your value stream really is sequential (see where BIZBOK and BACM differ above).
3. **Write the capabilities under each stage**, the "what" only: no department names, no software names. A capability that supports several stages is drawn once, with several lines connecting to it.
4. **Record the applications under the capabilities** and look for places where two applications automate the same capability.
5. **Put operational data on the map**: at which stage cancelled orders, waits and errors show up, and which capability actually causes them. Where it shows up and where it is caused are often different places.
6. **Scope each project**: which stage, which capability, which application. A project that cannot point to a capability it will strengthen is a project whose value needs to be questioned again. A project that touches a capability that is not weak can still be worth doing, but it must answer: does doing it now pile more work onto the weak spot?

The accompanying video (episode 02 of Boring But Correct) tells the same story with a hypothetical retailer. This post is the sources and the reasoning behind it.

[^1]: Verified · [BIZBOK Guide v15, Part 1](https://cdn.ymaws.com/www.businessarchitectureguild.org/resource/resmgr/bizbok15/BIZBOKv15_introduction.pdf): quotes the business architecture definition adopted by FEAPO on 2017-01-14.
[^2]: Verified · [BIZBOK Guide v15, Part 1](https://cdn.ymaws.com/www.businessarchitectureguild.org/resource/resmgr/bizbok15/BIZBOKv15_introduction.pdf), Figure 1.1 (four core domains), Figure 1.3 (compared with the operating model), the insurer example, the principle "not about the deliverables", table of contents §2.2, §3.3 and Appendix B.6.
[^3]: Verified · [Homann (2006)](https://cdn.ymaws.com/www.businessarchitectureguild.org/resource/resmgr/homann_article_on_capabiliti.pdf): the definition of capability; a capability is "relatively stable", its implementation "far less stable"; the "pay employees" example.
[^4]: OPEN · No empirical study measuring the stability of a capability map has been found. Mapping capability tier to DDD subdomain is an unverified inference. Wardley's value chain is compared only at concept level, without going to Wardley's original sources.
[^5]: Verified · [BIZBOK Guide v10, Glossary](https://cdn.ymaws.com/www.businessarchitectureguild.org/resource/resmgr/bizbok_10/glossary_v10_final.pdf): entries Business Capability, Capability Map (level, tier), Value Stream (after Whittle & Myrick 2005), Value Stream Stage, Application.
[^6]: Verified · [OMG BACM 1.1 (2026)](https://www.omg.org/spec/BACM/1.1/PDF), §7.1.1, §7.1.4, §7.3.2.7: capability defined through Outcome; a single decomposition tree; CapabilityBehavior, CapabilityImplementation; performer is OrgUnit or System; the implements relationship; journey; the Business Architecture Guild is a co-author; the spec admits "more complex".
[^7]: Verified · [Lean Enterprise Institute, Lexicon: Value Stream](https://www.lean.org/lexicon-terms/value-stream/): every action, whether or not it creates value, from idea to launch or from order to delivery.
[^8]: Disputed · [BIZBOK Glossary](https://cdn.ymaws.com/www.businessarchitectureguild.org/resource/resmgr/bizbok_10/glossary_v10_final.pdf) (a stage has entrance/exit criteria) against [BACM 1.1](https://www.omg.org/spec/BACM/1.1/PDF) §7.3.3.14 ("no strong semantic interpretation"). That the two sources differ has been checked; which one is right has not been settled.
[^9]: Verified · [OMG BACM 1.1](https://www.omg.org/spec/BACM/1.1/PDF), §7.1.1 ("Capabilities support ValueStreamStages"); stages are not shared between value streams (same spec, section number not recorded).
[^10]: Verified · [BIZBOK Guide v15, Part 1](https://cdn.ymaws.com/www.businessarchitectureguild.org/resource/resmgr/bizbok15/BIZBOKv15_introduction.pdf), Figure 1.5 (Strategy Execution Framework) and the principle on initiative scope.
[^11]: OPEN · "Capability heat map" is not found in BIZBOK Part 1, the Glossary or BACM 1.1; it has not been determined whether it is a standard BIZBOK technique.
[^12]: Verified · [Osterwalder (2004)](https://www.csi.im/pub/BMcanvas/2004-Osterwalder_PhD_BM_Ontology.pdf), Table 16; compared with [BACM 1.1](https://www.omg.org/spec/BACM/1.1/PDF) §7.3.2.7. Medium confidence: the comparison is the learner's own, based on the two original definitions.
[^14]: Read from a secondary source, not checked separately · [Wikipedia: Value chain](https://en.wikipedia.org/wiki/Value_chain): the split into five primary activities and four support activities in *Competitive Advantage* (Porter, 1985); not compared against the original book.
[^13]: Disputed · [BIZBOK Guide v15, Part 1](https://cdn.ymaws.com/www.businessarchitectureguild.org/resource/resmgr/bizbok15/BIZBOKv15_introduction.pdf), Figure 1.1, 1.3 and table of contents §3.3; the position of the business model in TOGAF comes from the publisher's description of the Business Architecture set.
