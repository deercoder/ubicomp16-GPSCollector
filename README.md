#Routine Detection
We use GPS data to build a heat map and analyze the map based on an algorithm. 
And use the daily map to build a pattern for a person and set a initial EMD value for him/her.
If the map shows that there is a big difference in EMD value we could infer that the person's routine is abnormal.

#Contributors
* [@Duo Liu](https://github.com/DuoL)
* [@Chang Liu](https://github.com/deercoder)
* [@Lijian Wan](https://github.com/LijianWan)

#Advisor
* [@Guanling Chen](https://github.com/gchenhub)

# Video Demo
<img src="https://github.com/uml-ubicomp-2016-spring/ubicomp16-GPSCollector/blob/master/ScreenShot/Get%20GPS.png?raw=true" width="400" height="260">

Geolocation Collector(http://www.screencast.com/t/81hgh1he5Af)

# Interface and Report
<img src="https://github.com/uml-ubicomp-2016-spring/ubicomp16-GPSCollector/blob/master/ScreenShot/Interface.png?raw=true" width="280" height="260">
<img src="https://github.com/uml-ubicomp-2016-spring/ubicomp16-GPSCollector/blob/master/ScreenShot/heatmap.png" width="480" height="260">

# Weekly Report
## Progress   March,28

* Build a basic framework with Ionic
* Start to use Ionic creator to build a human interaction
* Create a Ionic project named myGPS

## Progress   April,04

* Connect google map API with Ionic framework
* Using google map API in the javaScript but failed due to the platform version
* Display the google map in <div>
* Trying to connect ngCordova with sqlite
* Only use ngCordova to get current geolocation but cannot connect it to sqlite
* Use localstorage instead

## Progress   April,11

* Change sqlite into localstorage
* Localstorage does work well with ngCordova in any platforms
* Start to gather the GPS location
* Collect geolocation by using current version(ios based)
* Use a csv file to output the data
  
## Progress   April,18

* Build a heat map by using matlab based on collected data
* The heat map is so abstract and cannot display where actually are
* Think of another way to display the data in detail  
* Try another data set (Microsoft data set)
  *Bad taste in the matlab


## Progress   April,25

* Build another version heat map by using google map API
* Use Google map API to build some functions to make every point clearer than before
* Final debug and put the algorithm into use
* Get rid of some noise made by changing from the wifi mode to celluar mode
* Using a EMD value to classify the normal maps and abnormal maps
  
## Progress   April,30

* Get a result on collected data 
* Try our best to get more data
* Build a server as soon as possible