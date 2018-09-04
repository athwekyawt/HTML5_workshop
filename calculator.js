var isValid = function (val) {
    
    console.log('>>>> val:',val);
    return ((null != val) && ("" != val));

    /*if ((null != val) && ("" != val))
        return (true);
    //else is implicit
    else
        return (false);
    */
}


var mathOperationHandler = function (event) {
    /*console.log('event=',event.target.textContent);
     console.log("I've been cliked " + new Date());*/
    var operand0 = document.querySelector("#operand0");
    var operand1 = document.querySelector("#operand1");
    var answer = document.querySelector("#answer");

if (!isValid(operand0.value) || !isValid(operand1.value)) {
    answer.textContent = "Values are incorrect";
    return;
}

var button=event.target;
var operation=button.textContent;
var result =0;

if ('Add'==operation){
    result = parseInt(operand0.value) + parseInt(operand1.value);
    operation = '+';

    } else if ('Minus'==operation) {
    result = parseInt(operand0.value) - parseInt(operand1.value);
    operation = '-';
}

    //access the attribute
    /*var result = parseInt(operand0.value) + parseInt(operand1.value);*/
    /*var answer = document.querySelector("#answer");*/

    //textContent is the text inside the tag/element
    answer.textContent = `${operand0.value}${operation}${operand1.value}=${result}`;
    //reset the value
    operand0.value = 0;
    operand1.value = 0;

}
var operand0 = document.querySelector("#operand0");
operand0.addEventListener(
    "focus",  //event name
    function(event) { //handler
        var image = document.querySelector("#picture")
        image.src = "/images/dog.jpg";
    }
);

operand0.addEventListener("blur", function(event) {
    var image = document.querySelector("#picture")
    // <img src="/images/cat.jpg"
    image.src = "/images/cat.jpg";
});

//locate an element call addBtn
var addBtn = document.querySelector("#addBtn");
var minusBtn = document.querySelector("#minusBtn");
//register an event handler - callback
addBtn.addEventListener("click", mathOperationHandler);
minusBtn.addEventListener("click", mathOperationHandler);