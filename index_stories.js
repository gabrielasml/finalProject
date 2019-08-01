//var oldStory = getstories();
var oldtxt = [];
var oldStory = [];
console.log(oldStory.length);
getstories();

function getstories() {
  //console.log("hello");//
  //localStorage.setItem("hi", "hi");
  if (localStorage.length != 0) {
  var oldStory = localStorage.getItem("lastinput");
  var oldStory = JSON.parse(oldStory); //reassigning the value
  console.log(oldStory);
  var userstext  = $('.userstext');
  for (i = 0; i < oldStory.length; i++) {
    console.log(oldStory[i]);
    userstext.append(`<p>${oldStory[i]}</p>`);
    oldtxt = oldStory; // sets variable = to everything in the local storage

    //return oldStory; force to return one thing
    //showInput();
    //console.log()
  }
}
}


function showInput() {
    var usertxt = document.getElementById("user_input").value;
    //oldtxt = JSON.parse(oldStory);
    oldtxt.push(usertxt);
    console.log(oldtxt);
    var textbox = document.getElementById('display').innerHTML;
    var happy = document.getElementById("user_input").value;
    console.log(happy);
    var display = $("#display");
    display.append(`<p>${happy}</p><br>`);
    localStorage.setItem("lastinput", JSON.stringify(oldtxt));
    $('#user_input').val('');
    }
