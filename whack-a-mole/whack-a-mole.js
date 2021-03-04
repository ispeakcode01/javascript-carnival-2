  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!")

const ROWS = document.querySelectorAll('tr').length
const COLS = document.querySelector('tr').childElementCount
const AREA = ROWS * COLS

init()
function init() {
  var randStartingPos = getRandomGridPosition()
  spawnMole(randStartingPos.x, randStartingPos.y)
}


function moleClickedCallback() {
  playAudio('wack')
  randStartingPos = getRandomGridPosition()
  spawnMole(randStartingPos.x, randStartingPos.y)
}

function getElementAtPos(row, col) {
  return document.querySelectorAll('tr')[row].children[col]
}

function playAudio(id) {
  var audioObj = document.getElementById(id)
  audioObj.load()
  audioObj.play()
  return audioObj
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
  // make sure we removed mole element first
  removeMole()
  var element = getElementAtPos(x, y)
  element.innerHTML = '<img id="mole" src="mole.PNG" alt="mole">'
  element.children[0].addEventListener('click', moleClickedCallback, { once: true })
}

function removeMole() {
  var moleElement = document.querySelector('#mole')
  if (moleElement)
    moleElement.parentElement.innerHTML = ""
}

