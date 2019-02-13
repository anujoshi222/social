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


   }


function setElements(isLogged){
 if(isLogged){



   document.getElementById('profile').style.display = "block";
   document.getElementById('fb-btn').style.display = 'none';
   document.getElementById('logout').style.display = 'block';
   document.getElementById('heading').style.display = 'none';

 }else{
document.getElementById('profile').style.display = 'none';
   document.getElementById('fb-btn').style.display = 'block';
   document.getElementById('logout').style.display = 'none';
   document.getElementById('heading').style.display = 'block';


 }
}

function logout(){
  FB.logout(function(response){
    setElements(false);
  })
}

function testAPI(){
  FB.api('/me?fields=name,email,picture,birthday,location',function(response){
    if(response && !response.error){
buildprofile(response);
    }
  })
}

function   buildprofile(user){
  let profile= `
  <h3>${user.name}</h3>
  <ul class="list-group">
  <li class="list-group-item"><img class="rounded mx-auto rounded mx-auto d-block" src=${user.picture.data.url} alt="pic" width="150px" height="150px"></li>
  <li class="list-group-item">User ID: ${user.id}</li>
  <li class="list-group-item">User Email: ${user.email}</li>
  <li class="list-group-item">Birthday: ${user.birthday}</li>
  </ul>
  `
document.getElementById('profile').innerHTML = profile;

}
