// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")
var amountOfBodyParts = 3
var amountOfPartState = 6
var currentBodyPart = 0
var currentPartState = 0

var bodyParts = ['head','body','shoes']
var ext = ".png"

document.addEventListener('keydown', function (e) {
  console.log('ee')
  switch (e.code) {
    case "ArrowLeft":
      currentPartState--
      if (currentPartState < 0)
      currentPartState = amountOfPartState - 1
      else
      currentPartState = currentPartState % amountOfPartState
      dressMeUp()
      break;
    case "ArrowRight":
      currentPartState++
      currentPartState = currentPartState % amountOfPartState
      dressMeUp()

      break;
    case "ArrowUp":
      // Up pressed
      currentBodyPart--
      if (currentBodyPart < 0)
        currentBodyPart = amountOfBodyParts - 1
      else
        currentBodyPart = currentBodyPart % amountOfBodyParts

        changePart() 
      break;
    case "ArrowDown":
      currentBodyPart++
      currentBodyPart = currentBodyPart % amountOfBodyParts
      changePart() 
      // Down pressed
      break;
  }
})

function changePart() {
  var bodyPart = bodyParts[currentBodyPart]
  document.querySelector('#part').innerHTML = bodyPart.toLocaleUpperCase()
}

function dressMeUp() {
  var bodyPart = bodyParts[currentBodyPart]
  var bodyPartElement = document.querySelector(`.${bodyPart}`)
  bodyPartElement.src = `./images/${bodyPart}${currentPartState}${ext}`
}