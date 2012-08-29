---
layout: guides
title: List items
categories: Selling Orders
menu: seller
tags: Selling
---


# List your Item

<div class="contents">
  <h5>Table of Contents</h5>
  <dl>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('overview')">Overview</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('list-example')">Listing example</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('best-practices')">Best Practices</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('list-defining-attributes')">Defining attributes</a></dt>
  </dl>
</div>

## Overview {#overview}

The first step in selling is list an item on MercadoLibre. Sellers can list an item by MercadoLibre site or by an application using Listing API. Both working exactly in selling.

There are a number of considerations over an item as title, category, price, currency or description. You already know what items and attributes exists. If you don’t know we recommend that you read the [Listings Introduction tutorial](/listing-introduction).

Some properties of items affects the appeareance in various pages where items are viewed (the view item page, the search pages, the category browser page )  

There are mandatory attributes to list an item. 

## Listing example{#list-example}

We're ready to list our first item. You can use the code below to create your first item:

<pre class="terminal">
curl -X POST -H "Content-Type: application/json" -d
'{
  "title":"Anteojos Ray Ban Wayfare",
  "category_id":"MLA5529",
  "price":10,
  "currency_id":"ARS",
  "available_quantity":1,
  "buying_mode":"buy_it_now",
  "listing_type_id":"bronze",
  "condition":"new",
  "description": "Item:, {{"<strong> Ray-Ban WAYFARER Gloss Black RB2140 901 </strong>" | xml_escape }} Model: RB2140. Size: 50mm. Name: WAYFARER. Color: Gloss Black. Includes Ray-Ban Carrying Case and Cleaning Cloth. New in Box",
  "pictures":[
    {"source":"http://upload.wikimedia.org/wikipedia/commons/f/fd/Ray_Ban_Original_Wayfarer.jpg"},
    {"source":"http://en.wikipedia.org/wiki/File:Teashades.gif"}
  ]
}'
https://api.mercadolibre.com/items?access_token=$ACCESS_TOKEN  
</pre>

The Items API will automatically download the provided images to MELI Storage and creates a listing for your item. You will receive the following Json response:

{% highlight javascript %}
{
  "id":"MLA430387888",
  "site_id":"MLA",
  "title":"Anteojos Ray Ban Wayfare",
  "sold_quantity":0,
  "permalink":"http://articulo.mercadolibre.com.ar/MLA-430387888-anteojos-ray-ban-wayfare-_JM",
  ...
}
{% endhighlight %}

**Congratulations!** You have just listed your first item! You can access the Item’s VIP through the permalink attribute.  

If you have questions regarding how to get your access token to list items, please refer to the [getting started](/getting-started) tutorial. In addition, if you wish to validate your item before listing, check out the [item validation](/validate-item) tutorial.    
    
