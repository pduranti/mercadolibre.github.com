---
layout: 2columns
title: Search for Product Ads
categories: Documentation
tags: Lost
---

# Search a Product Ad
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
{ "errorsMap" : null,
  "productAdDto" : { "URLDestiny" : "http://www.google.com.ar",
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
      "uriImage" : "http://img1.mlstatic.com/jm/img?v=F&f=mlinks/product_ads/MLA/66258610/exampleImage.jpg"
    }
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
	"errorsMap":null,
	"productAdDto":
	{
		"adDailyBudget":1,
		"adID":11130162,
		"campaignID":39003,
		"categID":"1652",
		"custID":66258610,
		"invalidLink":false,
		"maxCPC":0.15,
		"name":"Default",
		"refFrom":"Reference owner",
		"refID":"Reference ID",
		"siteID":"MLA",
		"status":"A",
		"title":"Title Test",
		"type":"P",
		"URLDestiny":"http://www.google.com.ar",
		"URLVisible":"www.google.com.ar",
		"price":15
	}
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
	"errorsMap":null,
	"listProductAds":[
		{
			"adDailyBudget":"1",
			"adID":"11130162",
			"campaignID":"39003",
			"categID":"1652",
			"custID":"66258610",
			"invalidLink":"false",
			"maxCPC":"0.15",
			"name":"Default",
			"refFrom":"Reference owner",
			"refID":"Reference ID",
			"siteID":"MLA",
			"status":"A",
			"title":"Title Test",
			"type":"P",
			"URLDestiny":"http://www.google.com.ar",
			"URLVisible":"www.google.com.ar",
			"price":"15"
		},
		{
			"adDailyBudget":"1",
			"adID":"11134469",
			"campaignID":"87064",
			"categID":"1652",
			"originalCategID":"1652",
			"custID":"66258610",
			"invalidLink":"false",
			"maxCPC":"0.15",
			"name":"Default",
			"refFrom":"Reference owner",
			"refID":"Reference ID",
			"siteID":"MLA",
			"status":"A",
			"title":"Title Test",
			"type":"P",
			"URLDestiny":"http://www.mercadolibre.com.ar",
			"URLVisible":"www.mercadolibre.com.ar",
			"price":"15"
		}
	],
	"totalAds":"4"
}

{% endhighlight %}

**Where '66258610' is the cust_id of the user.**