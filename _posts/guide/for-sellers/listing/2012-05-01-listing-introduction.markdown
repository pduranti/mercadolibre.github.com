---
layout: guides
title: Introduction
categories: 
- Listing
- Real Estate
- Manage Listings
- Orders
- Manage Questions
- Notifications
menu: 
- Sellers &amp; Integrators
tags: 
- Listing
---

In our Marketplace people can buy and sell items and publish classifieds for real estate and motors, in this section you are going to learn how to do it with our API.

## Special considerations for real estate, vehicles & services {#further-consideration}

Listings are divided in one of the following categories:

*Products    
*Vehicles    
*Real estate    
*Services    


## What is an item? {#what-is-an-item}

Each object that can be sold or bought is an item, for example: A book, a computer, a telephone, a car, a table, a house, even a dog. The item is owned by a user.

## What happens when I list an Item?{#item-list}

If you want to sell something you need to list it as an item as first thing.

Each item will appear in the listings results for some search. For example, when a user searches for the query “volante gol”, will get a list of items as result. Your item can be in this list.

When someone clicks on an item, the VIP is displayed. Showing all the information about the item, that was provided at the time of listing.


## Listings results {#visual-explanation-listing}

Listing results show 6 attributes: an <a href="javascript:void(0)" onClick="goToByScroll('item-title')">item title</a> (1) and an <a href="javascript:void(0)" onClick="goToByScroll('item-title')">item subtitle</a> (2), an <a href="javascript:void(0)" onClick="goToByScroll('item-price')">item price</a> (3), a <a href="javascript:void(0)" onClick="goToByScroll('seller-category')">seller category</a> (4), a <a href="javascript:void(0)" onClick="goToByScroll('sold-quantity')">sold quantity</a> (5) and a <a href="javascript:void(0)" onClick="goToByScroll('seller-address')">seller address</a> (6)


![meli listing](/images/meli-listing.png)

## VIP (View Item Page) {#visual-explanation-vip}

When a user chooses an item from the result, the VIP display all the details of the item.
Information on the VIP:
* a list of <a href="javascript:void(0)" onClick="goToByScroll('item-pictures')"> pictures</a> for the item(1)
* an <a href="javascript:void(0)" onClick="goToByScroll('item-title')">item title</a> (2)
* an <a href="javascript:void(0)" onClick="goToByScroll('item-price')">item price</a> (3)
* a <a href="javascript:void(0)" onClick="goToByScroll('seller-address')">seller address</a> (4)
* a <a href="javascript:void(0)" onClick="goToByScroll('sold-quantity')">sold quantity</a> (5)
* a link to [ask a question](/ask-a-question) (6)
* a <a href="javascript:void(0)" onClick="goToByScroll('seller-reputation')">seller reputation</a> (7)
* a <a href="javascript:void(0)" onClick="goToByScroll('seller-category')">seller category</a> 
* a <a href="javascript:void(0)" onClick="goToByScroll('detailed-decription')">detailed description</a> (8). 


![vip](/images/vip.png)

## Items fields {#item-attribute}

* Items URL 
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

Take a look at response retrieved. It has a lot of parameters. Use <code>OPTIONS</code> http method to get a <code>JSON</code> encoded response that will describe the API, with all the allowed methods and connections to other parto fo API. It is a standard format to get [API documentation](/design-considerations/#options).
In this guide we will cover just those before mentioned.

