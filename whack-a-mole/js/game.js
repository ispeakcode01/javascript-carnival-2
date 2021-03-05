var game = (function() {

    var holes = []

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
            }
        })
    }



}())