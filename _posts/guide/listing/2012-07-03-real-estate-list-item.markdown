---
layout: 2columns
title: Real estate listing
categories: guides
tags: Selling
---

#List Real Estate properties

Preconditions 	{#preconditions}
---------------------------------

[Having a basic knowledge of REST and how MELI APIs work](/getting-started)

[Having a MELI APP created](/res-create-app)

[Getting an access token (authentication)](/res-authenticate)

List a real estate property 	{#publish}
---------------------------------

You can list a real estate property by sending a POST request to our Items API with a JSON like the the following example:

{% highlight javascript %}

{ 
  "site_id": "MLA", <-- Indicates the country you are listing in
  "title": "Property title",
  "category_id": "MLA1474", <-- Operation and property type
  "price": 50000,
  "currency_id": "ARS",
  "available_quantity": 1,
  "buying_mode": "classified",
  "listing_type_id": "silver", <-- Publication type your item will be listed in
  "condition": "not_specified",
  "pictures": [
    {
      "id": "MLA2096545948_102011" <-- Picture ID if you have previously uploaded it to our Pictures API
    },
    {
      "source":"http://media.point2.com/p2a/htmltext/f2a4/590f/3627/f49be256595a86c91457/original.jpg"
    }
  ],
  "location": {
    "address_line": "My property address 1234",
    "zip_code": "1111", <-- Optional, but recommended for Mexico and Brazil
    "neighborhood": {
      "id": "TUxBQlBBUzgyNjBa"
    },
    "latitude": -34.48755,   <-- Optional
    "longitude": -58.56987,  <-- Optional
  },  
  "attributes": [
    {
      "id": "MLA1472-ANTIG",
      "value_id": "MLA1472-ANTIG-A_ESTRENAR"
    },
    {
      "id": "MLA1472-DISPOSIC",
      "value_id": "MLA1472-DISPOSIC-FRENTE"
    },
    {
      "id": "MLA1472-AMBQTY",
      "value_id": "MLA1472-AMBQTY-2"
    },
    {
      "id": "MLA1472-BATHQTY",
      "value_id": "MLA1472-BATHQTY-1"
    },
    {
      "id": "MLA50547-BATHQTY",
      "value_id": "MLA50547-BATHQTY-1"
    },
    {
      "id": "MLA1472-DORMQTY",
      "value_id": "MLA1472-DORMQTY-2"
    },
    {
      "id": "MLA1472-EDIFIC",
      "value_id": "MLA1472-EDIFIC-DEPARTAMENTO"
    },
    {
      "id": "MLA1472-MTRS",
      "value_name": "80"
    },
    {
      "id": "MLA1472-MTRSTOTAL",
      "value_name": "100"
    }
  ],
  "description" : "<b>This is the real estate property descritpion.</b>"
}
{% endhighlight %}

To complete the JSON with the necessary info, follow this steps:

- 1\. [Operation and property type selection](/res-categ-selection)
- 2\. [Attributes selection](/res-attrs-selection)
- 3\. [Location selection](/res-loc-selection)
- 4\. [Pictures upload (optional)](/res-pic-upload)

[Click here](/res-json-full-specs) to see the full specification of possible elements you can send in a real estate property JSON.

**To list a property, POST the JSON to the following URL:**

<pre class="terminal">
 https://api.mercadolibre.com/items?access_token=YOUR_ACCESS_TOKEN
</pre>

In the request headers include:
<pre class="terminal">
 content-type: application/json
 accepts: application/json
</pre>

If the property was successfully listed, you will receive a "201 Created" response status and all of the created item information in the response body (JSON formatted). <u>It is highly recommended that you track the <b>Item ID</b> received</u> (ie: MLA12345678), since you will be needing it later on when modifying or finalizing it.

Note: after successfully listing an item, its status will be "not yet active" until it passes our security filters and automatically gets activated. This process should take no longer than an hour.

[Click here](/res-validate) to learn how to validate your JSON before actually posting it to our Items API.

If you were to receive an error status code on a response when communicating with our APIs, in most cases you will be able to determine the cause of the error by looking at the response body. In addition to the response status code, the response body will also contain detailed information regarding the error and will most likely help you understand the cause of it and how to solve different issues.

You can now follow the instructions to:

[Modify, pause or finalize your property publication](/res-modify-pause-finalize)

[Relist your properties](/res-relist) 

Don't hesitate to contact us for further assistance, comments and feedback about this tutorial, etc. at <a href="mailto:developers_re@mercadolibre.com" target="_blank">developers_re@mercadolibre.com</a>. We will get back to you as soon as possible!