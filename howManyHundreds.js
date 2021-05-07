function howManyHundreds (bottles) {
  let containers = bottles / 100;
  return Math.floor(containers);
}

console.log(howManyHundreds(512));