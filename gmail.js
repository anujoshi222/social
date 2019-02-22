function HandleGoogleApiLibrary() {
	// Load "client" & "auth2" libraries
	gapi.load('client:auth2',  {
		callback: function() {
			// Initialize client & auth libraries
			gapi.client.init({
		    	apiKey: 'YOUR_GOOGLE_API_KEY',
		    	clientId: 'YOUR_GOOGLE_API_CLIENT_ID',
		    	scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/plus.me'
			}).then(
				function(success) {
			  		
				}, 
				function(error) {

			  	}
			);
		},
		onerror: function() {

		}
	});
}
