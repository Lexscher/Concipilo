console.log("Linked!");
let bop = document.body.querySelector("source");
alert(
  "Welcome! This is Concipilo, a text adventure game. Here, every dicision you make directly impacts the outcome."
);
let name = prompt("What is your name?");
alert("Well, " + name + ", I hope you're ready for an adventure!");
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
                "You follow Sam to his car. It looks like someone broke into the all the cars on the block, including Sam's. His doors are slightly open. Sam checks the glove compartment, then immediately starts swearing. You try to calm him down, then he explains that he kept money there, incase there was an emergency. He takes a deep breath, and then tells you about his family's cabin in Vermont. That's where he plans on going. Sounds great! Time to drive.",
              options: ["...", "", ""],
              nextLevels: [
                {
                  p:
                    "After a few hours of driving, you see a hitchhiker on the road. Sam starts slowing down. You try to protest, but it's too late. Once the car has stopped, the man asks Sam if he'd allow him to ride with you for a little while. Sam asks where he's going, and he says as far as you'll take him. Sam get's ready to drive again when the man quickly places a blade at his neck. He wants the car...",
                  options: [
                    "Obey his demands! This man is crazy!",
                    "Attack him! If you can get a hold of his arm, you just might be able to subdue the creep.",
                    ""
                  ],
                  nextLevels: [
                    {
                      p:
                        "You tell him to take it easy. You slowly get out of the car. He gets to the front seat and kicks Sam out. He thanks you for the ride, then speeds off into the distance. Sam is swearing profusely. You two end up walking. Sam says that it'll just take a lot longer to get there. It really dark now, and you're both exhausted...<br><br> Is there something in the corner of your eye? You're certain that you saw something but when you turn your head to look, there's nothing there. You still feel uneasy about the situation. You turn to tell Sam about your worries, but someone gets a hold of you. Sam is being subdued as well. In less than a second, you are surrounded by a group of rag-tags. They look pretty nasty.",
                      options: [
                        "Try to bargain with them! What've you got to lose?",
                        "",
                        ""
                      ],
                      nextLevels: [
                        {
                          p:
                            "You ask them to hold on. Offer them all of your possesions, which isn't much. A tall man wearing a tattered scarf steps forward. He seems like their leader. He inspects your bag, then laughs as he empties it on thr ground before you. He says he can't be bought with garbage. He says you and your friend will have to do for now. He snaps his fingers and the men violently start to drag you and Sam away...",
                          options: ["...", "", ""],
                          nextLevels: [
                            {
                              p:
                                "Oh me, oh my...<br> This is one of my least favorite endings. I'm afraid that the events that followed your encounter with this group were nothing short of gruesome. I left the details out as a courtesy to those who don't have strong stomachs.<br><br> Don't worry about it my friend! Concipilo is a story that has numerous endings, and I am certain that you can find one that is way more satisfying...<br> Toodle-oo!"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      p:
                        "You tell him to hold on a second - Ask him why he's doing this, but he wants you to stay quiet. Sam makes eye contact with you. He knows what you're planning to do, and he wants you to go for it. You grab the hitchhikers arm, but he makes a move with his free hand and pulls out a pistol.",
                      options: ["...", "", ""],
                      nextLevels: [
                        {
                          p:
                            "Ah... Is this the ending you were looking for? No need for congratulations here. You're choices have lead to the untimely demise of both you and your roommate. Don't worry. The story of Concipilo has many endings. You have plenty of chances to make something of yourself. Don't be discouraged, my friend!.<br> Oh, and please try not to make the same mistakes twice.<br><br> Until next time!",
                          options: ["", "", ""]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              p:
                "Sam didn't like the Idea of going through Dolores' things. Even after he said you were getting greedy, you wouldn't budge. He said goodbye and left for his car. You go in your neighbor's apartment and start looking for anything that could be useful. You find a taser in one of her kitchen drawers. You grab some money that was hidden in her jewelry box.<br> You start heading downstairs. A loud bang is immediately followed by a powerful shockwave, sending you straight to the bottom of the steps...",
              options: ["...", "", ""],
              nextLevels: [
                {
                  p:
                    "You finally come to, and your head is banging. You're tying to figure out where you are, but your vision is a little blurry.. <br><br> You hear Sam's voice! He tells you that he drove back to the building when he heard that loud explosion. You were lucky because you landed on the first floor, where he could  get you out easily. You've been unconscious for two hours. Sam tells you about his family's cabin in Vermont. Right now, that's where you're headed, and you're 3 hours away..<br> He tells you that his car was broken into, and they stole his emergency  stashof money. You ask him where your bag is, and he points to the back seat. You see the money you took from Dolores' apartment.",
                  options: [
                    "Give the money to Sam! It's only right, he saved your life.",
                    "",
                    ""
                  ],
                  nextLevels: [
                    {
                      p:
                        "You take the money out of your bag and put it on the dashboard. Sam asks where you got all that money from, then he remembered why you were caught up in the explosion in the first place. You tell Sam that this is a gesture of appreciation. Sam thanks you, but tells hold on to it, you found it anyway. You put the money back in your bag and place it on your lap. <br><br> There's a hitchhiker on the road, and Sam insists on stopping to help. You try to convince him to keep driving, but he already started slowing down. The man begs Sam to let him ride in the backseat. Sam asks where he's going, and he says as far as you'll take him. Sam get's ready to drive again when the man quickly places a blade at his neck. He wants the car. Your bag is still on your lap...",
                      options: [
                        "Comply with his demands! You can't risk Sam's life.",
                        "TASE THE *******!",
                        ""
                      ],
                      nextLevels: [
                        {
                          p:
                            "You ask him to calm down. You slowly get out of the car. He shimmies to the front seat and kicks Sam out. He thanks you for the free car and drives off. Sam is swearing like a sailor. You two end up walking. Sam says that it'll just take a lot longer to get there. It really dark now, and you're both exhausted...<br><br> Is there something in the corner of your eye? You're certain that you saw something but when you turn your head to look, there's nothing there. You still feel uneasy about the situation. You turn to tell Sam about your worries, but someone gets a hold of you. Sam is being subdued as well. In less than a second, you are surrounded by a group of rag-tags. They look pretty nasty.",
                          options: ["Offer them money!", "", ""],
                          nextLevels: [
                            {
                              p:
                                "You ask them to wait! You tell them that you guys aren't worth much, but there's a lot of money in your bag. A tall man with a torn scarf steps forward and inspects your bag. He's very impressed. He asks how you got all this money, you explain how your rich neighbor left her keys to you, and when shit hit the fan, you had to search through her things. The tall man commends you! He tells the group to let you both go, and they head off...",
                              options: ["...", "", ""],
                              nextLevels: [
                                {
                                  p:
                                    "... You've been walking for a while, but that doesn't seem to bother you or Sam. Things could've gotten really bad really fast, but you dodged a bullet back there. You two have finally reached the cabin! Away from all the chaos and disarray, you are now safe! Once you get inside you both relax and help yourselves to a drink. You've come a long way, but you wouldn't have gotten here if you didn't make the right choices! Congratulations, friend, you have reached the end of Concipilo.<br><br> Might I add one more thing? There are many endings to this story, and I'm afraid that you haven't used your full potential.",
                                  options: ["", "", ""]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          p:
                            "You move quickly, grab your taser and get the punk right in the neck. He didn't see it coming! He passes out and you sit back relief. You laugh and tell Sam how much of a close call this was, but then you realize how quiet he's been. You look at him and you see the deep cut left by the blade. Something went wrong when the hitchhiker was being tased. Terribly wrong. You try to apply preassure with some gauze pads you had in your bag. You manage to slow the bleeding down, but he's really lost too much blood. You get the hitchhiker out of the car, lay sam down in the back seat, and start driving...",
                          options: ["...", "", ""],
                          nextLevels: [
                            {
                              p:
                                "You finally arrive at the cabin. You help Sam inside, but he's very weak. You get your hands on anything you can use to clean and redress the wound...",
                              options: ["...", "", ""],
                              nextLevels: [
                                {
                                  p:
                                    "Congratulations! You have reached the end of Concipilo. Unfortunately, your good friend Sam didn't make it... But at least you're safe at his family cabin. Solitude is Bliss! <br><br> ... or not... <br><br> No worries! There are many endings to this story, and you've barely touched the surface. <br> At least you lived to tell the tale!",
                                  options: ["", "", ""]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
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
            "",
            ""
          ],
          nextLevels: [
            {
              p:
                "You enter the diner a bit confused. These people seem way too calm. The hostess leads you to a table. You take a seat and look at the menu, and you're craving..",
              options: [
                "A vanilla milkshake.",
                "French Fries",
                "All of the above<br>(don't worry, this isn't a test)"
              ],
              nextLevels: [
                {
                  p:
                    "You get your milkshake and it's absolutely amazing! You feel like you're forgetting something really important, but you can't put your finger on it. Something wrong is happening here, but the milkshake is so good... Whatever it is, it can wait.",
                  options: ["...", "", ""],
                  nextLevels: [
                    {
                      p:
                        "My Good Freind! How are you? I hope it was worth it. You've chosen food over glory! Don't worry, I would too. That milksake induces a Lotus Casino effect on it's consumer, so you would end up never wanting to leave this diner. If only you chose something else... Rest assured, you'll have plenty of chances, for this tale has many endings. Concipilo FTW!",
                      options: ["", "", ""]
                    }
                  ]
                },
                {
                  p:
                    "You get your fries and start eating. Wow, they're so amazing. They don't even need to be dipped in anything, but you still have an arsenal of condiments at your disposal. What's happening here? Is there something you forgot to do? Did you forget to unload the dishwasher? hmm... can't put your finger on it... Whatever. Time to order more fries!!!",
                  options: ["YUMMY!", "", ""],
                  nextLevels: [
                    {
                      p:
                        "I hope you've finished indulging. You've been bamboozled! Theres a Lotus Casino effect, which was induced when you were eating those fries. If only you were able to pair those fries with... <br><br> You know what? Nevermind that! You've gotten to the end of your Concipilo story! If you're happy with your gluttonous ending, then you've won! This is definitely better than some of the other storylines.. <br>So, kudos!",
                      options: ["", "", ""]
                    }
                  ]
                },
                {
                  p:
                    "You've gotten your milksake and french fries! They taste so good... You start to lose yourself in the food, and you try something very daring... Oh, yes! You dip a french fry in your milksake and take a bite. The explosion of flavor invades your tastebuds and something happens...<br><br> You realize that you've been tripping out for quite some time. It shouldn't be so dark outside--you just got here... Well, that's what you thought. There's something wrong with the food here, and it makes people want to stay in the diner forever. Good thing you made such a dairing move! The combo of the milkshake and fry was unique enough to break you out of the trance. You share your fries with the guy sittin' in the table next to yours, and he jolts. His glass of milk flew out of his hands and hit the floor. In that moment, all the attention shifts to you two.<br><br> Everyone is going crazy! They can't bare the sight of spilled milk! Do you...",
                  options: [
                    "Start throwing your milksake-covered fries!",
                    "Clean it up with a napkin! Seriously, why are they freaking out about something so dumb??",
                    "Grab a straw"
                  ],
                  nextLevels: [
                    {
                      p:
                        "You start throwing those fries and a food fight of the century begins!",
                      options: ["...", "", ""],
                      nextLevels: [
                        {
                          p:
                            "ALAS, THE CHAMPION HAS ARRIVED! Yes, I mean you! Listen, friend, You've done well as a noble warrior. Your weapon is an unusual, but tasty combination of fries and milkshakes. No one saw it coming!<br> Okay, I admit that these endings are just for kicks, but that doesn't mean that they're pointless! There's a lesson to be learned here. <br> What is it?<br> I can't tell you! How would life be if people went around handing you all the answers! If you want to learn more, come back again! Concipilo has many storylines.",
                          options: ["", "", ""]
                        }
                      ]
                    },
                    {
                      p:
                        "You clean up the mess, and everyone really starts to flip their shit! These people are not normal, but you aleady knew that. They all point at the napkin in your hand and start singing Mr. Blue Sky in unison.",
                      options: ["...", "", ""],
                      nextLevels: [
                        {
                          p:
                            "Weird, huh? You made the decisions, and you ended up here! I'm glad that you have some manners. Thank you for cleaning that up, I'm not so fond of spilled milk, either.<br> Ah, yes! You've gotten to the end of the road~ It's not a bad ending, but it's not a great ending either. You're still stuck in the diner, and I don't remember anyone getting out of there...<br> Nevertheless, Concipilo has many endings, and I do hope you try your luck again. Who knows? You might just save the world!",
                          options: ["", "", ""]
                        }
                      ]
                    },
                    {
                      p:
                        "You grab the straw from your milksake glass and -- Okay, I can't do this anymore. You're at the end of the game! Yay, Congratulations! Why don't you tell me, what exactly were you going with that choice? <br><br>*Sigh*<br><br> Doesn't matter! You did it! But there are many endings to this story, and I hope you play again. Remember, even the smallest decision can displace the entire story, so be careful out there!",
                      options: ["", "", ""]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          p:
            "Okay. Sam's a little pissed! You explain how uneasy you felt about staying in the building, and he calms down. Sam points and says he thinks you both should just get to his car. Sam's car is in the same direction as the sirens. You still remember the direction that group was headed.",
          options: [
            "Head over to Sam's car! Maybe it's time to get help from the authorities.",
            "Find the group! Try to convince Sam to come with you.",
            ""
          ],
          nextLevels: [
            {
              p:
                "You head over to Sam's car. It looks like someone broke into the all the cars on the block, including Sam's. His doors are slightly open. Sam checks the glove compartment, then starts doing some swearing. Okay, that was an understatement. Sam was doing a shit ton of swearing. You try to calm him down, then he explains that he kept his money there in case of emergencies. He takes a deep breath and asks what the next move is. You tell him that the cops should know what's going on. They'll help.",
              options: ["Follow the sirens! Full speed ahead, Matey!", "", ""],
              nextLevels: [
                {
                  p:
                    "You guys follow the sound of sirens and before long you're stopped by soldiers. They make you get out of the car and escort you around the corner. That's when you see a huge amount of people lined up in rows. There's a woman standing on a podium with a bullhorn. She says that the world is ready for assimilation. And this is just the start of something amazing. She says that you have the choice to submit to the power of the Rubethschild family. The only way to do that is to get a nanotracer injected in your arm. As you move through the line, Sam expresses his discomfort with the tracer. He doesn't trust these people. Even if they've got a whole bunch of military with them. Time really flies, doesn't it? You're up! What's your next move?",
                  options: [
                    "Receive the injection! Their forces are way too powerful!",
                    "Politefully decline!<br> They're crazy if they think you're going along with this bs."
                  ],
                  nextLevels: [
                    {
                      p:
                        "The moment you get injected, your arm starts feeling funny. Sam starts yelling at them. You don't understand why. But he want's to know what they did to you. Your arm starts throbbing. You look down and it's all shades of purple. The woman on the bullhorn stops her announcements, and moves towards you. She says that she's a very lucky woman. She found the one person in the world who can pose a threat to the Founding Family. She orders her men to eliminate you. Sam cries out as the woman gives the signal...",
                      options: ["...", "", ""],
                      nextLevels: [
                        {
                          p:
                            "Well, well. I guess you're someone who is incredibly special! Unfortunately, you were unable to unlock your full potential.<br><br> That's okay! Concipilo is a story with multiple endings! I wonder if there's anything that you can do differently next time...",
                          options: ["", "", ""]
                        }
                      ]
                    },
                    {
                      p:
                        "You tell the doctor that you'd rather not stick random needles in your arm. He laughs and calls the guards. Rebels are not unheard of. He says that you don't have to get any injection, but you will be put in jail. You get cuffed and thrown in the back of an armoured vehicle. In a few short moments, Sam gets thrown in with you! Before long, the vehicle gets filled, starts moving to the confinement area...",
                      options: ["...", "", ""],
                      nextLevels: [
                        {
                          p:
                            "When you arrive, soldiers grab each of you and bring you to your cells. You're still with Sam, but the others in the room did not take the same vehicle as you did. There's one guy who comes right up to Sam. Sam looks up in disbelief. He introduces you to his best friend, Shepard. This guy's a bit older than Sam. Shepard's only arrived here a few hours before you two. You ask him for answers. What the heck is going on here? He explains that the Rubethschild Family is behind all of this. They control most of the wealth, globally. They've been in charge of a secret organization, Permanent Unification Goals(P.U.Gs)for years, and they've finally decided to make their move...<br><br> Shepard asks if you and Sam would like to join him. He plans on escaping tonight...",
                          options: [
                            "Heck yeah! Who wants to stay in prison?",
                            "",
                            ""
                          ],
                          nextLevels: [
                            {
                              p:
                                "When it was breakout time, everything went smoothly. You are now in Shepard's bunker with Sam. Shepard says that he has created something ingenious! He pulls out a carbon fiber briefcase. When he opens it, there are five syringes. They all contain the same glowing-green liquid. He claims that this is the ultimate weapon against P.U.Gs. He said he bioengineered this himself, and it will make you stronger. You hesitate. Shepard injects himself first to show you he's serious.",
                              options: [
                                "Take the shot! Do what you must to stop P.U.Gs.",
                                "Decline. You've had enough weird needls forced upon you in one day!",
                                ""
                              ],
                              nextLevels: [
                                {
                                  p:
                                    "Sam injects himself. If Sam trusts this guy, he can't be that bad. You inject yourself in your shoulder and take a few deep breaths. You take Shepard's helicopter straight to P.U.Gs HQ. They have a droid gaurding the building. It detects your team and immediately activates combat mode. Missiles are fired at each of you. You put your arms up to block the incoming projectile, and it explodes. You're unharmed? Shepard says it's finally starting to merge with your body. You now have telekinetic powers! The three of you force the droid to the ground, and turn it into a huge ball of tin..",
                                  options: ["...", "", ""],
                                  nextLevels: [
                                    {
                                      p:
                                        "You make moves towards the Founding Family's room. When the three of you arrive, the greatest battle unfolds between the Telekinetic Trio(That's you), and the Found Family! The battle lasts for hours. When you finally stand victorious, you see Sam slumped over Shepard. He's not moving... Even if you've won a great battle, and saved the world from unsolicited unification, you still suffered a casualty which could've been avoided.<br><br> BUT YOU ARE A HERO! YOU'VE DONE IT! THIS is a GOOD ending(kinda).<br><br> What? Not satisfied? hmm... Well, you can always play again! Remember, every move you make can alter the future...",
                                      options: ["", "", ""]
                                    }
                                  ]
                                },
                                {
                                  p:
                                    "You decline Shepard's offer. Sam injects himself anyway. After some preparation, you all head out. You take Shepard's helicopter straight to P.U.Gs HQ. They have a droid gaurding the building. It detects your team and immediately activates combat mode. Missiles are fired at each of you",
                                  options: ["...", "", ""],
                                  nextLevels: [
                                    {
                                      p:
                                        "pew pew pew YOU DID IT! haha jkjkjk. But you got close, didn't ya! I wonder what you could've done differently... Either way, you've done a fantastic job! This is the end of this storyline, but Concipilo has many more. Try your hand again, and see if the odds are in your favor.",
                                      options: ["", "", ""]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              p:
                "You tell Sam about the group you saw when you first looked out the window. You urge him to come with you! He doesn't argue with you, he just asks what direction they went. When you tell him, you both start running in that direction. Within a few minutes, you see them in the distance. You both break into a spring. When you get closer, one of the group members turns around. He gestures to the group and they stop advancing. You realize that there's something weird about this group. You tell Sam that you think you've made a mistake, and he tells you not to back down. When you get closer to them, you notice that their left arms have strange red markings, similar to a circuit going down the arm to their hand.",
              options: ["...", "", ""],
              nextLevels: [
                {
                  p:
                    "You ask them if you can join them. One of their members asks if you even know what's happening around here. You tell her that you've got no idea, but that is why you want to join, so you can learn. She sighs. The group escorts you and Sam to their hidden hangout. They explain that the Rubethschild Family is behind all of this. They control most of the wealth, globally. They've been in charge of a secret organization, Permanent Unification Goals(P.U.Gs)for years, and they've finally decided to make their move. A hostile takeover upon all first world countries at once. The group accepts you as members, but you need to drink this weird funky green drink. They assure you that this is what gives them the mark. The mark is what gives them power... <br>If you drink this you'll be faster, stronger and smarter.",
                  options: [
                    "Decline. That stuff looks like grass and mud.",
                    "Down it! Never turn down a chugging challenge.",
                    ""
                  ],
                  nextLevels: [
                    {
                      p:
                        "You decline their drink. They are not happy that you turned down one of their most prized posessions. They take a few moments to chat in huddle. When they turn back around to face you, they are more intense. The atmosphere has changed completely...",
                      options: ["...", "", ""],
                      nextLevels: [
                        {
                          p:
                            "It seems like they didn't like that so much. Listen. If you ask to be in someone's secret group:<br> Do) Bring them some fruitcake! <br> Do Not) back out after they've revealed their secrets to you! <br> Oh! You'd like to know what happened? Of course! They simply demonstrated their power to you and Sam. Don't worry! There are plenty of different endings in Concipilo! You are free to keep trying for an ending that you like!",
                          options: ["", "", ""]
                        }
                      ]
                    },
                    {
                      p:
                        "Sam drinks his cup first. He grips his arm and starts grimacing. Like clockwork, the red marks start appearing on his arm. Your turn now. You down that crazy drink in 2.5 seconds. It doen't taste as bad as you thought it would, but at least the excruciating pain lives up to standard! You can't believe that Sam just went through this without crying! You grip your arm and the marks start to appear. There's something different here... Your marks aren't red like the rest of the group. Your marks are electric blue. The group starts murmuring and you don't understand why. Did they give you the wrong drink? No.. That's not it. The pain subsides and you're standing next to Sam. As you try to understand what's going on, three of the group members immediately pull out their blades and charge at you. Sam reacts quicly enough, and knocks the closest one down. The other two get closer to you, but it seems like they're moving in slow motion...",
                      options: ["...", "", ""],
                      nextLevels: [
                        {
                          p:
                            "You step inbetween them and with two swift moves, you send them flying in opposite directions. You've never felt this rush before. You and Sam knock down a couple more, and make your escape. <br><br>Sam get's a text from his best friend's brother saying that he was taken by soldiers. They're holding him in a P.U.Gs containment facility near Union Square. He needs to go rescue his friend! He says that he's really smart and he can help us take down P.U.Gs.",
                          options: [
                            "Go rescue this man! You'll need all the help you can get.",
                            "",
                            ""
                          ],
                          nextLevels: [
                            {
                              p:
                                "It takes you guys twenty minutes to get to the containment facility. You wait until some of the gaurds leave to pick up more prisoners. You and Sam are finally ready to make your move. You bolt over the fence and hide behind crates. Sam sees his friend in a cellar with a few other guys. The plan is you distract the gaurds and he will break his friend out. When you get the signal, you'll be able to make an escape. Rendezvous at 13th street and 4th ave. You step out in the middle of the facility and taunt the guards. They race towards you and that's when things get ugly-- for them! They don't see it coming. Lightning fast kicks and punches put a few of them out of commission. Some of them approach you with guns in their hands. They shoot, but you can anticipate their movements by reading their body language. You end up behind them. One chop to the back of the head kocks out three of them. You hear Sam whistle, and you bolt out of there!",
                              options: ["...", "", ""],
                              nextLevels: [
                                {
                                  p:
                                    "You meet up at the rendezvous point, and Sam introduces you to his friend, Shepard. Shepard thanks you for aiding in his escape. He leads you and Sam to his bunker. Shepard says that he has created something ingenious! He pulls out a carbon fiber briefcase. When he opens it, there are five syringes. They all contain the same glowing-green liquid. He claims that this is the ultimate weapon against P.U.Gs. He said he bioengineered this himself, and it will make you stronger. You hesitate. Shepard injects himself first to show you he's serious.",
                                  options: [
                                    "Decline the injection!<br> Did he not just see how much ass you kicked back there?",
                                    "Take the shot! What've you got to lose?<br> Hopefully whatever's in that syringe is compatable with your markings..",
                                    ""
                                  ],
                                  nextLevels: [
                                    {
                                      p:
                                        "You respectfully decline. Sam doesn't take the risk, either. After some preparation, you all head out. You take Shepard's helicopter straight to P.U.Gs HQ. They have a droid gaurding the building. It detects your team and immediately activates combat mode. Missiles are fired at all of you",
                                      options: ["...", "", ""],
                                      nextLevels: [
                                        {
                                          p:
                                            "You leap in the air dodging the missiles! You land right on the droid's shoulders and start tearing at it's jetpack. Shepard raises one arm and the droid quickly starts falling to the ground. You had to jump off last second to avoid crashing. Shepard raises his other arm and the droid gets crushed into a ball of metal and scraps. You all head into the building.",
                                          options: ["...", "", ""],
                                          nextLevels: [
                                            {
                                              p:
                                                "You guys fight your way to the Founding Family's room, and that's when the real battle begins. They're very strong. Shepard seems to be holding his own. Sam is putting up a good fight, too. You end up fighting the Founding Father, Bob. Bob moves very quickly, and he has a lot of ammunition...<br> The fight lasts for hours, but when you finally rise victorious, you see Shepard sulking over Sam's body... He's not moving. Shepard says he jumped in the way when the Founding Mother sent a deadly attack at him. Sam saved Shepard's life...",
                                              options: ["...", "", ""],
                                              nextLevels: [
                                                {
                                                  p:
                                                    "You have done something amazing today. Trust. You've stopped the horrible P.U.Gs in its tracks, and saved the world from these tyrants. It's unfortunate that your roommate wasn't able to make it as far as you did. At least you've got a new friend in Shepard! <br> Hero! You've gotten to the end of Concipilo! The story with multiple endings! If you'd like to find out if there are any better endings, feel free to try again! Hopefully, the odds will be in your favor.",
                                                  options: ["", "", ""]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      p:
                                        "You take the shot in your shoulder. Sam doesn't join you, he think it's too risky for him. After some preperation, you guys take Shepard's helicopter to P.U.Gs HQ. They have a droid gaurding the building. It detects your team and immediately activates combat mode. Missiles are fired at all of you...",
                                      options: ["...", "", ""],
                                      nextLevels: [
                                        {
                                          p:
                                            "You bring your arms together and all the missiles explode before they get close to the group. That shot from Shepard has given you telekinetic powers. It's time to show this droid who's boss. You leap into the air and hit the droid with a devistating blow. Combinding your massive strength with Telekinesis enables you to send a a wave of power that slices the droid in half. Shepard raises his arms and the droid crumbles into a big ball of metal, then falls to the ground. It's time to head inside of the building.",
                                          options: ["...", "", ""],
                                          nextLevels: [
                                            {
                                              p:
                                                "You guys fight your way to the Founding Family's room. The real battle begins. They're very strong. Shepard seems to be holding his own. Sam is putting up a good fight, too. You end up fighting the Founding Father, Bob. Bob moves very quickly, and he's wearing an arsenal of weapons. He'd be a match if any of his attacks can get to you. You swiftly move behind him and deliver a deadly blow with his own sword. You look to your left and the Founding Mother fires a nasty projectile with an electric charge at Shepard while he's not looking. Sam jumps in front of Shepard to take the blow. You don't let that projectile hit either of your group. You use your telekinetic powers to curve the projectile, and it goes straight into the Founding Mother... <br><br>  The three of you stand victorious.",
                                              options: ["...", "", ""],
                                              nextLevels: [
                                                {
                                                  p:
                                                    "BRAVO! You've really outdone yourself. This is the Best ending to the story of Concipilo. You've put an end to the P.U.Gs organization, and their family is no longer a threat to the world. All your companions are alive! And so are you. If you'd like to see some of the other storylines, feel free to play again. May the odds be ever in your favor!<br><br> ~Fin~",
                                                  options: ["", "", ""]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
    // {
    //   p: "run",
    //   options: ["Group", "Your Car", "Sirens"],
    //   nextLevels: [{}]
    // }
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
