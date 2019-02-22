
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <title></title>
</head>
<link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css">
  <script src="https://apis.google.com/js/client:platform.js?onload=renderButton"></script>
<!-- <meta name="google-signin-client_id" content="660738551433-bn6qdjjs34eq9b6daei4vhdkrgvtj98b.apps.googleusercontent.com"> -->
<script src="facebook.js"></script>
<script src="gmail.js"></script>


<style>
  #fb-btn,#gSignIn{
    margin-top:20px;
  }
  #profile, #logout{
    display:none;
  }
</style>
<body>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
<a class="navbar-brand" href="#">Social Auth</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarColor01">
<ul class="navbar-nav mr-auto">
  <li class="nav-item">
    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
  </li>
</ul>

</nav>
<h2 class="text-center" id="heading"> Please login to view your profile info</h2>
<div class="container col-sm-offset-5 col-sm-2 text-center">
  
  <button onclick="logout()"  id="logout" >logout</button>
  <fb:login-button id="fb-btn" data-width="240" data-size="large" data-button-type="login_with"
  scope="public_profile,email"  onlogin="checkLoginState();">Login With</fb:login-button>

<div id="gSignIn"></div>
</div>

<div class="userContent class="container col-sm-offset-5 col-sm-4 text-center" style="display: none;"></div>
  <div id ="profile" class="class="container col-sm-offset-5 col-sm-4 text-center"> </div>


</body>
</html>
