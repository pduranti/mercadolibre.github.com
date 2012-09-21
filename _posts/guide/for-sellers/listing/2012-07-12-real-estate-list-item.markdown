---
layout: guides
title: Real estate listing
categories: 
- Listing
- Manage Listings
- Orders
- Manage Questions
- Notifications
menu: 
- Sellers &amp; Integrators
tags: 
- Listing
---


## Overview 

[Having a basic knowledge of REST and how MELI APIs work](/first-step)

[Having a MELI APP created](/application-manager)

[Getting an access token (authentication)](/authentication-and-authorization)

[List items](/list-your-item)


<div class="contents">
  <h5>Table of Contents</h5>
  <dl>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('publish')">List a real estate property</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('operation')">Operation and property type selection</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('attributes')">Attributes selection</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('res-loc-selection')">Location selection</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('add-pictures-item')">Pictures upload (optional)</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('res-json-full-specs')">Real Estate JSON full specification</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('res-modify-pause-finalize')">Modify, pause or finalize your property publication</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('relist-item')">Relist your properties</a></dt>
  </dl>
</div>


## List a real estate property   {#publish}

You can list a real estate property by sending a POST request to our Items API with a JSON like the the following example:

{% highlight javascript %}

{ 
  "title": "Property title",
  "category_id": "MLA1474", <-- Operation and property type
  "price": 100000,
  "currency_id": "ARS",
  "available_quantity": 1,
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
    "latitude": -34.48755,  <-- Optional
    "longitude": -58.56987, <-- Optional
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
      "id": "MLA1472-BATHQTY",
      "value_id": "MLA1472-BATHQTY-1"
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


## Operation and property type selection {#operation}

To list a real estate property, you will have to choose the operation and property type for the property. **This in MELI is known as "category_id"**. First, determine the "SITE_ID" that corresponds to the country your user belongs to. To accomplish this go to the following URL:

<a href="https://api.mercadolibre.com/sites" target="_blank">https://api.mercadolibre.com/sites</a>

Once there you will be able to determine your SITE_ID, which is the "id" for your corresponding country. 

Now that you have your SITE_ID, you can now access the following URL (by browser or by sending a GET request):

<pre class="terminal">
 curl https://api.mercadolibre.com/categories/SITE_ID1459
</pre>

If your user belongs, for example, to Argentina, then the URL would be: <a href="https://api.mercadolibre.com/categories/MLA1459" target="_blank">https://api.mercadolibre.com/categories/MLA1459</a>

Once there, browse within the "children categories" element, according to the operation and property type you are interested in (you can do this by clicking the "id") <u>until you reach a leaf category</u>. You will know when you have reached a leaf category once you reach a category with an empty "children_categories" array.

Save this Category ID, since you will be needing it later on, when putting together the JSON for publishing the property.

According to the selected Category ID, the property's attributes you will have to post will vary. [Click here](/res-attrs-selection) to learn how to obtain the corresponding attributes for your selected Category ID.



## Attributes selection {#attributes}

 [Attributes selection](/add-attributes-item)


## Location selection {#res-loc-selection}

To list a real estate property, you will have to determine the property location, which includes state, city and in most cases neighborhood as well. To accomplish this access the following URL:

<a href="https://api.mercadolibre.com/classified_locations/countries" target="_blank">https://api.mercadolibre.com/classified_locations/countries</a>

Once there click on the country id your user belongs to and you will be redirected to a new page where you will be able to browse through the states of the selected country. By clicking the State ID you will be able to browse it's cities and the same applies for the neighborhoods. <u>You only need to send the leaf location id when publishing a property.</u> This means that sending only the Neighborhood ID is enough for our API to complete with the corresponding State and City IDs. If the chosen city does not have any neighborhood, then you will only need to send the City ID. Sending either the Neighborhood ID or the City ID is mandatory. If you were to send nothing but a State ID, our API will not allow you to list the property (anyway you should never send a State ID since it will be automatically filled according to the Neighborhood ID or City ID provided).



## Pictures upload (optional){#add-pictures-item}


  [Pictures upload (optional)](/add-pictures-item)



## Real Estate JSON full specification {#res-json-full-specs}

A real estate property JSON is composed by the following information (an example is provided below the table):

Field         | Description
----------------------|----------------------------------------------------------------------------------------------------------
site_id\*       | ID of the site your user belongs to. Obtained in the [Category selection section](/res-categ-selection).
title\*         | Title of your listing.
category_id\*     | ID of the chosen category for your listing. Obtained in the [Category selection section](/res-categ-selection).
price\*         | Price of the property. Always send a real price, otherwise your listing will be removed.
currency_id\*     | Currency of the price. Allowed currencies vary according to your user's country. You can obtain all available currency options at <a href="https://api.mercadolibre.com/sites" target="_blank"> https://api.mercadolibre.com/sites</a>. Click on your Site ID and you will be now able to get the currencies element with all the available currencies and their IDs.
available_quantity\*  | Available quantity of the property (generally 1)
buying_mode\*     | For real estate properties, always send a "classified" value.
listing_type_id\*   | Indicates the listing type for the listing. Possible values are "silver", "gold" or "gold_premium". If you have a promotional pack, keep in mind that you must have available items for the desired listing type.
condition\*       | Possible values: "new", "used" or "not_specified".
pictures\*        | You can provide either the Picture IDs of your uploaded pictures (if you have uploaded any) as well as the URLs of the pictures you wish to upload (if you have them on an accesible web URL). - Check out the example. Both options are shown. -
location\*        | Location of the property, with the information gathered in the [Location selection section](/res-loc-selection). If you have geolocation information (lat & long) you can add it here as well. This will enable a map with a pin on your location, which will give your listings a higher quality.
seller_contact\*    | Seller's contact information. The email sent for this field will be the email used for sending the contact forms sent by users. If this email is not sent in the "seller_contact" field, the email used will be the publishing user's registered email address.
attributes\*      | Attributes of the property obtained the [Attributes selection section](/res-attrs-selection).
description       | (optional) You can include a description with additional information of your property. HTML format supported. Just make sure the description sent does not violate our terms & conditions. Max width for an HTML description is 918px.

\*mandatory fields

JSON example: 

{% highlight javascript %}

{ 
  "site_id": "MLA",
  "title": "Property title",
  "category_id": "MLA52745",
  "price": 500,
  "currency_id": "ARS",
  "available_quantity": 1,
  "buying_mode": "classified",
  "listing_type_id": "silver",
  "condition": "not_specified",
  "pictures": [
    {
      "id": "MLA2096545948_102011"
    },
    {
      "source":"http://farm3.staticflickr.com/2417/2176897085_946b7b66b8_b.jpg"
    },
    {
      "source":"http://farm2.staticflickr.com/1056/628680053_3b7c315548_b.jpg"
    }
  ],
  "seller_contact": {
    "contact": "Contact name",
    "other_info": "Additional contact info",
    "area_code": "011",
    "phone": "4444-5555",
    "area_code2": "",
    "phone2": "",
    "email": "contact-email@somedomain.com",
    "webmail": ""
  },
  "location": {
    "address_line": "My property address 1234",
    "zip_code": "1111",
    "neighborhood": {
      "id": "TUxBQlBBUzgyNjBa"
    },
    "latitude": -34.48755,
    "longitude": -58.56987,
  },  
  "attributes": [
    {
      "id": "MLA50547-AMBQTY",
      "value_id": "MLA50547-AMBQTY-1"
    },
    {
      "id": "MLA50547-ANTIG",
      "value_id": "MLA50547-ANTIG-A_ESTRENAR"
    },
    {
      "id": "MLA50547-MTRS",
      "value_name": "500"
    },
    {
      "id": "MLA50547-SUPTOTMX",
      "value_name": "2000"
    },
    {
      "id": "MLA50547-BATHQTY",
      "value_id": "MLA50547-BATHQTY-1"
    },
    {
      "id": "MLA50547-DORMQTYB",
      "value_id": "MLA50547-DORMQTYB-3"
    },
    {
      "id": "MLA50547-EDIFIC",
      "value_id": "MLA50547-EDIFIC-CHALET"
    }
  ],
  "description" : "<b>This is the real estate property descritpion.</b>"
}
{% endhighlight %}


## To list a property, POST the JSON to the following URL:

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

[Click here](/validate-item) to learn how to validate your JSON before actually posting it to our Items API.

If you were to receive an error status code on a response when communicating with our APIs, in most cases you will be able to determine the cause of the error by looking at the response body. In addition to the response status code, the response body will also contain detailed information regarding the error and will most likely help you understand the cause of it and how to solve different issues.

## Modify, pause or finalize your property publication {#res-modify-pause-finalize}

NOTE: Info sobre paquetes

[Modify listing](/modify-listing)

[Change listing status](/change-listing-status) 


## Relist your properties {#relist-item}

[Relist a property](/relist-item) 