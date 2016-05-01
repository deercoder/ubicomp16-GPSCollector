%%%
% Author: Chang Liu
% for computing EMD using two heatmaps
%%%

function [f, fval] = demo(varargin)

% Images
if nargin == 0
    A = imread('Day1.png');
    B = imread('Day2.png');
elseif nargin == 2
    A = varargin{1};
    B = varargin{2};
    if ischar(A)
        A = imread(A);
    end;
    if ischar(B)
        B = imread(B);
    end;
end;

% convert raw image to grey-scale, otherwise crash for generating histogram
% Chang Liu
A = rgb2gray(A);
B = rgb2gray(B);

% Histograms
nbins = 10;
[ca ha] = imhist(A, nbins);
[cb hb] = imhist(B, nbins);

% Features
f1 = ha;
f2 = hb;

% Weights
w1 = ca / sum(ca);
w2 = cb / sum(cb);

% Earth Mover's Distance
[f, fval] = emd(f1, f2, w1, w2, @gdf);

% Results
wtext = sprintf('fval = %f', fval);
figure('Name', wtext);
subplot(121);imshow(A);title('first image');
subplot(122);imshow(B);title('second image');

end