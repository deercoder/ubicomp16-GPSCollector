angular.module('app.controllers', ['ngCordova'])

.controller('scheduleCtrl', function($scope) {

})

.controller('uploadCtrl', function($scope) {
  var strCSV ="";
  $scope.loadData = function(){
      for(var i = 0;i <localStorage.length;i++){
      strCSV += localStorage.getItem(localStorage.key(i));
      $scope.localStorages = localStorage.getItem(localStorage.key(i))
      }
      alert("There are "+(localStorage.length)/3+" coordinates in the csv file");
      window.open('data:text/csv,' + encodeURIComponent(strCSV));
    }
})

.controller('mapCtrl', function($scope, $cordovaGeolocation, $ionicLoading, $ionicPlatform) {
  	$ionicPlatform.ready(function() {

  		$ionicLoading.show({
  			template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Acquiring location!'
  			    });
  		var posOptions = {
  		    enableHighAccuracy: true,
  		    timeout: 20000,
  		    maximumAge: 0
  		};
  /*---------------------------Get current geolocation--------------------*/
  //window.setInterval(function(){
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
  		var marker = new google.maps.Marker({
  				position: myLatlng,
  				map:map,
  				title:'You are here!'
  			});
  /*------------------------Watch geolocation options-------------------*/
  			var watchOptions = {
  				timeout : 3000,
  				enableHighAccuracy: false // may cause errors if true
  			};

  			var watch = $cordovaGeolocation.watchPosition(watchOptions);
  			watch.then(
  				null,
  				function(err) {
  					// error
  				},function(position) {
  					var lat  = position.coords.latitude
  					var long = position.coords.longitude
  					console.log(lat,long);
  				});

  				watch.clearWatch();
  				$scope.map = map;
  				$ionicLoading.hide();
  		    	}, function(err) {
  						$ionicLoading.hide();
  						console.log(err);
  			});
  		//},3000);

  /*------------------------Save the location-----------------------*/
window.setInterval(function(){
  						$cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {

              var currentdate = new Date();
  				    var datetime =  (currentdate.getMonth()+1) + "/"
  						+ currentdate.getDate() +  "/"
  						+ currentdate.getFullYear() + ","
  						+ currentdate.getHours() + ":"
  						+ currentdate.getMinutes() + ":"
  						+ currentdate.getSeconds();
  				    var lat  = position.coords.latitude;
  				    var long = position.coords.longitude;

              console.log("---------------------");
  				    console.log("Collect No."+((localStorage.length)/3+1)+" coordinates");
  				    var str = ((localStorage.length)/3).toString();
  				    console.log("lat is "+lat);
  				    console.log("long is "+long);

  						window.localStorage.setItem("a"+str+"a",lat+",");
  						window.localStorage.setItem("a"+str+"b",long+",");
  						window.localStorage.setItem("a"+str+"c",datetime+"\n");
  					})
  				},10000);
  /*---------------------------Output the location in csv file--------------------------*/

      })
});
