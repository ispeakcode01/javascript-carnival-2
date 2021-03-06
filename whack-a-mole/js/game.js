var game = (function() {

    const TIME_OUT = 60000
    var timeout
    var interval
    var holes = []
    var countDown = 60
    var gameStarted = false

    init()
    
    function init() {
        var id = 1
        grid.getHoles().forEach(hole => {
            holes.push(new Hole(id++, hole.x, hole.y))
        });

        document.addEventListener('keypress', event => {
            if (event.code === 'Space' && !gameStarted) {
                gameStarted = true
                grid.playAudio('gameAudio')
                document.getElementsByClassName('menu')[0].style.display = "none"
                var pos = [0, 1, 2, 3, 4, 5]
                var min = 0
                var max = pos.length - 1
                var time = 1000
                for (var i=0; i<holes.length; i++) {
                    var randPos = Math.floor(Math.random() * (max - min + 1)) + min;
                    var selected = pos[randPos]
                    var hole = holes[selected]
                    hole.setIntervalTime(time)
                    hole.start()
                    pos.splice(randPos,1)
                    max = pos.length - 1
                    time+= 300
                }

                /*holes.forEach(hole => {
                    hole.start()
                })*/

                timeout = setTimeout(function() {
                    clearTimeout(timeout)
                    holes.forEach(hole => {
                        clearInterval(interval)
                        hole.stop()
                        setBestScore()
                        showMenu()
                        countDown = 60
                        gameStarted = false
                        document.querySelector('#score').innerHTML = "0"
                    })
                }, TIME_OUT)

                interval = setInterval(function() {
                    countDown--
                    updateTime()
                }, 1000)

            }
        })
    }

    function showMenu() {
        var menu = document.getElementsByClassName('menu')[0]
        menu.style.display = 'initial'
        console.log(menu.childNodes[2])
        menu.querySelector('#best').innerHTML = getBestScore()
    }

    function setBestScore() {

        var score = parseInt(document.getElementById('score').innerHTML)
        var best = localStorage.getItem('score')
        if (best) {
            if (best < score)
                localStorage.setItem("score", score)
        } else {
            localStorage.setItem("score", score)
        }
    }

    function getBestScore() {
        var best = localStorage.getItem('score')
        if (best)
            return best
        
        return 0
    }

    function updateTime() {
        var time = countDown
        if (countDown < 10)
            time = "0" + time
        document.querySelector('#timer').innerHTML = "00:00:" + time
    }

    


}())