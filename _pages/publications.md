---
layout: single
title: "Publications"
permalink: /publications/
author_profile: true
---

<div class="pub-cards">

<div class="pub-card">
  <div class="pub-card__title">Fig: Automated Multiagent Behavior Elicitor</div>
  <div class="pub-card__authors"><strong>Anrui (Allie) Gu</strong>, Zhichao Wang, Nicolai Ouporov</div>
  <div class="pub-card__preview">An agentic system that takes a natural language behavior description and performs targeted elicitation interventions on game environments, turning multiagent games into programmable test beds for behavior evaluation.</div>
  <div class="pub-card__meta">
    <a href="/files/fig.pdf" target="_blank" rel="noopener">Paper &rarr;</a>
    <a href="https://github.com/fleet-ai/fig" target="_blank" rel="noopener">Code &rarr;</a>
  </div>
</div>

</div>

<style>
.pub-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin-top: 1.5rem;
}
.pub-card {
  display: block;
  padding: 0.85rem 1rem;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  background: #fff;
  transition: box-shadow 0.15s ease, transform 0.15s ease, border-color 0.15s ease;
}
.pub-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border-color: #c8c8c8;
  transform: translateY(-1px);
}
.pub-card__title {
  font-weight: 700;
  font-size: 0.95rem;
  margin-bottom: 0.35rem;
}
.pub-card__authors {
  font-size: 0.8rem;
  color: #555;
  margin-bottom: 0.35rem;
}
.pub-card__preview {
  font-size: 0.82rem;
  line-height: 1.4;
  color: #444;
  margin-bottom: 0.5rem;
}
.pub-card__meta {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.pub-card__meta a {
  color: #888 !important;
  text-decoration: none !important;
  margin-right: 1rem;
}
.pub-card__meta a:hover {
  color: #333 !important;
}
</style>
