---
layout: guides
title: First Step
menu: quickstart
---


<div class="contents">
<h5>Table of Contents</h5>

<dl>
  <dt><a href="javascript:void(0)" onClick="goToByScroll('register')">Register an Application in MercadoLibre MELI</a></dt>
  <dt><a href="javascript:void(0)" onClick="goToByScroll('profile')">Retrieves your Own Profile</a></dt>
  <dt><a href="javascript:void(0)" onClick="goToByScroll('apis')">Public &amp; Private APIs</a></dt>
  <dt><a href="javascript:void(0)" onClick="goToByScroll('response')">JSON Response</a></dt>
  <dt><a href="javascript:void(0)" onClick="goToByScroll('next')">Next Steps</a></dt>
</dl>
</div>

## Register an Application in MercadoLibre MELI {#register}


The very first thing you'll want to do is make sure you are a [registered user in MercadoLibre](http://www.mercadolibre.com).

Then, go to the [application manager](http://applications.mercadolibre.com) and create an application as described below. You'll get a client ID and a client secret which will be very important later on.

<style type="text/css">
img.appID
{
  width:423px;
  height:120px;
  background:url(/images/application-detail.png) 0px -10px;
}

img.appSecret
{
  width:423px;
  height:60px;
  background:url(/images/application-detail.png) 0px -340px;
}
</style>

<img src="" class="appID">
<br /><br />
<img src="" class="appSecret">

## Retrieves your Own Profile {#profile}

Using our [SDKs](/javascript-sdk) you'll be able to retrieve your own user profile using your own application.

<div id="code">
	<ul>
		<li><a href="#javascript">Javascript</a></li>
		<li><a href="#php">PHP</a></li>
		<li><a href="#java">Java</a></li>
	</ul>
	<div>
		<div id="javascript">
Initialize the API with your client_id as follows:

{% highlight javascript %}
MELI.init({client_id: 10115});
{% endhighlight %}
				

That's it. Afterwards, this line of code will show the First Name of your registration in MELI:

{% highlight javascript %}
MELI.get(
  "/users/me",{},
    function(data) { alert("Hello "+data[2].first_name) }
);
{% endhighlight %}
		</div>
		<div id="php">
Initialize the SDK with your __client_id__ as follows:

{% highlight php %}
// Try to put this code at the top
require '../src/meli.php';

// Create our Application instance (replace this with your appId and secret).
$meli = new Meli(array(
    'appId'         => 10115,
    'secret'        => 9ykscT65bzPBNQ2SrLqdapp5HbDYddzX,
));
			{% endhighlight %}
		</div>
		<div id="java">
			{% highlight java %}

Meli m = new Meli(10115, "9ykscT65bzPBNQ2SrLqdapp5HbDYddzX");

m.authorize("the received code", "http://somecallbackurl");

FluentStringsMap params = new FluentStringsMap();
params.add("access_token", m.getAccessToken());
Response response = m.get("/users/me", params);

{% endhighlight %}
		</div>
	</div>
</div>

<script type="text/javascript">
	$("#code").tabNavigator();
</script>

## Public &amp; Private APIs {#apis}


Our APIs are [RESTful](http://es.wikipedia.org/wiki/Representational_State_Transfer), which means that every url provides information on different business entities. We call this _resource_. The way you can operate on resources is by using HTTP _methods_ (see [HTTP Methods](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9)).  

Our APIs will give you lots of information. Some of it is private, some of it is public. To access to public information you can use just an URL:


<pre class="terminal">$ curl https://api.mercadolibre.com/countries</pre>

But if you need to access to private informtaion you will get access only if you have an access token:

<pre class="terminal">$ curl https://api.mercadolibre.com/users/me?access_token=...</pre>

## Authentication &amp; Authorization {#authentication-authorization}

To allow an application to access to your data you need to be [authenticated](/authentication) in MercadoLibre and confirm using [authorization](/authorization) stage. 

<img src="/images/authentication-authorization.png" alt="Authentication" />


## JSON Response {#response}

All responses are JSON encoded. For more information visit [Design Considerations](/design-considerations/#json) section.

{% highlight javascript %}
{
   "id":57249824,
   "nickname":"TEST_VENTA_MLA1",
   "first_name":"Test",
   "last_name":"Test",
   "country_id":"AR",
   "email":"test310511_5959@robot.com",
   "identification":{...},
   "phone":{...},
   "user_type":"normal",
   "logo":null,
   "points":35,
   "site_id":"MLA",
   "seller_experience":"ADVANCED",
   "seller_reputation":{...},
   "buyer_reputation":{...},
   "status":{...},
   "credit":{...}
}
{% endhighlight %}



## Try by yourself {#try}

Using [Javascript SDK](/javascript-sdk), we will show you how to use your app:

<div class="ch-g1">
  <div class="">
    <div class="ch-g1-3">
      <div class="ch-leftcolumn">
        <p><pre id="nickname">...</pre></p>
        <p><pre id="firstname">...</pre></p>
        <p><pre id="lastname">...</pre></p>
        <p><pre id="email">...</pre></p>
      </div>
    </div>

    <div class="ch-g2-3">
      <div class="ch-rightcolumn">
        <p><pre id="me">{}</pre></p>
      </div>
    </div>

    <div class="clearfix"></div>
  </div>
</div>

<center>
  Enter your application data ID:<input id="target" type="text" value="10115" />
  <input class="ch-btn ch-btn-small" type="button" id="show-my-info" value="Show my information"/>
</center>

<script>
    $(document).ready(function() {
 
        $('#show-my-info').click(function() {

          var ID = parseInt($('#target').val());
          console.log(ID);

          MELI.init({client_id: ID});
          
          MELI.login(function() {

            MELI.get('/users/me', null, function(data) {
              
              var userInfo = data[2];
              console.log(userInfo);

              $('#nickname').html(JSON.stringify(userInfo.nickname));
              $('#nickname').show();

              $('#firstname').html(JSON.stringify(userInfo.first_name));
              $('#firstname').show();

              $('#lastname').html(JSON.stringify(userInfo.last_name));
              $('#lastname').show();

              $('#email').html(JSON.stringify(userInfo.email));
              $('#email').show();
            });

          });
        });
     });
</script>


## Next Steps {#next}

Going through the [Authentication](/authentication) section will give you the knowledge about registration and sign-in. Reading [Authorization](/authorization) section you will see how applications grants and permission scopes. Platform uses [OAuth 2.0](http://tools.ietf.org/pdf/draft-ietf-oauth-v2-12.pdf) for authentication and authorization. Our [Developer Tools](/javascript-sdk) hide all the complexity of OAuth 2.0, but you can read [OAuth](/oauth-introduction) section to implement your connection tool. 

[Documentation](/guides) section shows all available guides. If you are interested in to search items using MELI's APIs visit [Searching](/search-visual-introduction) section. If you are buy an item you can visit [Buyer](/bookmarks) guides. But if you are thinking in sell over MercadoLibre visit [Selling](/listing-introduction) guides.

When you're ready, feel free to dive right into the [API reference](/guide-appendix) section to learn about the resources available via the MELI API.

Visit [Forums](/discuss) section to know more about community. 

