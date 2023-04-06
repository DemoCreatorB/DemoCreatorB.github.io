---
title: "Jekyll/Windows"
layout: archive
permalink: categories/Windows
author_profile: true
sidebar_main: true
---

***

{% assign posts = site.categories.Blog %}
{% for post in posts %} {% include archive-single2.html type=page.entries_layout %} {% endfor %}
