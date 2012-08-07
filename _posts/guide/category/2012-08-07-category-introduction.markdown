---
layout: 2columns
title: Category API
categories: guides
tags: Category
---


# Category API

### Table of Contents
- [Overview](#overview)
- [Categories API](#categories-api)
- [Categories Dump](#categories-dump)

## Overview {#overview}

Some of the tutorials described in this site need several “id’s” from different MELI’s API’s.

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

As you can see in the JSON above, you need to specify the **category_id**, the **currency_id** and the **listing_type_id**. This particular three fields are mandatory and only accepts pre-defined id’s. You can see the different id’s that these fields accept by looking at the Category, Currencies and Listing Type APIs.

## Categories API {#categories-api)}

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

## Categories Dump {#categories-dump}

The category tree does not change very often. If you prefer you can request a dump of the whole category tree for a given country site for offline processing.
This API returns the category tree in JSON format within a gzip-encoded response.

To get the categories for Brasil, use this URL:

	https://api.mercadolibre.com/sites/MLB/categories/all

To get the categories for Argentina, use this URL:

	https://api.mercadolibre.com/sites/MLA/categories/all

###Modification Headers
This URL contains 2 headers that can be used to check when was the dump last generated.

- **X-Content-Created**: contains the date of the last generation.
- **X-Content-MD5**: contains the MD5 checksum of last generation.

<pre class='terminal'>
~$ curl -I  https://api.mercadolibre.com/sites/MLB/categories/all
HTTP/1.1 200 OK
Server: nginx/1.0.4
Date: Tue, 24 Jul 2012 15:14:58 GMT
Content-Type: application/json;charset=UTF-8
Connection: keep-alive
X-MLAPI-Version: 1.9.5
Content-Encoding: gzip
X-Content-Created: 2012-07-24T14:00:59.716Z
X-Content-MD5: 943541196986770119b4af1e66bda2dc
</pre>
