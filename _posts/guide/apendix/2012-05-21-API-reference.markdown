---
layout: 1columns
title: Appendix - API Reference
categories: guides
tags: Appendix
apis:
- ["https://api.mercadolibre.com/applications/121", "Applications"]
- ["https://api.mercadolibre.com/users/99580221/addresses", "Addresses"]
- ["https://api.mercadolibre.com/sites/MLA/card_issuers", "Card issuers"]
- ["https://api.mercadolibre.com/categories/MLA87668/attributes", "Category Attributes"]
- ["https://api.mercadolibre.com/domains/1", "Catalog Domains Attributes"]
- ["https://api.mercadolibre.com/domains", "Catalog Domains"]
- ["https://api.mercadolibre.com/sites/MLA/catalog_products/7710", "Catalog products"]
- ["https://api.mercadolibre.com/sites/MLA/catalog_products/800767/reviews/search", "Catalog Reviews"]
- ["https://api.mercadolibre.com/sites/MLA/catalog_products/816346/recommendations/search?site=MLA&amp;recommType=VISTOVIS", "Catalog Recomendation"]
- ["https://api.mercadolibre.com/categories/MLA1071", "Categories"]
- ["https://api.mercadolibre.com/sites/MLA/categories", "Categories Site"]
- ["https://api.mercadolibre.com/cities/TUxBQ0NBUGZlZG1sYQ", "Cities"]
- ["https://api.mercadolibre.com/countries", "Countries"]
- ["https://api.mercadolibre.com/currencies/USD", "Currencies"]
- ["https://api.mercadolibre.com/currency_conversions/search?from=ARS&amp;to=USD", "Currency conversions"]
- ["https://api.mercadolibre.com/sites/MLA/deals", "Deals"]
- ["https://api.mercadolibre.com/sites/MLA/featured_items/HP", "Featured Items"]
- ["https://api.mercadolibre.com/geolocation/ip/200.1.1.1", "Geolocation"]
- ["https://api.mercadolibre.com/sites/MLA/hot_items/search?limit=5&amp;category=MLA1743", "Hot Items"]
- ["https://api.mercadolibre.com/items/MLA87828458", "Items"]
- ["https://api.mercadolibre.com/sites/MLA/listing_types", "Listing Types"]
- ["https://api.mercadolibre.com/sites/MLA/listing_exposures", "Listing exposures"]
- ["https://api.mercadolibre.com/sites/MLA/listing_prices?price=1", "Listing prices"]
- ["https://api.mercadolibre.com/sites/MLA/listing_types/", "Listing types"]
- ["https://api.mercadolibre.com/states/TUxBUENBUGw3M2E1", "Location States"]
- ["https://api.mercadolibre.com/sites/MLA/merchs/PROD_NHP", "Merch"]
- ["https://api.mercadolibre.com/mclics/system/MLA/cfg/ad_max_mcpc", "MercadoClics Ads"]
- ["https://api.mercadolibre.com/sites/MLA/news/search?category=MLA1743", "News"]
- ["https://api.mercadolibre.com/orders/1414505?caller.id=11133985", "Orders"]
- ["https://api.mercadolibre.com/payment_methods/MLAMC", "Payment methods"]
- ["https://api.mercadolibre.com/sites/MLA/payment_methods", "Payment methods (MP)"]
- ["https://api.mercadolibre.com/payment_types", "Payment types"]
- ["https://api.mercadolibre.com/pictures/MLA719522498_032011", "Pictures"]
- ["https://api.mercadolibre.com/users/89330146/promotion_pack_combos/124?caller.id=89330146", "Promotion pack combos"]
- ["https://api.mercadolibre.com/users/2767066/promotion_packs?caller.id=2767066", "Promotion packs"]
- ["https://api.mercadolibre.com/questions/1918461935", "Questions"]
- ["https://api.mercadolibre.com/scopes", "Scopes"]
- ["https://api.mercadolibre.com/sites/MLA/searchUrl?q=ipod", "Search api"]
- ["https://api.mercadolibre.com/sites/MLA/searchbackend", "Search backend"]
- ["https://api.mercadolibre.com/sites/MLA/searchUrl?q=ipod", "Search url"]
- ["https://api.mercadolibre.com/sites/MLA/metatags/HOME", "SEO HOME"]
- ["https://api.mercadolibre.com/sites/MLA/metatags/SEARCH", "SEO SEARCH"]
- ["https://api.mercadolibre.com/shipping_methods/100009", "Shipping"]
- ["https://api.mercadolibre.com/site_domains/www.mercadolibre.com.ar", "Site domains"]
- ["https://api.mercadolibre.com/sites/MLA", "Site Description"]
- ["https://api.mercadolibre.com/sites", "Sites"]
- ["https://api.mercadolibre.com/sites/MLA/trends/search?category=MLA1042", "Trends"]
- ["https://api.mercadolibre.com/users/20", "Users"]
---


# API Reference

This section contains a list of the MELI API's.

##APIs
{% for api in page.apis | sort %}
[{{ api[1] }}]({{ api[0] }})
{% endfor %}
