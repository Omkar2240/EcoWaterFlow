//  Quiz Data

const quizData = [
  // General Knowledge About Water Scarcity
  {
    question: "What is the main cause of water scarcity globally?",
    options: [
      "Overpopulation",
      "Climate change",
      "Poor water management",
      "All of the above",
    ],
    correct: 3,
  },
  {
    question: "How much of Earth's surface is covered by water?",
    options: ["50%", "71%", "80%", "65%"],
    correct: 1,
  },
  {
    question: "What percentage of the Earth's water is usable freshwater?",
    options: ["0.5%", "10%", "25%", "50%"],
    correct: 0,
  },
  {
    question: "What is the primary source of freshwater for human consumption?",
    options: ["Oceans", "Rivers and lakes", "Groundwater", "Rainfall"],
    correct: 1,
  },
  {
    question: "Which continent is most affected by water scarcity?",
    options: ["Africa", "Asia", "Europe", "South America"],
    correct: 0,
  },

  // Causes of Water Scarcity
  {
    question: "Which human activity contributes most to water scarcity?",
    options: ["Agriculture", "Industrial use", "Urbanization", "Recreation"],
    correct: 0,
  },
  {
    question: "What is a major environmental cause of water scarcity?",
    options: ["Deforestation", "Ocean currents", "Volcanic eruptions", "Earthquakes"],
    correct: 0,
  },
  {
    question: "What happens during groundwater over-extraction?",
    options: [
      "Water table rises",
      "Water table falls",
      "Water quality improves",
      "Saltwater intrusion decreases",
    ],
    correct: 1,
  },
  {
    question: "What is a direct effect of climate change on water scarcity?",
    options: [
      "Increased rainfall everywhere",
      "Uneven distribution of rainfall",
      "Global cooling",
      "Improved groundwater levels",
    ],
    correct: 1,
  },
  {
    question: "How does urbanization contribute to water scarcity?",
    options: [
      "Increased water pollution",
      "Increased demand for water",
      "Reduced groundwater recharge",
      "All of the above",
    ],
    correct: 3,
  },

  // Impacts of Water Scarcity
  {
    question: "What is a major impact of water scarcity on agriculture?",
    options: [
      "Increased crop yields",
      "Reduced crop yields",
      "Improved soil quality",
      "None of the above",
    ],
    correct: 1,
  },
  {
    question: "Which is a health impact of water scarcity?",
    options: [
      "Increased access to clean water",
      "Spread of waterborne diseases",
      "Improved sanitation",
      "Reduced malnutrition",
    ],
    correct: 1,
  },
  {
    question: "How does water scarcity affect biodiversity?",
    options: [
      "Increased species migration",
      "Loss of habitats",
      "Improved ecosystem balance",
      "All of the above",
    ],
    correct: 1,
  },
  {
    question: "What is a social impact of water scarcity?",
    options: [
      "Improved social harmony",
      "Increased migration and conflicts",
      "Lower living costs",
      "None of the above",
    ],
    correct: 1,
  },
  {
    question: "What is an economic consequence of water scarcity?",
    options: [
      "Improved industrial production",
      "Higher water treatment costs",
      "Reduced investment in technology",
      "Lower food prices",
    ],
    correct: 1,
  },

  // Minimizing Techniques in Agriculture
  {
    question: "Which irrigation method is the most water-efficient?",
    options: ["Drip irrigation", "Flood irrigation", "Furrow irrigation", "Sprinkler irrigation"],
    correct: 0,
  },
  {
    question: "What is mulching?",
    options: [
      "Covering soil with organic or inorganic materials to retain moisture",
      "Adding water to soil directly",
      "Using chemicals to reduce evaporation",
      "Burning crop residues",
    ],
    correct: 0,
  },
  {
    question: "What is a key advantage of rainwater harvesting in agriculture?",
    options: [
      "Increases groundwater salinity",
      "Replenishes local water resources",
      "Decreases water availability",
      "Requires no initial investment",
    ],
    correct: 1,
  },
  {
    question: "Which crop requires the least water to grow?",
    options: ["Rice", "Millets", "Sugarcane", "Bananas"],
    correct: 1,
  },
  {
    question: "What is contour farming?",
    options: [
      "Growing crops in straight rows",
      "Plowing along the contours of a slope to reduce runoff",
      "Using terraces for planting",
      "Irrigating fields with sprinklers",
    ],
    correct: 1,
  },

  // Household Water Conservation
  {
    question: "What is a water-saving practice for households?",
    options: [
      "Fixing leaky faucets",
      "Using a hose for cleaning",
      "Washing clothes daily in small loads",
      "Running water while brushing teeth",
    ],
    correct: 0,
  },
  {
    question: "What is greywater recycling?",
    options: [
      "Reusing water from sinks, baths, and washing machines",
      "Purifying industrial wastewater",
      "Disposing untreated sewage",
      "Filtering rainwater",
    ],
    correct: 0,
  },
  {
    question: "Which appliance uses the most water in households?",
    options: [
      "Washing machines",
      "Dishwashers",
      "Toilets",
      "Showers",
    ],
    correct: 2,
  },
  {
    question: "What type of plants should be grown in water-scarce areas?",
    options: [
      "Thirsty plants",
      "Drought-resistant plants",
      "Tropical plants",
      "Wetland plants",
    ],
    correct: 1,
  },
  {
    question: "What is a low-cost technique to save water in households?",
    options: [
      "Install water-efficient appliances",
      "Rainwater harvesting",
      "Using bucket baths instead of showers",
      "All of the above",
    ],
    correct: 3,
  },

  // Industrial Water Conservation
  {
    question: "What is a water-saving practice in industries?",
    options: [
      "Recycling cooling water",
      "Discharging untreated water",
      "Using freshwater for all processes",
      "Avoiding water treatment plants",
    ],
    correct: 0,
  },
  {
    question: "What is the primary purpose of effluent treatment plants?",
    options: [
      "Produce energy",
      "Remove pollutants from industrial wastewater",
      "Extract raw materials from water",
      "Increase water salinity",
    ],
    correct: 1,
  },
  {
    question: "What is zero liquid discharge (ZLD)?",
    options: [
      "A technique to minimize water wastage by fully recycling wastewater",
      "A method to stop water usage in industries",
      "A strategy for desalination",
      "A way to prevent rainwater harvesting",
    ],
    correct: 0,
  },
  {
    question: "Which industry uses the highest amount of water?",
    options: ["Textile", "Chemical", "Agriculture", "Paper and pulp"],
    correct: 2,
  },
  {
    question: "What is the best method to reduce water wastage in industries?",
    options: [
      "Recycle and reuse water",
      "Increase production",
      "Dump untreated water",
      "Depend on groundwater only",
    ],
    correct: 0,
  },
  {
    question: "What is the color of clean water?",
    options: ["Blue", "Green", "Transparent", "Yellow"],
    correct: 2,
  },
  {
    question: "Which of these is a source of freshwater?",
    options: ["Sea", "River", "Ocean", "Lake"],
    correct: 1,
  },
  {
    question: "What should you do when you see a leaking tap?",
    options: [
      "Leave it as it is",
      "Fix it or call someone to fix it",
      "Turn it on fully",
      "Ignore it",
    ],
    correct: 1,
  },
  {
    question: "What is rainwater harvesting?",
    options: [
      "Collecting and storing rainwater for later use",
      "Throwing water in rivers",
      "Burning water",
      "Wasting rainwater",
    ],
    correct: 0,
  },
  {
    question: "What do plants need to grow besides soil and sunlight?",
    options: ["Music", "Water", "Rocks", "Wind"],
    correct: 1,
  },
  {
    question: "How can you save water while brushing your teeth?",
    options: [
      "Keep the tap running",
      "Turn off the tap while brushing",
      "Brush with lots of water",
      "Use a hosepipe",
    ],
    correct: 1,
  },
  {
    question: "What happens if we waste too much water?",
    options: [
      "There will always be more",
      "Water will become scarce",
      "It will rain more",
      "Nothing will happen",
    ],
    correct: 1,
  },
  {
    question: "Which of these is the best place to plant trees to save water?",
    options: ["Near water bodies", "Deserts", "Mountains", "In houses"],
    correct: 0,
  },
  {
    question: "How does planting trees help save water?",
    options: [
      "Trees do not help",
      "They improve groundwater recharge",
      "They drink all the water",
      "They block water from flowing",
    ],
    correct: 1,
  },
  {
    question: "Why is water important for humans?",
    options: [
      "It keeps us alive",
      "It is only for cleaning",
      "It is not important",
      "We can live without it",
    ],
    correct: 0,
  },

  // More Advanced Questions on Techniques
  {
    question: "What is desalination?",
    options: [
      "A process of removing salt from seawater",
      "Adding salt to water",
      "Storing freshwater",
      "Boiling water to remove impurities",
    ],
    correct: 0,
  },
  {
    question: "What is the purpose of a check dam?",
    options: [
      "To store rainwater",
      "To block rivers permanently",
      "To reduce floods and recharge groundwater",
      "To create lakes",
    ],
    correct: 2,
  },
  {
    question: "What is xeriscaping?",
    options: [
      "Growing plants that require less water",
      "Planting underwater",
      "Flooding land for farming",
      "Cutting all plants to save water",
    ],
    correct: 0,
  },
  {
    question: "What is the role of wetlands in water conservation?",
    options: [
      "Store and purify water",
      "Increase evaporation",
      "Reduce biodiversity",
      "Have no impact",
    ],
    correct: 0,
  },
  {
    question: "What is the purpose of terracing in agriculture?",
    options: [
      "To decorate fields",
      "To reduce soil erosion and conserve water",
      "To increase water runoff",
      "To block water flow",
    ],
    correct: 1,
  },
  {
    question: "What is the primary advantage of using greywater recycling in households?",
    options: [
      "Increases water consumption",
      "Decreases water wastage",
      "Uses freshwater instead",
      "Reduces energy use",
    ],
    correct: 1,
  },
  {
    question: "How do water-saving showerheads work?",
    options: [
      "Spray less water at high pressure",
      "Spray more water at low pressure",
      "Reuse water directly",
      "Do not use water",
    ],
    correct: 0,
  },
  {
    question: "Which farming practice helps conserve water during irrigation?",
    options: [
      "Flood irrigation",
      "Using canals",
      "Drip irrigation",
      "Sprinklers",
    ],
    correct: 2,
  },
  {
    question: "What is a significant challenge of desalination plants?",
    options: [
      "Low energy consumption",
      "Expensive and energy-intensive",
      "No impact on the environment",
      "Easily accessible technology",
    ],
    correct: 1,
  },
  {
    question: "What is the primary goal of using aquaponics in agriculture?",
    options: [
      "Grow crops and raise fish together",
      "Use only groundwater",
      "Increase water use",
      "Grow plants in soil only",
    ],
    correct: 0,
  },
  {
      question: "What is the primary goal of using aquaponics in agriculture?",
      options: [
      "Grow crops and raise fish together",
      "Use only groundwater",
      "Increase water use",
      "Grow plants in soil only",
      ],
      correct: 0,
  },
  {
      question: "Which regions of the world are most affected by water scarcity?",
      options: [
      "Arid and semi-arid regions",
      "Rainforest regions",
      "Coastal regions",
      "Polar regions",
      ],
      correct: 0,
  },
  {
      question: "What is a major cause of water scarcity?",
      options: [
      "Deforestation",
      "Excessive water pollution",
      "Increased groundwater recharge",
      "High rainfall levels",
      ],
      correct: 1,
  },
  {
      question: "Which of these techniques can help conserve water in agriculture?",
      options: [
      "Drip irrigation",
      "Flood irrigation",
      "Open canals",
      "Wasting runoff water",
      ],
      correct: 0,
  },
  {
      question: "How can water scarcity be measured?",
      options: [
      "By calculating per capita water availability",
      "Counting the number of wells",
      "Measuring rainfall",
      "Measuring the depth of rivers",
      ],
      correct: 0,
  },
  {
      question: "What is one current challenge in solving water scarcity?",
      options: [
      "Lack of technology",
      "Overpopulation in water-scarce regions",
      "Too much rainfall",
      "Not enough rivers",
      ],
      correct: 1,
  },
  {
      question: "What is the main advantage of using rainwater harvesting?",
      options: [
      "Increases surface water runoff",
      "Reduces dependency on groundwater",
      "Eliminates the need for irrigation",
      "Prevents soil erosion",
      ],
      correct: 1,
  },
  {
      question: "What is desalination?",
      options: [
      "A method to increase groundwater levels",
      "A process to remove salt from seawater",
      "A technique for drip irrigation",
      "A way to purify freshwater",
      ],
      correct: 1,
  },
  {
      question: "Which crop requires the most water to grow?",
      options: [
      "Rice",
      "Wheat",
      "Maize",
      "Soybeans",
      ],
      correct: 0,
  },
  {
      question: "What is one impact of water scarcity on the environment?",
      options: [
      "Increased biodiversity",
      "Degradation of wetlands",
      "Improved soil fertility",
      "More freshwater lakes",
      ],
      correct: 1,
  },
  {
      question: "Which of these techniques can help reduce water loss in irrigation?",
      options: [
      "Drip irrigation",
      "Flood irrigation",
      "Sprinkler irrigation",
      "Irrigation by canals",
      ],
      correct: 0,
  },
  {
      question: "Which country is the largest consumer of freshwater?",
      options: [
      "India",
      "China",
      "USA",
      "Brazil",
      ],
      correct: 2,
  },
  {
      question: "What is the term for the amount of water needed to produce a product or service?",
      options: [
      "Water footprint",
      "Water yield",
      "Water cost",
      "Water demand",
      ],
      correct: 0,
  },
  {
      question: "What is the main purpose of water recycling?",
      options: [
      "Increase water availability",
      "Increase water salinity",
      "Decrease groundwater levels",
      "Decrease water quality",
      ],
      correct: 0,
  },
  {
      question: "Which technology is often used to reduce water consumption in agriculture?",
      options: [
      "Drip irrigation",
      "Flood irrigation",
      "Surface irrigation",
      "Sprinkler irrigation",
      ],
      correct: 0,
  },
  {
      question: "Which method is used to purify seawater into freshwater?",
      options: [
      "Filtration",
      "Desalination",
      "Boiling",
      "Condensation",
      ],
      correct: 1,
  },
  {
      question: "Which factor contributes most to water scarcity in urban areas?",
      options: [
      "High population growth",
      "Lack of rainfall",
      "Flooding",
      "Water pollution",
      ],
      correct: 0,
  },
  {
      question: "What is the primary source of water for irrigation in agriculture?",
      options: [
      "Rivers and lakes",
      "Rainwater",
      "Groundwater",
      "Desalinated water",
      ],
      correct: 0,
  },
  {
      question: "How does deforestation contribute to water scarcity?",
      options: [
      "By increasing rainfall",
      "By decreasing evaporation rates",
      "By reducing the ability of soil to retain water",
      "By increasing groundwater recharge",
      ],
      correct: 2,
  },
  {
      question: "What can be done to prevent the depletion of groundwater supplies?",
      options: [
      "Increase groundwater extraction",
      "Reduce water consumption",
      "Increase surface water storage",
      "Degrade wetland areas",
      ],
      correct: 1,
  },
  {
      question: "Which of these is an effect of over-extraction of groundwater?",
      options: [
      "Waterlogging",
      "Aquifer depletion",
      "Increased rainfall",
      "Groundwater recharge",
      ],
      correct: 1,
  },
  {
      question: "Which region has the highest percentage of freshwater resources?",
      options: [
      "Africa",
      "Asia",
      "South America",
      "North America",
      ],
      correct: 2,
  },
  {
      question: "What is one of the primary goals of watershed management?",
      options: [
      "Prevent soil erosion",
      "Increase the flow of water",
      "Decrease water availability",
      "Prevent natural flooding",
      ],
      correct: 0,
  },
  {
      question: "Which country has the highest per capita water consumption?",
      options: [
      "USA",
      "Australia",
      "China",
      "India",
      ],
      correct: 0,
  },
  {
      question: "Which of these is the largest consumer of water globally?",
      options: [
      "Agriculture",
      "Industrial processes",
      "Domestic use",
      "Hydroelectric power generation",
      ],
      correct: 0,
  },
  {
      question: "Which of these materials uses the most water in its production process?",
      options: [
      "Cotton",
      "Wheat",
      "Rice",
      "Corn",
      ],
      correct: 0,
  },
  {
      question: "Which method is commonly used to monitor water scarcity?",
      options: [
      "Water footprint calculation",
      "Population growth tracking",
      "Weather forecasting",
      "Air quality monitoring",
      ],
      correct: 0,
  },
  {
      question: "Which crop is most efficient in water use?",
      options: [
      "Rice",
      "Wheat",
      "Millets",
      "Sugarcane",
      ],
      correct: 2,
  },
  {
      question: "How is water scarcity typically defined?",
      options: [
      "Lack of sufficient clean water resources to meet demand",
      "The presence of water pollution",
      "Lack of access to sanitation",
      "Over-extraction of water resources",
      ],
      correct: 0,
  },
  {
      question: "What is the water usage efficiency ratio in agriculture?",
      options: [
      "Water use to crop yield ratio",
      "Water usage per person",
      "Amount of water used for irrigation",
      "Total water usage per country",
      ],
      correct: 0,
  },
  {
      question: "Which country has made the most significant advancements in water conservation techniques?",
      options: [
      "Israel",
      "India",
      "USA",
      "Australia",
      ],
      correct: 0,
  },
  {
      question: "What is the term for the process of capturing and storing rainwater?",
      options: [
      "Rainwater harvesting",
      "Water desalination",
      "Water recycling",
      "Groundwater recharge",
      ],
      correct: 0,
  },
  {
      question: "What is the major environmental impact of water scarcity?",
      options: [
      "Loss of biodiversity",
      "Decrease in food production",
      "Increase in soil fertility",
      "More aquatic ecosystems",
      ],
      correct: 0,
  },
  {
      question: "What is one technique used in reducing water waste during agricultural irrigation?",
      options: [
      "Flood irrigation",
      "Drip irrigation",
      "Surface irrigation",
      "Canal irrigation",
      ],
      correct: 1,
  },
  {
      question: "Which of these strategies helps conserve water in urban areas?",
      options: [
      "Reducing industrial water use",
      "Rainwater harvesting",
      "Increasing water extraction from rivers",
      "Over-extraction from groundwater sources",
      ],
      correct: 1,
  },
];



  // Function to shuffle and select 10 random questions from the quizData array
