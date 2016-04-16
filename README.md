## What we did in the last week.

Fix the GPS collector:

1.It can automatically collect the gps location (every 5 mins);

2.Add timestamp into the localStorage

3.Change the output file from .txt to .csv

4.Add a marker to mark where you actually is

5.Using graph algorithm to find the difference between the two days and analyze a warning result if there is a exception

6.Learning a new language named "GO" to build a server in the backend

7.Fix front page that can download the csv file using a click button


We collected a few gps location data(8 days).

Built a simple 'heat map':

1.Scale the map;

2.Use different color to mark the point's frequency.

3.Analyze the heat map so that we can get a conclusion that the person which produces the gps location is in normal routine or not.


Problem we met:

1.ngCordova may not work as we excepted because some function like "$cordovaFile.uploadFile()", "$cordovaSQLite.openDB()","$cordovaFileTransfer.upload()" doesn't work well with ionic

2.The SQLite sometimes doesn't work well with ngCordova. The data we saved sometimes are not ordered, we have to re-deal with the data set. So I'm thinking about a new way to save the data set like using localStorage.

Next step:

More and more data is needed. 

And think of a way to deal with the 'heat map'.

Think of a model that can train the data set. 
 
Build  a server which we could share data set with each other.

 