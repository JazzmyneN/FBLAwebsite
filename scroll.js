'use strict';


function minusFrom(number) {
    var count = parseInt(document.getElementById("value" + number).textContent, 10) * 1;
    count -= 1;
    document.getElementById("value"+number).textContent = count;
}
function addTo(number) {
    var count = parseInt(document.getElementById("value" + number).textContent, 10) *1;
    count += 1;
    document.getElementById("value"+number).textContent = count;
}


