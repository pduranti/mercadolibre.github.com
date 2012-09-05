---
layout: 2columns
title: Real estate listing
categories: guides-res
tags: attrs-selection
---

#List Real Estate properties

Attributes selection	{#attributesselection} 
--------------------
When listing a property, its attributes will vary according to the chosen category. Once you have your Category ID, you can see its attributes by accessing the following URL:

**https://api.mercadolibre.com/categories/CATEGORY_ID/attributes**

If your user belongs, for example, to Argentina, and the chosen category was 1467, then the URL would be: <a href="https://api.mercadolibre.com/categories/MLA1467/attributes" target="_blank">https://api.mercadolibre.com/categories/MLA1467/attributes</a>

Once there, you will get a JSON response with as many elements as the amount of attributes belonging to the chosen category. For each attribute you get an id, type, tags and possible values. Consider the following:

An attribute with the "tags" element containing "fixed" means that this attribute is indeed fixed, and *you don't need to send it* with the property JSON.

Attribute type "list" means you will have a list of the possible values, for which you will have to send the desired value **id**.

Attribute type "boolean" means you will have two possible values (one for true, one for false), for which you will have to send the desired value **id**.

Attribute type "string" with "tags" not containing "fixed" means you will have to send the desired value as text.

Attribute with "tags" containing "required" means the attribute <u>is mandatory</u> when publishing the property.

For each attribute you choose to publish, save its Attribute ID and its value id as well. You will be needing them later on, when putting together the JSON for publishing the property. Keep in mind that required attributes are mandatory and vary between categories. Not sending the correct attributes when listing is a very common mistake.