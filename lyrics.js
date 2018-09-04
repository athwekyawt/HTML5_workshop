var bottle = 99;

while (bottle >1) {
    console.log(bottle + " bottles of beer on the wall," + bottle + " bottles of beer.");
    bottle--;
    console.log("Take one down and pass it around," + bottle + " bottles of beer on the wall.");
}

if (bottle == 1) {
    console.log(bottle + " bottles of beer on the wall," + bottle + " bottles of beer.");
    bottle--;
    console.log("Take one down and pass it around," + " no more bottles of beer on the wall.");
}

if (bottle == 0) {
    console.log("No more bottles of beer on the wall, no more bottles of beer.");
    console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
}
