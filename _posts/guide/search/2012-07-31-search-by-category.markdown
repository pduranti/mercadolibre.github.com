---
layout: guides
title: Search by category
categories: guides
tags: 
- Searching
---

# Search by category

<div class="contents">
  <h5>Table of Contents</h5>
  <dl>
    <dt><a href="#search-overview">Overview</a></dt>
    <dt><a href="#search-request">Request</a></dt>
    <dt><a href="#search-response">Response</a></dt>
  </dl>
</div>

## Overview: {#search-overview}

The search operation returns items which belong to a MercadoLibre item category. 

For more details about categories and the category hierarchy see [Categories API](/category-introduction). 


## Request {#search-request}

By using a MercadoLibre item category, you can retrieve a list of items which belong to it. If you are interested in defining a block size response read [search paging](/search-paging) section.   

<pre class="terminal">
curl https://api.mercadolibre.com/sites/MLA/search?category=MLA5726
</pre>

## Response {#search-response}

Search response has a lot of parameters. Use <code>OPTIONS</code> http method to get a <code>JSON</code> encoded response that will describe the API, with all the allowed methods and connections to other APIs. It is a standard format to get [API documentation](/design-considerations/#options) 

<iframe id="search_api_embed"
  src="javascript:void(0)"
    scrolling="no"
      frameborder="0"
        width="100%"
          height="900">
</iframe>
<script type="text/javascript">
            document.getElementById('search_api_embed').src ='https://api.mercadolibre.com/sites/MLA/search?category=MLA5726';
</script>


For more information about search options you can check the website [https://api.mercadolibre.com/sites/MLA/search/](https://api.mercadolibre.com/sites/MLA/search/)




