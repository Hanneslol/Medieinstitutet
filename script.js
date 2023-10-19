//Regular Javascript
let getButton = document.querySelector(".btn");
let element = document.querySelector(".javascriptHide");
let temp = true;
getButton.addEventListener('click',function(){
      temp = !temp; //Toggling temp variable to == true to false OR false to true ;
      if(!temp){ //If temp variable is false
        element.style.display = "none" // If temp is False
      }else{
        element.style.display = "block" // If temp is true
      } 
})
// Let's Try with Jquery!
$(".btnJquery").on('click',function(){
  $(".jqueryHide").toggle();
})