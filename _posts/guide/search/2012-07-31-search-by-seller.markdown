---
layout: guides
title: By seller
categories: 
- Searching
menu: 
- Searching
tags: 
- Searching
---
	
<div class="contents">
  <h5>Table of Contents</h5>
  <dl>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('search-by-nickname')">Searching by nickname</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('search-by-seller-id')">Searching by seller ID</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('search-response')">Response</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('search-warnings')">Search Restrictions</a></dt>
  </dl>
</div>

## Searching by nickname {#search-by-nickname}

You can search for items that belong to a seller by nickname.


<pre class="terminal">
curl https://api.mercadolibre.com/sites/MLA/search?nickname=.....
</pre>

## Searching by seller ID {#search-by-seller-id}

You can search for items that belong to a seller by id.

<pre class="terminal">
curl https://api.mercadolibre.com/sites/MLA/search?seller_id=.....
</pre>



## Response {#search-response}

The search response has a lot of parameters. Use <code>OPTIONS</code> http method to get a <code>JSON</code> encoded response that will describe the API, with all the allowed methods and connections to another part of the API. It is a standard format to get [API documentation](/design-considerations/#options).

If you are interested in defining a block size response, read the [search paging](/search-paging) section.


For more information about search options, you can check this website: [https://api.mercadolibre.com/sites/MLA/search/](https://api.mercadolibre.com/sites/MLA/search/)


## Search Restrictions {#search-warnings}

When you place a request to Search API asking for published items by a specific seller (ie, filter by seller_id), the response doesn't includes results from classifieds categories (Motors, Real Estate & Services). 

If you're specifically looking for those items, you must filter by the corresponding category.

<pre class="terminal">
curl https://api.mercadolibre.com/sites/MLB/search?seller_id=36060987&amp;category=MLB1743 
</pre>





