const container = document.getElementById("movieContainer");

/* ================= SLIDER ================= */

function scrollRightMovies() {

    const maxScroll = container.scrollWidth - container.clientWidth;

    if (container.scrollLeft >= maxScroll - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
        container.scrollBy({ left: 320, behavior: "smooth" });
    }
}

function scrollLeftMovies() {

    const maxScroll = container.scrollWidth - container.clientWidth;

    if (container.scrollLeft <= 0) {
        container.scrollTo({ left: maxScroll, behavior: "smooth" });
    } else {
        container.scrollBy({ left: -320, behavior: "smooth" });
    }
}

/* ================= MOVIES (YANYANA VERİSİ EKLENDİ) ================= */

const movies = {
  spiderverse: {
    img: "images/spider-man-across-the-spider-verse_tsm61wbo.webp",
    title: "Spider-Man: Across the Spider-Verse",
    meta: "2023 • 2h 20m • Animation • ⭐ 8.5",
    desc: "Miles Morales returns for the next chapter of the Spider-Verse saga."
  },

  interstellar: {
    img: "images/interstellar.jpg",
    title: "Interstellar",
    meta: "2014 • 2h 49m • Sci-Fi • ⭐ 8.7",
    desc: "A team travels through a wormhole in space to save humanity."
  },

  batman: {
    img: "images/thebatman.jpg",
    title: "The Batman",
    meta: "2022 • 2h 56m • Action • ⭐ 9.0",
    desc: "Batman uncovers corruption in Gotham City."
  },

  got: {
    img: "images/gameofthrones.jpg",
    title: "Game of Thrones",
    meta: "2011 • 8 Seasons • Fantasy • ⭐ 9.5",
    desc: "Noble families fight for control of the Iron Throne."
  },

  arog: {
    img: "images/arog.jpg",
    title: "A.R.O.G",
    meta: "2008 • Comedy • ⭐ 7.3",
    desc: "A man travels back to prehistoric times."
  },

  // EKSİK OLAN YANYANA PANEL VERİSİ BURAYA EKLENDİ:
  yanyana: {
    img: "images/yanyana.jpg",
    title: "Yan Yana",
    meta: "2024 • 1h 45m • Drama • ⭐ 8.6",
    desc: "Aile bağlarını ve mahalle kültürünü dramatik bir dille ele alan kesişen hayatların öyküsü."
  },

  avengersinfinitywar: {
    img: "images/avengersinfinitywar.jpg",
    title: "Avengers Infinity War",
    meta: "2018 • Action/Sci-Fi • ⭐ 8.4",
    desc: "The Avengers unite to stop Thanos."
  },

  friendswithbenefits: {
    img: "images/friendswithbenefits.jpg",
    title: "Friends with Benefits",
    meta: "2011 • Romance/Comedy • ⭐ 6.5",
    desc: "Two friends try to avoid falling in love."
  },

  theamazingspiderman: {
    img: "images/theamazingspiderman.jpg",
    title: "The Amazing Spider-Man",
    meta: "2012 • Action/Sci-Fi • ⭐ 6.9",
    desc: "Peter Parker face the dangerous Lizard."
  },

  kizginadam: {
    img: "images/12-kizgin-adam-1660915309_225x336.jpg",
    title: "12 Angry Men",
    meta: "1957 • Drama • ⭐ 9.0",
    desc: "A jury member challenges the evidence."
  },

  thegodfather: {
    img: "images/baba-1660915256_225x336.jpg",
    title: "The Godfather",
    meta: "1972 • Crime/Drama • ⭐ 9.2",
    desc: "A mafia family struggles for power."
  },

  inception: {
    img: "images/baslangic-1660924244_225x336.jpg",
    title: "Inception",
    meta: "2010 • Sci-Fi/Thriller • ⭐ 8.8",
    desc: "A thief enters dreams to steal secrets."
  },

  esaretinbedeli: {
    img: "images/esaretinbedeli.jpg",
    title: "Esaretin Bedeli",
    meta: "1994 • Drama • ⭐ 9.3",
    desc: "Two prisoners find hope over the years."
  },

  hababamsinifi: {
    img: "images/Hababam-Sinifi-1290714534_225x336.jpg",
    title: "Hababam Sınıfı",
    meta: "1975 • Comedy • ⭐ 9.2",
    desc: "Legendary Turkish school comedy."
  }
};

