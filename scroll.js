'use strict';

var count = parseInt(document.getElementById("value" + number).textContent, 10);

function minusFrom(number) {
    if (parseInt(document.getElementById("value" + number).textContent, 10) > 0) {
        var count = parseInt(document.getElementById("value" + number).textContent, 10) * 1;
        count -= 1;
        document.getElementById("value"+number).textContent = count;
    }
    else {

    }
    
}
function addTo(number) {
    var count = parseInt(document.getElementById("value" + number).textContent, 10) *1;
    count += 1;
    document.getElementById("value"+number).textContent = count;
}


