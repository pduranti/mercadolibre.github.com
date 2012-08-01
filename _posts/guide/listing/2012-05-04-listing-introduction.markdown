---
layout: 2columns
title: Listing introduction
categories: guides
tags: Selling
---

# Listings Introduction



As you know, MELI is an e-commerce platform in which users can buy and sell items. This tutorials are going to show you, the developer, how to list your item using the Items API.



## What is an item?{#what-is-an-item}

Each object that can be sold or bought is an item, for example: A book, a computer, a telephone, a car, a table, a house, even a dog. The item is owned by a user.

## What happens when I list an Item?{#item-list}

If you want to sell a book, you need to list it first. Each item that is listed on MELI will:

Appear in the MELI listings. For example, when a user search “Harry Potter book” he will get the list of Harry Potter books in which your item will be shown.



Have a VIP (View Item Page). A descriptive web-page in which you are going to see information about the Harry Potter book.
You should provide attributes related to your item at the time of listing.

## What is an Item Attribute?{#item-attribute}

Each item has several attributes, these attributes represent information about your item and your listing. This attributes are shown in the listings and in the VIP. Examples of attributes are:

{% highlight javascript %} 
{
"Title": "Harry Potter and the Sorcerer’s Stone"
"Category": "Books"
"Item condition": "Used item"
}
{% endhighlight %}

## Other considerations{#other-considerations}

The Items API tutorials require a basic understanding of the curl Linux command, you can get information of how to use it in our Basic Curl Tutorial.
To list an item with the Items API, you will need an access_token, we recommends that you read the [Authorization Tutorial](../authentication-and-authorization).
Don’t worry if you don’t understand how to get an access_token, at the end of each tutorial you will see a Javascript example using the MELI Javascript SDK, that do not require access_token.


![meli home](/images/search-visual-introduction.png)


##Use cases

This user guide provides information for the following uses cases:

<table class="datagrid">
<tbody>
  <tr><th>Use case</th><th>Description</th></tr>
  <tr><td>Search items by text query</td><td>Search items using <code>q</code> parameter </td></tr>
  <tr><td>Search items for a specific category</td><td>Search items using MercadoLibre's category </td></tr>
  <tr><td>Search items only in a specific category</td><td>Search items using only one MercadoLibre's category </td></tr>
</tbody>
</table>


