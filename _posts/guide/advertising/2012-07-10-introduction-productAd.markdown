---
layout: 2columns
title: Introduction to Product Ads
categories: guides
tags: Advertising
---

# Product Ads Introduction
As you know, MercadoClics is a platform in which users can create Ads. This documentation will show you how to manage your **product Ads** using the Product Ads API.
## What is a Product Ad?{#what-is-a-product-ad}
Product Ad is a new kind of ad with the **image** and **price** of a specific product. It has the following attributes:

* **adID**: Id of the product Ad
* **custID**: Id of the customer
* **maxCPC**: Maximum price that the user is willing to pay per click (PPC)
* **adDailyBudget**: Daily budget of the product Ad
* **status**: product Ad status
* **title**: product Ad title (35 characters Max.)
* **URLVisible**: Visible URL by the final user
* **URLDestiny**: Real destiny URL
* **campaignID**: Id of the campaign
* **siteID**: Id of the site (Example: "MLB")
* **categID**: Id from MercadoLibre's categories 
* **Price**: Cost of the product announced in the Product Ad
* **refID**: Product SKU (Stock-keeping unit)
* **refFrom**

## Reference
You will notice that there are two different reference attributes: **refID**, **refFrom**. This two attributes identifies your product so that you can get the active Product Ad created for the product. To know more about this feature you can read [Search a Product Ad](../searching-productAd).

## Other considerations{#other-considerations}
The Product Ads API tutorials require a basic understanding of the curl Linux command. You can get information of how to use it in our Basic Curl Tutorial.
In order to use this API, you will need an **access_token**, so we recommend you to read the [Authorization Tutorial](../authentication-and-authorization).