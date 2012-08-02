---
layout: 2columns
title: Real estate listing
categories: guides-res
tags: json-full-specs
---

#List Real Estate properties

Real Estate JSON full specification 	{#jsonfullspecs}
-----------------------------------
A real estate property JSON is composed by the following information (an example is provided below the table):

Field				  |	Description
----------------------|----------------------------------------------------------------------------------------------------------
site_id\*			  |	ID of the site your user belongs to. Obtained in the [Category selection section](/res-categ-selection).
title\*				  |	Title of your listing.
category_id\*		  |	ID of the chosen category for your listing. Obtained in the [Category selection section](/res-categ-selection).
price\*				  |	Price of the property. Always send a real price, otherwise your listing will be removed.
currency_id\*		  |	Currency of the price. Allowed currencies vary according to your user's country. You can obtain all available currency options at <a href="https://api.mercadolibre.com/sites" target="_blank"> https://api.mercadolibre.com/sites</a>. Click on your Site ID and you will be now able to get the currencies element with all the available currencies and their IDs.
available_quantity\*  |	Available quantity of the property (generally 1)
buying_mode\*		  |	For real estate properties, always send a "classified" value.
listing_type_id\*	  |	Indicates the listing type for the listing. Possible values are "silver", "gold" or "gold_premium". If you have a promotional pack, keep in mind that you must have available items for the desired listing type.
condition\*			  |	Possible values: "new", "used" or "not_specified".
pictures\*			  |	You can provide either the Picture IDs of your uploaded pictures (if you have uploaded any) as well as the URLs	of the pictures you wish to upload (if you have them on an accesible web URL). - Check out the example. Both options are shown. -
location\*			  |	Location of the property, with the information gathered in the [Location selection section](/res-loc-selection). If you have geolocation information (lat & long) you can add it here as well. This will enable a map with a pin on your location, which will give your listings a higher quality.
seller_contact\*	  |	Seller's contact information. The email sent for this field will be the email used for sending the contact forms sent by users. If this email is not sent in the "seller_contact" field, the email used will be the publishing user's registered email address.
attributes\*		  |	Attributes of the property obtained the [Attributes selection section](/res-attrs-selection).
description			  |	(optional) You can include a description with additional information of your property. HTML format supported. Just make sure the description sent does not violate our terms & conditions. Max width for an HTML description is 918px.

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