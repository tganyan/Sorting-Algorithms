'use strict';

const radix = module.exports = {};

radix.getDigit = (number, nth) => {
  let returnDigit = 0;

  while(nth--){
    returnDigit = number % 10;

    number = Math.floor((number - returnDigit) / 10);
  }

  return returnDigit
}

radix.radixSort = (items) => {
  const max = Math.floor(Math.log10(Math.max.apply(Math,items)));
  let digitBuckets = [];
  let idx = 0;

  for (let i = 0; i < max + 1; i++){
    digitBuckets = [];
    let j;
    for (j = 0; j < items.length; j++) {
      let digit = radix.getDigit(items[j],i+1);

      digitBuckets[digit] = digitBuckets[digit] || [];
      digitBuckets[digit].push(items[j]);
    }

    idx = 0;
    for (let t = 0; t < digitBuckets.length; t++) {
      if (digitBuckets[t] && digitBuckets[t].length > 0) {
        for(j = 0; j < digitBuckets[t].length; j++) {
          items[idx++] = digitBuckets[t][j];
        }
      }
    }
  }
  return items
};
