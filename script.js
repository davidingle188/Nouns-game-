const nouns = [
  { word: "Haus", article: "das", translation: "house" },
  { word: "Auto", article: "das", translation: "car" },
  { word: "Buch", article: "das", translation: "book" },
  { word: "Tür", article: "die", translation: "door" },
  { word: "Fenster", article: "das", translation: "window" },
  { word: "Tisch", article: "der", translation: "table" },
  { word: "Stuhl", article: "der", translation: "chair" },
  { word: "Bett", article: "das", translation: "bed" },
  { word: "Lampe", article: "die", translation: "lamp" },
  { word: "Handy", article: "das", translation: "mobile phone" },
  { word: "Apfel", article: "der", translation: "apple" },
  { word: "Banane", article: "die", translation: "banana" },
  { word: "Kaffee", article: "der", translation: "coffee" },
  { word: "Milch", article: "die", translation: "milk" },
  { word: "Wasser", article: "das", translation: "water" },
  { word: "Blume", article: "die", translation: "flower" },
  { word: "Baum", article: "der", translation: "tree" },
  { word: "Hund", article: "der", translation: "dog" },
  { word: "Katze", article: "die", translation: "cat" },
  { word: "Vogel", article: "der", translation: "bird" },
  { word: "Mutter", article: "die", translation: "mother" },
  { word: "Vater", article: "der", translation: "father" },
  { word: "Schwester", article: "die", translation: "sister" },
  { word: "Bruder", article: "der", translation: "brother" },
  { word: "Kind", article: "das", translation: "child" },
  { word: "Tante", article: "die", translation: "aunt" },
  { word: "Onkel", article: "der", translation: "uncle" },
  { word: "Großmutter", article: "die", translation: "grandmother" },
  { word: "Großvater", article: "der", translation: "grandfather" },
  { word: "Freund", article: "der", translation: "friend (male)" },
  { word: "Freundin", article: "die", translation: "friend (female)" },
  { word: "Frau", article: "die", translation: "woman; wife" },
  { word: "Mann", article: "der", translation: "man" },
  { word: "Kollege", article: "der", translation: "colleague (male)" },
  { word: "Kollegin", article: "die", translation: "colleague (female)" },
  { word: "Pilot", article: "der", translation: "pilot (male)" },
  { word: "Lehrer", article: "der", translation: "teacher (male)" },
  { word: "Lehrerin", article: "die", translation: "teacher (female)" },
  { word: "Arzt", article: "der", translation: "doctor (male)" },
  { word: "Ärztin", article: "die", translation: "doctor (female)" },
  { word: "Zahnarzt", article: "der", translation: "dentist (male)" },
  { word: "Zahnarztin", article: "die", translation: "dentist (female)" },
  { word: "Mechaniker", article: "der", translation: "mechanic (male)" },
  { word: "Mechanikerin", article: "die", translation: "mechanic (female)" },
  { word: "Koch", article: "der", translation: "cook (male)" },
  { word: "Köchin", article: "die", translation: "cook (female)" },
  { word: "Bäcker", article: "der", translation: "baker (male)" },
  { word: "Bäckerin", article: "die", translation: "baker (female)" },
  { word: "Schule", article: "die", translation: "school" },
  { word: "Universität", article: "die", translation: "university" },
  { word: "Student", article: "der", translation: "student (male)" },
  { word: "Studentin", article: "die", translation: "student (female)" },
  { word: "Foto", article: "das", translation: "photo" },
  { word: "Hand", article: "die", translation: "hand" },
  { word: "Schuh", article: "der", translation: "shoe" },
  { word: "Hemd", article: "das", translation: "shirt" },
  { word: "Jacke", article: "die", translation: "jacket" },
  { word: "Hose", article: "die", translation: "pants" },
  { word: "Rock", article: "der", translation: "skirt" },
  { word: "Mantel", article: "der", translation: "coat" },
  { word: "Brille", article: "die", translation: "glasses" },
  { word: "Schlüssel", article: "der", translation: "key" },
  { word: "Geld", article: "das", translation: "money" },
  { word: "Uhr", article: "die", translation: "clock; watch" },
  { word: "Zeitung", article: "die", translation: "newspaper" },
  { word: "Radio", article: "das", translation: "radio" },
  { word: "Computer", article: "der", translation: "computer" },
  { word: "Bild", article: "das", translation: "picture" },
  { word: "Küche", article: "die", translation: "kitchen" },
  { word: "Bad", article: "das", translation: "bathroom" },
  { word: "Sofa", article: "das", translation: "sofa" },
  { word: "Regal", article: "das", translation: "shelf" },
  { word: "Schrank", article: "der", translation: "cupboard; closet" },
  { word: "Zimmer", article: "das", translation: "room" },
  { word: "Garten", article: "der", translation: "garden" },
  { word: "Straße", article: "die", translation: "street" },
  { word: "Platz", article: "der", translation: "square; place" },
  { word: "Stadt", article: "die", translation: "city" },
  { word: "Land", article: "das", translation: "country; land" },
  { word: "See", article: "der", translation: "lake" },
  { word: "Fluss", article: "der", translation: "river" },
  { word: "Berg", article: "der", translation: "mountain" },
  { word: "Wald", article: "der", translation: "forest" },
  { word: "Meer", article: "das", translation: "sea" },
  { word: "Insel", article: "die", translation: "island" },
  { word: "Klasse", article: "die", translation: "class" },
  { word: "Lehrerzimmer", article: "das", translation: "staff room" },
  { word: "Schüler", article: "der", translation: "student (male, school)" },
  {
    word: "Schülerin",
    article: "die",
    translation: "student (female, school)",
  },
  { word: "Tasche", article: "die", translation: "bag" },
  { word: "Brötchen", article: "das", translation: "bread roll" },
  { word: "Brot", article: "das", translation: "bread" },
  { word: "Käse", article: "der", translation: "cheese" },
  { word: "Wurst", article: "die", translation: "sausage" },
  { word: "Fleisch", article: "das", translation: "meat" },
  { word: "Essen", article: "das", translation: "food; meal" },
  { word: "Getränk", article: "das", translation: "drink" },
  { word: "Zucker", article: "der", translation: "sugar" },
  { word: "Salz", article: "das", translation: "salt" },
  { word: "Pfeffer", article: "der", translation: "pepper" },
  { word: "Teller", article: "der", translation: "plate" },
  { word: "Glas", article: "das", translation: "glass" },
  { word: "Becher", article: "der", translation: "cup" },
  { word: "Messer", article: "das", translation: "knife" },
  { word: "Gabel", article: "die", translation: "fork" },
  { word: "Löffel", article: "der", translation: "spoon" },
  { word: "Schüssel", article: "die", translation: "bowl" },
  { word: "Topf", article: "der", translation: "pot" },
  { word: "Pfanne", article: "die", translation: "pan" },
  { word: "Herd", article: "der", translation: "stove" },
  { word: "Ofen", article: "der", translation: "oven" },
  { word: "Kühlschrank", article: "der", translation: "refrigerator" },
  { word: "Gefrierfach", article: "das", translation: "freezer compartment" },
  { word: "Müll", article: "der", translation: "trash" },
  { word: "Abfall", article: "der", translation: "waste" },
  { word: "Rezept", article: "das", translation: "recipe" },
  { word: "Geschichte", article: "die", translation: "story; history" },
  { word: "Frage", article: "die", translation: "question" },
  { word: "Antwort", article: "die", translation: "answer" },
  { word: "Nachricht", article: "die", translation: "message; news" },
  { word: "Telefon", article: "das", translation: "telephone" },
  { word: "Nachbar", article: "der", translation: "neighbor (male)" },
  { word: "Nachbarin", article: "die", translation: "neighbor (female)" },
  { word: "Polizist", article: "der", translation: "policeman" },
  { word: "Polizistin", article: "die", translation: "policewoman" },
  { word: "Feuerwehr", article: "die", translation: "fire department" },
  { word: "Krankenhaus", article: "das", translation: "hospital" },
  { word: "Arztpraxis", article: "die", translation: "doctor's office" },
  { word: "Apotheke", article: "die", translation: "pharmacy" },
  { word: "Laden", article: "der", translation: "shop" },
  { word: "Supermarkt", article: "der", translation: "supermarket" },
  { word: "Markt", article: "der", translation: "market" },
  { word: "Bäckerei", article: "die", translation: "bakery" },
  { word: "Metzgerei", article: "die", translation: "butcher's shop" },
  { word: "Restaurant", article: "das", translation: "restaurant" },
  { word: "Café", article: "das", translation: "cafe" },
  { word: "Bar", article: "die", translation: "bar" },
  { word: "Park", article: "der", translation: "park" },
  { word: "Spielplatz", article: "der", translation: "playground" },
  { word: "Schwimmbad", article: "das", translation: "swimming pool" },
  { word: "Theater", article: "das", translation: "theater" },
  { word: "Kino", article: "das", translation: "cinema" },
  { word: "Museum", article: "das", translation: "museum" },
  { word: "Bibliothek", article: "die", translation: "library" },
  { word: "Bahnhof", article: "der", translation: "train station" },
  { word: "Flughafen", article: "der", translation: "airport" },
  { word: "Bus", article: "der", translation: "bus" },
  { word: "Straßenbahn", article: "die", translation: "tram" },
  { word: "Taxi", article: "das", translation: "taxi" },
  { word: "Fahrrad", article: "das", translation: "bicycle" },
  { word: "Motorrad", article: "das", translation: "motorcycle" },
  { word: "Schiff", article: "das", translation: "ship" },
  { word: "Zug", article: "der", translation: "train" },
  { word: "Fahrschein", article: "der", translation: "ticket" },
  { word: "Reise", article: "die", translation: "trip" },
  { word: "Hotel", article: "das", translation: "hotel" },
  { word: "Schlüssel", article: "der", translation: "key" },
  {
    word: "Reiseführer",
    article: "der",
    translation: "tour guide; travel guide",
  },
  { word: "Gepäck", article: "das", translation: "luggage" },
  { word: "Pass", article: "der", translation: "passport" },
  { word: "Visum", article: "das", translation: "visa" },
  { word: "Verkehr", article: "der", translation: "traffic" },
  { word: "Post", article: "die", translation: "post office; mail" },
  { word: "Brief", article: "der", translation: "letter" },
  { word: "Paket", article: "das", translation: "package" },
  { word: "Postkarte", article: "die", translation: "postcard" },
  { word: "Briefmarke", article: "die", translation: "postage stamp" },
  { word: "Internet", article: "das", translation: "internet" },
  { word: "Laptop", article: "der", translation: "laptop" },
  { word: "Drucker", article: "der", translation: "printer" },
  { word: "Kamera", article: "die", translation: "camera" },
  { word: "Fernseher", article: "der", translation: "television" },
  { word: "Musik", article: "die", translation: "music" },
  { word: "Film", article: "der", translation: "film" },
  { word: "Spiel", article: "das", translation: "game" },
  { word: "Sport", article: "der", translation: "sport" },
  { word: "Fußball", article: "der", translation: "football (soccer)" },
  { word: "Tennis", article: "das", translation: "tennis" },
  { word: "Schwimmen", article: "das", translation: "swimming" },
  { word: "Radfahren", article: "das", translation: "cycling" },
];

