---
layout: 2columns
title: Search for Product Ads
categories: 
- Product Ads
tags:
- Product Ads
---

There are three different ways to search Product Ads. 

## By ID
One ways is searching the product Ad by ID. In order to use this service you have to do as follow:

<pre class="terminal">
curl -i -H "Accept:application/json" -H "Content-Type: application/json"
https://api.mercadolibre.com/mclics/productAd/11130279?access_token=$ACCESS_TOKEN  
</pre>

**Where '11130279' is the id of the product ad.**

You will receive the following JSON response:

{% highlight javascript %}
{ 
	"URLDestiny" : "http://www.google.com.ar",
  	"URLVisible" : "www.google.com.ar",
  	"adDailyBudget" : 1,
  	"adID" : 11130279,
  	"campaignID" : 39003,
  	"categID" : "1652",
  	"custID" : 66258610,
  	"customAdBox" : "",
  	"image" : "exampleImage.jpg",
  	"invalidLink" : false,
  	"maxCPC" : 0.14999999999999999,
  	"name" : "Default",
  	"price" : 15,
  	"refFrom" : "Reference owner",
  	"refID" : "Reference ID",
  	"siteID" : "MLA",
  	"status" : "E",
  	"title" : "Title Test",
  	"type" : "P",
  	"brand" : "ML",
  	"uriImage" : "http://img1.mlstatic.com/jm/img?v=F&f=mlinks/product_ads/MLA/66258610/exampleImage.jpg"
}
{% endhighlight %}

## By Reference
Another way of searching Product Ads is by Reference. To do so, all you have to do is:

<pre class="terminal">
curl -i -H "Accept:application/json" -H "Content-Type: application/json"
https://api.mercadolibre.com/mclics/productAd/searchByRefs/66258610?refFrom=Reference%20owner&refId=Reference%20ID&access_token=$ACCESS_TOKEN  
</pre>

**Where '66258610' is the cust_id of the user.**

You will receive the following JSON response:

{% highlight javascript %}

{ 
	"URLDestiny" : "http://www.google.com.ar",
  	"URLVisible" : "www.google.com.ar",
  	"adDailyBudget" : 1,
  	"adID" : 11130279,
  	"campaignID" : 39003,
  	"categID" : "1652",
  	"custID" : 66258610,
  	"customAdBox" : "",
  	"image" : "exampleImage.jpg",
  	"invalidLink" : false,
  	"maxCPC" : 0.14999999999999999,
  	"name" : "Default",
  	"price" : 15,
  	"refFrom" : "Reference owner",
  	"refID" : "Reference ID",
  	"siteID" : "MLA",
  	"status" : "E",
  	"title" : "Title Test",
  	"type" : "P",
  	"brand" : "ML",
  	"uriImage" : "http://img1.mlstatic.com/jm/img?v=F&f=mlinks/product_ads/MLA/66258610/exampleImage.jpg"
}

{% endhighlight %}

## By CustID
You can get all your ProductAds with your customer ID. All you have to do is:

<pre class="terminal">
curl -i -H 'Accept:application/json' -H 'Content-Type:application/json'
'https://api.mercadolibre.com/productAd/searchByCustId/66258610?access_token=$ACCESS_TOKEN'
</pre>

{% highlight javascript %}
{ 
	{ 
		"URLDestiny" : "http://www.garbarino.com/productos/ventilador-de-mesa-atma-vm8120_38102.php",
    	"URLVisible" : "www.garbarino.com",
    	"adDailyBudget" : 11,
    	"adID" : 11153891,
    	"campaignID" : 39003,
    	"categID" : "1645",
    	"custID" : 66258610,
    	"image" : "11153891.1343855663204",
    	"invalidLink" : false,
    	"maxCPC" : 0.14999999999999999,
    	"name" : "Default API",
    	"originalCategID" : "1645",
    	"price" : 239,
    	"refFrom" : "JOB_CARGA_MASIVA",
    	"refID" : "38102",
    	"siteID" : "MLA",
    	"status" : "D",
    	"title" : "Ventilador De Mesa Atma Vm8120...",
    	"type" : "P",
    	"brand" : "ML",
    	"uriImage" : "http://img1.mlstatic.com/jm/img?v=F&f=mlinks/product_ads/MLA/66258610/11153891.1343855663204"
  	},
  	{ 
  		"URLDestiny" : "http://www.garbarino.com/productos/freezer-gafa-eternity-m_47402.php",
    	"URLVisible" : "www.garbarino.com",
    	"adDailyBudget" : 11,
    	"adID" : 11153885,
    	"campaignID" : 39003,
    	"categID" : "81557",
    	"custID" : 66258610,
    	"image" : "11153885.1343855654399",
    	"invalidLink" : false,
    	"maxCPC" : 0.14999999999999999,
    	"name" : "Default API",
    	"originalCategID" : "81557",
    	"price" : 2499,
    	"refFrom" : "JOB_CARGA_MASIVA",
    	"refID" : "47402",
    	"siteID" : "MLA",
    	"status" : "D",
    	"title" : "Freezer Gafa Eternity M...",
    	"type" : "P",
    	"brand" : "ML",
    	"uriImage" : "http://img1.mlstatic.com/jm/img?v=F&f=mlinks/product_ads/MLA/66258610/11153885.1343855654399"
  }
}

{% endhighlight %}

**Where '66258610' is the cust_id of the user.**