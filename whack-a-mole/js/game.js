var game = (function() {

    const TIME_OUT = 60000
    var timeout
    var interval
    var holes = []
    var countDown = 60

    init()
    
    function init() {

        var time = 1000
        grid.getHoles().forEach(hole => {
            holes.push(new Hole(hole.x, hole.y, time))
            time += 300
        });

        document.addEventListener('keypress', event => {
            if (event.code === 'Space') {
                grid.playAudio('gameAudio')
                holes.forEach(hole => {
                    hole.start()
                })

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