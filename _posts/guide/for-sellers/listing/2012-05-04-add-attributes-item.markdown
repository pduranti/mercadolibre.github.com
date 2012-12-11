---
layout: guides
title: Attributes selection
categories: 
- Listing
- Manage Listings
- Orders
- Manage Questions
menu: 
- Listing &amp; Selling
tags: 
- Listing
---

##Category attributes	{#attributes} 

When listing an item, its attributes will vary according to the chosen category. Once you have your Category ID, you can see its attributes by accessing the following URL:

<pre class="terminal">
curl https://api.mercadolibre.com/categories/CATEGORY_ID/attributes
</pre>

See [category documentation](/category-introduction) for more details about categories hierarchy.


## Attribute types

If your user belongs, for example, to Argentina, and the chosen category is 1467, then the URL would be: 

<a href="https://api.mercadolibre.com/categories/MLA1467/attributes" target="_blank">https://api.mercadolibre.com/categories/MLA1467/attributes</a>


{% highlight javascript %}
[
   {
    "id": "MLA1459-INMUEBLE",
    "name": "Inmueble",
    "type": "string",
    "tags": - [
      "fixed",
    ],
    "values": - [
      - {
        "id": "MLA1459-INMUEBLE-CASA",
        "name": "Casa",
      },
    ],
    "attribute_group_id": "FIND",
    "attribute_group_name": "Ficha técnica",
  },
  {...},
  {...},
]
{% endhighlight %}


Each attribute has id, name, type, tags and values.

<ul class="ch-list parameters">
<li>An attribute with the "tags" element containing "fixed" means that this attribute is indeed fixed, and <strong>you don't need to send it</strong> with the property JSON.</li>

<li>Attribute type "list" means you will have a list of the possible values, for which you will have to send the desired value <strong>id</strong>.</li>

<li>Attribute type "boolean" means you will have two possible values (one for true, one for false), for which you will have to send the desired value <strong>id</strong>.</li>

<li>Attribute type "string" with "tags" not containing "fixed" means you will have to send the desired value as text.</li>

<li>Attribute with "tags" containing "required" means the attribute <u>is mandatory</u> when listing the property.</li>

</ul>
For each attribute you choose to publish, save its attribute id and its value id as well. You will be needing them later on, when putting together the JSON for listing the property. Keep in mind that required attributes are mandatory and vary among categories. Not sending the correct attributes when listing is a very common mistake.
