  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")

document.addEventListener('DOMContentLoaded', init)

const TOTAL_NUM_OF_IMAGES = 4
let canInflate = true

function init() {
  for (var unicornTag of document.getElementsByClassName("inflate-an-image")) {
    unicornTag.addEventListener('click', unicornClickedCallback)
  }
}

function unicornClickedCallback() {
  if (this.src) {
    var fileName = getFilename(this.src)
    this.src = `./images/${inflateBalloon(fileName, TOTAL_NUM_OF_IMAGES, '-')}.png`
  }
}

function getFilename(url) {
  var splittedUrl = url.split('/')
  return splittedUrl[splittedUrl.length-1]
}

function inflateBalloon(src, num, splitter) {
  var splittedImageName = src.split('-')

  var newNum = (parseInt(splittedImageName[1]) + 1) % num
  console.log(newNum + " " + splittedImageName[1])
  if (newNum < parseInt(splittedImageName[1])) {
    playAudio('deflating')
  } else {
    playAudio('inflating')
  }
  splittedImageName[1] = newNum

  
  return splittedImageName.join(splitter)
}

function playAudio(id) {
  var audioObj = document.getElementById(id)
  audioObj.load()
  audioObj.play()
  return audioObj
}

