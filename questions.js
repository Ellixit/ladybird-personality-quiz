const characterMap = {
    1: "Alice",
    2: "Bob",
    3: "Carol",
    4: "Dave"
  };

const questions = [
    { question: "What's your favorite animal?", options: [
        { text: "Dog", score: [1, 4] },
        { text: "Cat", score: [2] },
        { text: "Cow", score: [3] },
        { text: "Horse", score: [1] }
    ]},
    { question: "What's your favorite season?", options: [
        { text: "Spring", score: [1, 4] },
        { text: "Summer", score: [2] },
        { text: "Fall", score: [3] },
        { text: "Winter", score: [1] }
    ]},
    // Add more questions here
];