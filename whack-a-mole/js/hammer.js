
var hammer = document.getElementById('hammer')

hammer.style.position = "absolute"

var currentX 
var currentY


document.addEventListener('mousemove', function(e) {
    var padding =100
    hammer.style.top = (e.y - padding) + "px"
    hammer.style.left = (e.x ) + "px"

    currentX = e.x 
    currentY = e.y

})

document.addEventListener('mousedown', function () {
    hammer.className = "hit"
})

document.addEventListener('mouseup', function () {
    hammer.className = "initialHammer"
})

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