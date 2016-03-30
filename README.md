README
====

##Project Description
Collect GPS data using the Application running on the mobile device.
Then doing the data analysis on the server side.

To be further, we want to design a system for detect routine and give reminder/estimation for the user based on the GPS/location data.


##Project directory

* App: The native code running on mobile device(Android/IOS)
* Data_Analysis: analyze the GPS raw for routine detection.


###App

**How it works**: This is a simple GPS collector. Firstly, you could get your location when opening this and it will ask you for opening the location service.
Then you could simply click 'Insert' to save the location of where you are.


####Geolocation Collector

This app is used to collect the GPS location.

####Code Example

```
We simply use $Geocordorva to implement this function
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
             
        }, function(err) {
            $ionicLoading.hide();
            console.log(err);
        });
```

####Motivation

Nowadays we need to analyze a personal routine and if a person is in depression or not and there is a strong connection between GPS and a person's situation.
So we built this app to collect a person's Geolocation.

####Installation

Simply you could download all the files in this "APP"

And make sure you've already installed Ionic on both your desktop and mobile device.

If not consider this link:http://ionicframework.com/getting-started/

Then use your email address to create a Ionic account in the App on your device.

Next:$ cd /where this app is

Input:$ ionic upload

Input:$ /your email address

After that you could open the Ionic app and see a new app in your mobile device. 

####API Reference

Using google map API to detect where you are and show different views of the same location.
https://developers.google.com/maps/

Using Geocordorva to get the geolocation service.
http://ngcordova.com/docs/plugins/geolocation/

Using cordovaSQLite to connect database.
http://ngcordova.com/docs/plugins/sqlite/


###Data Analysis:

Some exploratory experiment


## Contributors

Guanling Chen provides a reference http://www.ucl.ac.uk/~ucfamus/papers/ubicomp15_trajectories.pdf.
Duo Liu codes this app.
Chang Liu analyzes the output data and thinks of an algorithm to connect the data with people's depression.
Lijian Wan analyzes the output data and debugs.

## License

This is Ionic Framework Google Maps application made for blog article: http://www.gajotres.net/using-cordova-geoloacation-api-with-google-maps-in-ionic-framework/

