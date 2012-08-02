---
layout: 2columns
title: Modify a Product Ad 
categories: guides
tags: Advertising
---

# Modify a Product Ad
The way to modify your product ad is as follow:

<pre class="terminal">
curl -i -H 'Accept:application/json' -H 'Content-Type:application/json' -X PUT -d '
{
	"adDailyBudget":"1",
	"campaignID":"39003",
	"categID":"1652",
	"custID":"66258610",
	"maxCPC":"0.15",
	"refFrom":"Reference owner",
	"refID":"Reference ID",
	"siteID":"MLA",
	"status":"A",
	"title":"Title Test",
	"URLDestiny":"http://www.google.com.ar",
	"URLVisible":"www.google.com.ar",
	"price":"15"
}'  'https://api.mercadolibre.com/mclics/productAd/11130279?access_token=$ACCESS_TOKEN'
</pre>

**Where '11130279' is the id of the product ad.**

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
		"URLDestiny":"http://www.google.com.ar",
		"URLVisible":"www.google.com.ar",
		"price":15
	}
}
{% endhighlight %}

**Congratulations!** You have modify your product ad.