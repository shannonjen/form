var myform = document.querySelector('#myform');



myform.addEventListener('submit', function(event){
  event.preventDefault();
  var username = document.getElementById('username').value;
  console.log("You just submitted the form, " + username);
})
