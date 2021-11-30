const swapper = function(key1, object1, key2, object2) {
  console.log('Swap!');
  let tempobj1 = object1;
  let tempobj2 = object2;

  tempobj1[key1] = object2[key2];
  tempobj2[key2] = object1[key1];

  // Put your solution here

  console.log('object1: ', object1);
  console.log('object2: ', object2);
};

swapper('a', { a: 1 , b: 2, c: 3 }, 'c', { a: 4, b: 3, c: 5 });
swapper('b', { a: 8 , b: 7, c: 6 }, 'd', { a: 5, b: 1, c: 2, d: 12});
swapper('c', { a: 1 , b: 3, c: 3, d: 7 }, 'c', { a: 4, b: 0, c: 5 });