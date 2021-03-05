var grid = (function() {

    const ROW = 7
    const COL = 5
    var holes = []

    init()

    function init() {
        createCellElement()
    }

    function playAudio(id) {
        var playObj = document.getElementById(id)
        playObj.load()
        playObj.play()
        return playObj
    }

    function createCellElement() {
        var table = document.querySelector('table')
        for (var row=0; row<ROW; row++) {
            var tr = document.createElement('tr')
            for (var col=0; col<COL; col++) {
                var td = document.createElement('td')
                td.id = `row-${row} col-${col}`
                if (row % 2 != 0 && col % 2 != 0) {
                    holes.push({
                        x: row,
                        y: col
                    })
                    var img = document.createElement('img')
                    img.className = "hole"
                    img.src = "./images/hole.png"
                    td.appendChild(img)

                }
                tr.appendChild(td)
            }
            table.appendChild(tr)
        }
    }

    function getElement(x, y) {
        console.log(x + " " + y)
        console.log(`row-${x} col-${y}`)
        return document.getElementById(`row-${x} col-${y}`)
    }

    function getHoles() {
        return holes
    }

    return {
        getElement: getElement,
        playAudio: playAudio,
        getHoles: getHoles
    }

}())