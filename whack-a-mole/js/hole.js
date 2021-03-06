var Hole = function(id, x, y) {
    
    var moles = ["mole-10", "mole-20", "mole-30"]
    var xPos = x
    var yPos = y
    var intervalTime
    var interval
    var container 
    var hole
    var img
    var showMole = true
    var id

    init()

    function playAudio(id) {
        var playObj = document.getElementById(id)
        playObj.load()
        playObj.play()
        return playObj
    }

    function init() {
        container = grid.getElement(xPos, yPos)
        hole = container.getElementsByClassName('hole')[0]
        img = document.createElement('img')
    }

    this.setIntervalTime = function(time) {
        intervalTime = time
    }

    function whack() {
        playAudio('whack')
        calculateNewScore()
        removeMole()
    }

    function calculateNewScore() {
        var splitted = img.src.split('/')
        var filename = splitted[splitted.length-1]
        var score = parseInt(filename.split('.')[0].split("-")[1],10)
        var scoreElement = document.querySelector('#score')
        setScore("+" + score, parseInt( scoreElement.innerHTML) + score)
    }

    function setScore(point, score) {
        var scoreElement = document.querySelector('#score')
        scoreElement.innerHTML = score
        //container.innerHTML = point
        //container.style.color = white;
        showPoints(id, point)
    }

    function miss() {
        playAudio('miss')
        var scoreElement = document.querySelector('#score')
        var newScore = parseInt(scoreElement.innerHTML) - 100
        if (newScore < 0)
            newScore = 0
        setScore(-100, newScore)
    }

    function removeMole() {
        removeChild(img)
        img.removeEventListener('click', whack)
        appendHole()
        showMole = !showMole
    }

    this.start = function() {
        interval = setInterval(animate, intervalTime)
    }

    this.stop = function() {
        clearInterval(interval)
    }

    function animate() {
        if (showMole) {
            removeChild(hole)
            img.removeEventListener('click', miss)
            appendMole()
            showMole = !showMole
        } else {
            removeMole()
        }
    }

    function removeChild(element) {
        var child = container.childNodes[0]
        container.removeChild(child)
    }

    function appendMole() {
        var min = 0
        var max = moles.length - 1
        var randPos = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(randPos)
        appendChild("./images/" + moles[randPos] + ".PNG")
        playAudio('pop')
        img.addEventListener('click', whack)
    }

    function appendHole() {
        img.addEventListener('click', miss)

        appendChild("./images/hole.png")
    }

    function appendChild(src) {
        img.src = src
        container.appendChild(img)
    }


}