const movieLinks = { spiderverse: "https://www.fullhdfilmizlesene.life/film/orumcek-adam-orumcek-evrenine-gecis-fh1/",
  interstellar: "https://filmmodu.cc/film/yildizlararasi-izle/",
  batman: "https://www.hdfilmcehennemi.now/film/the-batman/",
  got: "https://dizibull24.com/bolum/game-of-thrones-1-sezon-1-bolum",
  arog: "https://www.youtube.com/watch?v=Rycbk53DeRs",
  avengersinfinitywar: "https://www.fullhdfilmizlesene.life/film/yenilmezler-3-sonsuzluk-savasi-1/",
  friendswithbenefits: "https://filmmodu.cc/film/arkadastan-ote-2011-izle/",
  theamazingspiderman: "https://www.hdfilmcehennemi.now/film/inanilmaz-orumcek-adam-2012-izle-5/",
  kizginadam: "https://filmmodu.cc/film/12-kizgin-adam-izle/",
  thegodfather: "https://www.hdfilmcehennemi.now/film/baba-1972-izle-2/",
  inception: "https://www.hdfilmcehennemi.now/film/baslangic-2010-izle-2/",
  esaretinbedeli: "https://www.hdfilmcehennemi.now/film/esaretin-bedeli-1994-izle-2/",
  hababamsinifi: "https://www.youtube.com/watch?v=hf2-8MRPGu8" };

/* ================= FAVORITES ================= */

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function toggleFavorite(movieId) {

    if (favorites.includes(movieId)) {
        favorites = favorites.filter(id => id !== movieId);
    } else {
        favorites.push(movieId);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));

    renderMovies();
}

/* ================= SEARCH ================= */

