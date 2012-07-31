---
layout: 2columns
title: Delete a Product Ad 
categories: guides
tags: Advertising
---

# Delete a Product Ad
To delete a product ad you only need to change the **status** to E.

<pre class="terminal">
curl -i -H 'Accept:application/json' -H 'Content-Type: application/json' -X PUT -d 'E'
https://api.mercadolibre.com/mclics/ad/11130279/status?access_token=$ACCESS_TOKEN  
</pre>

**Where '11130279' is the id of the product ad.**

You will receive the following JSON response:

{% highlight javascript %}

{
	"adDto":
	{
		"adDailyBudget":"1",
		"adID":"11130279",
		"campaignID":"39003",
		"categID":"1652",
		"custID":"66258610",
		"customAdBox":"",
		"invalidLink":"false",
		"maxCPC":"0.15",
		"name":"Default",
		"refFrom":"Reference owner",
		"refID":"Reference ID",
		"siteID":"MLA",
		"status":"D",
		"cleatitle":"Title Test",
		"type":"P",
		"URLDestiny":"http://www.google.com.ar",
		"URLVisible":"www.google.com.ar"
	},
	"errorsMap":null
}
{% endhighlight %}

Now your product Ad won't be show.