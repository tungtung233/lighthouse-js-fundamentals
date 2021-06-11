const judgeVegetable = function (vegetables, metric) {

  if (vegetables[0][metric] > vegetables[1][metric] && vegetables[0][metric] > vegetables[2][metric]) {
    return vegetables[0].submitter;
  } else if (vegetables[1][metric] > vegetables[0][metric] && vegetables[1][metric] > vegetables[2][metric]) {
    return vegetables[1].submitter;
  } else if (vegetables[2][metric] > vegetables[0][metric] && vegetables[2][metric] > vegetables[1][metric]) {
    return vegetables[2].submitter;
  }
  
}

let vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 1,
    plumpness: 10
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 10,
    plumpness: [8, 2]
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 1
  }
]


let metric = 'redness'

console.log(vegetables[1]);
// prints the whole second object - submitter to plumpness.

console.log(vegetables[1][2]);
// prints undefined

console.log(vegetables[1].plumpness);
// prints [8 ,2]


console.log(vegetables[1].plumpness[0]);
// prints [8]

judgeVegetable(vegetables, metric);