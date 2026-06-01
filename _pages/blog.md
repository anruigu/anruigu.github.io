---
layout: single
title: "Blog"
permalink: /blog/
author_profile: true
---

<div class="blog-series">
<div class="blog-series__title">RL Algorithms to Live By</div>
<div class="blog-cards blog-cards--row">

<a href="https://app.notion.com/p/IRL-2-RL-algorithms-to-live-by-3717dfe162db80938144c47a317a53f7" class="blog-card" target="_blank" rel="noopener">
  <div class="blog-card__title">1 -IRL&sup2;</div>
  <div class="blog-card__preview">I&rsquo;m doing inverse reinforcement learning on myself: inverse RL in real life.</div>
  <div class="blog-card__meta">Read on Notion &rarr;</div>
</a>

<a href="https://app.notion.com/p/RL-Algorithms-to-Live-By-2-Curiosity-3727dfe162db80438ac7f9c09e7176fc" class="blog-card" target="_blank" rel="noopener">
  <div class="blog-card__title">2 - Curiosity </div>
  <div class="blog-card__preview">I want to have 100% conviction in everything I put out. </div>
  <div class="blog-card__meta">Read on Notion &rarr;</div>
</a>


<div class="blog-card blog-card--placeholder">
  <div class="blog-card__title">3-Regret</div>
  <div class="blog-card__preview">Coming soon.</div>
  <div class="blog-card__meta">Draft &middot; In progress</div>
</div>

</div>
</div>

<div class="blog-cards">

<a href="https://www.notion.so/Scaling-Taste-3357dfe162db802aa71cc4c85e3273db" class="blog-card" target="_blank" rel="noopener">
  <div class="blog-card__title">Scaling Taste</div>
  <div class="blog-card__preview">Subjective capabilities require more than creating pseudo-verification to plug back into RLVR approaches that worked for math/coding. It requires deciding what/when/how to introduce human supervision, creative ways to generate/insert it, and learning good representations of human data to maximally utilize it.</div>
  <div class="blog-card__meta">Read on Notion &rarr;</div>
</a>

</div>

<style>
.blog-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin-top: 1.5rem;
}
.blog-series {
  margin-top: 1.5rem;
  padding: 1.25rem;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  background: #fbfbfb;
}
.blog-series__title {
  font-weight: 700;
  font-size: 1.15rem;
  margin-bottom: 0.9rem;
}
.blog-series .blog-cards {
  margin-top: 0;
}
.blog-cards--row {
  grid-template-columns: repeat(3, 1fr);
}
@media (max-width: 768px) {
  .blog-cards--row {
    grid-template-columns: 1fr;
  }
}
.blog-card {
  display: block;
  padding: 0.85rem 1rem;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  text-decoration: none !important;
  color: inherit !important;
  background: #fff;
  transition: box-shadow 0.15s ease, transform 0.15s ease, border-color 0.15s ease;
}
.blog-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border-color: #c8c8c8;
  transform: translateY(-1px);
}
.blog-card--placeholder {
  border-style: dashed;
  background: #fafafa;
  color: #999 !important;
  cursor: default;
}
.blog-card--placeholder:hover {
  box-shadow: none;
  border-color: #e5e5e5;
  transform: none;
}
.blog-card__title {
  font-weight: 700;
  font-size: 0.95rem;
  margin-bottom: 0.35rem;
}
.blog-card__preview {
  font-size: 0.82rem;
  line-height: 1.4;
  color: #444;
  margin-bottom: 0.5rem;
}
.blog-card__meta {
  font-size: 0.7rem;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
</style>
