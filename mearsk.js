
var arr = [1,2,3,4,5,6,7,8,9];

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function orderCards(arr){
    var cards = document.querySelectorAll(".card");
    cards.forEach(function(card, index){
       //debugger;
       card.style.order = arr[index];
    });
}

function shuffleCards(){
    var shuffledArray = shuffleArray(arr);    
    orderCards(shuffledArray);
}
function sortCards(){
    arr.sort();
    orderCards(arr);
}

