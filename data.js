const characters = [
    {
        "Eddard Stark": {
            "age": 35,
            "house": "House Stark",
            "title": "Lord of Winterfell",
            "status": "Deceased",
            "bestQuote": "Winter is coming.",
            "significantDecisions": [
                "Accepting the position of Hand of the King",
                "Revealing the truth about Joffrey's parentage"
            ]
        }
    },
    {
        "Jon Snow": {
            "age": 20,
            "house": "House Stark",
            "title": "Lord Commander of the Night's Watch",
            "status": "Alive",
            "bestQuote": "When the snows fall and the white winds blow, the lone wolf dies, but the pack survives.",
            "significantDecisions": [
                "Forming an alliance with the Wildlings",
                "Leading the defense against the Night King"
            ]
        }
    },
    {
        "Daenerys Targaryen": {
            "age": 25,
            "house": "House Targaryen",
            "title": "Queen of the Andals and the First Men",
            "status": "Deceased",
            "bestQuote": "I am the blood of the dragon.",
            "significantDecisions": [
                "Conquering the cities of Slaver's Bay",
                "Launching an attack on King's Landing"
            ]
        }
    },
    {
        "Tyrion Lannister": {
            "age": 38,
            "house": "House Lannister",
            "title": "Hand of the Queen",
            "status": "Alive",
            "bestQuote": "Never forget what you are, for surely the world will not.",
            "significantDecisions": [
                "Serving as Hand of the King",
                "Conducting the defense of King's Landing"
            ]
        }
    },
    {
        "Arya Stark": {
            "age": 16,
            "house": "House Stark",
            "title": "Faceless Man",
            "status": "Alive",
            "bestQuote": "A girl is Arya Stark of Winterfell. And I'm going home.",
            "significantDecisions": [
                "Seeking revenge against those who harmed her family",
                "Training with the Faceless Men"
            ]
        }
    },
    {
        "Cersei Lannister": {
            "age": 40,
            "house": "House Lannister",
            "title": "Queen Regent",
            "status": "Deceased",
            "bestQuote": "When you play the game of thrones, you win or you die.",
            "significantDecisions": [
                "Eliminating her political rivals",
                "Blowing up the Great Sept of Baelor"
            ]
        }
    },
    {
        "Sansa Stark": {
            "age": 18,
            "house": "House Stark",
            "title": "Lady of Winterfell",
            "status": "Alive",
            "bestQuote": "The lone wolf dies, but the pack survives.",
            "significantDecisions": [
                "Surviving in King's Landing under the Lannisters",
                "Gaining control of Winterfell"
            ]
        }
    },
    {
        "Jaime Lannister": {
            "age": 40,
            "house": "House Lannister",
            "title": "Lord Commander of the Kingsguard",
            "status": "Alive",
            "bestQuote": "The things I do for love.",
            "significantDecisions": [
                "Pushing Bran Stark out of the window",
                "Becoming Brienne of Tarth's ally"
            ]
        }
    },
    {
        "Bran Stark": {
            "age": 16,
            "house": "House Stark",
            "title": "Three-Eyed Raven",
            "status": "Alive",
            "bestQuote": "Chaos isn't a pit. Chaos is a ladder.",
            "significantDecisions": [
                "Surviving his fall and acquiring visions",
                "Revealing Jon Snow's true parentage"
            ]
        }
    },
    {
        "Samwell Tarly": {
            "age": 23,
            "house": "House Tarly",
            "title": "Maester",
            "status": "Alive",
            "bestQuote": "I'm not a wizard. I'm just Sam.",
            "significantDecisions": [
                "Befriending Jon Snow at the Night's Watch",
                "Discovering important information about White Walkers"
            ]
        }
    },
    {
        "Catelyn Stark": {
            "age": 35,
            "house": "House Stark",
            "title": "Lady of Winterfell",
            "status": "Deceased",
            "bestQuote": "Family. Duty. Honor.",
            "significantDecisions": [
                "Releasing Jaime Lannister to secure her daughters' safety",
                "Attending the Red Wedding"
            ]
        }
    },
    {
        "Robb Stark": {
            "age": 17,
            "house": "House Stark",
            "title": "King in the North",
            "status": "Deceased",
            "bestQuote": "I'll kill them all.",
            "significantDecisions": [
                "Marrying Talisa instead of a strategic alliance",
                "Executing Lord Rickard Karstark"
            ]
        }
    },
    {
        "Stannis Baratheon": {
            "age": 45,
            "house": "House Baratheon",
            "title": "Rightful King of Westeros",
            "status": "Deceased",
            "bestQuote": "The night is dark and full of terrors.",
            "significantDecisions": [
                "Claiming the Iron Throne",
                "Burning his daughter as a sacrifice"
            ]
        }
    },
    {
        "Melisandre": {
            "age": "400+",
            "house": "Red Priestess",
            "title": "Priestess of R'hllor",
            "status": "Deceased",
            "bestQuote": "For the night is dark and full of terrors.",
            "significantDecisions": [
                "Guiding Stannis Baratheon with prophecies",
                "Reviving Jon Snow"
            ]
        }
    },
    {
        "Davos Seaworth": {
            "age": 45,
            "house": "House Seaworth",
            "title": "Hand of the King",
            "status": "Alive",
            "bestQuote": "The good lords are dead, and the rest are monsters.",
            "significantDecisions": [
                "Serving Stannis Baratheon",
                "Supporting Jon Snow as the King in the North"
            ]
        }
    },
    {
        "Margaery Tyrell": {
            "age": 20,
            "house": "House Tyrell",
            "title": "Queen of the Seven Kingdoms",
            "status": "Deceased",
            "bestQuote": "I want to be the queen.",
            "significantDecisions": [
                "Marrying Renly Baratheon and Joffrey Baratheon",
                "Influencing Tommen Baratheon's rule"
            ]
        }
    },
    {
        "Tywin Lannister": {
            "age": 67,
            "house": "House Lannister",
            "title": "Lord of Casterly Rock",
            "status": "Deceased",
            "bestQuote": "A lion does not concern himself with the opinion of sheep.",
            "significantDecisions": [
                "Leading House Lannister during the War of the Five Kings",
                "Arranging strategic marriages for his children"
            ]
        }
    },
    {
        "Joffrey Baratheon": {
            "age": 17,
            "house": "House Baratheon",
            "title": "King of the Seven Kingdoms",
            "status": "Deceased",
            "bestQuote": "Everyone is mine to torment.",
            "significantDecisions": [
                "Beheading Ned Stark",
                "Planning the Red Wedding"
            ]
        }
    },
    {
        "Sandor Clegane": {
            "age": 40,
            "house": "House Clegane",
            "title": "The Hound",
            "status": "Alive",
            "bestQuote": "Fuck the king.",
            "significantDecisions": [
                "Protecting Sansa Stark",
                "Participating in the Battle of Blackwater"
            ]
        }
    },
    {
        "Petyr Baelish": {
            "age": 45,
            "house": "House Baelish",
            "title": "Lord Protector of the Vale",
            "status": "Deceased",
            "bestQuote": "Chaos isn't a pit. Chaos is a ladder.",
            "significantDecisions": [
                "Betraying Ned Stark",
                "Manipulating Sansa Stark"
            ]
        }
    },
    {
        "Brienne of Tarth": {
            "age": 32,
            "house": "House Tarth",
            "title": "Knight",
            "status": "Alive",
            "bestQuote": "I swore to protect her.",
            "significantDecisions": [
                "Swearing an oath to Catelyn Stark",
                "Searching for Sansa Stark"
            ]
        }
    },
    {
        "Theon Greyjoy": {
            "age": 29,
            "house": "House Greyjoy",
            "title": "Prince of Winterfell",
            "status": "Alive",
            "bestQuote": "What is dead may never die, but rises again, harder and stronger.",
            "significantDecisions": [
                "Taking Winterfell and pretending to kill Bran and Rickon Stark",
                "Rescuing Sansa Stark from Ramsay Bolton"
            ]
        }
    },
    {
        "Ygritte": {
            "age": 20,
            "house": "Free Folk",
            "title": "Wildling",
            "status": "Deceased",
            "bestQuote": "You know nothing, Jon Snow.",
            "significantDecisions": [
                "Falling in love with Jon Snow",
                "Participating in the attack on Castle Black"
            ]
        }
    },
    {
        "Ramsay Bolton": {
            "age": 28,
            "house": "House Bolton",
            "title": "Lord of Winterfell",
            "status": "Deceased",
            "bestQuote": "If you think this has a happy ending, you haven't been paying attention.",
            "significantDecisions": [
                "Torturing Theon Greyjoy",
                "Assaulting Jon Snow's forces"
            ]
        }
    },
    {
        "Oberyn Martell": {
            "age": 40,
            "house": "House Martell",
            "title": "Prince of Dorne",
            "status": "Deceased",
            "bestQuote": "I will be your champion.",
            "significantDecisions": [
                "Demanding a trial by combat",
                "Fighting the Mountain in Tyrion's trial"
            ]
        }
    },
    {
        "Jorah Mormont": {
            "age": 45,
            "house": "House Mormont",
            "title": "Knight",
            "status": "Deceased",
            "bestQuote": "There is no cure for being a cunt.",
            "significantDecisions": [
                "Spying on Daenerys Targaryen for Varys",
                "Becoming Daenerys' loyal advisor"
            ]
        }
    },
    {
        "Osha": {
            "age": "Unknown",
            "house": "Free Folk",
            "title": "Wildling",
            "status": "Deceased",
            "bestQuote": "I'm not afraid of some wights.",
            "significantDecisions": [
                "Assisting Bran and Rickon Stark's escape",
                "Joining the fight against the White Walkers"
            ]
        }
    },
    {
        "Barristan Selmy": {
            "age": 70,
            "house": "House Selmy",
            "title": "Lord Commander of the Kingsguard",
            "status": "Deceased",
            "bestQuote": "Even now I could cut through the five of you like carving a cake!",
            "significantDecisions": [
                "Serving as a member of the Kingsguard under various kings",
                "Supporting Daenerys Targaryen's claim to the Iron Throne"
            ]
        }
    },
    {
        "Jaqen H'ghar": {
            "age": "Unknown",
            "house": "Faceless Men",
            "title": "No specific title",
            "status": "Alive",
            "bestQuote": "A girl is no one.",
            "significantDecisions": [
                "Training Arya Stark in the ways of the Faceless Men",
                "Assisting in the assassination of Walder Frey"
            ]
        }
    },
    {
        "Missandei": {
            "age": "Unknown",
            "house": "Naath",
            "title": "Advisor to Daenerys Targaryen",
            "status": "Deceased",
            "bestQuote": "Dracarys.",
            "significantDecisions": [
                "Serving as Daenerys Targaryen's translator and advisor",
                "Being a key figure in the liberation of Slaver's Bay"
            ]
        }
    },
    {
        "Gendry": {
            "age": 25,
            "house": "House Baratheon",
            "title": "Lord of Storm's End",
            "status": "Alive",
            "bestQuote": "I'm Robert Baratheon's son. Bastard son.",
            "significantDecisions": [
                "Escaping Dragonstone and joining the Brotherhood Without Banners",
                "Forging weapons using dragonglass"
            ]
        }
    },
    {
        "Tormund Giantsbane": {
            "age": "Unknown",
            "house": "Free Folk",
            "title": "Leader of the Free Folk",
            "status": "Alive",
            "bestQuote": "They call me Giantsbane. Want to know why? I killed a giant when I was ten.",
            "significantDecisions": [
                "Joining forces with Jon Snow and the Night's Watch",
                "Fighting against the White Walkers"
            ]
        }
    },
    {
        "Beric Dondarrion": {
            "age": "Unknown",
            "house": "House Dondarrion",
            "title": "Leader of the Brotherhood Without Banners",
            "status": "Deceased",
            "bestQuote": "The Lord of Light has given us these powers for a reason.",
            "significantDecisions": [
                "Leading the Brotherhood Without Banners",
                "Resurrecting multiple times to fulfill his purpose"
            ]
        }
    },
    {
        "Grey Worm": {
            "age": "Unknown",
            "house": "Unsullied",
            "title": "Commander of the Unsullied",
            "status": "Deceased",
            "bestQuote": "Valar morghulis.",
            "significantDecisions": [
                "Becoming Daenerys Targaryen's loyal soldier",
                "Leading the Unsullied in battles"
            ]
        }
    },
    {
        "Bronn": {
            "age": "Unknown",
            "house": "No specific house",
            "title": "Lord of Highgarden",
            "status": "Alive",
            "bestQuote": "There's no cure for being a cunt.",
            "significantDecisions": [
                "Assisting Tyrion Lannister and Jaime Lannister",
                "Accepting Lordship and gaining control of Highgarden"
            ]
        }
    },
    {
        "Yara Greyjoy": {
            "age": "Unknown",
            "house": "House Greyjoy",
            "title": "Queen of the Iron Islands",
            "status": "Alive",
            "bestQuote": "I am not here to be queen of the ashes.",
            "significantDecisions": [
                "Claiming the Salt Throne",
                "Forming alliances and fighting for the independence of the Iron Islands"
            ]
        }
    },
    {
        "Podrick Payne": {
            "age": "Unknown",
            "house": "House Payne",
            "title": "Squire",
            "status": "Alive",
            "bestQuote": "I'm not a knight. I'm a squire.",
            "significantDecisions": [
                "Serving as squire to Tyrion Lannister and Brienne of Tarth",
                "Displaying bravery and loyalty in battles"
            ]
        }
    }
]

module.exports = characters