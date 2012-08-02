---
layout: 2columns
title: Real estate listing
categories: guides-res
tags: loc-selection
---

#List Real Estate properties

Location selection	{#locationselection} 
------------------
To list a real estate property, you will have to determine the property location, which includes state, city and in most cases neighborhood as well. To accomplish this access the following URL:

<a href="https://api.mercadolibre.com/classified_locations/countries" target="_blank">https://api.mercadolibre.com/classified_locations/countries</a>

Once there click on the country id your user belongs to and you will be redirected to a new page where you will be able to browse through the states of the selected country. By clicking the State ID you will be able to browse it's cities and the same applies for the neighborhoods. <u>You only need to send the leaf location id when publishing a property.</u> This means that sending only the Neighborhood ID is enough for our API to complete with the corresponding State and City IDs. If the chosen city does not have any neighborhood, then you will only need to send the City ID. Sending either the Neighborhood ID or the City ID is mandatory. If you were to send nothing but a State ID, our API will not allow you to list the property (anyway you should never send a State ID since it will be automatically filled according to the Neighborhood ID or City ID provided).