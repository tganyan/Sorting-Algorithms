'use strict';

const sorting = module.exports = {};

sorting._merge = (presortedLeft, presortedRight) => {
  const sortedValues = [];

  while (presortedLeft.length > 0 && presortedRight.length > 0) {
    if (presortedLeft[0] <= presortedRight[0]) {
      sortedValues.push(presortedLeft.shift());
    } else {
      sortedValues.push(presortedRight.shift());
    }
  }

  if (presortedLeft.length > 0) {
    sortedValues.push(...presortedLeft);
  }

  if (presortedRight.length > 0) {
    sortedValues.push(...presortedRight);
  }

  return sortedValues;
};

sorting._mergeSortHelper = (items) => {
  if (items.length === 1) {
    return items;
  }

  const middleIndex = Math.floor(items.length / 2);

  const leftItems = items.slice(0, middleIndex);
  const rightItems = items.slice(middleIndex);

  return sorting._merge(sorting._mergeSortHelper(leftItems), sorting._mergeSortHelper(rightItems));
};

sorting.mergeSort = (items) => {
  if (!Array.isArray(items)) {
    throw new TypeError('Input should be an array');
  }

  if (items.length <= 1) {
    return items;
  }

  return sorting._mergeSortHelper(items)
};
