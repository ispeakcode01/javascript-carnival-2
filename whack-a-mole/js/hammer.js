
var hammer = document.getElementById('hammer')

hammer.style.position = "absolute"

var currentX 
var currentY


document.addEventListener('mousemove', function(e) {
    //var area = getGameArea()
    //console.log('dd: ' + e.y)
    //console.log(area)
    //if (area.left <= e.x && area.right >= e.x) {//} && area.top <= e.y && area.bottom >= e.y) {
        //alert('dd')
       // console.log('dd: ' + e.x)
        var padding =100
        hammer.style.top = (e.y - padding) + "px"
        hammer.style.left = (e.x ) + "px"

        currentX = e.x 
        currentY = e.y
//    }

})

document.addEventListener('mousedown', function () {
    hammer.className = "hit"
})

document.addEventListener('mouseup', function () {
    hammer.className = "initialHammer"
})

function getGameArea() {
    var border = 10
    var table = document.querySelector('table')
    return {
        left: table.offsetLeft - border,
        right: table.offsetLeft + table.offsetWidth + border,
        top: table.offsetTop,
        bottom: table.offsetHeight + border
    }

}

function showPoints(id, points) {
    console.log(id)
    var point = document.getElementById('point-' + id)
    point.classList.remove('disabled')
    point.style.top = (currentY - 45) + "px"
    point.style.left = (currentX - 45 ) + "px"
    point.innerHTML = points
    animateCSS(point, "slideOutUp").then((smg) => {
        point.classList.add('disabled')
    })
}



const animateCSS = (node, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });