%%%
% Author: Chang Liu
% for computing EMD using two heatmaps
%%%

function [f, fval] = demo(varargin)

% use loop for find outliers
dist_arr = zeros(1, 9);

for i = 0:8
    emd_avg = 0;
    for j = 0:8
        if j ~= i
        img1 = sprintf('Day%d.png', i);
        img2 = sprintf('Day%d.png', j);
        [f, v] = dist_emd(img1, img2);
        % accumulate each pair's distance (i1,i2), (i1, i3), (i1,
        % i4)...(i1, i_n)
        emd_avg = emd_avg + v;
        end
    end
    dist_arr(i+1) = emd_avg;
    % comment, for debugging each distance
%     disp('result:');
%     disp(emd_avg);
end

disp(dist_arr);



% Results
% wtext = sprintf('fval = %f', fval);
% figure('Name', wtext);
% subplot(121);imshow(A);title('first image');
% subplot(122);imshow(B);title('second image');

end