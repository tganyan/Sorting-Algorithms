'use strict';

const merge = require('../merge-sort');

const testArrayOne = [1, 4, 2, 9, 6, 5, 10, 7];
const testArrayTwo = [15, 3, 25, 23, 8, 9];

describe('#merge-sort.js', () => {
  test('does it properly sort test array 1', () => {
    expect(merge.mergeSort(testArrayOne)).toEqual([1, 2, 4, 5, 6, 7, 9, 10]);
  });
  test('does it properly sort test array 2', () => {
    expect(merge.mergeSort(testArrayTwo)).toEqual([3, 8, 9, 15, 23, 25]);
  });
});
