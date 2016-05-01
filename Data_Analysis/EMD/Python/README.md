README
=======

By Chang Liu


This directory is for data analysis using Python's built-in library as well as external third-party libs for computing the
Earth Mover's Distance(EMD). Originally this distance is to evaluate two seperate distribution distance, but in later year
it has show wide potential and outstanding performance in image retrieval. As the benchmark, it can be used for computing the
distance between two images.


Our design first is to use the raw sensor data to generate the heatmap, and then compute the distance for each of the two images.
As a small group, for each one specific image, we can caluculate the distance as follows:

```
raw, test1, test2, test3, ... testn   ->>>>>>>    0, dist1, dist2, dist3, ... distn
```

for this `n+1` images, we can use the multiple loops to calculate the average distance between each one with the remaining sets,
this will generate (n+1) averages, among all these values, we can use a threshold-based or mean-based algorithm to select out the
outliers that stands out most, which means the group of which one image is most abnormal from the remaining sets.

We use open source `pyEMD` to calculate the distance between two images, and this `emd.py` demo shows how it works for two natural
images, we can further extend it to heatmap images as well.

some additional depences could be found in `Requirement.md`, we can used python's `pip install` to install necessary packages, since
it requires numpy, scipy, Image, pyEMD to do image processing, cropping and distance calculation.
