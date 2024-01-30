export const Classes = {
    "Barbarian": {
        "Description": "That burning fire in your heart, boiling your blood... It is what keeps you going in the midst of the battle and death that surrounds you.",
        "Proficiency" : "Body",
        "Exclusive": {
            "name": "Boiling Blood",
            "description": "While calculating your HP, you may add your Proficiency Bonus to your hp gained per level (Body Score + Proficiency Bonus Times your total level)."
        },
        "Spellcaster": false,
        "Abilities": {
            2: [
                {
                    "name": "Berserk",
                    "description": "Enter a state of rage fueled power. While in this state, you gain resistance to all physical damage (bludgeoning, piercing, slashing). You may enter Berserk a number of times equal to your Proficiency Bonus. This state lasts for 1 minute or until you are incapacitated."
                },
                {
                    "name": '"Ranged Weapons"',
                    "description": "While in your Berserk state, you may throw Any melee weapon using your Strength or Dexterity die, whichever is higher. The damage dealt is one die class lower than its standard damage (Tiny weapons still do their standard 1d4 damage). I.E. throwing a Great weapon will deal 1d10 damage upon a successful hit. Throwing weapons in this way has a range of 30ft standard and 60ft long range.",
                }
            ],
            3: [
                {
                    "name": "Extra Attack",
                    "description": "While using your Main action to make a weapon attack, you may attack Twice instead."
                }
            ],
            5: [
                {
                    "name": "Always Ready",
                    "description": "You can no longer be surprised, and you gain Advantage on Initiative checks.",
                }
            ],
            6: [
                {
                    "name": "Improved Berserk",
                    "description": "While in your Berserk state, you have resistance to Physical and Elemental damage.",
                }
            ],
            8: [
                {
                    "name": "Death Fears You",
                    "description": "You have Advantage on Death Checks.",
                }
            ],
            9: [
                {
                    "name": "Still Standing",
                    "description": "While in your Berserk state, you can keep fighting, even when you have nothing left. When you take damage that would leave you with 0 HP, you can make a Body Check (DC: damage taken) to remain at 1 HP instead."
                }
            ],
            10: [
                {
                    "name": "Improved Berserk",
                    "description": "While in your Berserk state, you have resistance to ALL damage types. If you have resistance to a damage type from another source, this ability grants you Immunity to that damage type instead. This does not include Temporary resistances, such as from a Warrior's Stance or from a Magic Item.",
                }
            ]
        },
        "Subclasses": {
            "Storm's Wrath": {
                "name": "Storm's Wrath",
                "description": "Rain upon your foes the wrath of nature and storm...",
                "abilities": {
                    1: [
                        {
                            "name": "Storm Heart",
                            "description": "You permanently gain resistance to Lightning and Thunder damage.",
                        }
                    ],
                    4: [
                        {
                            "name": "Charged Weapons",
                            "description": "While in your Berserk State, you may add your choice of Lightning or Thunder damage equal to your Will die to One weapon attack per Turn."
                        }
                    ],
                    7: [
                        {
                            "name": "Thunderous Step",
                            "description": "While in your Berserk State, you may use a Bonus Action to expend one Berserk Charge to teleport up to 60ft away and deal 1 Will die of Thunder damage and 1 Will die of Lightning damage to all targets within 10ft of your destination."
                        }
                    ],
                    10: [
                        {
                            "name": "Call of the Storm",
                            "description": "While in your Berserk State, you gain a fly speed equal to your walking speed. This does not allow you to hover, so you must end your turn on solid ground or you will fall to the ground and be subject to Falling Damage."
                        }
                    ]
                }
            }
        }
    },
    "Druid": {
        "Description": "The Wilds of the world call out to you, teaching you the ways of flora and fauna...",
        "Proficiency" : "Will",
        "Exclusive": {
            "name": "Call of the Wilds",
            "description": "A number of charges equal to your Proficiency Bonus used for certain abilities.",
        },
        "Spellcaster": true,
        "Abilities": {
            2: [],
            3: [],
            5: [],
            6: [],
            8: [],
            9: [],
        },
        "Subclasses": {
        }
    },
    "Mage": {
        "Description": "Through study and hard work, you have gained grasp of the magical threads holding the world together.",
        "Proficiency" : "Mind",
        "Exclusive": {
            "name": "Ritual Casting",
            "description": "Outside of combat, you may take 10 minutes to cast a Ritual Spell without expending any spell points. When casting this way, the spell is cast at its lowest possible level.",
        },
        "Spellcaster": true,
        "Abilities": {
            2: [],
            3: [],
            5: [],
            6: [],
            8: [],
            9: [],
        },
        "Subclasses": {
        }
    },
    "Monk": {
        "Description": "Mind over Matter... You have honed your Body to perfection and your Ki like a blade.",
        "Proficiency" : "Body",
        "Exclusive": {
            "name": "Ki",
            "description": "You may add 1/4 your Body Score rounded down + your Proficiency Bonus to your Armor Class so long as you are not wearing armor. In addition, you gain Ki charges,A number of charges equal to your Proficiency Bonus used for certain abilities.",
        },
        "Spellcaster": false,
        "Abilities": {
            2: [],
            3: [],
            5: [],
            6: [],
            8: [],
            9: [],
        },
        "Subclasses": {
        }
    },
    "Paladin": {
        "Description": "You Promised that you would do this. An Oath taken is an Oath bound. ",
        "Proficiency" : "Strength",
        "Exclusive": {
            "name": "Driven Strike",
            "description": "After landing a successful attack with a weapon, you may expend one Driven Strike charge (Total charges equal to your levels in Paladin per rest) to deal 1d6 extra damage to the target.",
        },
        "Spellcaster": false,
        "Abilities": {
            2: [],
            3: [],
            5: [],
            6: [],
            8: [],
            9: [],
        },
        "Subclasses": {
        }
    },
    "Ranger": {
        "Description": "A wanderer and outlander, a Ranger can strike accurately from afar, dealing massive damage from the Shadows or from atop their Mount.",
        "Proficiency" : "Dexterity",
        "Exclusive": {
            "name": "Sharpshooter",
            "description": "While attacking with a Ranged weapon, you may Double your Proficiency Bonus added to your attack roll. Your Ranged Attacks also ignore cover. Critical Strikes with a Ranged weapon may apply other effects (listed below) to the target.",
        },
        "Spellcaster": false,
        "Abilities": {
            2: [],
            3: [],
            5: [],
            6: [],
            8: [],
            9: [],
        },
        "Subclasses": {
        }
    },
    "Rogue": {
        "Description": "The shadow of the night, the hand in the pocket, the blade around your neck... The Rogue specializes in the unseen. Traversing out of sight, rogues often strike their target's heart before even being noticed.",
        "Proficiency" : "Dexterity",
        "Exclusive": {
            "name": "Assasinate",
            "description": "You may Double your Proficiency Bonus on Attack Rolls with melee weapons. When you land a Critical Strike with a melee weapon, you roll an additional damage die.",
        },
        "Spellcaster": false,
        "Abilities": {
            2: [],
            3: [],
            5: [],
            6: [],
            8: [],
            9: [],
        },
        "Subclasses": {
        }
    },
    "Sage": {
        "Description": "Your service to your God(ess) has proven fruitful. Your deity of choice has blessed you with Holy powers from the heavens above or the hells below.",
        "Proficiency" : "Will",
        "Exclusive": {
            "name": "Will of the Gods",
            "description": "A number of charges equal to your Proficiency Bonus used for certain abilities.",
        },
        "Spellcaster": true,
        "Abilities": {
            2: [],
            3: [],
            5: [],
            6: [],
            8: [],
            9: [],
        },
        "Subclasses": {
        }
    },
    "Sorcerer": {
        "Description": "You are in tune with the magical threads that wove this world together. Whether born with it or blessed into this position, you command control over magic unlike any other.",
        "Proficiency" : "Influence",
        "Exclusive": {
            "name": "Thread Weaver",
            "description": "While casting a spell of a level no greater than your level in Sorcerer, you may change the damage type of the spell at will. The new damage type must be one of the Elemental damage types.",
        },
        "Spellcaster": true,
        "Abilities": {
            2: [],
            3: [],
            5: [],
            6: [],
            8: [],
            9: [],
        },
        "Subclasses": {
        }
    },
    "Tinkerer": {
        "Description": "While magic might not have come easy to you, you are probably a smart individual and self taught. A savant with magic items and infusions, you can invent and tinker to your hearts content.",
        "Proficiency" : "Mind",
        "Exclusive": {
            "name": "Magic Tinkering",
            "description": "(A number of charges equal to your Proficiency Bonus). You may create or enchant a magic item with each charge of Magic Tinkering. You may have a maximum number of created/enchanted items equal to the number of Magic Tinkering Charges. However, when the charges reset upon a rest, created/enchanted items remain. Using your Magic Tinkering ability when at your maximum number of items causes one item, of your choice, to lose its enchantment (created items disappear). Options for Magic Tinkering are listed later.",
        },
        "Spellcaster": true,
        "Abilities": {
            2: [],
            3: [],
            5: [],
            6: [],
            8: [],
            9: [],
        },
        "Subclasses": {
        }
    },
    "Warlock": {
        "Description": "You made a deal... for better or for worse. Whatever you chose to deal with gave you this great power, though who knows what it took in return...",
        "Proficiency" : "Influence",
        "Exclusive": {
            "name": "Eldritch Entity",
            "description": "A number of charges equal to your Proficiency Bonus used for certain abilities.",
        },
        "Spellcaster": true,
        "Abilities": {
            2: [],
            3: [],
            5: [],
            6: [],
            8: [],
            9: [],
        },
        "Subclasses": {
        }
    },
    "Warrior": {
        "Description": "You have trained for a long time in the ways of sword and shield, now is your chance to prove it... to yourself, and to everyone else...",
        "Proficiency" : "Strength",
        "Exclusive": {
            "name": "Warrior's Stance",
            "description": "At the Beginning of your turn, you may select one Stance from the Warrior's Stance options.",
        },
        "Spellcaster": false,
        "Abilities": {
            2: [],
            3: [],
            5: [],
            6: [],
            8: [],
            9: [],
        },
        "Subclasses": {
        }
    },
}