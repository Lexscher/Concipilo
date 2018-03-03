console.log("Linked!");
// store all the levels and choices into a variable/ object
// where the inner html for the p and li tags are different
// for each index

// example: Level one has two choices. level1A and level1B
// level1A will have a the innerHTML property change holding

// grab the elements you'd like to manipulate
let diver = document.body.querySelector("div");
let pee = document.body.querySelector("p");
let ulah = document.body.querySelector("ul");
let lit = document.body.querySelectorAll("li");

let levelZed = {
  p: "sittin in living room",
  options: ["Sam", "Run"],
  nextLevels: [
    {
      p:
        "You wake Sam up, and he's not too happy about this! You start to explain the situation, and he thinks you're joking at first. He notices the urgency in your voice and starts to take you more seriously. You both look out the window, and the sky is soiled with smoke. There are fires everywhere. You don't know wether the sound of the sirens make you feel comfort or anxiety. Sam thinks you both should pack a bag of essentials and hightail it out of there. Your car is parked three avenues away, while Sam's car is parked two blocks over. He want's to take his car.<br> <br> What do you do?",
      options: [
        "Follow Sam's advice! Staying with Sam will make you feel safer. You'll be better off taking supplies with you.",
        "Leave Sam! Get to your car and drive. Why should you have to leave your car in the eye of all this mess?",
        "Grab Sam and force him to come with you outside! You don't feel safe staying in that building."
      ],
      nextLevels: [
        {
          p:
            "Sam packed useful supplies as well. His speedy packing skills were too advanced, and you were not able to see what he packed. You pack a small bag of supplies. You've got some First Aid, snacks, water bottles, batteries and a flashlight. You've also got they keys to your neighbor's apartment. Dolores is in Florida, and you've been watering her plants. <br><br> What is your next move?",
          options: [
            "Leave with Sam and head for his car! It's time to get out of here.",
            "Go through your neighbor's apartment! You need more supplies, and the old lady is in Florida",
            ""
          ],
          nextLevels: [
            {
              p:
                "You follow Sam to his car. It looks like someone broke into the all the cars on the block, including Sam's. His doors are slightly open. Sam checks the glove compartment, then immediately starts swearing. You try to calm him down, then he explains that he kept money there, incase there was an emergency. He takes a deep breath, and then tells you about his family's cabin in Connecticut. That's where he plans on going. He asks you if you'd like to go with him",
              options: [],
              nextLevels: [{}]
            },
            {
              p:
                "Sam didn't like the Idea of going through Dolores' things. Even after he said you were getting greedy, you wouldn't budge. He said goodbye and left for his car. You go in your neighbor's apartment and start looking for anything that could be useful. You find a taser in one of her kitchen drawers. You grab some money that was hidden in her jewelry box.<br> You start heading downstairs. A loud bang is immediately followed by a powerful shockwave, sending you straight to the bottom of the steps...",
              options: ["...", "", ""],
              nextLevels: [
                {
                  p:
                    "You finally come to, and your head is banging. You're tying to figure out where you are, but your vision is a little blurry.. <br><br> You hear Sam's voice! He tells you that he drove back to the building when he heard that loud explosion. You were lucky because you landed on the first floor, where he could  get you out easily. You've been unconscious for two hours. Sam tells you about his family's cabin in Connecticut. Right now, that's where you're headed. He then tells you that his car was broken into, and they stole his emergency money stash. You ask him where your bag is, and he points to the back seat. You see the money you took from Dolores' apartment.",
                  options: [
                    "Give the money to Sam! It's only right, he saved your life.",
                    "Push the money deeper in your bag! What Sam doesn't know won't hurt him!",
                    ""
                  ],
                  nextLevels: [
                    {
                      p:
                        "You take the money out of your bag and put it on the dashboard. Sam asks where you got all that money from, then he remembered why you were caught up in the explosion in the first place. You tell Sam that this is a gesture of appreciation. Sam thanks you, but tells hold on to it, you found it anyway. It's your call if you think the two of you need money",
                      options: ""
                    },
                    {}
                  ]
                }
              ]
            }
          ]
        },
        {
          p:
            "You sprint to your car, only to witness the horror! Your beautiful car has been engulfed by flames! You have to collect yourself quickly, beacuse you can actually hear the chaos unfolding all around you. You find it odd that there are still people in a diner across the street...<br><br> What are you going to do now?",
          options: [
            "Go to the diner across the street! Maybe you should warn them.",
            "Go back to your apartment! Sam might still be packing supplies.",
            ""
          ],
          nextLevels: [{}]
        },
        {
          p:
            "Okay. Sam's a little pissed! You explain how uneasy you felt about staying in the building, and he calms down. Sam points and says he thinks you both should just get to his car. Sam's car is in the same direction as the sirens. You still remember the direction that group was headed.",
          options: [
            "Head over to Sams car!",
            "Find the group! Try to convince Sam to come with you.",
            ""
          ]
        }
      ]
    },
    {
      p: "run",
      options: ["Group", "Your Car", "Sirens"],
      nextLevels: [{}]
    }
  ]
};
let currentLevel = levelZed;
// click event listener ----> Access Next Level
// change currentLevel to the next level down
//mousover event listener to ul tags.
// mouseover function
// highlight the option your mouse is on
// change the css properties of said option

// click event listener to ul tags.
// click function
// grab the variable index from the stored levels
//

let levelUp = currentLevel => {
  pee.innerHTML = currentLevel.p;
  lit[0].innerHTML = currentLevel.options[0];
  lit[1].innerHTML = currentLevel.options[1];
  lit[2].innerHTML = currentLevel.options[2];
};

lit[0].addEventListener("click", function(evt) {
  currentLevel = currentLevel.nextLevels[0];
  levelUp(currentLevel);
});

lit[1].addEventListener("click", function(evt) {
  currentLevel = currentLevel.nextLevels[1];
  levelUp(currentLevel);
});

lit[2].addEventListener("click", function(evt) {
  currentLevel = currentLevel.nextLevels[2];
  levelUp(currentLevel);
});
