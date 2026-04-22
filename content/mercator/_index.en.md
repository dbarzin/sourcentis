---
title: "Mercator – Open Source IT System Mapping"
date: 2026-04-21
layout: "single"
draft: false
description: "Mercator is an Open Source IT system mapping tool, aligned with ANSSI guidelines. Visualize, analyze and take control of your information system from every angle."
keywords: "Mercator, IT system mapping, CMDB, Open Source, ANSSI, BPMN, NIS2, ISO 27001, IT security, application mapping, network mapping"
og_title: "Mercator – Open Source IT System Mapping"
og_description: "Open Source IT mapping tool compliant with ANSSI guidelines. Seven complementary views, BPMN 2.0 modeling, REST API, compliance dashboards. Free. Professional support available."
og_image: "/images/mercator.png"
---

## Mercator — Know, understand and master your IT system

<div style="display: flex; gap: 2em; align-items: flex-start; flex-wrap: wrap; margin: 1.5em 0;">
<div style="flex: 1; min-width: 280px; font-size: 0.88em;">

As cyberattacks grow in frequency and sophistication, as NIS2 imposes new obligations on essential and important entities, and as the attack surface of organizations keeps expanding, **mapping your information system is no longer optional**. It is the indispensable starting point of any effective security strategy.

**Mercator** is an Open Source IT mapping tool, born from real-world experience and aligned with ANSSI recommendations. It is designed for CISOs, IT managers and technical teams who want to regain control of their information system with a pragmatic, accessible and proven solution — with no major software investment.

<div style="display: flex; gap: 1em; flex-wrap: wrap; margin: 1.5em 0;">
  <a href="https://github.com/dbarzin/mercator" class="btn btn-primary">⭐ View on GitHub</a>
  <a href="https://dbarzin.github.io/mercator/" class="btn btn-secondary">📖 Documentation</a>
  <a href="#support" class="btn btn-secondary">💼 Professional support</a>
</div>

</div>
<div style="flex: 0 0 38%; min-width: 260px;">
{{< img src="/images/mercator.png" width="100%" >}}
</div>
</div>

## Why Mercator?

Many mapping tools are too complex, too expensive or too rigid for rapid adoption. Mercator was born from the field, for the field.

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5em; margin: 1.5em 0; font-size: 0.88em;">

<div>
<h3>📊 ANSSI-compliant</h3>
Aligned with the ANSSI mapping guide. Automatic maturity scoring, gap identification, reports ready for audits.
</div>

<div>
<h3>🔓 100% Open Source</h3>
GPL licence. Open, transparent, customizable source code. No hidden modules, no barrier to adoption.
</div>

<div>
<h3>🚀 Easy to deploy</h3>
Up and running in minutes via Docker or a detailed installation guide. Fast onboarding for technical teams.
</div>

<div>
<h3>🤝 Active community</h3>
500+ GitHub stars, international contributors, active forum. Awarded <strong>Best Open Source Project OW2 2024</strong>.
</div>

</div>

<br>

## Seven views for a complete mapping — from supplier contracts to the server room

<div style="display: flex; gap: 2em; align-items: flex-start; flex-wrap: wrap; margin: 1.5em 0;">
<div style="flex: 1; min-width: 280px; font-size: 0.88em;">

Mercator organizes your IT mapping into seven complementary views, covering the entire scope — from contractual relationships to physical equipment.

**GDPR view** — The processing register and your security measures.

**Ecosystem view** — Suppliers, partners, subcontractors and the contractual relationships that bind you to them.

**Information system view** — Your processes, activities, actors and the information they handle.

**Administration view** — Directories, zones and administrators.

**Application view** — All your software, grouped into application blocks, with their databases and services.

**Logical infrastructure view** — Networks, VLANs, firewalls, security zones, data flows.

**Physical infrastructure view** — Servers, racks, rooms, sites.

</div>
<div style="flex: 0 0 42%; min-width: 260px;">
{{< img src="/images/mercator.home.full.en.png" width="100%" >}}
</div>
</div>

## Impact analysis and interactive exploration

<div style="display: flex; gap: 2em; align-items: flex-start; flex-wrap: wrap; margin: 1.5em 0;">
<div style="flex: 0 0 42%; min-width: 260px;">
{{< img src="/images/explore.png" width="100%" >}}
</div>
<div style="flex: 1; min-width: 280px; font-size: 0.88em;">