const getRandomQuestions = (quizData, count = 10) => {
  // Shuffle the array
  const shuffled = quizData.sort(() => Math.random() - 0.5);
  // Return the first `count` questions
  return shuffled.slice(0, count);
};


//? Step 2: JavaScript Initialization

const answersElem = document.querySelectorAll(".answer");
const [questionElem, option_1, option_2, option_3, option_4] =
  document.querySelectorAll(
    "#question, #option_1, #option_2, #option_3, #option_4"
  );
const submitBtn = document.getElementById("submit");

// Get 10 random questions from the original quiz data
const randomQuestions = getRandomQuestions(quizData);

let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
  const { question, options } = randomQuestions[currentQuiz];

  questionElem.innerText = `${currentQuiz + 1}: ${question}`;
  //  To get all the options
  options.forEach((curOption, index) => {
    return (window[`option_${index + 1}`].innerText = curOption);
  });
};

loadQuiz();

//? Step 4: Get Selected Answer Function on Button click

const getSelected = () => {
  const answerElement = Array.from(answersElem);
  return answerElement.findIndex((curOption) => curOption.checked);
};

const deselectAnswers = () => {
  answersElem.forEach((curElem) => (curElem.checked = false));
};

submitBtn.addEventListener("click", () => {
  const selectedOptionIndex = getSelected();

  //   Check if the answer is correct
  if (selectedOptionIndex === randomQuestions[currentQuiz].correct) {
    score += 1;
  }

  // Increment currentQuiz to the next question
  currentQuiz++;

  if (currentQuiz < randomQuestions.length) {
    deselectAnswers();
    loadQuiz();
  } else {
    quiz.innerHTML = `
      <div class="result">
        <h2>🏆 Your Score: ${score}/${randomQuestions.length} Correct Answers</h2>
        <p>Congratulations on completing the quiz! 🎉</p>
        <button class="reload-button" onclick="redirectToCertificate()">Download Certificate 🔄</button>
      </div>
    `;
    document.querySelector(".quiz-section").classList.add("quiz-result");
  }
});
  // Redirect to certificate page
  function redirectToCertificate() {
    window.location.href = '/certificate';
}
// Certificate generation function
function generateCertificate() {
  const canvas = document.getElementById('certificateCanvas');
  const ctx = canvas.getContext('2d');
  const bgImage = new Image();

  // Background image for the certificate
  bgImage.src = 'https://static.vecteezy.com/system/resources/previews/019/050/104/non_2x/blank-white-template-background-with-flat-design-suitable-for-certificate-background-vector.jpg';
  
  bgImage.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);

      // Add Certificate Title
      ctx.font = "bold 40px Georgia";
      ctx.fillStyle = "#2c3e50";
      ctx.textAlign = "center";
      ctx.fillText("Certificate of Achievement", canvas.width / 2, 100);

      // Add Score Details
      ctx.font = "20px Arial";
      ctx.fillStyle = "#555";
      ctx.fillText(`Awarded for achieving a score of ${score}/${randomQuestions.length}`, canvas.width / 2, 180);

      // Add Personalization
      ctx.font = "30px Arial";
      ctx.fillStyle = "#333";
      ctx.fillText("Quiz Participant", canvas.width / 2, 260);

      // Footer
      ctx.font = "18px Arial";
      ctx.fillText("Presented by Your Quiz App", canvas.width / 2, canvas.height - 100);

      // Date
      ctx.font = "16px Arial";
      ctx.fillText(`Date: ${new Date().toLocaleDateString()}`, canvas.width / 2, canvas.height - 50);

      // Trigger download
      downloadCertificate(canvas);
  };
}

