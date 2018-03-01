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

//** NEW COMMENT: This was false. I didn't take this into account.
// When I click going down the b path, there's no way to change my
// selector from path ABC to path DEF. I might be able to put these
// into another swith statement, or an if else, but I dunno. I'll try
// to make a path instead of doing the hard code.
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
var  level2A = () => {
  pee.innerHTML = "Test Level Two A";
  lit[0].innerHTML = "2a 1";
  lit[1].innerHTML = "2a 2";
  lit[2].innerHTML = "2a 3";
};

var  level2B = () => {
  pee.innerHTML = "Test Level Two B";
  lit[0].innerHTML = "2b 1";
  lit[1].innerHTML = "2b 2";
  lit[2].innerHTML = "2b 3";
};

var  level2C = () => {
  pee.innerHTML = "Test Level Two C";
  lit[0].innerHTML = "2c 1";
  lit[1].innerHTML = "2c 2";
  lit[2].innerHTML = "2c 3";
};

var  level2D = () => {
  pee.innerHTML = "Test Level Two D";
  lit[0].innerHTML = "2d OKOK1";
  lit[1].innerHTML = "2d 2";
  lit[2].innerHTML = "2d 3";
};

var  level2E = () => {
  pee.innerHTML = "Test Level Two E";
  lit[0].innerHTML = "2e 1";
  lit[1].innerHTML = "2e 2";
  lit[2].innerHTML = "2e 3";
};

var  level2F = () => {
  pee.innerHTML = "Test Level Two F";
  lit[0].innerHTML = "2f 1";
  lit[1].innerHTML = "2f 2";
  lit[2].innerHTML = "2f 3";
};


lit[0].addEventListener('click', function(evt){
  switch (level) {
    case 1:
      level1A()
       level++
       break;
    case 2:
      level2A()
      level++
      break;
  }
});

lit[1].addEventListener('click', function(evt){
  switch (level) {
    case 1:
      level1B()
       level++
       break;
    case 2:
    level2B()
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
      level2C()
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
