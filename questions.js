const characterMap = {
    1: "Lady Bird",
    2: "Marion McPherson",
    3: "Jenna Walton",
    4: "Danny O'Neill",
    5: "Jules Steffans",
    6: "Lenny McPherson",
    7: "Kyle Scheible"
};

const descriptions = {
    "Lady Bird": "You are a person full of passion, rebellion, and determination. Like Ladybird, you seek authenticity and are willing to follow your dreams, even if it means defying established expectations.",
    "Marion McPherson": "You are prideful, driven, and intelligent. Your sense of humor may lean towards the dry side, but that does not mean you cannot crack everyone up! You want the best for others but may struggle with expressing your feelings at times.",
    "Jenna Walton": "You are a trendsetter and trailblazer! Living in the moment is easy for you, as you are a fearless explorer. Like Jenna, you value honesty and may find yourself being image-conscious at times.",
    "Danny O'Neill": "You are insightful, reserved, and compassionate. You may feel as though you need to hide your true self to keep up with society's expectations, but the real you is accepted by more people than you know.",
    "Jules Steffans": "You are adaptable, friendly, expressive. Despite being relatively easygoing, you aren't afraid to say what you need to say at times. ",
    "Lenny McPherson": "meowes likes a cat",
    "Kyle Scheible": "You are down to earth, reserved, and nonchalant. You are not afraid to speak your mind and push others to challenge their thought processes. However, your chill attitude may only take you so far."
}

  const questions = [
    { question: "Which of the following goals is closest to your dreams?", options: [
        { text: "Reinventing yourself", score: [1] },
        { text: "Creating a stable life for yourself", score: [2] },
        { text: "Gaining fame", score: [3] },
        { text: "Breaking free from my parent's expectations", score: [4, 1] },
        { text: "Being happy", score: [5, 6] }
    ]},
    { question: "Your friends would describe you as:", options: [
        { text: "Unique", score: [1] },
        { text: "Kind", score: [5, 4, 6] },
        { text: "Fearless", score: [3] },
        { text: "Honest", score: [2] },
        { text: "Chill", score: [7] }
    ]},
    { question: "What is your favorite coming of age film?", options: [
        { text: "Real Women Have Curves", score: [5] },
        { text: "The Breakfast Club", score: [1] },
        { text: "Clueless", score: [3] },
        { text: "Bye Bye Birdie", score: [4] },
        { text: "American Graffiti", score: [7] }
    ]},
    { question: "What is your biggest fear?", options: [
        { text: "Losing control", score: [2] },
        { text: "Being stuck in one place forever", score: [1] },
        { text: "Being alone", score: [5, 6] },
        { text: "Hiding my true identity", score: [4] }
    ]},
    { question: "What makes you angry?", options: [
        { text: "Lying", score: [3] },
        { text: "Being doubted", score: [1] },
        { text: "Conforming to expectations", score: [7, 1] },
        { text: "Disrespect", score: [2] },
        { text: "Being left out", score: [5] }
    ]},
    { question: "What makes you laugh the most?", options: [
        { text: "Making fun of yourself", score: [5] },
        { text: "Dry humor", score: [2, 1] },
        { text: "A revenge prank", score: [3] },
        { text: "A comedic show", score: [4, 6] }
    ]},
    { question: "What stresses you out the most?", options: [
        { text: "Financial constraints", score: [] },
        { text: "Not knowing what you are going to do in the future", score: [] }
    ]},
    { question: "What modern singer do you enjoy the most?", options: [
        { text: "Glee Cast", score: [5] },
        { text: "The Strokes", score: [7] },
        { text: "Dear Evan Hansen Broadway Cast", score: [4] },
        { text: "Olivia Rodrigo", score: [1] },
        { text: "Billy Joel", score: [2] }
    ]},
    { question: "How do you handle conflicts with others?", options: [
        { text: "Keep it bottled up inside", score: [4, 6] },
        { text: "Shrug it off and move on", score: [3, 7] },
        { text: "Directly confronting the other person", score: [1, 2] }
    ]},
    { question: "How do you make major life decisions?", options: [
        { text: "Based on my head", score: [2, 3] },
        { text: "Based on my heart", score: [1, 6] },
        { text: "Based on others", score: [4, 5] }
    ]},
    { question: "How do you respond to criticism?", options: [
        { text: "Internalize it", score: [5] },
        { text: "Ignore it", score: [7, 3] },
        { text: "Act introspectively", score: [6] },
        { text: "Act defensive", score: [2, 1] }
    ]},
    { question: "How do you handle stress?", options: [
        { text: "Talking it out with friends or family", score: [6] },
        { text: "Express it creatively", score: [4, 5] },
        { text: "Scream", score: [1] },
        { text: "Take it out on someone else", score: [2] }
    ]},
    { question: "What is your ideal afternoon activity?", options: [
        { text: "Browsing open houses", score: [2, 1] },
        { text: "Practice an instrument", score: [7] },
        { text: "Do your makeup", score: [3] },
        { text: "Hangout with friends", score: [5, 4] },
        { text: "Chill at home", score: [6] }
    ]}
  ];