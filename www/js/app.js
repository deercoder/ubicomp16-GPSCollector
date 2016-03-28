// Ionic Starter App
    
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic','ngCordova']);
var db = null; 
app.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
		if(window.cordova && window.cordova.plugins.Keyboard) {
		    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if(window.StatusBar) {
		    StatusBar.styleDefault();
		}
	    });
    });
//controller to form a map
app.controller('MapController', function($scope, $cordovaGeolocation,$cordovaSQLite, $ionicLoading, $ionicPlatform) {
	$ionicPlatform.ready(function() {
		
		$ionicLoading.show({
			template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Acquiring location!'
			    });
		var posOptions = {
		    enableHighAccuracy: true,
		    timeout: 20000,
		    maximumAge: 0
		};
		$cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
			var lat  = position.coords.latitude;
			var long = position.coords.longitude;
			
			var myLatlng = new google.maps.LatLng(lat, long);
			
			var mapOptions = {
			    center: myLatlng,
			    zoom: 16,
			    mapTypeId: google.maps.MapTypeId.ROADMAP
			};          
			
			var map = new google.maps.Map(document.getElementById("map"), mapOptions);          
			
			$scope.map = map;   
			$ionicLoading.hide();
			db =$cordovaSQLite.openDB({name:"my.db"});           
			$cordovaSQLite.execute(db,"CREATE TABLE IF NOT EXISTS location(id integer primary key,lat text, long text)");
		    }, function(err) {
			$ionicLoading.hide();
			console.log(err);
		    });
		//Save Location
		$scope.insert = function(){
		    $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
			    var lat  = position.coords.latitude;
			    var long = position.coords.longitude;
			    var query = "INSERT INTO Location (lat,long) VALUES(?,?)";
			    $cordovaSQLite.execute(db, query,[lat,long]).then(function(result){
				    console.log("INSERT location->");
				},function(error){
				    console.log(error);
				});
		    	});
		}
		//Check Saved Location
		/*	$scope.select = function(){
		    var lat = "42";
		    var long = "43";
		    var query = "SELECT lat, long FROM Location where lat = ?";
		    $cordovaSQLite.execute(db, query,[lat]).then(function(result){
			    if(result.rows.length > 0){
			    console.log("SELECTED->" + result.rows.item(0).lat +" "+result.rows.item(0).long);
			    }
			    else{
				console.log("NO ROWS EXIST");
			    }
			},function(error){
			    console.log(error);
			});
		});
		}*/
    });
});