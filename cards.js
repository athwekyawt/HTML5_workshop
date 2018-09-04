//Cards - value:Ace,2,3,4,5,6,7,8,9,10,Jack,Queen,King
//Suit: Clubs, Hearts,Spades,Diamonds

const VALUES = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
const SUIT = ["Club", "Heart", "Spade","Diamond"];
var deck = [];

for (var s in SUIT){
    for (var v in VALUES){
        var card = {
            value:VALUES[v],
            suit:SUIT[s],
        };
        deck.push(card);
    }
}

console.log(deck);

/*var ace_spade = {
    color:"black",
    value: 1,
    suit: "Spade",
    image: "/images/1_spade.jpg"
}
var ace_heart = {
    color:"red",
    value: 1,
    suit: "Heart",
    image: "/images/1_heart.jpg"
}

var card_names = {
    suit: ["Club", "Heart", "Spade","Diamond"],
    value: [1,2,3,4,5,6,7,8,9,10,11,12,13]
}

for (var i in card){
    console.log('for:'+i);
    console.log('\t' + card[i]);
}

console.log(card.suit);
console.log(card.suit[1]);
console.log(ace_heart);


/*var prime_numbers = [2,3,5,7,11,13];*/

/*console.log('number of elements in array=', prime_numbers.length);
console.log(prime_numbers[0]);
console.log(ace_heart['heart']);
console.log(ace_heart.color);
console.log(prime_numbers.length);
*/

//use while and array length
/*var count=0;
while(count<prime_numbers.length){
    console.log(prime_numbers[count]);
    count++;
}

//use for and array length
for (count=0; count<prime_numbers.length; count++){
    console.log(prime_numbers[count]);
}

for (var i in prime_numbers){
    console.log('for:'+i);
    console.log('\t' + prime_numbers[i]);
}

for (var i in ace_spade){
    console.log('for:'+i);
    console.log('\t' + ace_spade[i]);
}
*/