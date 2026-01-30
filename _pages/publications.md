---
layout: archive
title: "Projects"
permalink: /publications/
author_profile: false
---

{% include base_path %}

<div class="projects-intro">
</div>

<div class="projects-grid">
{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
</div>
