---
layout: guides
title: Category API
categories: 
- Searching
- Category
menu: 
- Searching for Items
tags: 
- Category
---

## Overview {#overview}

On MercadoLibre site, categories are a hierarchical set of groups in which items of a similar nature are listed. Categories help buyers find the kinds of items they want, as the buyer only needs to look in one category or a few categories to find items they are interested in. Sellers benefit from the use of categories by the increased likelihood of a sale due to better and faster access to items by prospective buyers.

In each MercadoLibre site has its own set of category. It means, Argentina's MercadoLibre site has different categories than Brazil's MercadoLibre site. For more details about sites see [Site API](https://api.mercadolibre.com/sites). To discover category for a specific site you can see [Categories API](#categories-api) section. 

To list an item in MercadoLibre users need to know the ID of the target category. To help users to validate a category ID, they can download the [complete category hierarchy](/category-dump) with ID and human-friendly names. 

Some of the tutorials described in this site need several “id’s” from different MELI’s API.

<div class="contents">
<h5>Table of Contents</h5>

<dl>
	<dt><a href="javascript:void(0)" onClick="goToByScroll('category-attributes')">Attributes</a></dt>
	<dt><a href="javascript:void(0)" onClick="goToByScroll('category-api')">Categories API</a></dt>
</dl>
</div>


## Attributes {#category-attributes}

Working with a special category, "imported Givenchy women perfume", we will discribe some important attributes. 

<pre class="terminal">
curl https://api.mercadolibre.com/categories/MLA9558
</pre>


{% highlight javascript %}
{
  "id": "MLA9558",
  "name": "Givenchy", 			<- human-friendly name
  "permalink": null,
  "total_items_in_this_category": 397,
  "path_from_root": [ 			<-- Path from categories root
    {...},
    {...},
    {...},
    {...},
    {...},
  ],
  "children_categories": [], 	<-- There is not children categories
  "settings": {...},
}
{% endhighlight %}


### Name

This attribute shows a human-friendly label. You cannot use this label to search items. If you are interested in searching using categories see [search items by category](/search-by-category).

### Path from root 

When you are in a category you can know the path from root to category selected. 
{% highlight javascript %}
	
  "path_from_root": [
    {
      "id": "MLA1246",
      "name": "Salud y Belleza",
    },
    {
      "id": "MLA1271",
      "name": "Perfumes y Fragancias",
    },
    {
      "id": "MLA1273",
      "name": "Mujer",
    },
    {
      "id": "MLA23090",
      "name": "Importados",
    },
    {
      "id": "MLA9558",
      "name": "Givenchy",
    },
  ],
{% endhighlight %}

Take a look how MercadoLibre uses this path to show item's category:

![path to category root](/images/path-category-root.png)

### Children category

As you can see this category don't have children, so it could be used to list an item. If you need to define which is the best category for your item see this [related section](/choose-category-for-an-item).  

## Mandatory attributes

For example, when you list an item, you have to specify the following attributes:

{% highlight javascript %}

{
	"title": "Test Item - Do Not Bid",
 	"category_id": "MLA3530",
	"price": 10,
	"currency_id": "ARS",
	"available_quantity": 1,
 	"listing_type_id": "bronze",
 	"condition":"new"
}

{% endhighlight %}

As you can see in the JSON above, you need to specify the **category_id**, the **currency_id** and the **listing_type_id**. This particular three fields are mandatory and only accepts pre-defined id’s. You can see the different id’s that these fields accept by looking at the Category, Currencies and Listing Type API.

## Categories API {#category-api}

The Sites API shows the entirely MELI category structure for a particular country, in this case Argentina.

	https://api.mercadolibre.com/sites/MLA/  
As you can see, you get information related to Argentina MELI operation, one of the JSON attributes is “categories”, in which you have the first level of categories.

{% highlight javascript %}
"categories": [
	{
	"id": "MLA5725",
	"name": "Accesorios para Vehiculos",
	},
	{
	"id": "MLA1071",
	"name": "Animales y Mascotas",
	},
	{
	"id": "MLA1367",
	"name": "Antigüedades",
	},
	{
	"id": "MLA1743",
	"name": "Autos, Motos y Otros",
},
{% endhighlight %}


For second level categories, or information related to specific categories, you have to use the Categories API sending the category ID as a URL parameter. The next example shows the information related to the “Animales y Mascotas” Category:

	https://api.mercadolibre.com/categories/MLA1071

{% highlight javascript %}
{
	"id": "MLA1071",
	"name": "Animales y Mascotas",
	"permalink": "http://home.mercadolibre.com.ar/animales-y-mascotas",
	"total_items_in_this_category": "30434",
	"path_from_root": [
		{
			"id": "MLA1071",
			"name": "Animales y Mascotas",
		},
	],
	"children_categories": [
		{
			"id": "MLA1100",
			"name": "Aves",
			"total_items_in_this_category": "1430",
		},
		{
			"id": "MLA1117",
			"name": "Caballos",
			"total_items_in_this_category": "1092",
		},
	.
	.
{% endhighlight %}

As you can see, you get the “path_from_root” and "children_categories" attributes, use these attributes to browse the categories tree to find the specific category for your item.
