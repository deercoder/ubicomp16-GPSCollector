%%%
% Author: Chang Liu
% EMD subfunction for using loops 
%%%

function [f, fval] = dist_emd(varargin)

% Images
if nargin == 0
    A = imread('Day2.png');
    B = imread('Day0.png');
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

% Results[for debugging, Chang]
% disp(fval);

end