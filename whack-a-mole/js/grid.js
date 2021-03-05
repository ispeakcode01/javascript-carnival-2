var grid = (function() {

    const ROW = 7
    const COL = 5

    init()

    function init() {
        createCellElement()
    }

    function createCellElement() {
        var table = document.querySelector('table')
        for (var row=0; row<ROW; row++) {
            var tr = document.createElement('tr')
            for (var col=0; col<COL; col++) {
                var td = document.createElement('td')
                tr.appendChild(td)
            }
            table.appendChild(tr)
        }
    }

}())