const nounDisplay = document.getElementById("noun-display");
const userInput = document.getElementById("user-input");
const submitBtn = document.getElementById("submit-btn");
const feedback = document.getElementById("feedback");
const speakBtn = document.getElementById("speak-btn");

let currentNoun = {};
let currentIndex = 0;

const startPage = document.getElementById("start-page");
const quizContainer = document.getElementById("quiz-container");
const startNounQuizBtn = document.getElementById("start-noun-quiz-btn");
const startPrepositionGameBtn = document.getElementById(
  "start-preposition-game-btn"
);

// Initially hide quiz container (if not done in HTML/CSS)
quizContainer.style.display = "none";
startPage.style.display = "block";

startNounQuizBtn.addEventListener("click", () => {
  startPage.style.display = "none";
  quizContainer.style.display = "block";
  getNextNoun(); // start noun quiz
});

startPrepositionGameBtn.addEventListener("click", () => {
  // Open the German Preposition Game in a new tab
  window.open("https://davidingle188.github.io/german-prepositions-quiz/");
});

function getNextNoun() {
  currentNoun = nouns[currentIndex];
  nounDisplay.textContent = `${currentNoun.word} \\ ${currentNoun.translation}`;
  userInput.value = "";
  feedback.textContent = "";
  feedback.className = "";
  speakNoun(currentNoun.word);

  currentIndex = (currentIndex + 1) % nouns.length;
}

