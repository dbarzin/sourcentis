---
title: "Hackathon Luxembourg 2026"
date: 2026-04-18
tags: ["Mercator"]
draft: false
---

Belle participation de Mercator au [hackathon.lu 2026](https://hackathon.lu/), 
organisé par le [CIRCL](https://circl.lu/) les 14 et 15 avril à Luxembourg. 
Un événement qui réunit chaque année des développeurs et praticiens autour de 
projets open source concrets en cybersécurité — exactement là où Mercator a 
sa place.

En deux jours, nous avons concrétisé un connecteur entre Mercator et 
[CPE Guesser](https://github.com/cve-search/cpe-guesser), l'outil du CIRCL 
qui permet d'identifier automatiquement les identifiants CPE à partir du nom 
et de la version d'un composant logiciel. Un chaînon manquant pour relier 
inventaire applicatif et exposition aux vulnérabilités.

# Mercator × CPE Guesser : de l'inventaire à la vulnérabilité en un clic

💡 Le [hackathon.lu](https://hackathon.lu/) est un événement incontournable 
pour qui travaille dans l'open source sécurité au Luxembourg. Organisé par le 
CIRCL depuis plusieurs années, il rassemble deux jours durant des équipes 
pluridisciplinaires autour d'un objectif simple : produire du code utile, 
ensemble. Cette édition 2026, tenue les 14 et 15 avril, a vu plus de trente 
projets aboutir à des contributions concrètes — releases, intégrations, 
correctifs, nouvelles interopérabilités.

🔗 Mercator y était représenté avec un objectif précis : connecter la 
cartographie du SI à l'identification des vulnérabilités. Nous avons développé 
et intégré un connecteur avec **CPE Guesser**, l'outil du CIRCL qui prédit 
automatiquement les identifiants CPE (Common Platform Enumeration) à partir 
d'un nom de produit et d'une version. Concrètement, depuis les formulaires de 
cartographie de Mercator, il est désormais possible de rechercher et d'assigner 
un CPE directement, sans quitter l'application. Un identifiant CPE bien renseigné, 
c'est le point d'entrée vers les bases CVE/NVD — et donc vers une évaluation 
directe de l'exposition aux vulnérabilités connues de chaque composant 
cartographié.

🛡️ L'enjeu est concret pour tout RSSI qui pratique la cartographie : l'inventaire 
applicatif ne prend sa pleine valeur que lorsqu'il peut être mis en regard des 
vulnérabilités connues. Jusqu'ici, le passage de Mercator vers un scanner de 
vulnérabilités nécessitait un export manuel et un retraitement. Avec ce 
connecteur, le lien entre *"qu'est-ce qui tourne dans mon SI ?"* et *"quelle est 
mon exposition ?"* devient direct. C'est une avancée significative pour les 
organisations soumises à NIS2 ou engagées dans une démarche ISO 27001, où la 
connaissance de l'exposition aux CVE fait partie des exigences.

🤝 Le hackathon.lu est aussi le bon endroit pour croiser les équipes du CIRCL, 
qui maintiennent [Vulnerability-Lookup](https://www.vulnerability-lookup.org/), 
[MISP](https://misp-project.org/) et de nombreux autres outils de l'écosystème 
open source sécurité luxembourgeois et européen. Ces échanges informels, en 
présentiel, sont souvent à l'origine des meilleures intégrations — et cette 
édition ne fait pas exception. Le commit est disponible sur le 
[dépôt GitHub de Mercator](https://github.com/dbarzin/mercator/commit/a340fffcc2f399422a03c9e4798cff832994a830).

👏 Merci au CIRCL pour l'organisation impeccable de cet événement, et à toutes 
les équipes présentes pour l'énergie collective qui fait la force de ce 
hackathon. Rendez-vous en 2027 !

Source : [hackathon.lu — Outcomes 2026](https://hackathon.lu/2026/04/24/hackathon.lu-2026-outcome/)
