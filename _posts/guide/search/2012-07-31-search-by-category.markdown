---
layout: 2columns
title: Search by category
categories: guides
tags: 
- Searching
---



# Searching by category

Items can be retrieves using a more specific MercadoLibre category. 

See ["https://api.mercadolibre.com/categories/MLA1071", "Categories"]


<pre class="terminal">
curl https://api.mercadolibre.com/sites/MLA/search?q=ipod
</pre>

Using text query is basis for item search. You use space between words if you have multiple words. It searchs items where one of the specified word matches in item title. Queries aren't case-sensitives.


### Request parameters

<iframe id="search_api_embed"
  src="javascript:void(0)"
    scrolling="no"
      frameborder="0"
        width="100%"
          height="900">
</iframe>
<script type="text/javascript">
            document.getElementById('search_api_embed').src ='https://api.mercadolibre.com/sites/MLA/search?q=ipod';
</script>


For more information about search options you can check the website [https://api.mercadolibre.com/sites/MLA/search/](https://api.mercadolibre.com/sites/MLA/search/)