function searchMovies(value) {

    const cards = document.querySelectorAll(".movie-card");

    cards.forEach(card => {

        const title = card.querySelector("h3").innerText.toLowerCase();

        if (title.includes(value.toLowerCase())) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}

/* ================= CATEGORY FILTER ================= */

function filterMovies(category) {

    const cards = document.querySelectorAll(".movie-card");

    cards.forEach(card => {

        const title = card.querySelector("h3").innerText.toLowerCase();

        if (category === "all") {
            card.style.display = "block";
        } else if (title.includes(category)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}

/* ================= DARK MODE ================= */

function toggleTheme() {
    document.body.classList.toggle("dark");
}

/* ================= PLAY MOVIE ================= */

function playMovie(movieId) {

    const url = movieLinks[movieId];

    if (url) window.open(url, "_blank");
}

/* ================= PANEL (HARF DUYARSIZ SÜRÜM) ================= */

function openMovie(movieId) {

    // Gelen movieId verisini tamamen küçük harfe senkronize ederek hatayı önlüyoruz
    const cleanId = movieId.toLowerCase();

    const movie = movies[cleanId];

    if (!movie) return;

    document.getElementById("panelImg").src = movie.img;
    document.getElementById("panelTitle").innerText = movie.title;
    document.getElementById("panelMeta").innerText = movie.meta;
    document.getElementById("panelDesc").innerText = movie.desc;

    document.getElementById("moviePanel").classList.add("active");

    document.getElementById("watchBtn").onclick = () => playMovie(cleanId);

    // -------------------------------------------------------------
    // İZLEME GEÇMİŞİNİ KAYDETME ALANI (GÜVENLİ VE DOĞRU BÖLGE)
    // -------------------------------------------------------------
    let watchHistory = JSON.parse(localStorage.getItem("watchHistory")) || [];

    watchHistory = watchHistory.filter(item => item.title !== movie.title);

    let now = new Date();
    let formattedDate = now.toLocaleDateString('tr-TR') + " - " + now.toLocaleTimeString('tr-TR', {hour: '2-digit', minute:'2-digit'});

    watchHistory.push({
        title: movie.title,
        img: movie.img,
        meta: movie.meta,
        date: formattedDate
    });

    localStorage.setItem("watchHistory", JSON.stringify(watchHistory));
}

function closePanel() {
    document.getElementById("moviePanel").classList.remove("active");
}

/* ================= LOGIN ================= */

function login() {

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let errorMsg = document.getElementById("error");

    if (user === "admin" && pass === "1234") {

        alert("Giriş Başarılı!");

        bootstrap.Modal
            .getInstance(document.getElementById('loginModal'))
            .hide();

    } else {
        errorMsg.innerText = "Hatalı giriş!";
    }
}



// SORU VERİTABANI
const quizData = {
    interstellar: [
       { q: "What is the shortcut distortion used by astronauts to travel faster in space called?", a: ["Black Hole", "Wormhole", "Event Horizon", "Singularity"], correct: 1 },
       { q: "What is the name of Cooper's robot companion?", a: ["TARS", "HAL 9000", "R2-D2", "JARVIS"], correct: 0 },
       { q: "What is the massive danger on the first planet the team lands on (Miller's Planet)?", a: ["Sandstorms", "Acid Rains", "Giant Waves", "Active Volcanoes"], correct: 2 },
       { q: "Approximately how many years on Earth equal one hour on Miller's Planet?", a: ["1 Year", "5 Years", "7 Years", "10 Years"], correct: 2 },
       { q: "What was Cooper's main job on Earth before going to space?", a: ["Engineer / Farmer", "Military Pilot", "Physics Professor", "Geologist"], correct: 0 },
    { q: "What is the name of Cooper's daughter, and what did she call the invisible presence in her room?", a: ["Brand / Monster", "Murph / Ghost", "Lois / Spirit", "Sarah / Alien"], correct: 1 },
{ q: "In what 5-dimensional structure does Cooper try to send data to his daughter at the end of the film?", a: ["Tesseract (Behind the bookshelf)", "Wormhole center", "Gargantua surface", "Nothingness"], correct: 0 },
{ q: "Which object does Cooper use to transmit gravity data to his daughter from inside the black hole?", a: ["Wall Clock", "Wristwatch", "Old Book", "Fountain Pen"], correct: 1 },
{ q: "What is the name of the main spacecraft used by the team for space travel?", a: ["Endurance", "Ranger", "Lander", "Ares"], correct: 0 },
{ q: "The massive space station where humanity relocates is named after whom?", a: ["Professor Brand", "Cooper", "Murphy (Murph)", "NASA"], correct: 2 }
    ],
    thebatman: [
        { q: "What title does Robert Pattinson’s Batman give himself in the film?", a: ["The Dark Knight", "Justice", "Vengeance", "Detective"], correct: 2 },
{ q: "What does the main villain (Riddler) leave at crime scenes?", a: ["Playing Card", "Puzzle/Envelope", "Black Rose", "Money"], correct: 1 },
{ q: "Who is Batman’s police partner who helps in the investigation and later becomes Commissioner?", a: ["Harvey Dent", "James Gordon", "Harvey Bullock", "John Blake"], correct: 1 },
{ q: "Who is the first high-ranking official killed by the Riddler in Gotham?", a: ["Police Chief", "Mayor", "District Attorney", "Bruce Wayne"], correct: 1 },
{ q: "Who is the character played by Zoë Kravitz, who works in clubs and teams up with Batman?", a: ["Catwoman (Selina Kyle)", "Poison Ivy", "Harley Quinn", "Barbara Gordon"], correct: 0 },
{ q: "Who is the crime boss controlling Gotham’s underworld, played by Colin Farrell under heavy makeup?", a: ["Carmine Falcone", "Penguin (Oswald Cobblepot)", "Two-Face", "Sal Maroni"], correct: 1 },
{ q: "Who is Bruce Wayne’s loyal butler, injured by a bomb sent by the Riddler at Wayne Manor?", a: ["Lucius Fox", "Alfred Pennyworth", "Jarvis", "Gordon"], correct: 1 },
{ q: "What is the Riddler’s main goal throughout the film regarding Gotham City?", a: ["Poverty", "Exposing deep corruption and lies", "Drug trafficking", "Escaped asylum inmates"], correct: 1 },
{ q: "What happens to Gotham City in the final part of the Riddler’s plan?", a: ["A massive fire breaks out", "The city is flooded (dams collapse)", "A toxic gas is released", "A total power outage"], correct: 1 },
{ q: "After being captured, who does the Riddler meet as his cell neighbor in Arkham Asylum?", a: ["Joker", "Bane", "Scarecrow", "Lex Luthor"], correct: 0 }
    ],
   inception: [
    { q: "What is the object used by characters to determine whether they are in a dream?", a: ["Amulet", "Anchor", "Totem", "Key"], correct: 2 },
    { q: "What is Dom Cobb’s personal totem in the film, played by Leonardo DiCaprio?", a: ["Chess Piece", "Spinning Top", "Loaded Dice", "Old Coin"], correct: 1 },
    { q: "What is the real meaning of 'Inception' in the mission?", a: ["Stealing someone's dream", "Planting an idea into someone's mind", "Waking up from a dream", "Dreaming on multiple levels"], correct: 1 },
    { q: "Which young architect character designs dream worlds, played by Elliot Page?", a: ["Arthur", "Ariadne", "Eames", "Saito"], correct: 1 },
    { q: "What is the name of Cobb’s deceased wife who sabotages his dreams?", a: ["Mal", "Saito", "Yusuf", "Robert"], correct: 0 },
    { q: "What does Yusuf give the team to allow them to go deeper into dream layers?", a: ["Special mask", "Powerful sedative", "Mind-reading device", "Adrenaline shot"], correct: 1 },
    { q: "What is the term for the sudden jolt or action that wakes someone from a dream?", a: ["The Kick", "The Wake", "The Limbo", "The Paradox"], correct: 0 },
    { q: "Who is the heir of a powerful company targeted for idea implantation?", a: ["Robert Fischer", "Saito", "Arthur", "Eames"], correct: 0 },
    { q: "What is the dream-like void where time slows to a standstill called?", a: ["Limbo", "Paradox", "Labyrinth", "Coma"], correct: 0 },
    { q: "Which iconic song is used by the team to signal it is time to wake up?", a: ["Edith Piaf – Non, je ne regrette rien", "Hans Zimmer", "Mozart", "Frank Sinatra"], correct: 0 }
],

avengersiw: [
    { q: "How many Infinity Stones does Thanos collect to wipe out half of the universe?", a: ["4", "5", "6", "7"], correct: 2 },
    { q: "On which planet does Thanos obtain the Soul Stone?", a: ["Vormir", "Titan", "Zendalar", "Asgard"], correct: 0 },
    { q: "What is the name of Thor’s new weapon forged by Eitri?", a: ["Mjolnir", "Stormbreaker", "Gungnir", "Nightmaul"], correct: 1 },
    { q: "Who guards the Soul Stone before Thanos arrives?", a: ["Loki", "Red Skull", "Odin", "The Collector"], correct: 1 },
    { q: "How many possible outcomes does Doctor Strange say they have against Thanos?", a: ["14,000,605", "1,000,000", "500,200", "14,000"], correct: 0 },
    { q: "Which Infinity Stone does Thanos take from Vision in Wakanda?", a: ["Time Stone", "Mind Stone", "Power Stone", "Reality Stone"], correct: 1 },
    { q: "Where do Captain America and his team go to protect Vision?", a: ["Sokovia", "Wakanda", "Asgard", "Kamar-Taj"], correct: 1 },
    { q: "Why does Doctor Strange give the Time Stone to Thanos?", a: ["To save Iron Man", "To save Spider-Man", "To save Star-Lord", "To save Wong"], correct: 0 },
    { q: "Who is killed by Thanos in the opening scene?", a: ["Hela", "Loki", "Heimdall", "Balder"], correct: 1 },
    { q: "Who is the first hero to disintegrate into dust?", a: ["Black Panther", "Bucky Barnes", "Spider-Man", "Groot"], correct: 1 }
],

arog: [
    { q: "What is the name of Arif’s football team in the Stone Age?", a: ["Yaba Spora", "Gora Force", "Stone Age Athletic Club", "Arog United"], correct: 0 },
    { q: "Who sends Arif to the Stone Age with a time machine?", a: ["Kuna", "Logar", "Toku", "Garavel"], correct: 1 },
    { q: "Who is the tribal leader Arif befriends in the Stone Age?", a: ["Kuyu", "Khan", "Ceku", "Aziz Arif"], correct: 0 },
    { q: "What does Arif try to create from clay to advance civilization?", a: ["Wheel", "Brick", "Pottery", "Money"], correct: 1 },
    { q: "Who is the monkey-raised ally helping Arif?", a: ["Dimi", "Mimi", "Kiki", "Timi"], correct: 0 },
    { q: "Who referees the football match between tribes?", a: ["Garavel", "Logar", "Kuna", "Toku"], correct: 3 },
    { q: "What legendary move does Arif use to score the winning goal?", a: ["Bicycle kick", "Volley shot", "Scorpion kick", "Nine-life shot"], correct: 0 },
    { q: "What machine does Arif invent for cleaning in the Stone Age?", a: ["Bleach", "Sponge", "Washing machine", "Carpet shaker"], correct: 2 },
    { q: "What is the name of the evil tribe leader?", a: ["Karga", "Rıfkı", "Yakar", "Kunter"], correct: 0 },
    { q: "Who accidentally returns to the present with Arif?", a: ["Kuyu", "Dimi", "A monkey", "Logar"], correct: 2 }
],
    yanyana: [
    { q: "What is the main place where the characters’ stories intersect in Yanyana?", a: ["School Campus", "Neighborhood Café", "Same Apartment Building", "Hospital"], correct: 2 },
    { q: "What shared activity helps the characters break the ice between them?", a: ["Music Band", "Football Match", "Cooking", "Theater Play"], correct: 0 },
    { q: "What is the major secret the main character hides in this drama?", a: ["Financial Debt", "Serious Health Issue", "Abroad Plans", "Missing Family Member"], correct: 1 },
    { q: "In which season does the major turning point accident occur?", a: ["Summer", "Autumn", "Winter", "Spring"], correct: 2 },
    { q: "What color theme is used in the film’s poster and symbolism?", a: ["Red-Black", "Blue-White", "Yellow-Black", "Green-Gray"], correct: 1 },
    { q: "Which character is the wise old man who brings joy to the neighborhood?", a: ["Hulusi Bey", "Ahmet Uncle", "Rıza Captain", "Mehmet Teacher"], correct: 1 },
    { q: "What is the main message delivered at the end of the film?", a: ["Loneliness", "Unity and Solidarity", "Entrepreneurship", "Fear"], correct: 1 },
    { q: "Which instrument is most iconic in the emotional scenes?", a: ["Guitar", "Piano", "Violin", "Clarinet"], correct: 2 },
    { q: "What is the main character’s biggest dream profession?", a: ["Painter", "Writer", "Architect", "Director"], correct: 1 },
    { q: "What IMDb score is symbolized in CinePru?", a: ["8.5", "9.0", "9.5", "10"], correct: 3 }
],

theamazingspiderman: [
    { q: "Who is Peter Parker’s first great love in high school?", a: ["Mary Jane Watson", "Gwen Stacy", "Michelle Jones", "Felicia Hardy"], correct: 1 },
    { q: "Who is the scientist who becomes the Lizard?", a: ["Dr. Otto Octavius", "Dr. Curt Connors", "Dr. Norman Osborn", "Dr. Miles Warren"], correct: 1 },
    { q: "Which company’s lab contains the radioactive spider?", a: ["Oscorp", "Stark Industries", "Pym Technologies", "Roxxon"], correct: 0 },
    { q: "What is Gwen Stacy’s father’s job in New York?", a: ["Mayor", "Police Chief", "Journalist", "Scientist"], correct: 1 },
    { q: "What distinctive mark does the burglar who killed Uncle Ben have?", a: ["Star tattoo", "Scorpion tattoo", "Wrist tattoo", "No tattoo"], correct: 2 },
    { q: "What did Peter use for his mask’s eye lenses?", a: ["Sunglass lenses", "Camera lens", "Special plastic", "Bike helmet parts"], correct: 0 },
    { q: "Why does Dr. Connors experiment with reptile DNA?", a: ["Cancer cure", "Regrowing his missing arm", "Immortality research", "Military weapons"], correct: 1 },
    { q: "From where does the Lizard plan to release the virus?", a: ["Brooklyn Bridge", "Oscorp Tower", "Statue of Liberty", "Times Square"], correct: 1 },
    { q: "Who dies tragically in the final battle?", a: ["Captain George Stacy", "Aunt May", "Dr. Connors", "Flash Thompson"], correct: 0 },
    { q: "What does Spider-Man use to shoot webs?", a: ["Organic web glands", "Mechanical web shooters", "Special gloves", "Web tubes"], correct: 1 }
],

gameofthrones: [
    { q: "Which house does Ned Stark lead?", a: ["Lannister", "Targaryen", "Stark", "Baratheon"], correct: 2 },
    { q: "How many dragons does Daenerys initially hatch?", a: ["1", "2", "3", "4"], correct: 2 },
    { q: "What is Jon Snow’s military order called?", a: ["Golden Company", "Night’s Watch", "Faith Militant", "Kingsguard"], correct: 1 },
    { q: "What is Joffrey’s wedding death called?", a: ["Red Wedding", "Purple Wedding", "Black Wedding", "Winter Wedding"], correct: 1 },
    { q: "What animal represents House Lannister?", a: ["Wolf", "Dragon", "Lion", "Stag"], correct: 2 },
    { q: "Who is the main enemy beyond the Wall?", a: ["Mance Rayder", "Night King", "Ramsay Bolton", "Joffrey"], correct: 1 },
    { q: "Which group trains Arya Stark in Braavos?", a: ["Faceless Men", "Brotherhood", "Wardens", "Ravens"], correct: 0 },
    { q: "What is the name of the betrayal at the Red Wedding?", a: ["Purple Wedding", "Red Wedding", "Northern Wedding", "Silver Wedding"], correct: 1 },
    { q: "What is Tyrion Lannister’s nickname?", a: ["Halfman / Imp", "Hound", "Kingslayer", "Sparrow"], correct: 0 },
    { q: "What is the Iron Throne made of?", a: ["Gold", "Melted Swords", "Dragon Bone", "Stone and Emerald"], correct: 1 }
],

"12angryman": [
    { q: "In which single location does almost the entire film take place?", a: ["Courtroom", "Prison Cell", "Jury Room", "Police Station"], correct: 2 },
    { q: "Who is the first juror to vote 'Not Guilty'?", a: ["Juror 3", "Juror 8", "Juror 1", "Juror 12"], correct: 1 },
    { q: "What is the defendant accused of?", a: ["Bank robbery", "Murdering his father", "Looting a store", "Treason"], correct: 1 },
    { q: "What does Juror 8 prove about the murder weapon?", a: ["It was broken", "It is easily obtainable and common", "It had fingerprints", "It didn’t belong to the defendant"], correct: 1 },
    { q: "Why is the old man’s testimony discredited?", a: ["He lied", "He couldn’t reach the door in time due to disability", "He was blind", "He was asleep"], correct: 1 },
    { q: "What discredits the woman’s eyewitness claim?", a: ["She wore glasses but wasn’t wearing them at night", "Power outage", "Train blocked view", "She was blind"], correct: 0 },
    { q: "What increases tension in the jury room?", a: ["Storm outside", "Broken fan and extreme heat", "Locked door", "Broken lights"], correct: 1 },
    { q: "Which juror insists on guilty due to personal anger?", a: ["Juror 3", "Juror 7", "Juror 10", "Juror 1"], correct: 0 },
    { q: "What is required for the verdict to be valid?", a: ["Majority vote", "Unanimous decision", "Oldest juror decides", "Judge approval"], correct: 1 },
    { q: "What is Juror 8’s name revealed at the end?", a: ["Davis", "McCardle", "Smith", "Johnson"], correct: 0 }
],

thegodfather: [
    { q: "Why does Vito Corleone help people on his daughter's wedding day?", a: ["To earn money", "Because Sicilian tradition says no request can be refused on that day", "For political power", "To escape the police"], correct: 1 },
    { q: "Which son is ambushed and killed on the highway?", a: ["Michael", "Fredo", "Sonny", "Tom Hagen"], correct: 2 },
    { q: "What does Jack Woltz find in his bed after refusing the Corleones?", a: ["A dead guard", "A horse’s severed head", "A bloody letter", "Dynamite"], correct: 1 },
    { q: "Where does Michael kill Sollozzo and the police captain?", a: ["Casino", "Italian restaurant", "His home", "Street"], correct: 1 },
    { q: "What is the name of the consigliere?", a: ["Tom Hagen", "Peter Clemenza", "Sal Tessio", "Luca Brasi"], correct: 0 },
    { q: "Where does Michael flee for safety?", a: ["Las Vegas", "Sicily", "Rome", "Miami"], correct: 1 },
    { q: "Where does Vito Corleone die?", a: ["Office", "Garden with his grandson", "Restaurant", "Bed"], correct: 1 },
    { q: "When does Michael eliminate his enemies in a mass hit?", a: ["At a wedding", "At a baptism", "New Year’s Eve", "Funeral"], correct: 1 },
    { q: "Who is killed for betraying the family in Las Vegas?", a: ["Carlo Rizzi", "Tessio", "Sollozzo", "Barzini"], correct: 0 },
    { q: "Which quote is associated with the film?", a: ["Money opens every door", "I’ll make him an offer he can’t refuse", "Keep your friends close", "Justice is in the streets"], correct: 1 }
],

esaretinbedeli: [
    { q: "What profession allows Andy Dufresne to help the prison staff?", a: ["Lawyer", "Banker / Accountant", "Teacher", "Doctor"], correct: 1 },
    { q: "Who is Andy’s closest friend in prison?", a: ["Red (Morgan Freeman)", "Brooks", "Tommy", "Heywood"], correct: 0 },
    { q: "How many years does Andy spend in Shawshank Prison?", a: ["10", "15", "19", "25"], correct: 2 },
    { q: "What tool does Andy use to dig his escape tunnel?", a: ["Large pickaxe", "Small rock hammer", "Screwdriver", "Saw"], correct: 1 },
    { q: "Who cannot adapt to the outside world after release and commits suicide?", a: ["Brooks Hatlen", "Tommy Williams", "Captain Byron", "Samuel Norton"], correct: 0 },
    { q: "Through what does Andy escape the prison?", a: ["Air vent", "Sewer pipe", "Laundry basket", "Kitchen door"], correct: 1 },
    { q: "What fake identity does Andy use for money laundering?", a: ["Randall Stephens", "Peter Stevens", "John Dufresne", "Ellis Boyd"], correct: 0 },
    { q: "What is the name of the Mexican beach town where Andy meets Red?", a: ["Zihuatanejo", "Cancun", "Tijuana", "Acapulco"], correct: 0 },
    { q: "Which actress is on the first poster hiding Andy’s tunnel?", a: ["Marilyn Monroe", "Rita Hayworth", "Raquel Welch", "Audrey Hepburn"], correct: 1 },
    { q: "Who is killed to silence Andy’s evidence?", a: ["Tommy Williams", "Brooks", "Bogs", "Elmo Blatch"], correct: 0 }
],

hababamsinifi: [
    { q: "What is Kel Mahmut’s main subject?", a: ["Math", "History", "Geography", "Literature"], correct: 1 },
    { q: "Who plays İnek Şaban?", a: ["Tarık Akan", "Kemal Sunal", "Halit Akçatepe", "Münir Özkul"], correct: 1 },
    { q: "Which football match do the students secretly attend?", a: ["Galatasaray - Fenerbahçe", "Fenerbahçe - Beşiktaş", "Beşiktaş - Galatasaray", "Trabzonspor - Fenerbahçe"], correct: 0 },
    { q: "Who is the new student who is actually Hafize Ana’s daughter?", a: ["Semra", "Ayşegül", "Hürrem", "Filiz"], correct: 1 },
    { q: "What is the name shouted in 'Open the door Veysel Efendi'?", a: ["Veysel Efendi", "Rıza Efendi", "Ahmet Efendi", "Hasan Efendi"], correct: 0 },
    { q: "What is Damat Ferit’s role in the class?", a: ["The handsome student", "The troublemaker", "The athlete", "The class clown"], correct: 0 },
    { q: "How do students cheat in exams?", a: ["Writing on desks", "Hidden notes in shoes/ceiling", "Headphones", "Copying directly"], correct: 1 },
    { q: "Who is the sleepy student?", a: ["Tulum Hayri", "Domdom Ali", "Hayta İsmail", "Sleepy Yaşar"], correct: 3 },
    { q: "Who teaches literature?", a: ["Badi Ekrem", "Akil Hoca", "Şevket Hoca", "Avni Hoca"], correct: 1 },
    { q: "Who is the gym teacher known for red tracksuit?", a: ["Kel Mahmut", "Badi Ekrem", "Kül Yutmaz", "Paşa Nuri"], correct: 1 }
]
};

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let currentMovieKey = "";

// QUIZBAŞLATMA
function startQuiz(movieKey) {
    const cleanMovieKey = movieKey.toLowerCase();
    currentQuestions = quizData[cleanMovieKey];
    if (!currentQuestions) return alert("Bu film için henüz quiz hazırlanmadı!");
    
    currentMovieKey = cleanMovieKey;
    currentQuestionIndex = 0;
    score = 0;
    
    document.getElementById("quizTitle").innerText = cleanMovieKey.toUpperCase() + " QUIZ";
    document.getElementById("questionContainer").style.display = "block";
    document.getElementById("resultContainer").style.display = "none";
    
    document.getElementById("quizModal").classList.add("active");
    
    showQuestion();
}

// SORUYU EKRANA BASMA
function showQuestion() {
    const qData = currentQuestions[currentQuestionIndex];
    document.getElementById("questionText").innerText = `${currentQuestionIndex + 1}) ${qData.q}`;
    
    const optionsDiv = document.getElementById("optionsContainer");
    optionsDiv.innerHTML = ""; 
    
    qData.a.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.style = "padding: 12px; background: #1c1c1c; color: white; border: 1px solid #333; border-radius: 8px; cursor: pointer; text-align: left; transition: 0.2s;";
        
        btn.onmouseover = () => btn.style.background = "red";
        btn.onmouseout = () => btn.style.background = "#1c1c1c";
        
        btn.onclick = () => checkAnswer(index);
        optionsDiv.appendChild(btn);
    });
}

// CEVAP KONTROLÜ
function checkAnswer(selectedIndex) {
    const qData = currentQuestions[currentQuestionIndex];
    if (selectedIndex === qData.correct) {
        score++;
    }
    
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// SONUÇ EKRANI VE DINAMIK HESAPLAMA MOTORU
function showResult() {
    document.getElementById("questionContainer").style.display = "none";
    document.getElementById("resultContainer").style.display = "block";
    document.getElementById("quizScore").innerText = `Skorun: ${score} / ${currentQuestions.length}`;

    let savedMovieScore = parseInt(localStorage.getItem("score_" + currentMovieKey)) || 0;
    
    if (score > savedMovieScore) {
        let xpDifference = (score - savedMovieScore) * 10;
        let currentTotalXP = parseInt(localStorage.getItem("totalXP")) || 0;
        
        localStorage.setItem("totalXP", currentTotalXP + xpDifference);
        localStorage.setItem("score_" + currentMovieKey, score);
    }
}

// KAPATMA
function closeQuiz() {
    document.getElementById("quizModal").classList.remove("active");
}

// KULLANICI ÇIKIŞ YAPMA FONKSİYONU
function logoutUser() {
    if (confirm("CinePru oturumunu kapatmak istediğine emin misin?")) {
        window.location.href = "login.html";
    }
}
