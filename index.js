

function showInput() {
  var usertxt = document.getElementById("user_input").value;

    document.getElementById('display').innerHTML =document.getElementById("user_input").value;
             localStorage.setItem("oldtxt", usertxt);
    $('#user_input').val('');
    }

getstories()

function getstories() {
  //console.log("hello");//
  var oldStory = localStorage.getItem("oldtxt"); //oldtxt = key//
  var txtcontainers  = $('.txtcontainers');
  txtcontainers.append(`<h4>${oldStory}</h4>`);
}
