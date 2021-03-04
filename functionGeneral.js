//newTaskElement is a local variable
function addToDo(task){
    const newTaskElement = document.createElement('li');
}

//name is a global variable
var name = "Rifat";
function addUser(){
    console.log(name);
}
addUser();

//IIFE 
(function myToDo(){
    console.log("i'll eat nasta");
})();

//function expression
var name = function(task){

};