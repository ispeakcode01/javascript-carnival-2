  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!")

const ROWS = document.querySelectorAll('tr').length
const COLS = document.querySelector('tr').childElementCount
const AREA = ROWS * COLS

var randStartingPos = getRandomGridPosition()
spawnMole(randStartingPos.x, randStartingPos.y)

function getElementAtPos(row, col) {
  return document.querySelectorAll('tr')[row].children[col]
}

function getRandomGridPosition() {
  var min = 1
  var randPos = Math.floor(Math.random() * (AREA - min + 1) + min)

  return {
    x: randPos % COLS ,
    y: Math.ceil(randPos / ROWS) - 1
  }

}

function spawnMole(x, y) {
  getElementAtPos(randStartingPos.x, randStartingPos.y).innerHTML = '<img id="mole" src="mole.PNG" alt="mole">'
}

