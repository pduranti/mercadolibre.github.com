---
layout: guides
title: Introduction
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

In our Marketplace, people can buy and sell items as well as post classified ads for real estate and motors. In this section, you will learn how to do it with our API.

## Listing in different verticals {#further-consideration}

Listings are divided in the following categories:

**Products**: Almost anything that can be sold such as a computer, books, shoes or even a dog. <br/>
**Classifieds:**<br/>
&nbsp;&nbsp;&nbsp;&nbsp;***Motors:*** You can list cars, motorbikes, a boat.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;***Real estate:*** You can list any kind of property.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;***Services:*** You can offer your professional services.<br/>


## Items {#what-is-an-item}

Anything that is listed to be sold or hired is an <strong>item</strong> entity in our API.
Every item has an <strong>owner</strong>. The owner is the user who lists the item.

## What happens when I list an Item?{#item-list}

If you want to sell something you need to list it as an item as first thing.

Each item will appear in the listing results of a given search. For example, when a user searches for the query “volante gol”, as a result he will get a list of items. Your item can be in this list.

When someone clicks on an item, the VIP is displayed showing all the information about the item that was provided at the time of listing.


## Listing results {#visual-explanation-listing}

The Listing results show 6 attributes: the <a href="javascript:void(0)" onClick="goToByScroll('item-title')"> item title</a> (1) and <a href="javascript:void(0)" onClick="goToByScroll('item-title')">item subtitle</a> (2), the <a href="javascript:void(0)" onClick="goToByScroll('item-price')">item price</a> (3), the <a href="javascript:void(0)" onClick="goToByScroll('seller-category')">seller category</a> (4), the <a href="javascript:void(0)" onClick="goToByScroll('sold-quantity')">quantity sold</a> (5) and the <a href="javascript:void(0)" onClick="goToByScroll('seller-address')">seller address</a> (6)


![meli listing](/images/meli-listing.png)

## VIP (View Item Page) {#visual-explanation-vip}

When a user chooses an item from the result, the VIP displays the item details.
Information displayed on the VIP:
* (1) <a href="javascript:void(0)" onClick="goToByScroll('item-pictures')">pictures </a> of the item
* (2) <a href="javascript:void(0)" onClick="goToByScroll('item-title')">item title</a>
* (3) <a href="javascript:void(0)" onClick="goToByScroll('item-price')">item price</a> 
* (4) <a href="javascript:void(0)" onClick="goToByScroll('seller-address')">address</a> 
* (5) <a href="javascript:void(0)" onClick="goToByScroll('sold-quantity')">quantity sold</a> 
* (6) link to [ask a question](/ask-a-question) 
* (7) <a href="javascript:void(0)" onClick="goToByScroll('seller-reputation')">seller's reputation</a>
* (-) <a href="javascript:void(0)" onClick="goToByScroll('seller-category')"> seller's category</a> 
* (8) <a href="javascript:void(0)" onClick="goToByScroll('detailed-decription')">detailed description</a> 


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

Take a look at the response retrieved. It has a lot of parameters. Use <code>OPTIONS</code> http method to get a <code>JSON</code> encoded response that will describe the API, with all the allowed methods and connections to another part of the API. It is a standard format to get [API documentation](/design-considerations/#options).
In this guide, we will cover only the above-mentioned.

