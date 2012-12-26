---
layout: 1columns
title: API Directory
categories: 
- API Directory
menu:
- API Directory
tags: 
- API Directory
---

<style>

table {
  width:100%;
}

tr {
  border-bottom:  1px dotted #CCC;
}

td {
  padding: 8px 0;
}

th {
  padding: 8px 0;
  text-align: left;
  border-bottom:  1px dotted #CCC;
  border-top:  1px dotted #CCC;
}

th p{
  float:left;
}

.left_column {
  width:35%;
}

.right_column {
  width: 65%;
}

</style>

#REST API Resources.

<br />

###Users and Apps 
<p> Under users and apps we will find all the resources relatives to mercadolibre users, applications and scopes.  </p>

<table>
    <thead>
      <tr>
         <th class="left_column">
            Resource
          </th>
          <th class="right_column">
            Description
          </th>
        </tr>
  </thead>
  <tbody>
    <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/users" target="_blank">/users/:id</a></td>
      <td>Returns the user public information such as nickname, country, user type and reputation, specified by the user_id. If the user is logged more information will be available. </td>
    </tr>
    <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/users/{user_id}/addresses" target="_blank">/users/{user_id}/addresses?access_token={...}</a></td>
      <td>Retrieve the addresses of the user specified by user_id. This resource requires an access token.</td>
    </tr>
    <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/users/{user_id}/accepted_payment_methods" target="_blank">/users/{user_id}/accepted_payment_methods</a></td>
      <td>Return of the payment methods accepted by a merchant to collect their operations.</td>
    </tr>
    <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/applications/{app_id}" target="_blank">/applications/{app_id}</a></td>
      <td>This resource allows create and manage application from third parties that use MercadoLibre API.</td>
    </tr>
    <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/scopes" target="_blank">/scopes</a></td>
      <td>This resource allows to manage the permissions from third party applications.</td>
    </tr>
</tbody>
</table>

<br />
<br />

###Categories and Listings
<p>Use the correct site for your application, you can pick from MLA, MLB among other and their respective categories and type of publications.</p>
<table>
    <thead>
      <tr>
         <th class="left_column">
            Resource
          </th>
          <th class="right_column">
            Description
          </th>
        </tr>
  </thead>
  <tbody>
    <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/sites" target="_blank">/sites</a></td>
      <td>Retrieves information about the sites where MercadoLibre runs.</td>
    </tr>
    <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/sites/{site_id}" target="_blank">/sites/{site_id}</a></td>
      <td>Retrieves information about the sites where MercadoLibre runs.</td>
    </tr>
    <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/site_domains/www.mercadolibre.com.ar" target="_blank">/site_domains/{site_domain_url}</a>
</td>
      <td>Retrieves information about the domain.</td>
    </tr>
    <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/sites/{site_id}/listing_types" target="_blank">/sites/{site_id}/listing_types</a>
</td>
      <td>Not available yet.</td>
    </tr>
    <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/sites/{site_id}/listing_exposures" target="_blank">/sites/{site_id}/listing_exposures</a>
</td>
      <td>Not available yet.</td>
    </tr>
    <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/sites/{site_id}/listing_prices?price=1" target="_blank">/sites/{site_id}/listing_prices?price=1</a>
</td>
      <td>Not available yet.</td>
    </tr>
    <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/sites/{site_id}/categories" target="_blank">/sites/{site_id}/categories</a>
</td>
      <td>Not available yet.</td>
    </tr>
    <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/categories/{category_id}" target="_blank">/categories/{category_id}</a>
</td>
      <td>Retrieves the information about a MercadoLibres category.</td>
    </tr>
    <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/categories/{category_id}/attributes" target="_blank">/categories/{category_id}/attributes</a>
</td>
      <td>Displays attributes and rules over them in order to describe the items that are stored in each category. Rules are executed while posting the item. So the current attribute settings may be inconsistent with items which have been posted with another configuration.</td>
    </tr>
</tbody>
</table>  
  
<br />
<br />

###Locations and Currencies
<p>Resources that gives the regional information, countries, cities and currency. </p>
<table>
    <thead>
      <tr>
         <th class="left_column">
            Resource
          </th>
          <th class="right_column">
            Description
          </th>
        </tr>
  </thead>
  <tbody>
    <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/countries" target="_blank">/countries</a>
</td>
      <td>Retrieves countries information.</td>
    </tr>
    <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/countries/{country_id}" target="_blank">/countries/{country_id}</a>
</td>
      <td>Retrieves country information.</td>
    </tr>
    <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/states/{state_id}" target="_blank">/states/{state_id}</a>
</td>
      <td>Retrieves state information.</td>
    </tr>
    <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/cities/{city_id}" target="_blank">/cities/{city_id}</a>
