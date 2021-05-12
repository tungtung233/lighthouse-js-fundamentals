function merge (arr1, arr2) {
  let emptyArray = [];

  for (let x = 0; x < arr1.length; x++) {
    emptyArray.push(arr1[x]);
  }

  for (let y = 0; y < arr2.length; y++) {
    emptyArray.push(arr2[y]);
  }

  return emptyArray.sort();
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3 ])); 