const questions = [
    {
        question: "How do you typically handle conflict?",
        answers: [
            { text: "Try to find a peaceful solution through dialogue", points: { luke: 3, leia: 2, yoda: 3 } },
            { text: "Take decisive action and deal with consequences later", points: { han: 3, vader: 2, maul: 2 } },
            { text: "Analyze the situation and plan strategically", points: { thrawn: 3, obi: 2, padme: 2 } },
            { text: "Try to avoid it entirely if possible", points: { c3po: 3, r2d2: 2, chewbacca: 1 } }
        ]
    },
    {
        question: "What's your preferred role in a group?",
        answers: [
            { text: "The natural leader who takes charge", points: { leia: 3, vader: 2, thrawn: 2 } },
            { text: "The skilled problem solver", points: { luke: 2, obi: 2, r2d2: 3 } },
            { text: "The loyal supporter", points: { chewbacca: 3, c3po: 2, padme: 2 } },
            { text: "The independent operator", points: { han: 3, maul: 2, yoda: 1 } }
        ]
    },
    {
        question: "How do you view power?",
        answers: [
            { text: "As a means to help others", points: { luke: 3, leia: 3, padme: 2 } },
            { text: "As something to be earned through skill", points: { thrawn: 3, obi: 2, han: 2 } },
            { text: "As a tool for maintaining order", points: { vader: 3, c3po: 2, thrawn: 2 } },
            { text: "As a path to personal freedom", points: { maul: 3, han: 2, r2d2: 2 } }
        ]
    },
    {
        question: "What's your biggest strength?",
        answers: [
            { text: "Wisdom and patience", points: { yoda: 3, obi: 3, luke: 1 } },
            { text: "Determination and leadership", points: { leia: 3, vader: 2, padme: 2 } },
            { text: "Adaptability and quick thinking", points: { han: 3, r2d2: 2, maul: 2 } },
            { text: "Loyalty and dedication", points: { chewbacca: 3, c3po: 2, padme: 1 } }
        ]
    },
    {
        question: "How do you make important decisions?",
        answers: [
            { text: "Trust in my instincts", points: { luke: 3, han: 2, yoda: 2 } },
            { text: "Carefully analyze all options", points: { thrawn: 3, padme: 2, obi: 2 } },
            { text: "Consider the greater good", points: { leia: 3, obi: 2, luke: 2 } },
            { text: "Follow established protocols", points: { c3po: 3, vader: 2, thrawn: 1 } }
        ]
    },
    {
        question: "What motivates you most?",
        answers: [
            { text: "Protecting those I care about", points: { luke: 3, leia: 2, chewbacca: 3 } },
            { text: "Achieving my goals at any cost", points: { vader: 3, maul: 3, thrawn: 2 } },
            { text: "Learning and self-improvement", points: { yoda: 3, obi: 2, padme: 2 } },
            { text: "Adventure and excitement", points: { han: 3, r2d2: 2, luke: 1 } }
        ]
    },
    {
        question: "How do you view rules and tradition?",
        answers: [
            { text: "They provide necessary structure", points: { c3po: 3, padme: 2, thrawn: 2 } },
            { text: "They're flexible guidelines", points: { han: 3, luke: 2, r2d2: 2 } },
            { text: "They should serve the greater good", points: { leia: 3, obi: 2, yoda: 2 } },
            { text: "They limit potential", points: { maul: 3, vader: 2, han: 1 } }
        ]
    },
    {
        question: "What's your approach to enemies?",
        answers: [
            { text: "Try to understand and reconcile", points: { luke: 3, padme: 3, yoda: 2 } },
            { text: "Defeat them decisively", points: { vader: 3, maul: 3, thrawn: 2 } },
            { text: "Outsmart them", points: { han: 3, obi: 2, leia: 2 } },
            { text: "Avoid them entirely", points: { c3po: 3, r2d2: 2, chewbacca: 1 } }
        ]
    },
    {
        question: "How do you handle fear?",
        answers: [
            { text: "Face it head-on", points: { luke: 3, leia: 3, han: 2 } },
            { text: "Use it as motivation", points: { vader: 3, maul: 2, thrawn: 2 } },
            { text: "Analyze and overcome it", points: { yoda: 3, obi: 2, padme: 2 } },
            { text: "React instinctively", points: { chewbacca: 3, r2d2: 2, c3po: 1 } }
        ]
    },
    {
        question: "What's your ideal mission?",
        answers: [
            { text: "Helping those in need", points: { luke: 3, leia: 3, padme: 2 } },
            { text: "Strategic military operation", points: { thrawn: 3, vader: 2, han: 2 } },
            { text: "Diplomatic negotiation", points: { padme: 3, obi: 2, c3po: 2 } },
            { text: "Solo adventure", points: { han: 3, maul: 2, r2d2: 2 } }
        ]
    },
];

