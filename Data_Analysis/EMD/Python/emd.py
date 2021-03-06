#!/usr/bin/evn python
"""
Author: Chang Liu
"""
from pyemd import emd
import numpy as np
from scipy import misc
from PIL import Image

## get two vectors from the image pixels
first = np.array([0.0, 1.0])
second = np.array([5.0, 3.0])

### May need rescale, but here our collected data is the same size

## read two images
img1 = misc.imread("606.jpg", "grey")
img2 = misc.imread("607.jpg", "grey")


## merge into one-dimension
img1 = img1.astype(np.float64)
img2 = img2.astype(np.float64)

print type(img1)
print type(img2)
print img1.shape, img1.dtype
print img2.shape, img2.dtype


# symmetric (metric)
width = img1.shape[0]
height = img2.shape[1]
N = width * height

b = np.random.random_sample(size=(N,N))
b_symm = (b + b.T)/2

distance_matrix = np.array([[0.0, 0.5], [0.5, 0.0]])

# calculate the EMD distance for two.
print emd(img1.flatten(), img2.flatten(), b_symm)
