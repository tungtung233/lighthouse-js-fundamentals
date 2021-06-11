// sorts through the trash people through

const smartGarbage = function (trash, bins) {
  if (trash === 'waste') {
    bins.waste++
  } else if (trash === 'recycling') {
    bins.recycling++
  } else if (trash === 'compost') {
    bins.compost++
  } else {
    console.log("This doesn't belong in the bin.")
  }
  return bins;
}

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });

//test
