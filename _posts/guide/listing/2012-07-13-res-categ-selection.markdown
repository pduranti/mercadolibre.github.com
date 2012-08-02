---
layout: 2columns
title: Real estate listing
categories: guides-res
tags: categ-selection
---

#List Real Estate properties

Operation and property type selection	{#categselection}
---------------------------------------
To list a real estate property, you will have to choose the operation and property type for the propety. **This in MELI is known as "category_id"**. First, determine the "SITE_ID" that corresponds to the country your user belongs to. To accomplish this go to the following URL:

<a href="https://api.mercadolibre.com/sites" target="_blank">https://api.mercadolibre.com/sites</a>

Once there you will be able to determine your SITE_ID, which is the "id" for your corresponding country. 

Now that you have your SITE_ID, you can now access the following URL (by browser or by sending a GET request):

<pre class="terminal">
 https://api.mercadolibre.com/categories/SITE_ID1459
</pre>

If your user belongs, for example, to Argentina, then the URL would be: <a href="https://api.mercadolibre.com/categories/MLA1459" target="_blank">https://api.mercadolibre.com/categories/MLA1459</a>

Once there, browse within the "children categories" element, according to the operation and property type you are interested in (you can do this by clicking the "id") <u>until you reach a leaf category</u>. You will know when you have reached a leaf category once you reach a category with an empty "children_categories" array.

Save this Category ID, since you will be needing it later on, when putting together the JSON for publishing the property.

According to the selected Category ID, the property's attributes you will have to post will vary. [Click here](/res-attrs-selection) to learn how to obtain the corresponding attributes for your selected Category ID.