Click on any object in the mapping to instantly visualize its upstream and downstream dependencies. From an application, trace back to the servers hosting it, the databases it uses, and the business processes it supports — or follow the path in reverse.

This navigation transforms static documentation into a **living map of your infrastructure**.

Mercator enables you to detect **SPOFs** (single points of failure) before they become incidents, **analyze the impact** of an outage or change before it happens, **visualize dependency chains** across multiple levels, and **plan business continuity** with reliable, up-to-date data.

</div>
</div>

## Compliance and maturity

<div style="display: flex; gap: 2em; align-items: flex-start; flex-wrap: wrap; margin: 1.5em 0;">
<div style="flex: 1; min-width: 280px; font-size: 0.88em;">

Mercator calculates a **maturity score** for your mapping based on the completeness and quality of the information entered. You get a clear view of your gaps by domain (governance, protection, defence, resilience), with a prioritized list of improvement actions.

The generated reports are directly usable for your audits, management reviews and regulatory submissions (NIS2, ISO 27001, HDS).

</div>
<div style="flex: 0 0 32%; min-width: 260px;">
{{< img src="/images/conform.png" width="100%" >}}
</div>
</div>


## BPMN 2.0 — Bridging business and infrastructure

<div style="display: flex; gap: 2em; align-items: flex-start; flex-wrap: wrap; margin: 1.5em 0;">
<div style="flex: 0 0 42%; min-width: 260px;">
{{< img src="/images/BPMN.png" width="100%" >}}
</div>
<div style="flex: 1; min-width: 280px; font-size: 0.88em;">

Mercator includes a **BPMN 2.0 editor** to model your business processes and connect them directly to your technical infrastructure.

In practice, this lets you answer critical questions in seconds: *Which business processes are affected if this server goes down? Which applications support this regulatory process? Which technical flows underpin this essential service?*

It is the missing link between IT teams and management, and between technical mapping and NIS2 compliance requirements.

</div>
</div>

## REST API and integrations

<div style="display: flex; gap: 2em; align-items: center; flex-wrap: wrap; margin: 1.5em 0;">
<div style="flex: 1; min-width: 280px; font-size: 0.88em;">

Mercator exposes a **full REST API**, documented in OpenAPI/Swagger, to integrate natively into your existing IT ecosystem. Every mapping object — applications, servers, flows, processes — can be read, created and updated via the API, with secure authentication and fine-grained access control.

The API enables a living mapping, continuously fed by your tools: bidirectional synchronization with your CMDB (ServiceNow, GLPI…), automatic import from Active Directory, VMware or Kubernetes, export to your GRC or risk management platforms.

It also allows you to integrate Mercator into your CI/CD pipelines to update the mapping on every deployment, or to build custom connectors to your business tools. An interactive OpenAPI reference is available directly from the interface.

</div>
<div style="flex: 0 0 42%; min-width: 260px;">
{{< img src="/images/api.png" width="100%" >}}
</div>
</div>


## Reports and dashboards

<div style="display: flex; gap: 2em; align-items: flex-start; flex-wrap: wrap; margin: 1.5em 0;">
<div style="flex: 0 0 42%; min-width: 260px;">
{{< img src="/images/mercator.report.png" width="100%" >}}
</div>
<div style="flex: 1; min-width: 280px; font-size: 0.88em;">

**Dynamic dashboards** provide a synthetic view of your IT landscape: asset distribution, documentation rate, compliance indicators, infrastructure trends.

Mercator also generates **professional reports** exportable in PDF, Excel and CSV: asset inventory, supplier analysis, application mapping, compliance status. Ready for your audits and management committees.

</div>
</div>

## They use Mercator

<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5em; align-items: center; margin: 1.5em 0;">
  <div>{{< img src="/images/CNRS.webp" width="9em" >}}</div>
  <div>{{< img src="/images/UPEC.webp" width="9em" >}}</div>
  <div>{{< img src="/images/mines.webp" width="9em" >}}</div>
  <div>{{< img src="/images/AFTRAL.webp" width="9em" >}}</div>
  <div>{{< img src="/images/chu-poitier.webp" width="9em" >}}</div>
  <div>{{< img src="/images/GHT-Aples.webp" width="9em" >}}</div>
  <div>{{< img src="/images/CH-Soissons.webp" width="9em" >}}</div>
  <div>{{< img src="/images/CHPf.webp" width="9em" >}}</div>
