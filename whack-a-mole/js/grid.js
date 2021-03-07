var grid = (function() {

    const ROW = 7
    const COL = 5
    var holes = []

    init()
    positionHammer()


    function init() {
        createCellElement()
    }

    function playAudio(id) {
        var playObj = document.getElementById(id)
        playObj.load()
        playObj.play()
        return playObj
    }

    function clearGrid() {
       var gameBoard = document.querySelectorAll('table')[1]
       gameBoard.innerHTML = ""
       holes = []
       createCellElement()
    }

    function createCellElement() {
        var table = document.querySelectorAll('table')[1]
        table.style.border = "10px solid black"
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
                    td.style.border = "1px dashed black"
                    td.appendChild(img)

                }
                tr.appendChild(td)
            }
            table.appendChild(tr)
        }
    }

    function getElement(x, y) {
        return document.getElementById(`row-${x} col-${y}`)
    }

    function getHoles() {
        return holes
    }

    return {
        getElement: getElement,
        playAudio: playAudio,
        getHoles: getHoles,
        resetGrid: clearGrid
    }

}())