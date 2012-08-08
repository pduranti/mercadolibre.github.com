---
layout: 2columns
title: List items
categories: guides
tags: Selling
---

# List your Item

The first step in selling is list an item on MercadoLibre. Sellers can list an item by MercadoLibre site or by an application using Listing API. Both working exactly in selling.

There are a number of considerations over an item as title, category, price, currency or description. You already know what items and attributes exists. If you don’t know we recommend that you read the [Listings Introduction tutorial](/listing-introduction).

Some properties of items affects the appeareance in various pages where items are viewed (the view item page, the search pages, the category browser page )  

There are mandatory attributes to list an item. 

So, let’s see how to list items in MELI. Don’t worry about the different attribute codes, we are going to explain each one later.

### Table of Contents
- [Defining attributes](#list-defining-attributes)
- [Special considerations for real estate, vehicles & services](#further-consideration)


## Defining attributes {#list-required-attributes}

To create your first item you need a number of attributes that can be set, some are required and some optional. All define how the item is displayed, how buyers can purchase it and how it will be used in searching results.    

### Title {#listing-title-attribute}

Title is the main descriptor of an item. This label will be used in searching and it's an important component of your item's detail. This is a required attribute. For more details about this attribute in MercadoLibre you can see the [visual introduction](/listing-introduction) and the [item title section](/listing-introduction/#item-title).   

You can add a subtitle attribute, that is optional, and it is used in view item page or in search result list. Together these parameters are very important to describe your item. If you have doubts about how to describe your item, visit [MercadoLibre site help](http://www.mercadolibre.com/jm/ml.faqs.framework.main.FaqsController?pageId=FAQ&faqId=9564&categId=MEJVT&type=FAQ).   


### Description {#listing-description-attribute}

In VIP (View Item Page) you can see title and description. Description is displayed in an iframe. There are some considerations to work with descriptions, if you are interested in increase your knowledge see [add description item](/add-description-item) section. 

For more details about this attribute in MercadoLibre you can see the [visual introduction](/listing-introduction)

### Condition {#listing-condition-attribute}

When publish an item in MercadoLibre site you need to declare if the item is new or used. This attribute is mandatory to complete a list operation.

### Available quantity {#listing-available-quantity-attribute}

It defines amount of items availables to be sold. 

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

Sellers must define a category in MercadoLibre site. This attribute is mandatory and only accepts pre-defined id's. For more information about category details see [categories documentation](/categories-introduction). If you need to define which is the best category for your item see [defining best category for an item](/choose-category-for-an-item) section.

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

This is another case of a mandatory attribute that only accepts pre-defined attributes. You cand listing a by free, bronze, silver, gold and gold premium. For more details about [listing type API](#).
Depending of which is the listing type selected your sell will have cost and will rank better in searches. For more details about listing types costs you can visit [MercadoLibre help site](http://www.mercadolibre.com/jm/ml.faqs.framework.main.FaqsController?pageId=FAQ&faqId=2407&categId=COST&type=FAQ).



## Listing example{#list-example}

We're ready to list our first item. You can use the code below to create your first item:

<pre class="terminal">
curl -X POST -H "Content-Type: application/json" -d
'{
	"title":"Harry Potter and the Sorcerer stone - Unique Cover",
	"category_id":"MLA1227",
	"price":10,
	"currency_id":"ARS",
	"available_quantity":1,
	"buying_mode":"buy_it_now",
	"listing_type_id":"bronze",
	"condition":"new",
	"description":"This is the first Harry Potter book that was printed outside the UK, {{"<strong> I bought it in San Francisco at the Harry Potters week in 2009 </strong>" | xml_escape }} Do not miss the opportunity, it is in perfect conditions and with a unique design cover",
	"pictures":[
		{"source":"http://upload.wikimedia.org/wikipedia/en/a/a7/Original_Paperback_Cover.jpg"},
		{"source":"http://upload.wikimedia.org/wikipedia/en/2/2c/Harry_Potter_and_the_Philosopher%27s_Stone.jpg"}
	]
}'

https://api.mercadolibre.com/items?access_token=$ACCESS_TOKEN  
</pre>
As you may guess, each type of item has its own attributes and restrictions when listing them. Please refer to the [API Appendix](/guide-appendix) for more information 
about how to obtain and use these attributes.

The Items API will automatically download the provided images to MELI Storage and creates a listing for your item. You will receive the following Json response:


{% highlight javascript %}
{
  "id":"MLA421174922",
  "site_id":"MLA",
  "title":"Harry Potter And The Sorcerer Stone - Unique Cover",
  "permalink":"http://articulo.mercadolibre.com.ar/MLA-421174922-harry-potter-and-the-sorcerer-stone-unique-cover-_JM",
  ...
}
{% endhighlight %}

**Congratulations!** You have just listed your first item! You can access the Item’s VIP through the permalink attribute.  

If you have questions regarding how to get your access token to list items, please refer to the [getting started](/getting-started) tutorial. In addition, if you wish to validate your item before listing, check out the [item validation](/validate-item) tutorial.    
    
**Note:** If you get any errors trying to post your item, please refer to the [selling conditions](http://www.mercadolibre.com/jm/ml.faqs.framework.main.FaqsController?pageId=FAQ&faqId=2407&categId=COST&type=FAQ) page. 

## Best Practices

Please, don't use list operation to test item's definition. Instead, use [validate operation](/validate-item) item before use list operation.

## Special considerations for real estate, vehicles & services {#further-consideration}

In MELI you can list different type of items which can be grouped in the following categories:

*Products    
*Vehicles    
*Real estate    
*Services    


If you want to try with another example , [here](/real-estate-list-item) you can see how to list real estate items in MELI.
