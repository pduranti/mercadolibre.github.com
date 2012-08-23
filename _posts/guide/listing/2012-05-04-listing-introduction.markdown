---
layout: guides
title: Listing introduction
categories: Guides
guide: seller
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


## Item Title {#item-title}

Each item has a title and subtitle. Item title will be used, for example in search by [text query](/search-by-text-query).

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

For each sale confirmed in MercadoLibre, seller and buyer have 21 days to send their feedback about. Those feedback could be positive, negative or neutral. The sum of the feedbacks are the reputation of sellers and buyers. 

{% highlight javascript %} 
{
  .... 	
  "seller_id": "21346017",
  ...
}
{% endhighlight %}

To retrieve seller reputation, you need to complete other operation using seller_id over [Users API](/info-user):

<pre class="terminal">
curl https://api.mercadolibre.com/users/21346017
</pre>

{% highlight javascript %} 
{
  .... 	
 "seller_reputation": - {
    "level_id": "5_green",
    "power_seller_status": "platinum",
    "transactions": - {
      "period": "3 months",
      "total": 1947,
      "completed": 1704,
      "canceled": 243,
      "ratings": - {
        "positive": 0.99,
        "negative": 0.01,
        "neutral": 0.01,
      },
    },
  },
  ...
}
{% endhighlight %}


## Seller category {#seller-category}

In MercadoLibre sellers have a status. 

{% highlight javascript %} 
{
  .... 	
 "seller_reputation": {
 	....
    "power_seller_status": "platinum",
    
    "transactions": {
      	... 	
      
      "ratings": {
      	....
      },
    },
  },
  ...
}
{% endhighlight %}

## Seller address {#seller-address}

In item attributes information you also see seller address as one of the relevant attributes.  

{% highlight javascript %} 
 "seller_address": {
    "id": 60959901,
    "comment": "",
    "address_line": "",
    "zip_code": "",
    "city": {
      "id": "",
      "name": "são paulo",
    },
    "state": {
      "id": "BR-SP",
      "name": "São Paulo",
    },
    "country": {
      "id": "BR",
      "name": "Brasil",
    },
    "latitude": "",
    "longitude": "",
  },
{% endhighlight %}

## Sold quantity {#sold-quantity}

To complete seller details, you also see item sold quantity. 

{% highlight javascript %} 
{
  .... 	
  "sold_quantity": 1042,
  ...
}
{% endhighlight %}

## Item pictures {#item-pictures}

Each of them has an id, the hiperlink to the picture, the secure hiperlink to the picture, picture dimension and the maximum possible dimension of the picture. 

{% highlight javascript %} 
{
  .... 	
  "pictures": [
    {
      "id": "MLB221253103_5910",
      "url": "http://img2.mlstatic.com/s_MLB_v_O_f_221253103_5910.jpg",
      "secure_url": "https://www.mercadolibre.com/jm/img?s=MLB&v=O&f=221253103_5910.jpg",
      "size": "500x374",
      "max_size": "500x374",
    },
    {
	   ...    
	}
  ...
}
{% endhighlight %}

## Detailed description {#detailed-description}
{% highlight javascript %} 
  "descriptions": - [
    - {
      "id": "MLB233759102-230695964",
    },
    - {
      "id": "MLB233759102-260344107",
    },
  ],
 {% endhighlight %}


## Other considerations{#other-considerations}

The Items API tutorials require a basic understanding of the curl Linux command, you can get information of how to use it in our Basic Curl Tutorial.
To list an item with the Items API, you will need an access_token, we recommends that you read the [Authorization Tutorial](../authentication-and-authorization).
Don’t worry if you don’t understand how to get an access_token, at the end of each tutorial you will see a Javascript example using the MELI Javascript SDK, that do not require access_token.

<iframe id="search_api_embed"
  src="javascript:void(0)"
    scrolling="no"
      frameborder="0"
        width="100%"
          height="900">
</iframe>
<script type="text/javascript">
            document.getElementById('search_api_embed').src ='https://api.mercadolibre.com/items/MLB233759102';
</script>