// Download the certificate
function downloadCertificate(canvas) {
  const link = document.createElement('a');
  link.download = 'certificate.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}

// Creating Dynamic Question Font Size
const questionElement = document.getElementById("question");
const maxLength1 = 50; // Threshold for first adjustment
const maxLength2 = 72; // Threshold for second adjustment

// Get the current font size
let currentFontSize = parseFloat(window.getComputedStyle(questionElement).fontSize);

// Check the length of the question and adjust font size
if (questionElement.textContent.length > maxLength1) {
  currentFontSize -= 4; // Decrease font size by 4px
  questionElement.style.fontSize = `${currentFontSize}px`;
}

if (questionElement.textContent.length > maxLength2) {
  currentFontSize -= 4; // Further decrease font size by 4px
  questionElement.style.fontSize = `${currentFontSize}px`;

  // Add class to .quiz-section
  document.querySelector(".quiz-section").classList.add("quiz-section-max");

  // Add class to all <li> elements
  document.querySelectorAll("#quiz ul li").forEach((li) => {
    li.classList.add("li-height");
  });
}


// // Creating Dynamic radio Buttons
// const list = document.querySelectorAll("li");
// const labels = document.querySelectorAll("label");

// labels.forEach((label, index) => {
//     if (label.textContent.length > 30) {
//         list.classList.add("large");
//     }
// });





