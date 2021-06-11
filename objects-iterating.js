let groupOne = {
  'a': 4,
  'b': 2,
  'a': 3
};

let groupTwo = {
  'a': 2,
  'b': 5,
}

for (const property in groupOne) {

    // for in loop goes through all the keys in the object - except the second groupOne.a
  console.log(property)

    // for in loop goes through all property values in the object
  console.log(groupOne[property]) 

}

