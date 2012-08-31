---
layout: guides
title: Listing introduction
categories: 
- Listing
- Orders
- Manage Questions
- Notifications
menu: seller
tags: 
- Listing
---

As you know, MELI is an e-commerce platform in which users can buy and sell items. This tutorials are going to show you, the developer, how to list your item using the Items API.

## Special considerations for real estate, vehicles & services {#further-consideration}

In MELI you can list different type of items which can be grouped in the following categories:

*Products    
*Vehicles    
*Real estate    
*Services    


## What is an item? {#what-is-an-item}

Each object that can be sold or bought is an item, for example: A book, a computer, a telephone, a car, a table, a house, even a dog. The item is owned by a user.

## What happens when I list an Item?{#item-list}

If you want to sell an auto part, you need to list it first. Each item that is listed on MELI will:

Appear in the MELI listings. For example, when a user search “volante gol” he will get the list of this auto part in which your item will be shown.

Have a VIP (View Item Page). A descriptive web-page in which you are going to see information about the auto part.
You should provide attributes related to your item at the time of listing.


## MELI listings result {#visual-explanation-listing}

MELI listing shows these relevant item attributes: an <a href="javascript:void(0)" onClick="goToByScroll('item-title')">item title</a> (1) and an <a href="javascript:void(0)" onClick="goToByScroll('item-title')">item subtitle</a> (2), an <a href="javascript:void(0)" onClick="goToByScroll('item-price')">item price</a> (3), a <a href="javascript:void(0)" onClick="goToByScroll('seller-category')">seller category</a> (4), a <a href="javascript:void(0)" onClick="goToByScroll('sold-quantity')">sold quantity</a> (5) and a <a href="javascript:void(0)" onClick="goToByScroll('seller-address')">seller address</a> (6)


![meli listing](/images/meli-listing.png)

## VIP - View Item Page {#visual-explanation-vip}

After a search, if the user clicks an item he will find more specific information related to items. Below you can see an example of the VIP and the returned elements by a request such as [text query](/search-by-text-query). In this information you can see: the list of <a href="javascript:void(0)" onClick="goToByScroll('item-pictures')">item pictures</a> (1), an <a href="javascript:void(0)" onClick="goToByScroll('item-title')">item title</a> (2), an <a href="javascript:void(0)" onClick="goToByScroll('item-price')">item price</a> (3), a <a href="javascript:void(0)" onClick="goToByScroll('seller-address')">seller address</a> (4), a <a href="javascript:void(0)" onClick="goToByScroll('sold-quantity')">sold quantity</a> (5), a link to [ask a question](/ask-a-question) (6), a <a href="javascript:void(0)" onClick="goToByScroll('seller-reputation')">seller reputation</a> (7) with a <a href="javascript:void(0)" onClick="goToByScroll('seller-category')">seller category</a> and a tab with a <a href="javascript:void(0)" onClick="goToByScroll('detailed-decription')">detailed description</a> (8). 


![vip](/images/vip.png)

## What is an Item Attribute?{#item-attribute}

Each item has several attributes, these attributes represent information about your item and your listing. This attributes are shown in the listings and in the VIP. Following our example you can retrieve data from API using this URL:

<pre class="terminal">
curl https://api.mercadolibre.com/items/MLB233759102
</pre>

{% highlight javascript %} 
{
  .... 	
  "site_id": "MLB",
  "title": "Volante Rallye Super Surf Gol Parati Saveiro G1 G2 G3 G4 G5",
  "subtitle": "Pode Ser Instalado Em Gm E Fiat /cubo Gratis + Brinde",
  "seller_id": "21346017",
  "category_id": "MLB46653",
  "price": 178.9,
  "initial_quantity": 993,
  "available_quantity": 131,
  "sold_quantity": 1042,
  "pictures": [...],
  "video_id": null,
  "descriptions": [...],
  "seller_address": {...},
  ...
}
{% endhighlight %}

Take a look at response retrieved. It has a lot of parameters. Use <code>OPTIONS</code> http method to get a <code>JSON</code> encoded response that will describe the API, with all the allowed methods and connections to other APIs. It is a standard format to get [API documentation](/design-considerations/#options).
In this guide we will cover just those before mentioned.



## Other considerations{#other-considerations}

The Items API tutorials require a basic understanding of the curl Linux command, you can get information of how to use it in our Basic Curl Tutorial.
To list an item with the Items API, you will need an access_token, we recommend that you read the [Authorization Tutorial](../authentication-and-authorization).
Don’t worry if you don’t understand how to get an access_token, at the end of each tutorial you will see a Javascript example using the MELI Javascript SDK, that do not require access_token.
