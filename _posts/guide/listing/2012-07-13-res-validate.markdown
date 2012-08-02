---
layout: 2columns
title: Real estate listing
categories: guides-res
tags: relist
---

#List Real Estate properties

Validate your Real Estate JSON {#validate}
------------------------------

If you want you can validate your JSON before actually listing it by sending it in a POST request body to the following URL:

<pre class="terminal">
 https://api.mercadolibre.com/items/validate?access_token=YOUR_ACCESS_TOKEN
</pre>

If the response status code is "200 OK" or "204 No content", then the JSON was successfully validated and your property is ready to be listed.

This validation process is not mandatory, but will most likely become handy when testing your APP. Keep in mind that there is no sandbox nor pre-production environment, so every property listed during your testing phase will be visible in our platform by all of our users. It is highly recommended that you finalize listed items posted while testing.