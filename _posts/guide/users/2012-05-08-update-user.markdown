---
layout: 2columns
title: Update user information
categories: guides
tag: Users
---

#Update your Information
You can update your information in case it was incomplete.
This is a common issue, when you register in MELI you aren’t asked to fill your address or personal identification, but you need to have this fields completed at the time of listing.

If you want to update your information, you should send a PUT to the Users API:

<pre class="terminal">
curl -X PUT -H "Content-Type: application/json" -d
</pre>

{% highlight javascript %}
{
"identification_type": "DNI",
"identification_number": "33333333",
"address": "Triunvirato 5555",
"state":"AR-C",
"city":"Capital Federal",
"zip_dode": "1431",
"phone":{
        "area_code":"011",
        "number":"4444-4444",
        "extension":"001"
        },
"first_name":"Pedro",
"last_name": "Picapiedras",
"company":{
          "corporate_name":"Acme",
          "brand_name":"Acme Company"
          },
"mercadoenvios": "accepted"
}


https://api.mercadolibre.com/users/<YOUR_USER_ID>?access_token=<ACCESS_TOKEN>
{% endhighlight %}

The previous example shows the complete list of fields that can be updated (You should only send the fields that you want to update).

Congratulations, you can update you Information through the Users API!
