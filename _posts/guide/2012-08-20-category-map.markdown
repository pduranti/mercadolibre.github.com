---
layout: 1columns
title: Category Map
subcategory: all
---

# Guides 

<ul id="guides-expando">
	<li>
		<span>Ninja 1</span>
		<ul>
			<li><a href="#">Ninja 1.1</a></li>
			<li><a href="#">Ninja 1.2</a></li>
		</ul>
	</li>
	<li>
		<span>Ninja 2</span>
		<ul>
			<li><a href="#">Ninja 2.1</a></li>
			<li><a href="#">Ninja 2.2</a></li>
		</ul>
	</li>
	<li>
		<span>Ninja 3</span>
		<ul>
			<li><a href="#">Ninja 3.1</a></li>
			<li><a href="#">Ninja 3.2</a></li>
		</ul>
	</li>
	<li>
		<a href="#">Ninja 4</a>
	</li>
</ul>


<script type="text/javascript">
	$("#guides-expando").menu();
</script>



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


