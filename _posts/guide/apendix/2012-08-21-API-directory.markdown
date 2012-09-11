---
layout: firststep
title: API Directory
categories: 
- API Directory
menu:
- API Directory
tags: 
- API Directory
---


Explore our API Resources. <code>auth</code> <strong>: Requires authentication</strong>

<h4>https://api.mercadolibre.com</h4>

<br>
  <strong>users and applications</strong>
  <ul class='ch-list parameters'>
    <li><a href="https://api.mercadolibre.com/users" target="_blank">/users</a></li>
    <li><a href="https://api.mercadolibre.com/users/{user_id}/addresses" target="_blank">/users/{user_id}/addresses</a><code>auth</code></li>
    <li><a href="https://api.mercadolibre.com/users/{user_id}/accepted_payment_methods" target="_blank">/users/{user_id}/accepted_payment_methods</a><code>auth</code></li>
    <li><a href="https://api.mercadolibre.com/applications" target="_blank">/applications</a></li>
    <li><a href="https://api.mercadolibre.com/scopes" target="_blank">/scopes</a></li>
  </ul>

<strong>sites and categories entities</strong>
  <ul class='ch-list parameters'>
    <li><a href="https://api.mercadolibre.com/sites" target="_blank">/sites</a></li>
    <li><a href="https://api.mercadolibre.com/sites/{site_id}" target="_blank">/sites/{site_id}</a></li>
    <li><a href="https://api.mercadolibre.com/site_domains/www.mercadolibre.com.ar" target="_blank">/site_domains/{site_domain_url}</a></li>
    <li><a href="https://api.mercadolibre.com/sites/{site_id}/listing_types" target="_blank">/sites/{site_id}/listing_types</a></li>
    <li><a href="https://api.mercadolibre.comsites/{site_id}/listing_exposures" target="_blank">sites/{site_id}/listing_exposures</a></li>
    <li><a href="https://api.mercadolibre.com/sites/{site_id}/listing_prices?price=1" target="_blank">/sites/{site_id}/listing_prices?price=1</a></li>
    <li><a href="https://api.mercadolibre.com/sites/{site_id}/categories" target="_blank">/sites/{site_id}/categories</a></li>
    <li><a href="https://api.mercadolibre.com/categories/{category_id}" target="_blank">/categories/{category_id}</a></li>
    <li><a href="https://api.mercadolibre.com/categories/{category_id}/attributes" target="_blank">/categories/{category_id}/attributes</a></li>
  </ul>

<strong>countries, currencies, ...</strong>
  <ul class='ch-list parameters'>
      <li><a href="https://api.mercadolibre.com/countries" target="_blank">/countries</a></li>
      <li><a href="https://api.mercadolibre.com/countries/{country_id}" target="_blank">/countries/{country_id}</a></li>
      <li><a href="https://api.mercadolibre.com/states/{state_id}" target="_blank">/states/{state_id}</a></li>
      <li><a href="https://api.mercadolibre.com/cities/{city_id}" target="_blank">/cities/{city_id}</a></li>
      <li><a href="https://api.mercadolibre.com/currencies" target="_blank">/currencies</a></li>
      <li><a href="https://api.mercadolibre.com/currencies/BRL" target="_blank">/currencies/{currency_id}</a></li>
      <li><a href="https://api.mercadolibre.com/currency_conversions/search?from=ARS&amp;to=USD" target="_blank">/currency_conversions/search?from={currency_id}&amp;to={currency_id}</a></li>
  </ul>

<strong>items and searches</strong>
  <ul class='ch-list parameters'>
    <li><a href="https://api.mercadolibre.com/items/MLA87828458" target="_blank">/items/{item_id}</a></li>
    <li><a href="https://api.mercadolibre.com/pictures/MLA719522498_032011" target="_blank">/pictures/{picture_id}</a></li>
    <li><a href="https://api.mercadolibre.com/sites/MLA/searchUrl?q=ipod" target="_blank">/sites/{site_id}/searchUrl?q=ipod </a></li>
    <li><a href="https://api.mercadolibre.com/sites/MLA/search?q=ipod" target="_blank">/sites/{site_id}/search?q=ipod </a></li>
    <li><a href="https://api.mercadolibre.com/sites/MLA/hot_items/search?limit=5&amp;category=MLA1743" target="_blank">/sites/{site_id}/hot_items/search?limit=5&amp;category={category_id} </a></li>
    <li><a href="https://api.mercadolibre.com/sites/MLA/featured_items/HP" target="_blank">/sites/{site_id}/featured_items/{pool_id} </a></li>
    <li><a href="https://api.mercadolibre.com/sites/MLA/trends/search?category=MLA1042" target="_blank">/sites/{site_id}/trends/search?category={category_id} </a></li>
  </ul>

<strong>orders and payments</strong>
  <ul class='ch-list parameters'>
    <li><a href="https://api.mercadolibre.com/orders" target="_blank">/orders</a><code>auth</code><code>auth</code></li>
    <li><a href="https://api.mercadolibre.com/payments" target="_blank">/payments</a><code>auth</code></li>
    <li><a href="https://api.mercadolibre.com/collections" target="_blank">/collections</a><code>auth</code></li>
    <li><a href="https://api.mercadolibre.com/payment_methods/MLAMC" target="_blank">/payment_methods/{payment_method_id}</a></li>
    <li><a href="https://api.mercadolibre.com/sites/MLA/payment_methods" target="_blank">/sites/{site_id}/payment_methods</a></li>
    <li><a href="https://api.mercadolibre.com/feedback" target="_blank">/feedback</a><code>auth</code></li>
  </ul>

<strong>questions</strong>
  <ul class='ch-list parameters'>
    <li><a href="https://api.mercadolibre.com/questions" target="_blank">/questions</a><code>auth</code></li>
    <li><a href="https://api.mercadolibre.com/questions/search" target="_blank">/questions/search</a></li>
    <li><a href="https://api.mercadolibre.com/questions" target="_blank">/questions</a></li>
    <li><a href="https://api.mercadolibre.com/users/{seller_id}/questions_blacklist" target="_blank">/users/{seller_id}/questions_blacklist</a><code>auth</code></li>
  </ul>




