# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable |
|---|---|
|Day 1: Tuesday | Game Idea|
|Day 2: Wednesday | Completed wireframes and prioritized features|
|Day 3: Thursday| Pseudocode|
|Day 4: Friday| Basic Clickable Model|
|Day 5: Saturday| Working Prototype|
|Day 6: Sunday| Game Completed / Slides|
|Day 7: Monday| Project Presentations|

## Project Description

I'll be making a text adventure game. After the player reads the scenario, they will have some available options/actions to choose from. The decisions they make will decide the outcome of the game. When the player reaches the end of their game, they'll know if the choices they've made were wise or wonky, but that's just the name of the game! If they want, they'll have the option to start from the beginning, and embark an a whole new journey!

## Priority Matrix

Z) Landing page that takes user input
1) Having a text for the player to read
2) Having clickable actions for the players to choose from.
3) Multiple outcomes based on each choice
4) An option to play again.
5) Cascade and style
6) Adding music to the background
7) Adding a mini-game in some of the storylines
(this would include making a board, and making a minimal, fun, functional game).


## MVP

Priories Z, 1, 2, 3, and 4

## POST MVP

Priorities 5 and 6

## POST-POST MVP

Priority 7

## Wireframes

<!-- Include images of your wireframes. -->
! [](./images/WireFramez/wireFrame.jpg)

## Game Components



### Landing Page
 The title of the game,
"Hey there! Mind if I get a little more information
about you?"

Are you brave? Do you want to go on an adventure?
Yes [], No[]

Yes) they'll get a "Good to hear! I like you, kid, you've got moxie!"
Their background music will be calm throughout the game.

No) "tsk tsk tsk... Disappointing to hear... But, I'm afraid you don't have a choice in the matter. Let's go!"
Their background music will be creepy and haunting throughout the game.

### Game Initialization
They'll see a little script of how the game works, kinda like an introductory, as well as a "continue..." which they can mouse over and click.
   This will take them into the world. They'll see their scenario as well as three choices to click on.

### Playing The Game
 Just the act of reading and making a decision. They should be able to get to the end of the game, where they'll be asked if they want to play again.

### Winning The Game

Winning - any of the good endings
"Congratulations... Wonderful! You were able to..."

Losing - would look like "Unfortunately.. you slipped and fell and hit your head.../ you are out of commission... The odds certainly were not in your favor... / "

### Game Reset
Both winning and losing prompts will have an option to replay the game:

"Would you like to play again? / Care to try for a different outcome?"
Additionally, if you wanted restart at any given point, you can just click end game to get back to the landing page.
## Functional Components

<!-- Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method. -->

After the user reads the scenario, they will have each of their available options/actions to choose from.
These actions will be listening for a mouseover and a click. mouseover will make the action/choice, pulse and change color. A click will take them into the new scenario.

The transitions will happen in a fade in-fade out.

Each scenario & set of choices will be in a div tag,

-- I'm not sure If I want to just change the text content/innerHTML of that div, or have multiple divs per scenario and hide the ones that are not being read.--

I'll have the scenario in a p tag, and the choices at the bottom of that div in a:
```
<p>
And the man in the restaurant dropped his glass! Everyone is going crazy! They can't bare the sight of spilled milk! Do you...
</p>
<ul>
  <li>Clean it up with your napkin?</li>
  <li>Grab a straw?</li>
  <li>Throw a Chair?</li>
</ul>
```
kinda formation. The lists are going to be taken in by the DOM, and that's how I'll add the event listeners. I think I'll use that bubbling method and have the event listener on the ul tag.

The functions:


1. let textStyler = () => {

}

2. mouseover(textStyler(evt) {
  THIS WILL CHANGE THE COLOR AND SIZE OF THE li TAGS.
  })


3. let newScenario = () => {

}

4. click(newScenario(evt){
   THIS WILL EITHER:
   1) change the inner html of the `<p>` and `<li>` tags based on the scenario.
   2) this will swap out the current div for another, which will have different content in the `<p>` and `<li>` tags.

   + This will also be able to link us back to the first page from the win or lose window.
  })

5. `<button class="endGame" onClick="window.location.reload()">`


level 1 : choice 1, choice 2, choice 3
level 2 : choice 1A, choice 1B, choice 2A, choice 2B, choice 3A etc.

<!-- Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evaluate game possibilities based on time needed and the actual time you have before game must be submitted. -->

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Component 1 | H | 5hrs| 12hrs | 12hrs |
| Component 2 | H | 5hrs| 12hrs | 12hrs |
| Component 3 | H | 3hrs| 12hrs | 12hrs |
| Component 4 | H | 3hrs| 12hrs | 12hrs |
| Component 5 | H | 2hrs| 12hrs | 12hrs |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description |
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string |

## Additional Libraries
 Use this section to list all supporting libraries and their role in the project.

google fonts


## jQuery Discoveries
 Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
