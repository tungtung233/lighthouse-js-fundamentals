function range(start, end, step) {

  let output = [];

  if (start > end || step <= 0 || start === undefined || end === undefined || step === undefined) {
    return output;


  } else {
    for (let x = start; x <= end; x += step) {
      output.push(x)
    }
  }
  return output;
  
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));