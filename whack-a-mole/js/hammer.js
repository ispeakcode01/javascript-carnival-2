
var hammer = document.getElementById('hammer')
hammer.style.position = "absolute"


document.addEventListener('mousemove', function(e) {
    var padding =100
    hammer.style.top = (e.y - padding) + "px"
       hammer.style.left = (e.x ) + "px"

})

document.addEventListener('mousedown', function () {
    hammer.className = "hit"
})

document.addEventListener('mouseup', function () {
    hammer.className = "initialHammer"
})