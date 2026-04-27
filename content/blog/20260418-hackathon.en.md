---
title: "Hackathon Luxembourg 2026"
date: 2026-04-27
tags: ["Mercator"]
draft: false
---

Mercator was part of [hackathon.lu 2026](https://hackathon.lu/), organised by 
[CIRCL](https://circl.lu/) on April 14th and 15th in Luxembourg. This annual 
event brings together developers and practitioners around concrete open-source 
cybersecurity projects — exactly where Mercator belongs.

Over two days, we built and integrated a connector between Mercator and 
[CPE Guesser](https://github.com/cve-search/cpe-guesser), the CIRCL tool that 
automatically identifies CPE identifiers from a software component's name and 
version. A missing link between application inventory and vulnerability exposure.

# Mercator × CPE Guesser: from inventory to vulnerability in one click

By: [Didier Barzin](https://www.linkedin.com/in/didier-barzin/)<br>
Mercator developer — [Sourcentis](https://www.sourcentis.lu)<br>
April 2026

💡 [hackathon.lu](https://hackathon.lu/) is a must-attend event for anyone 
working in open-source security in Luxembourg. Organised by CIRCL for several 
years now, it brings teams together for two days around a simple goal: write 
useful code, together. This 2026 edition, held on April 14th and 15th, saw 
more than thirty projects deliver concrete contributions — releases, 
integrations, bug fixes, and new interoperability bridges.

🔗 Mercator was represented with a clear objective: connecting IT system 
cartography to vulnerability identification. We developed and integrated a 
connector with **CPE Guesser**, the CIRCL tool that automatically predicts 
CPE (Common Platform Enumeration) identifiers from a product name and version. 
In practice, users can now search and assign a CPE directly from Mercator's 
cartography forms, without leaving the application. A properly assigned CPE 
identifier is the entry point into the CVE/NVD databases — and therefore 
enables a direct assessment of known vulnerability exposure for each mapped 
component.

🛡️ The value for any security officer practising IT cartography is concrete: 
an application inventory only reaches its full potential when it can be 
cross-referenced against known vulnerabilities. Until now, moving from Mercator 
to a vulnerability scanner required a manual export and post-processing. With 
this connector, the link between *"what is running in my information system?"* 
and *"what is my exposure?"* becomes direct. This is a significant step forward 
for organisations subject to NIS2 or engaged in an ISO 27001 approach, where 
awareness of CVE exposure is part of the requirements.

🤝 hackathon.lu is also the right place to meet the CIRCL teams who maintain 
[Vulnerability-Lookup](https://www.vulnerability-lookup.org/), 
[MISP](https://misp-project.org/), and many other tools in the Luxembourg and 
European open-source security ecosystem. These informal, in-person exchanges 
are often where the best integrations are born — and this edition is no 
exception. The commit is available on the 
[Mercator GitHub repository](https://github.com/dbarzin/mercator/commit/a340fffcc2f399422a03c9e4798cff832994a830).

👏 Many thanks to CIRCL for the excellent organisation of this event, and to 
all the teams present for the collective energy that makes this hackathon so 
valuable. See you in 2027!

Source: [hackathon.lu — Outcomes 2026](https://hackathon.lu/2026/04/24/hackathon.lu-2026-outcome/)