function speakNoun(noun) {
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(noun);
    utterance.lang = "de-DE"; // German language
    window.speechSynthesis.speak(utterance);
  } else {
    console.log("Speech Synthesis not supported in this browser.");
  }
}

function checkAnswer() {
  const userAnswer = userInput.value.trim().toLowerCase();
  const correctAnswer = currentNoun.article.toLowerCase();

  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! 🎉";
    feedback.className = "correct";
  } else {
    feedback.textContent = `Wrong! Correct answer: ${correctAnswer} ${currentNoun.word}`;
    feedback.className = "incorrect";
  }

  setTimeout(() => {
    feedback.textContent = "";
    feedback.className = "";
    getNextNoun();
  }, 2000);
}

// Event listeners
submitBtn.addEventListener("click", checkAnswer);

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkAnswer();
  }
});

speakBtn.addEventListener("click", () => {
  speakNoun(currentNoun.word);
  speakBtn.classList.add("animate");
  speakBtn.addEventListener(
    "animationend",
    () => {
      speakBtn.classList.remove("animate");
    },
    { once: true }
  );
});

// Initialize the quiz
getNextNoun();

const backBtn = document.getElementById("back-btn");

// When starting the noun quiz:
startNounQuizBtn.addEventListener("click", () => {
  startPage.style.display = "none";
  quizContainer.style.display = "block";
  backBtn.style.display = "inline-block"; // Show back button
  getNextNoun(); // start noun quiz
});

// Back button click: go back to start page
backBtn.addEventListener("click", () => {
  quizContainer.style.display = "none";
  startPage.style.display = "block";
  backBtn.style.display = "none"; // Hide back button
});