</td>
      <td>Retrieves city information.</td>
    </tr>
    <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/currencies" target="_blank">/currencies</a>
</td>
      <td>Retrieves information about currencies used in MercadoLibre.</td>
    </tr>
    <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/currencies/BRL" target="_blank">/currencies/{currency_id}</a>
</td>
      <td>Retrieves information about currencies used in MercadoLibre.</td>
    </tr>
    <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/currency_conversions/search?from=ARS&amp;to=USD" target="_blank">/currency_conversions/search?from={currency_id}&amp;to={currency_id}</a>
</td>
      <td>Retrieves the convertion ratio between currencies that MercadoLibre uses in calculations.</td>
    </tr>
</tbody>
</table>

<br />
<br />

###Items and Searches
<p>The heart of MercadoLibre API, the resources for managing items and to look for them. </p>
<table>
    <thead>
      <tr>
         <th class="left_column">
            Resource
          </th>
          <th class="right_column">
            Description
          </th>
        </tr>
  </thead>
  <tbody>
    <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/items/MLA87828458" target="_blank">/items/{item_id}</a>
</td>
      <td>Retrieves the information of a listed item.</td>
    </tr>
    <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/pictures/MLA719522498_032011" target="_blank">/pictures/{picture_id}</a>
</td>
      <td>Retrieve the information of a picture.</td>
    </tr>
    <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/sites/MLA/searchUrl?q=ipod" target="_blank">/sites/{site_id}/searchUrl?q=ipod </a>
</td>
      <td>Search for any item in MercadoLibre. It will return an array of items that match the search criteria. </td>
    </tr>
    <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/sites/MLA/hot_items/search?limit=5&amp;category=MLA1743" target="_blank">/sites/{site_id}/hot_items/search?limit=5&amp;category={category_id} </a>
</td>
      <td>Retrieve an array of the hot items from the category specified by parameter.</td>
    </tr>
    <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/sites/MLA/featured_items/HP" target="_blank">/sites/{site_id}/featured_items/{pool_id} </a>
</td>
      <td>Retrieve an array of the feature items.</td>
    </tr>
    <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/sites/MLA/trends/search?category=MLA1042" target="_blank">/sites/{site_id}/trends/search?category={category_id} </a>
</td>
      <td>Retrieve an array of the trends items from the category specified by parameter.</td>
    </tr>
</tbody>
</table>

<br />
<br />

###Order Management
<p>The core of the business: the transactions. Using the order resources, can easily access to purchases, give feedback and follow any order.   </p>
<table>
    <thead>
      <tr>
         <th class="left_column">
            Resource
          </th>
          <th class="right_column">
            Description
          </th>
        </tr>
  </thead>
  <tbody>
    <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/orders" target="_blank">/orders?access_token={...}</a>
</td>
      <td>View, create and modify purchase orders at Mercadolibre.</td>
    </tr>
    <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/orders/search" target="_blank">/orders/search?access_token={...}</a>
</td>
      <td>Search the orders from a seller or buyer and not archived.</td>
    </tr>
    <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/payments" target="_blank">/payments?access_token={...}</a>
</td>
      <td>Returns data for a payment, according to the profile of the sender of the payment.</td>
    </tr>
    <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/collections" target="_blank">/collections?access_token={...}</a>
</td>
      <td>No description available.</td>
    </tr>
    <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/payment_methods/MLAMC" target="_blank">/payment_methods/{payment_method_id}</a>
</td>
      <td>Retrieves information about the different payment methods available in MercadoLibre.</td>
    </tr>
     <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/sites/MLA/payment_methods" target="_blank">/sites/{site_id}/payment_methods</a>
</td>
      <td>Returns the payment methods provided by MercadoPago.</td>
    </tr>
     <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/orders/{order_id}/feedback" target="_blank">/orders/{order_id}/feedback?access_token={...}</a>
</td>
      <td>Get the feedback received from a buyer or seller in an order.</td>
    </tr>
</tbody>
</table>

<br />
<br />

###Questions
<p>Ask question, receive answers.</p>
<table>
    <thead>
      <tr>
         <th class="left_column">
            Resource
          </th>
          <th class="right_column">
            Description
          </th>
        </tr>
  </thead>
  <tbody>
    <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/questions" target="_blank">/questions?access_token={...}</a></td>
      <td>Ask, answer or search for questions. Hide questions or block someone from asking questions on your items.</td>
    </tr>
    <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/questions/search" target="_blank">/questions/search</a></td>
      <td>Search any question made to user products.</td>
    </tr>
    <tr>
      <td class="left_column"><a href="https://api.mercadolibre.com/users/{seller_id}/questions_blacklist" target="_blank">/users/{seller_id}/questions_blacklist?access_token={...}</a></td>
      <td>Search questions from users in the blacklist.</td>
    </tr>
</tbody>
</table>