const characters = {
    luke: {
        name: "Luke Skywalker",
        description: "You are optimistic, brave, and driven by a strong moral compass. Like Luke, you believe in the good in others and are willing to sacrifice for what's right.",
        image: "img/luke.webp" // Replace with actual image path
    },
    leia: {
        name: "Princess Leia",
        description: "Natural leader with a fierce dedication to your cause. You're diplomatic but not afraid to fight when necessary.",
        image: "img/leia.jpeg" // Updated image path
      },
          
    han: {
        name: "Han Solo",
        description: "Charming and quick-witted, you may seem self-serving at first but have a heart of gold when it really matters.",
        image: "img/han solo.webp" // Replace with actual image path
    },
    vader: {
        name: "Darth Vader",
        description: "Powerful and determined, you let nothing stand in your way. You have strong convictions but might need to watch your aggressive tendencies.",
        image: "img/vader.webp" // Replace with actual image path
    },
    yoda: {
        name: "Yoda",
        description: "Wise and patient, you value knowledge and understanding. Your guidance helps others reach their potential.",
        image: "img/yoda.webp" // Replace with actual image path
    },
    obi: {
        name: "Obi-Wan Kenobi",
        description: "Balanced and wise, you're a natural mentor who follows tradition while adapting to new situations.",
        image: "img/obi.webp" // Replace with actual image path
    },
    padme: {
        name: "Padmé Amidala",
        description: "Diplomatic and compassionate, you fight for democracy and justice through peaceful means when possible.",
        image: "img/padme.png" // Replace with actual image path
    },
    maul: {
        name: "Darth Maul",
        description: "Intense and focused, you're driven by strong emotions and excel in confrontational situations.",
        image: "img/maul.webp" // Replace with actual image path
    },
    c3po: {
        name: "C-3PO",
        description: "Protocol is important to you. You're knowledgeable, cautious, and always trying to keep others out of trouble.",
        image: "img/c3po.jpeg" // Replace with actual image path
    },
    r2d2: {
        name: "R2-D2",
        description: "Resourceful and loyal, you solve problems creatively and aren't afraid to bend the rules when needed.",
        image: "img/r2d2.jpeg" // Replace with actual image path
    },
    chewbacca: {
        name: "Chewbacca",
        description: "Fiercely loyal and brave, you're a dedicated friend who stands by your allies no matter what.",
        image: "img/chewbacca.jpeg" // Replace with actual image path
    },
    thrawn: {
        name: "Grand Admiral Thrawn",
        description: "Strategic and calculating, you analyze situations deeply and plan several steps ahead.",
        image: "img/thrawn.jpeg" // Replace with actual image path
    }
};

let currentQuestion = 0;
let scores = {
    luke: 0, leia: 0, han: 0, vader: 0, yoda: 0, obi: 0,
    padme: 0, maul: 0, c3po: 0, r2d2: 0, chewbacca: 0, thrawn: 0
};

document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const restartBtn = document.getElementById('restart-btn');
    const shareBtn = document.getElementById('share-btn');
    
    startBtn.addEventListener('click', startQuiz);
    restartBtn.addEventListener('click', restartQuiz);
    shareBtn.addEventListener('click', shareResult);
    
    startBtn.addEventListener('mouseover', () => {
        startBtn.style.transform = 'scale(1.05)';
    });
    startBtn.addEventListener('mouseout', () => {
        startBtn.style.transform = 'scale(1)';
    });
});

function startQuiz() {
    document.getElementById('start-screen').classList.add('hide');
    document.getElementById('quiz-screen').classList.remove('hide');
    showQuestion();
}

function showQuestion() {
    const questionEl = document.getElementById('question');
    const answersEl = document.getElementById('answers');
    const progressEl = document.getElementById('progress');
    const questionNumberEl = document.getElementById('question-number');
    
    progressEl.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
    questionNumberEl.textContent = `Question ${currentQuestion + 1}/${questions.length}`;
    
    const question = questions[currentQuestion];
    questionEl.textContent = question.question;
    
    answersEl.innerHTML = '';
    
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer.text;
        button.style.animation = `fadeIn 0.5s ease ${index * 0.1}s`;
        button.addEventListener('click', () => selectAnswer(answer));
        answersEl.appendChild(button);
    });
}

function selectAnswer(answer) {
    Object.entries(answer.points).forEach(([character, points]) => {
        scores[character] += points;
    });
    
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(button => {
        if (button.textContent === answer.text) {
            button.style.backgroundColor = 'rgba(255, 232, 31, 0.2)';
        }
    });
    
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 500);
}

function getResult() {
    return Object.entries(scores).reduce((a, b) => a[1] > b[1] ? a : b)[0];
}

function showResult() {
    document.getElementById('quiz-screen').classList.add('hide');
    document.getElementById('result-screen').classList.remove('hide');
    
    const result = getResult();
    const character = characters[result];
    
    setTimeout(() => {
        document.getElementById('character-image').src = character.image;
        document.getElementById('character-result').textContent = character.name;
        document.getElementById('character-description').textContent = character.description;
    }, 500);
}

function restartQuiz() {
    Object.keys(scores).forEach(key => {
        scores[key] = 0;
    });
    

    currentQuestion = 0;
    
    document.getElementById('result-screen').classList.add('hide');
    document.getElementById('start-screen').classList.remove('hide');
}

function shareResult() {
    const result = getResult();
    const character = characters[result];
    
    const shareText = `I am ${character.name} in the Star Wars character quiz! Find out who you are!`;
    
    if (navigator.share) {
        navigator.share({
            title: 'My Star Wars Character Quiz Result',
            text: shareText,
            url: window.location.href
        }).catch(console.error);
    } else {
        navigator.clipboard.writeText(shareText)
            .then(() => {
                alert('Result copied to clipboard!');
            })
            .catch(console.error);
    }
}

const fadeIn = element => {
    element.style.opacity = '0';
    element.style.display = 'block';
    
    let opacity = 0;
    const timer = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = opacity;
        opacity += 0.1;
    }, 50);
};

const fadeOut = element => {
    let opacity = 1;
    const timer = setInterval(() => {
        if (opacity <= 0) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = opacity;
        opacity -= 0.1;
    }, 50);
};