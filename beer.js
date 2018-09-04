//formal parameter
//return a div with n number of images
var makeBeer = function(numBottles) {

    //create the div
    var div = document.createElement('div');
    var count = 0;
    while (count < numBottles) {
        //Create img
        var img = document.createElement('img');
        img.src = '/images/beer.png';
        img.height = 40;
        div.appendChild(img) // Append img to div
        count++;
    }
    return (div);
}
var makeLine1 = function(n) {
    var line = "";
    if (n > 2) {
        line = `${n} bottles of beer on the wall, ${n} bottles of beer.`

    } else if (2 == n)  {
        line = `${n} bottles of beer on the wall, ${n} bottles of beer.`

    } else if (1 == n)  {
        line = `${n} bottles of beer on the wall, ${n} bottles of beer.`

    } else {
        line = 'No more bottles of beer on the wall, no more bottles of beer.'
    }
    var div = document.createElement('div')
    div.textContent = line;
    return (div);
}

var makeLine2 = function(n) {
    if (n > 2) {
        line = `Take one down and pass it around, ${n - 1} bottles of beer on the wall.`

    } else if (2 == n)  {
        line = `Take one down and pass it around, ${n - 1} bottle of beer on the wall.`

    } else if (1 == n)  {
        line = `Take one down and pass it around, no more bottles of beer on the wall.`

    } else {
        line = 'Go to the store and buy some more, 99 bottles of beer on the wall.'

    }
    var div = document.createElement('div')
    div.textContent = line;
    return (div);

}
var makeLyrics = function(n) {
    var line = "";
    if (n > 2) {
        line = `${n} bottles of beer on the wall, ${n} bottles of beer.
Take one down and pass it around, ${n - 1} bottles of beer on the wall.`

    } else if (2 == n)  {
        line = `${n} bottles of beer on the wall, ${n} bottles of beer.
Take one down and pass it around, ${n - 1} bottle of beer on the wall.`

    } else if (1 == n)  {
        line = `${n} bottles of beer on the wall, ${n} bottles of beer.
Take one down and pass it around, no more bottles of beer on the wall.`

    } else {
        line = 'No more bottles of beer on the wall, no more bottles of beer.\n'
            + 'Go to the store and buy some more, 99 bottles of beer on the wall.'

    }
    return (line);
}

var count = 99;

var lyrics = document.querySelector("#lyrics");

while (count >= 0) {
    var beerDiv = makeBeer(count);
    var line1Div = makeLine1(count)
    var line2Div = makeLine2(count)
    var div = document.createElement('div');
    div.appendChild(beerDiv);
    div.appendChild(line1Div);
    div.appendChild(line2Div);
    lyrics.appendChild(div);
    //actual parameter

    //console.log(makeLyrics(count));

    //console.log('\n');
    //count = count - 1;
    //count -= 1;
    count--; //count++; 
}