**Note:** If you get any errors trying to post your item, please refer to the [selling conditions](http://www.mercadolibre.com/jm/ml.faqs.framework.main.FaqsController?pageId=FAQ&faqId=2407&categId=COST&type=FAQ) page. 

## Best Practices {#best-practices}

Please, don't use list operation to test item's definition. Instead, use [validate operation](/validate-item) item before use list operation.

## Defining attributes {#list-defining-attributes}

To create your first item you need a number of attributes that can be set, some are required and some optional. All define how the item is displayed, how buyers can purchase it and how it will be used in searching results.    

### Title {#listing-title-attribute}

Title is the main descriptor of an item. This label will be used in searching and it's an important component of your item's detail. This is a required attribute. For more details about this attribute in MercadoLibre you can see the [visual introduction](/listing-introduction) and the [item title section](/listing-introduction/#item-title).   

You can add a subtitle attribute, that is optional, and it is used in view item page or in search result list. Together these parameters are very important to describe your item. If you have doubts about how to describe your item, visit [MercadoLibre site help](http://www.mercadolibre.com/jm/ml.faqs.framework.main.FaqsController?pageId=FAQ&faqId=9564&categId=MEJVT&type=FAQ).   


### Description {#listing-description-attribute}

In VIP (View Item Page) you can see title and description. Description is displayed in an iframe. There are some considerations to work with descriptions, if you are interested in increase your knowledge about this see [add description item](/add-description-item) section. 
Also you have details about this attribute in MercadoLibre as you can see the [visual introduction](/listing-introduction).

### Condition {#listing-condition-attribute}

When publish an item in MercadoLibre site you need to declare if the item is <strong>new</strong> or <strong>used</strong>. This attribute is mandatory to complete a list operation.

### Available quantity {#listing-available-quantity-attribute}

It defines the amount of items availables to be sold. The highest value is defined on listing type chose. See more details in [listing type](#listing-type-attribute) section.


### Pictures {#listing-picture-attribute}

Pictures are not mandatory but we strongly recommend to use them in listing an item. Pictures can make an item more appealing, and give buyers a better idea of the item's appearance. Basically you should add an array of, at the most, six URL pictures. 

{% highlight javascript %} 
{
 .... 	
 "pictures":[
	{"source":"http://yourServer/path/to/your/picture.jpg"},
	{"source":"http://yourServer/path/to/your/otherPicture.gif"},
	{"source":"http://yourServer/path/to/your/anotherPicture.png"}
 ]
 ...
}
{% endhighlight %}

Also you can upload your picture en MELI. For more details about how to update a picture visit [add pictures item](/add-pictures-item) section.

### Category {#listing-category-attribute}

Sellers must define a category in MercadoLibre site. This attribute is mandatory and only accepts pre-defined id's. For more information about category details see [categories documentation](/categories-introduction). If you need to know which is the best category for your item see [defining best category for an item](/choose-category-for-an-item) section.

{% highlight javascript %} 
{
 .... 	
	"category_id":"MLA12683",
 ...
}
{% endhighlight %}


### Price {#listing-price-attribute}

When you define a new item it must have a staring price. This is a mandatory attribute. Besides price, you need to define [currency](#listing-currency-attribute).

### Currency {#listing-currency-attribute}

This attribute is mandatory too. But you need to define it using an pre-defined id's. If you need more help on currencies see [currency API](/guide-appendix/#currencies-api)

### Listing type {#listing-type-attribute}

This is another case of a mandatory attribute that only accepts pre-defined values. There are different listing types availables for each site (For more details about sites see [Site API](https://api.mercadolibre.com/sites)). 

<pre class="terminal">
curl https://api.mercadolibre.com/sites/MLA/listing_types
</pre>

{% highlight javascript %}
[
  ...
  {
    "site_id": "MLA",
    "id": "silver",
    "name": "Plata",
  },
  {
    "site_id": "MLA",
    "id": "bronze",
    "name": "Bronce",
  },
  ...
]
{% endhighlight %}

You can listing a by free, bronze, silver, gold and gold premium. Depending of which is the listing type selected your sell will have cost and will rank better in searches. In order to have an overview over this API we will mention a number of attributes for "silver" ID listing type. 

<pre class="terminal">
curl https://api.mercadolibre.com/sites/MLA/listing_types/silver
</pre>

{% highlight javascript %}
{
  "id": "silver",                          <-- Mandatory ID in listing operation
  "not_available_in_categories": [],
  "configuration": {
    "name": "Plata",                       <-- Human-friendly name using site language
    "listing_exposure": "mid",
    "requires_picture": false,
    "max_stock_per_item": 999,             <-- Highest value that you can define
    "duration_days": {                     <-- Indicates duration for each buying mode
      "buy_it_now": 60,
      "auction": 15,
      "classified": null,
    },
    "mercado_pago": "mandatory",
    "listing_fee_criteria": {...},         <-- Rules for publishing cost
    "sale_fee_criteria": {...},            <-- Rules for selling cost
  },
  "exceptions_by_category": [...],
}
{% endhighlight %}

For more details about listing type costs you can visit [MercadoLibre help site](http://www.mercadolibre.com/jm/ml.faqs.framework.main.FaqsController?pageId=FAQ&faqId=2407&categId=COST&type=FAQ).
