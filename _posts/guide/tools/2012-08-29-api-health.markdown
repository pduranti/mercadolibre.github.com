---
layout: 2columns
title: Platform Health
menu: developer-tools
categories: 
- SDKs 
- More Tools
menu: 
- Tools
tags: 
- More Tools
---
<script src="/javascripts/twitter.js">
</script>


<div class="status_bar">
    
    <div id="status_color_api">
        <div id="general_status" class="status">
        </div>
    </div>

    <div>
        <div class="sub_status_bar left">
            <div class="inner_status_bar" id="apiStatus">
                API
            </div>
        </div>

        <div class="sub_status_bar right">
            <div class="inner_status_bar" id="feedStatus">
                Notifications
            </div>
        </div>
    </div>
</div>

<div class="ch-g1">
    <div class="SubTitles">Recent News</div>
    <div id="lastTweets"></div>
</div>
     

<style>

.status {
    padding: 5%; 
    font-size: 24px;
    font-weight: bold;
    color: #FFF;
    margin: auto;
    display: block;
    width: 55%;
}

.sub_status_bar {
    width:49.8%; 
    color: #FFF; 
    padding-top: 2%;
    padding-bottom: 2%;
    margin-top: 0.5%;
    background: -moz-linear-gradient(top, #3A3A3A 0%, #444 100%);
    background: -webkit-linear-gradient(top, #3A3A3A 0%, #444 100%);
    background: -o-linear-gradient(top, #3A3A3A 0%, #444 100%);
    background: -ms-linear-gradient(top, #3A3A3A 0%, #444 100%);
    background: linear-gradient(top, #3A3A3A 0%, #444 100%);
}

.left {
    float: left;
}

.right {
    float: right;
}

.inner_status_bar {
    width: 70%;
    margin: auto;
    display: block;
    font-size: 20px;
}

.inner_status_bar img{
    margin-right: 5%;
}

.status_bar {
    width: 100%;
    margin-bottom: 20px;
    background-color: #000;
}

.SubTitles {
    color: #DC7B1C; 
    font-size: 18px; 
    font-weight: bold; 
    padding-bottom: 15px;
    margin-top: 20px;
}

.red {
    background-color: #FF7773;
}

.yellow {
    background-color: #FFDA40;
}

.green {
    background-color: #74E868;
}

#lastTweets {
    width: 600px;
    font-family: georgia;
    font-size: 15px;
    color: #333333;
    padding: 10px;
}
 
#lastTweets .tweet {
    margin: 0 auto 15px auto;
    padding: 0 0 15px 0;
    border-bottom: 1px dotted #ccc;
}
 
#lastTweets .tweet a {
    text-decoration: none;
    color: #13c9d0;
}
 
#lastTweets .tweet a:hover {
    text-decoration: underline;
}
 
#lastTweets .tweet .time {
    font-size: 10px;
    font-style: italic;
    color: #666666;
}

</style>

