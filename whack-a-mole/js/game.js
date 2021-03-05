var game = (function() {

    init()
    
    function init() {
        document.addEventListener('keypress', event => {
            if (event.code === 'Space') {
              alert('spaced')
            }
        })
    }

}())