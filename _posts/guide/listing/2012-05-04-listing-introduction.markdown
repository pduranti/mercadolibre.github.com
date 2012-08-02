---
layout: 2columns
title: Listing introduction
categories: guides
tags: Selling
---

# Listings Introduction

As you know, MELI is an e-commerce platform in which users can buy and sell items. This tutorials are going to show you, the developer, how to list your item using the Items API.


## What is an item? {#what-is-an-item}

Each object that can be sold or bought is an item, for example: A book, a computer, a telephone, a car, a table, a house, even a dog. The item is owned by a user.

## What happens when I list an Item?{#item-list}

If you want to sell an auto part, you need to list it first. Each item that is listed on MELI will:

Appear in the MELI listings. For example, when a user search “volante gol” he will get the list of this auto part in which your item will be shown.

Have a VIP (View Item Page). A descriptive web-page in which you are going to see information about the auto part.
You should provide attributes related to your item at the time of listing.


## MELI listings result {#visual-explanation-listing}

MELI listing shows these relevant item attributes: an [item title] (#item-title) (1) and an [item subtitle] (#item-title) (2). An [item price](#item-price) (3). A [seller category](#seller-category) (4). a A [sold quantity](#sold-quantity) (5) and a [seller address](#seller-address) (6)


![meli listing](/images/meli-listing.png)

## VIP - View Item Page {#visual-explanation-vip}

After a search, if the user click an item, will see more specific information related to items. Below you can see an example of the VIP and the elements returned by a request such a [text query](/search-by-text-query). In this information you can see an [item title] (#item-title) (1), an [item price](#item-price) (2), a [seller reputation] (#seller-reputation) (3) and a [seller category](#seller-category) (4), a [seller address](#seller-address) (5), a [sold quantity](#sold-quantity) (6), a [category path](#category-path) (7), the list of [item pictures](#item-pictures) (8) and a tab with a [detailed description](#detailed-decription) (9). 

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


## Item Title {#item-title}

Each item has a title and subtitle. Item title will be used, for example in search by [text query](/search-by-text-query)

{% highlight javascript %} 
{
  .... 	
  "title": "Volante Rallye Super Surf Gol Parati Saveiro G1 G2 G3 G4 G5",
  "subtitle": "Pode Ser Instalado Em Gm E Fiat /cubo Gratis + Brinde",
  ...
}
{% endhighlight %}



## Item Price {#item-price}

Each item has a price number and a currency that complete real currency value. Currency changes by Site. For more details about currencies see [Currency API](/guide-appendix/#currencies-api)

{% highlight javascript %} 
{
  .... 	
  "price": 178.9,
  "base_price": 178.9,
  "currency_id": "BRL",
  ...
}
{% endhighlight %}

## Seller reputation {#seller-reputation}

## Seller category {#seller-category}

## Seller address {#seller-address}

## Sold quantity {#sold-quantity}

## Category path {#category-path}

## Item pictures {#item-pictures}

## Detailed description {#detailed-description}




## Other considerations{#other-considerations}

The Items API tutorials require a basic understanding of the curl Linux command, you can get information of how to use it in our Basic Curl Tutorial.
To list an item with the Items API, you will need an access_token, we recommends that you read the [Authorization Tutorial](../authentication-and-authorization).
Don’t worry if you don’t understand how to get an access_token, at the end of each tutorial you will see a Javascript example using the MELI Javascript SDK, that do not require access_token.
