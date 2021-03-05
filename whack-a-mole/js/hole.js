var Hole = function(x, y, time) {
    
    var moles = ["mole-10", "mole-20", "mole-30"]
    var xPos = x
    var yPos = y
    var intervalTime = time
    var interval
    var container 
    var hole
    var img
    var showMole = true

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

    function whack() {
        playAudio('whack')
    }

    function miss() {
        playAudio('miss')
    }

    this.start = function() {
        interval = setInterval(animate, intervalTime)
    }

    function animate() {
        if (showMole) {
            removeChild(hole)
            img.removeEventListener('click', miss)

            appendMole()

        } else {
            removeChild(img)
            img.removeEventListener('click', whack)

            appendHole()
        }

        showMole = !showMole
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