</div>

<p style="font-size: 0.88em;">Mercator is deployed in hospitals, engineering schools, research centers, public administrations and private companies — in France and in more than 30 countries.</p>

### What users say

<div style="font-size: 0.88em;">

> "Congratulations on this accessible tool that finally allows us to move forward on our mapping work."
>
> **— IT Manager, ISO 27001-certified hospital**

<br>

> "Deploying Mercator was a real time-saver for our team. The built-in ANSSI recommendations are a major asset."
>
> **— CISO of a leading French engineering school**

<br>

> "Thank you again for Mercator, which continues to be a reference tool in our company!"
>
> **— CTO, e-commerce company**

</div>

<br>

## Community recognition

<div style="display: flex; align-items: center; gap: 2em; flex-wrap: wrap; margin: 1.5em 0;">
<div>{{< img src="/images/OW2con24AwardsSmall.jpg" width="15em" >}}</div>
<div style="flex: 1; min-width: 280px; font-size: 0.88em;">

**🏆 Best Open Source Project OW2 2024**

Mercator was awarded **[Best Open Source Project 2024](https://www.ow2.org/view/OW2-Project-of-the-Month/September-2024Mercator)** by the OW2 community, recognizing its code quality, documentation depth, community momentum and real-world impact in cybersecurity.

**500+ ⭐ GitHub · 72 forks · 30+ countries**

</div>
</div>

### Conference presentations

<p style="font-size: 0.88em;">Mercator has been presented at major security and Open Source conferences: 🎥 <strong><a href="https://www.youtube.com/watch?v=FDYN8MLPBjg">Voxxed Days 2025</a></strong>, 🎥 <strong><a href="https://www.youtube.com/watch?v=JYLkfuoj5MI">Hack.lu 2024</a></strong>, 🎥 <strong><a href="https://www.sstic.org/2023/presentation/mercator_-_la_cartographie_des_systmes_dinformation/">SSTIC 2023</a></strong>, 📰 <strong><a href="https://boutique.ed-diamond.com/home/1763-linux-pratique-146.html">Linux Pratique n°146</a></strong>.</p>

<br>

## Open Source and professional support {#support}

### Mercator is entirely free

<p style="font-size: 0.88em;">All of Mercator's features are freely available under the <strong>GPL license</strong>. There are no hidden modules, no functional limitations, and no artificial intelligence. Community support is provided via <strong><a href="https://github.com/dbarzin/mercator/discussions">GitHub Issues and Discussions</a></strong>.</p>

<br>

### Professional support contract

<p style="font-size: 0.88em;">For organizations that need contractual guarantees, <strong><a href="https://www.sourcentis.com">Sourcentis</a></strong> offers an annual support contract. It includes a <strong>guaranteed response time</strong> (4h to 48h depending on criticality), <strong>email support</strong> with a dedicated contact, <strong>hotfix delivery within 5 business days</strong>, <strong>assisted installation and onboarding</strong>, and access to the <strong>advanced knowledge base</strong>.</p>

<p style="font-size: 0.88em;"><strong>Ideal for</strong>: healthcare organizations, NIS2 essential entities, large organizations, and any context where tool availability is critical and a contractual SLA is required.</p>

<div style="margin: 1.5em 0;">
  <a href="https://www.sourcentis.com/contact/" class="btn btn-primary">→ Request a quote</a>
</div>

<br>

## Get started with Mercator

<p style="font-size: 0.88em;"><strong>Quick installation</strong> — Follow the <strong><a href="https://github.com/dbarzin/mercator/blob/master/guides/INSTALL_VM.md">installation guide on GitHub</a></strong> or deploy in minutes with Docker.</p>

<p style="font-size: 0.88em;"><strong>Full documentation</strong> — Everything is available at <strong><a href="https://dbarzin.github.io/mercator">dbarzin.github.io/mercator</a></strong>: configuration, API reference, feature guides.</p>

<p style="font-size: 0.88em;"><strong>Join the community</strong> — Ask questions, share feedback and contribute on <strong><a href="https://github.com/dbarzin/mercator/discussions">GitHub Discussions</a></strong>.</p>
