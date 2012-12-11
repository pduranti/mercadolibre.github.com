---
layout: firststep
title: Getting Started
menu: 
- First Steps
---


## Before you start


Our API is [RESTful](http://es.wikipedia.org/wiki/Representational_State_Transfer), which means that every url provides information on different business entities. We call this **_resource_**. 

All responses are JSON encoded. (For details on API design visit [Design Considerations](/design-considerations/#json)).

Some Resources are public and others have private information. To access public information you can use just an URL:

<pre class="terminal">
$ curl https://api.mercadolibre.com/sites/MLA/search?q=ipod
</pre>


But if you need to access private Resources you will need an access token:

<pre class="terminal">
$ curl https://api.mercadolibre.com/users/me?access_token=...
</pre>


## Create your own Application {#register}


To create an App, you need to have a valid and active user in one of the countries of our platform.
Go to the [App manager](http://applications.mercadolibre.com) and follow the steps, if you have a user you will need to log in, if you don't have one, you will be guided through the Registration process.

After you create the App, you will get an App ID and a client secret key which will be very important later on. You can read about how to use this tool on the [application manager guide](/application-manager).

<style type="text/css">
img.appID
{
  width:500px;
  height:260px;
  background:url(/images/application-detail.png) 0px 0px;
  box-shadow:10px 10px 10px 5px gray; 
}
</style>

<img src="" class="appID">

## Authorizing an Application

Applications can only access private user resources if users grant explicit **authorization** to the Application.



<div style="height:400px;">
  <img src="/images/authentication.png" style="z-index:1;box-shadow:10px 10px 10px 5px gray;" />
  <img src="/images/authorization.png" style="position:relative;left:350px;top:-200px;z-index:2;box-shadow:10px 10px 10px 5px gray;" />
</div>


## Retrieve your User Information {#profile}

Our [SDKs](/javascript-sdk) will enable you to retrieve your own user profile using your own application.

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
MELI.init({client_id: 6092});
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
    'appId'         => 6092,
    'secret'        => 54dfgdgwgw8gfAdgDJDIULkdjhgp87,
));
			{% endhighlight %}
		</div>
		<div id="java">
			{% highlight java %}

Meli m = new Meli(6092, "9ykscjsghdPBNQ2SrLqdapp5HbSasswd");

m.authorize("the received code", "http://somecallbackurl");

FluentStringsMap params = new FluentStringsMap();
params.add("access_token", m.getAccessToken());
Response response = m.get("/users/me", params);

{% endhighlight %}
		</div>
	</div>
</div>


## Give it a try with your App! {#try}

<p>
  Enter the application ID you've just created: <input id="target" type="text" value="6092" size="6" /> &nbsp;
  <input class="ch-btn ch-btn-small" type="button" id="show-my-info" value="Show my information"/>
</p>

<div id="try-by-yourself">
  <ul>
    <li><a href="#user-info">User Information</a></li>
    <li><a href="#response">JSON Response</a></li>
  </ul>
  <div>
    <div id="user-info">
      <p class="ch-form-row ch-form-required"><label for="access_token">Access Token:</label><span id="access_token"></span></p>
      <p class="ch-form-row ch-form-required"><label for="userid">User Id:</label><span id="userid"></span></p>
      <p class="ch-form-row ch-form-required"><label for="nickname">Nickname:</label><span id="nickname"></span></p>
      <p class="ch-form-row ch-form-required"><label for="firstname">First Name:</label><span id="firstname"></span></p>
      <p class="ch-form-row ch-form-required"><label for="lastname">Last Name:</label><span id="lastname"></span></p>
      <p class="ch-form-row ch-form-required"><label for="email">Email:</label><span id="email"></span></p>
      <p class="ch-form-row ch-form-required"><label for="site">Site:</label><span id="site"></span></p>
    </div>
    <div id="response">
      <p><pre id="me">{}</pre></p>
    </div>
  </div>
</div>

<script>

  window.onload = function() { startDrawing(); }
  
  function startDrawing(){
      $("#try-by-yourself").tabNavigator();
      $("#code").tabNavigator();
      
      $('#show-my-info').click(function() {

          var ID = parseInt($('#target').val());
          console.log(ID);

          MELI.init({client_id: ID});
          
          MELI.login(function() {

            MELI.get('/users/me', null, function(data) {
              
              var userInfo = data[2];
              console.log(userInfo);

              $('#access_token').html(MELI.getToken());
              $('#access_token').show();

              $('#userid').html(JSON.stringify(userInfo.id));
              $('#userid').show();

              $('#nickname').html(JSON.stringify(userInfo.nickname));
              $('#nickname').show();

              $('#firstname').html(JSON.stringify(userInfo.first_name));
              $('#firstname').show();

              $('#lastname').html(JSON.stringify(userInfo.last_name));
              $('#lastname').show();

              $('#email').html(JSON.stringify(userInfo.email));
              $('#email').show();

              $('#site').html(JSON.stringify(userInfo.site_id));
              $('#site').show();

              $('#me').html(JSON.stringify(userInfo));
              $('#me').show();
            });

          });
        });

  }
</script>


## Next Steps {#next}

Reading the [Authentication](/authentication-and-authorization) section you will see how applications manage and grant permission scopes. Our [Developer Tools](/javascript-sdk) hide all the complexity of OAuth from you.

Later, you should head over to our Documentation section and find what best suits your goal:
<ul class="ch-list parameters">
  <li><a href="/bookmarks">Shopping</a></li>
  <li><a href="/search-visual-introduction">Searching</a></li>
  <li><a href="/listing-introduction">Listing &amp; Selling</a></li>
</ul>


