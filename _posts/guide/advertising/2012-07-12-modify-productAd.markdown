---
layout: 2columns
title: Modify a Product Ad 
categories: 
- Product Ads
tags:
- Product Ads
---

The way to modify your product ad is as follow:

<pre class="terminal">
curl -i -H 'Accept:application/json' -H 'Content-Type:application/json' -X PUT -d '
{       
	"URLDestiny" : "http://www.google.com.ar",
  	"URLVisible" : "www.google.com.ar",
  	"adDailyBudget" : 1,
  	"campaignID" : 39003,
 	"categID" : "1652",
  	"custID" : 66258610,
  	"maxCPC" : 0.15,
  	"price" : 15,
  	"refFrom" : "Reference owner",
  	"refID" : "Reference ID3",
  	"siteID" : "MLA",
  	"title" : "Title Test",
  	"type" : "P",
  	"brand" : "ML"
}'  'https://api.mercadolibre.com/mclics/productAd/11130279?access_token=$ACCESS_TOKEN'
</pre>

**Where '11130279' is the id of the product ad.**

You will receive the following JSON response:

{% highlight javascript %}
{
	"URLDestiny" : "http://www.google.com.ar",
  	"URLVisible" : "www.google.com.ar",
  	"adDailyBudget" : 1,
  	"campaignID" : 39003,
  	"categID" : "1652",
  	"custID" : 66258610,
  	"maxCPC" : 0.15,
  	"price" : 15,
  	"refFrom" : "Reference owner",
  	"refID" : "Reference ID1",
  	"siteID" : "MLA",
  	"title" : "Title Test",
  	"type" : "P",
  	"brand" : "ML"
}
{% endhighlight %}

**Congratulations!** You have modify your product ad.