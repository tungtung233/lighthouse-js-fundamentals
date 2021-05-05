let finalWidth = 10;

function makeLine(length) {
  let line = "";
  for (let j = 1; j <= length; j++) {
    line += "* "
  }
  if (length === finalWidth) {
    return line;
  } else {
  return line + "\n";
  }
}

function buildTriangle(baseWidth) {
  let triangle = "";
  for (let k = 1; k <= baseWidth; k++) {
    triangle = triangle + makeLine(k);
  }
  return triangle
}

finalWidth = 3;

console.log(buildTriangle(finalWidth));
