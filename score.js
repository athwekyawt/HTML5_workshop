
var strScore = prompt ("Enter a score between 0 and 100"); 
var intScore=parseInt(strScore);

if (intScore<0 || intScore>100){
    console.log("ERROR!");
}


if (intScore>=50){
    console.log("Pass");
} else if (intScore>35){
    console.log("E");
} else {
    console.log("F");
}
