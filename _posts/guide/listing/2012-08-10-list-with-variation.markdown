---
layout: guides
title: List with variations
categories: Guides
guide: seller
tags: Selling
---

#List an item with variation

You already know what items and attributes are. If you don't know we recommend that you read the [Listings Introduction tutorial](/listing-introduction).

To see a list of allowed attributes in a category, you can access the Categories API with the parameter /attributes

<pre class="terminal">
curl https://api.mercadolibre.com/categories/:categID/attributes/
</pre>

Ok, now you know all types of variation that your categorie have. Let's create a JSON with our item and they variation.

<pre class="terminal">
curl -X POST -H "Content-Type: application/json" -d
'{
   "title":"Test Item - Nao ofertar",
   "category_id":"MLB103661",
   "price":10,
   "currency_id":"BRL",
   "buying_mode":"buy_it_now",
   "listing_type_id":"bronze",
   "condition":"new",
   "description": "Item com variacao !",
   "variations":[
  	{
     	"attribute_combinations":[
        	{
           	"id":"63000",
           	"value_id":"71995"
        	},
        	{
           	"id":"33000",
           	"value_id":"51993"
        	},
        	{
           	"id":"43000",
           	"value_id":"52065"
        	}
     	],
     	"available_quantity":1,
     	"price":10,
     	"picture_ids":[
        	"http://origin-static.tricae.com.br/p/Brandili-Polo-Listrada-Vermelha-e-Bege-Brandili-9265-32322-2-product.jpg"
     	]
  	},
  	{
     	"attribute_combinations":[
        	{
           	"id":"63000",
           	"value_id":"71996"
        	},
        	{
           	"id":"33000",
           	"value_id":"52045"
        	},
        	{
           	"id":"43000",
           	"value_id":"52071"
        	}
     	],
     	"available_quantity":1,
     	"price":10,
     	"picture_ids":[
        	"http://www.glamour.com.br/arquivos/ids/550471_10/78911931_1.jpg"
     	]
  	}
   ]
}'

https://api.mercadolibre.com/items?access_token=$ACCESS_TOKEN
</pre>

**Congratulations!** You have just listed your first item with variation! You can access the Item's VIP through the permalink attribute.


In this example we've created one item with two variation, each one with the respective image.

If you have questions regarding how to get your access token to list items, please refer to the [getting started](/getting-started) tutorial. In addition, if you wish to validate your item before listing, check out the [item validation](/validate-item) tutorial.    
    
**Note:** If you get any errors trying to post your item, please refer to the [selling conditions](http://www.mercadolibre.com/jm/ml.faqs.framework.main.FaqsController?pageId=FAQ&faqId=2407&categId=COST&type=FAQ) page.