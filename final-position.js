let moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

function finalPosition (moves) {

  let movesXY = [0, 0];

  for (let i = 0; i < moves.length; i++) {

    if (moves[i] === 'north') {
      movesXY[1] += 1;
    } else if (moves [i] === 'south') {
      movesXY[1] -= 1;
    } else if (moves[i] === 'east') {
      movesXY[0] += 1;
    } else if (moves[i] === 'west') {
      movesXY[0] -= 1;
    }

  }
  return movesXY;   
}

console.log(finalPosition(moves));