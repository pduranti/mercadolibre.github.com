---
layout: guides
title: Selling guide
categories: selling
menues: [Selling, OAuth]
tags: 
- New Guides
---

##Access Token Validity & Expiration {#token-validity}

When you obtain an access token, it will be valid immediately and usable in requests to the API for some time period. After that period has elapsed, the access token is considered to have expired and the user will need to be authenticated again in order for your app to obtain a fresh access token. The duration for which a given access token is valid depends on how it was generated.

There are also events which may cause an access token to become invalid before its expected expiry time. Such events include the user changing their password, an application refreshing it's App Secret. Dealing with varying access token expiry times, and handling the case when an access token becomes invalid before its expected expiry time is essential for building a robust application.

