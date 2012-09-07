---
layout: guides
title: By Sellers
categories: 
- Searching
- Category
menu: 
- Searching for Items
tags: 
- Searching
---

<div class="contents">
  <h5>Table of Contents</h5>
  <dl>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('search-by-nickname')">Searching by nickname</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('search-by-seller-id')">Searching by seller ID</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('search-response')">Response</a></dt>
  </dl>
</div>

## Searching by nickname: {#search-by-nickname}

You can search for items that belong to a seller by nickname.


<pre class="terminal">
curl https://api.mercadolibre.com/sites/MLA/search?nickname=.....
</pre>

## Searching by seller ID: {#search-by-seller-id}

You can search for items that belong to a seller by id.

<pre class="terminal">
curl https://api.mercadolibre.com/sites/MLA/search?seller_id=.....
</pre>



## Response {#search-response}

Search response has a lot of parameters. Use <code>OPTIONS</code> http method to get a <code>JSON</code> encoded response that will describe the API, with all the allowed methods and connections to other APIs. It is a standard format to get [API documentation](/design-considerations/#options).

If you are interested in define response block size read [search paging](/search-paging) section.


For more information about search options you can check the website [https://api.mercadolibre.com/sites/MLA/search/](https://api.mercadolibre.com/sites/MLA/search/)




