window.fbAsyncInit = function() {
  FB.init({
    appId    : '821573454844054',
    cookie     : true,
    xfbml    : true,
    version    : 'v2.8'
  });


       FB.getLoginStatus(function(response) {
         callback(response);
       });

};


(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
 fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function callback(response){
     if (response.status === 'connected') {
       console.log("authenticated");
       setElements(true);
       testAPI();
     } else {
       console.log("expired token");
       setElements(false);
     }

   }
   function checkLoginState() {
     FB.getLoginStatus(function (response){
        callback(response);
     });
