---
layout: 2columns
title: Real estate listing
categories: guides-res
tags: pic-upload
---

#List Real Estate properties

Pictures upload	{#picupload}
------------
Pictures are optional when listing, but they make a big difference in the publication quality and results (visits and contacts), specially when talking about real estate properties. *<u>If you already have your pictures uploadad to an accesible web URL, you can then skip this picture uploading step</u> and send these URLs directly as seen in the [JSON example](/new-real-estate-list-item). However, if your pictures are stored locally, you will then have to upload them to our Pictures API, by sending a POST request to the following URL:
<pre class="terminal">
 https://api.mercadolibre.com/pictures?access_token=YOUR_ACCESS_TOKEN 
</pre>

Remember *YOUR_ACCESS_TOKEN* is the necessary key to interact with cerain APIs, obtained in the [Authenticate section](/res-authenticate).

The request body is in this case a binary (instead of plain text), and the procedure varies according to the programming language you are working with.

The request sent must be a *multipart-mime* type and the content-type must also be specified, according to the image format you are uploading, such as:
<pre class="terminal">
 jpg: 'image/jpeg'
 png: 'image/png'
 gif: 'image/gif'
 svg: 'image/svg'
</pre>
Should you need to run some tests with this API, you can use the cURL command, as follows:

curl -F file=@<*LOCAL_PICTURE*> https://api.mercadolibre.com/pictures?access_token=YOUR_ACCESS_TOKEN

*LOCAL_PICTURE* is the path and file name of the picture you wish to upload.

If the picture was sucessfully uploaded you will receive a JSON response body, which contains an "id" element. Save the Picture ID value for every picture you upload, since you will be needing them later on, when putting together the JSON for publishing the property.

*There is currently a maximum amount of fifteen pictures per property.*