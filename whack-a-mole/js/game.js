var game = (function() {

    const TIME_OUT = 60000
    var timeout
    var interval
    var holes = []
    var countDown = 60

    

    init()
    
    function init() {

        grid.getHoles().forEach(hole => {
            holes.push(new Hole(hole.x, hole.y))
        });

        

        document.addEventListener('keypress', event => {
            if (event.code === 'Space') {
                grid.playAudio('gameAudio')
                var pos = [0, 1, 2, 3, 4, 5]
                var min = 0
                var max = pos.length - 1
                var time = 1000
                for (var i=0; i<holes.length; i++) {
                    var randPos = Math.floor(Math.random() * (max - min + 1)) + min;
                    var selected = pos[randPos]
                    console.log('select at ' + selected)
                    var hole = holes[selected]
                    hole.setIntervalTime(time)
                    hole.start()
                    pos.splice(randPos,1)
                    console.log(pos)
                    max = pos.length - 1
                    time+= 300
                }

                /*holes.forEach(hole => {
                    hole.start()
                })*/

                timeout = setTimeout(function() {
                    alert('times up')
                    clearTimeout(timeout)
                    holes.forEach(hole => {
                        clearInterval(interval)
                        hole.stop()
                    })
                }, TIME_OUT)

                interval = setInterval(function() {
                    countDown--
                    updateTime()
                }, 1000)

            }
        })
    }

    function updateTime() {
        var time = countDown
        if (countDown < 10)
            time = "0" + time
        document.querySelector('#timer').innerHTML = "00:00:" + time
    }

    


}())