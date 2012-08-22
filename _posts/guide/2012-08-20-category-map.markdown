---
layout: 1columns
title: Category Map
categories: [Category Map]
---

# Guides 

{% for category in site.categories %} 
<h2 id="{{ category[0] }}-ref">{{ category[0] }}</h2>
<ul>
  {% for post in category[1] reversed %} 
    <li><a href="{{ post.url }}">{{ post.title }}</a></li> 
	
	{% for post in category[1] %} 

  	{% endfor %}	

  {% endfor %}
</ul>
<p><a href="#{{ category[0] }}-ref">&#8617;</a></p>
{% endfor %}
