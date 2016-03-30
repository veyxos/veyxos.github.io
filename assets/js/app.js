// VARIABLES
var helloText = 'JavaScript\'s up and running!!!1elf';

function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded',fn);
  }
}

ready(function(){

  console.log(helloText);

});
