console.log('Linked!')
 // store all the levels and choices into a variable/ object
// where the inner html for the p and li tags are different
// for each index


// example: Level one has two choices. level1A and level1B
// level1A will have a the innerHTML property change holding


// grab the elements you'd like to manipulate
var diver = document.body.querySelector('div')
var pee = document.body.querySelector('p')
var ulah = document.body.querySelector('ul')
var lit = document.body.querySelectorAll('li')
// var count = 0
// level will in crease at each stage. HAve three switch statements for
// each of the three options. Since they're all looking at where
// level is, all you need to do is make sure that your levels Are
// kept on the same corresponding choice/level/ab from your story
var level = 1
var level1A = () => {
  pee.innerHTML = "Test Level One A";
  lit[0].innerHTML = "A1";
  lit[1].innerHTML = "A2";
  lit[2].innerHTML = "A3";
}
var level1B = () => {
  pee.innerHTML = "Test Level One B"
  lit[0].innerHTML = "B1";
  lit[1].innerHTML = "B2";
  lit[2].innerHTML = "  ";
}


lit[0].addEventListener('click', function(evt){
  switch (level) {
    case 1:
      level1A()
       level++
       break;
    case 2:
      // level2B()
      break;
  }
});

lit[1].addEventListener('click', function(evt){
  switch (level) {
    case 1:
      level1B()
       level++
       break;
  }
});

lit[2].addEventListener('click', function(evt){
  switch (level) {
    case 1:
      level1()
       level++
       break;
    case 2:
      level2()
      break;
  }
});

//mousover event listener to ul tags.
 // mouseover function
 // highlight the option your mouse is on
 // change the css properties of said option


 // click event listener to ul tags.
 // click function
 // grab the variable index from the stored levels
 //
