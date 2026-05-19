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
        { q: "Astronotların uzayda kestirme gitmek için kullandıkları bükülmeye ne denir?", a: ["Kara Delik", "Solucan Deliği", "Olay Ufku", "Tekillik"], correct: 1 },
        { q: "Cooper'ın robot yardımcısının adı nedir?", a: ["TARS", "HAL 9000", "R2-D2", "JARVIS"], correct: 0 },
        { q: "Cooper ve ekibinin indiği ilk gezegende (Miller'ın Gezegeni) devasa boyutta olan tehlike nedir?", a: ["Kum Fırtınaları", "Asit Yağmurları", "Devasa Dalgalar", "Aktif Volkanlar"], correct: 2 },
        { q: "Miller'ın gezegenindeki 1 saat, Dünya'da yaklaşık kaç yıla denk gelmektedir?", a: ["1 Yıl", "5 Yıl", "7 Yıl", "10 Yıl"], correct: 2 },
        { q: "Cooper uzaya gitmeden önce Dünya'da asıl olarak hangi mesleği yapıyordu?", a: ["Mühendis / Çiftçi", "Askeri Pilot", "Fizik Profesörü", "Jeolog"], correct: 0 },
        { q: "Cooper'ın kızının adı nedir ve babasının odasındaki kütüphanede bulduğu hayali varlığa ne ad vermiştir?", a: ["Brand / Canavar", "Murph / Hayalet", "Lois / Ruh", "Sarah / Uzaylı"], correct: 1 },
        { q: "Filmin sonunda Cooper, kara deliğin içindeki 5 boyutlu hangi mekanda kızına veri göndermeye çalışır?", a: ["Tesseract (Kütüphane arkası)", "Solucan deliği merkezi", "Gargantua yüzeyi", "Hiçlik"], correct: 0 },
        { q: "Cooper'ın kara deliğin içinden kızına yer çekimi verilerini aktarmak için kullandığı nesne hangisidir?", a: ["Duvar Saati", "Kol Saati", "Eski Bir Kitap", "Dolma Kalem"], correct: 1 },
        { q: "Ekibin uzayda seyahat ettiği ana geminin adı aşağıdakilerden hangisidir?", a: ["Endurance", "Ranger", "Lander", "Ares"], correct: 0 },
        { q: "Dünya'yı terk eden insanlığın sığındığı devasa uzay istasyonuna kimin adı verilmiştir?", a: ["Profesör Brand", "Cooper", "Murphy (Murph)", "NASA"], correct: 2 }
    ],
    thebatman: [
        { q: "Robert Pattinson'ın canlandırdığı Batman, filmde kendine hangi unvanı verir?", a: ["Karanlık Şövalye", "Adalet", "İntikam", "Dedektif"], correct: 2 },
        { q: "Filmin ana kötü karakteri (Riddler) suç mahalline ne bırakır?", a: ["Oyun Kartı", "Bulmaca/Zarf", "Siyah Gül", "Para"], correct: 1 },
        { q: "Batman'e soruşturmada yardım eden ve daha sonra Komiser olacak olan polis ortağı kimdir?", a: ["Harvey Dent", "James Gordon", "Harvey Bullock", "John Blake"], correct: 1 },
        { q: "Riddler'ın Gotham sokaklarında ilk olarak katlettiği üst düzey yetkili kimdir?", a: ["Polis Şefi", "Belediye Başkanı", "Bölge Savcısı", "Bruce Wayne"], correct: 1 },
        { q: "Zoe Kravitz tarafından canlandırılan, kulüplerde çalışan ve Batman ile iş birliği yapan karakter kimdir?", a: ["Catwoman (Selina Kyle)", "Poison Ivy", "Harley Quinn", "Barbara Gordon"], correct: 0 },
        { q: "Gotham'ın yeraltı dünyasını yöneten, Colin Farrell'ın tanınmayacak bir makyajla oynadığı mafya lideri kimdir?", a: ["Carmine Falcone", "Penguen (Oswald Cobblepot)", "Two-Face", "Sal Maroni"], correct: 1 },
        { q: "Wayne malikanesinde Bruce'a sadık olan, Riddler'ın gönderdiği bombalı mektupla yaralanan uşak kimdir?", a: ["Lucius Fox", "Alfred Pennyworth", "Jarvis", "Gordon"], correct: 1 },
        { q: "Riddler'ın film boyunca asıl amacı Gotham şehrindeki hangi durumu ortaya çıkarmaktır?", a: ["Yoksulluğu", "Köklü yolsuzluk ve yalanları", "Uyuşturucu ticaretini", "Akıl hastanesindeki kaçakları"], correct: 1 },
        { q: "Filmin finalinde Riddler'ın planı doğrultusunda Gotham şehrine ne olur?", a: ["Büyük bir yangın çıkar", "Şehir sular altında kalır (Barajlar patlar)", "Zehirli gaz salınır", "Elektrikler tamamen kesilir"], correct: 1 },
        { q: "Riddler yakalandıktan sonra kapatıldığı Arkham Akıl Hastanesi'nde hücre komşusu olarak kiminle tanışır?", a: ["Joker", "Bane", "Scarecrow", "Lex Luthor"], correct: 0 }
    ],
    inception: [
        { q: "Karakterlerin rüyada olup olmadıklarını anlamak için kullandıkları objeye ne denir?", a: ["Muska", "Çıpa", "Totem", "Anahtar"], correct: 2 },
        { q: "Leonardo DiCaprio'nın canlandırdığı başkarakter Dom Cobb'un kişisel totemi nedir?", a: ["Satranç Taşı", "Metal Topaç (Fırıldak)", "Hileli Zar", "Eski Bir Madeni Para"], correct: 1 },
        { q: "Filme adını veren 'Inception' (Başlangıç) kelimesinin operasyondaki asıl anlamı nedir?", a: ["Birinin rüyasını çalmak", "Birinin zihnine yeni bir fikir ekmek", "Rüyadan uyanmak", "Aynı anda iki rüya görmek"], correct: 1 },
        { q: "Rüya evrenlerini tasarlayan, Elliot Page'in canlandırdığı genç mimar karakter kimdir?", a: ["Arthur", "Ariadne", "Eames", "Saito"], correct: 1 },
        { q: "Cobb'un rüyalarını sabote eden, sürekli karşısına çıkan ölmüş eşinin adı nedir?", a: ["Mal", "Saito", "Yusuf", "Robert"], correct: 0 },
        { q: "Ekibin rüyada çok daha derin katmanlara inebilmek için kimyager Yusuf'tan aldıkları şey nedir?", a: ["Özel bir maske", "Çok güçlü bir sakinleştirici/ilaç", "Zihin okuma cihazı", "Adrenalin iğnesi"], correct: 1 },
        { q: "Rüyadan uyanmayı sağlayan, o meşhur düşme hissine veya şoka ne ad verilir?", a: ["The Kick (Tekme)", "The Wake (Uyanış)", "The Limbo", "The Paradox"], correct: 0 },
        { q: "Zihnine fikir ekilmeye çalışılan, devasa bir şirketin mirasçısı olan hedef karakter kimdir?", a: ["Robert Fischer", "Saito", "Arthur", "Eames"], correct: 0 },
        { q: "Rüya içinde ölündüğünde ya da çok ağır sakinleştirici altındayken düşülen, zamanın durma noktasına geldiği rüya altı boşluğa ne denir?", a: ["Limbo", "Paradoks", "Labirent", "Koma"], correct: 0 },
        { q: "Ekibin rüyadayken uyanma zamanının geldiğini anlamak için arka planda çaldıkları ikonik şarkı kime aittir?", a: ["Edith Piaf (Non, je ne regrette rien)", "Hans Zimmer", "Mozart", "Frank Sinatra"], correct: 0 }
    ],
    avengersiw: [
        { q: "Thanos, evrenin yarısını yok etmek için toplam kaç sonsuzluk taşı toplamıştır?", a: ["4", "5", "6", "7"], correct: 2 },
        { q: "Thanos, Ruh Taşı'nı (Soul Stone) almak için hangi gezegene gider?", a: ["Vormir", "Titan", "Zendalar", "Asgard"], correct: 0 },
        { q: "Thor'un Thanos'u öldürmek için cüce Eitri'ye yaptırdığı yeni silahın adı nedir?", a: ["Mjolnir", "Stormbreaker", "Gungnir", "Nightmaul"], correct: 1 },
        { q: "Ruh Taşı'nın koruyuculuğunu (Sonsuzluk nöbetini) hangi eski Marvel karakteri yapmaktadır?", a: ["Loki", "Red Skull", "Odin", "The Collector"], correct: 1 },
        { q: "Doctor Strange, Thanos'a karşı kazanabilecekleri kaç ihtimal olduğunu söyler?", a: ["14.000.605", "1.000.000", "500.200", "14.000"], correct: 0 },
        { q: "Thanos'un Wakanda'da Vision'ın kafasından sökerek aldığı son taş hangisidir?", a: ["Zaman Taşı", "Zihin Taşı", "Güç Taşı", "Gerçeklik Taşı"], correct: 1 },
        { q: "Kaptan Amerika ve ekibi, Vision'ı korumak ve taşı güvenle sökmek için hangi ülkeye gider?", a: ["Sokovia", "Wakanda", "Asgard", "Kamar-Taj"], correct: 1 },
        { q: "Zaman Taşı'nı koruyan Doctor Strange, taşı Thanos'a kimin hayatını kurtarmak için verir?", a: ["Iron Man (Tony Stark)", "Spider-Man", "Star-Lord", "Wong"], correct: 0 },
        { q: "Filmin ikonik başlangıç sahnesinde Thanos tarafından öldürülen Thor'un kardeşi kimdir?", a: ["Hela", "Loki", "Heimdall", "Balder"], correct: 1 },
        { q: "Filmin sonunda evrenin yarısı yok olurken toz bulutuna dönüşen ilk kahraman kimdir?", a: ["Black Panther", "Bucky Barnes", "Spider-Man", "Groot"], correct: 1 }
    ],
    arog: [
        { q: "Arif'in yontma taş devrinde kurduğu futbol takımının adı nedir?", a: ["Yaba Spora", "Gora Gücü", "Taş Çağı İdman Yurdu", "Arog United"], correct: 0 },
        { q: "Arif'i zaman makinesiyle yontma taş devrine ışınlayan G.O.R.A'lı düşmanı kimdir?", a: ["Kuna", "Logar", "Toku", "Garavel"], correct: 1 },
        { q: "Arif'in taş devrinde dost olduğu, sürekli 'Arog' diye bağıran kabilenin lideri kimdir?", a: ["Kuyu", "Kağan", "Ceku", "Aziz Arif"], correct: 0 },
        { q: "Arif, taş devri insanlarına çamurdan ne üreterek medeniyeti hızlandırmaya çalışır?", a: ["Tekerlek", "Kiremit/Tuğla", "Çömlek", "Para"], correct: 1 },
        { q: "A.R.O.G filminde maymunlar tarafından yetiştirilen ve Arif'e yardım eden karakter kimdir?", a: ["Dimi", "Mimi", "Kiki", "Timi"], correct: 0 },
        { q: "Arif'in rakip kabile Aroganlar ile yaptığı futbol maçını yöneten hakem kimdir?", a: ["Garavel", "Logar", "Kuna", "Toku"], correct: 3 },
        { q: "Futbol maçında galibiyeti getiren golü Arif hangi efsane vuruş tarzıyla atar?", a: ["Rövaşata", "Volan vuruşu", "Akrep vuruşu", "Dokuz canlı şut"], correct: 0 },
        { q: "Arif, Taş Devri kadınlarına temizlik yapmaları için neyi icat ettirir?", a: ["Çamaşır Suyu", "Bulaşık Süngeri", "Merdaneli Çamaşır Makinesi", "Halı Silkeleyici"], correct: 2 },
        { q: "Arogan kabilesinin şeytani liderinin adı nedir?", a: ["Karga", "Rıfkı", "Yakar", "Kunter"], correct: 0 },
        { q: "Filmin sonunda Arif kendi zamanına dönmeyi başarırken yanında kimi de yanlışlıkla getirir?", a: ["Kuyu", "Dimi", "Bir Maymun", "Logar"], correct: 2 }
    ],
    yanyana: [
        { q: "Yanyana projesindeki ana karakterlerin hikayesinin kesiştiği temel mekan neresidir?", a: ["Okul Kampüsü", "Mahalle Kahvesi", "Aynı Apartman", "Hastane"], correct: 2 },
        { q: "Karakterlerin arasındaki buzların erimesini sağlayan ortak hobi/etkinlik nedir?", a: ["Müzik Grubu", "Futbol Maçı", "Yemek Yapmak", "Tiyatro Oyunu"], correct: 0 },
        { q: "Dram türündeki bu filmde, ana karakterin sakladığı büyük sır ne üzerine kuruludur?", a: ["Maddi Borç", "Gizli Sağlık Problemi", "Yurtdışı Planı", "Kayıp Aile Üyesi"], correct: 1 },
        { q: "Hikayenin kırılma noktasını oluşturan büyük kaza hangi mevsimde gerçekleşir?", a: ["Yaz", "Sonbahar", "Kış", "İlkbahar"], correct: 2 },
        { q: "Filmin afişinde ve sembolünde yer alan renk teması aşağıdakilerden hangisidir?", a: ["Kırmızı-Siyah", "Mavi-Beyaz", "Sarı-Siyah", "Yeşil-Gri"], correct: 1 },
        { q: "Karakterlerden hangisi mahallenin veya apartmanın neşe kaynağı olan bilge yaşlıyı canlandırır?", a: ["Hulusi Bey", "Ahmet Amca", "Rıza Kaptan", "Mehmet Hoca"], correct: 1 },
        { q: "Filmin final sahnesinde tüm karakterlerin bir araya gelerek verdiği mesaj nedir?", a: ["Yalnızlık", "Birlik ve Beraberlik", "Girişimcilik", "Korku"], correct: 1 },
        { q: "Dramatik sahnelerin birinde çalan ve filme damgasını vuran enstrüman hangisidir?", a: ["Gitar", "Piyano", "Keman", "Klarnet"], correct: 2 },
        { q: "Başkarakterin en büyük hayali olan ama gerçekleştirmekte zorlandığı meslek nedir?", a: ["Ressamlık", "Yazarlık", "Mimarlık", "Yönetmenlik"], correct: 1 },
        { q: "Filmin IMDb puanı kullanıcılar tarafından CinePru'da kaç olarak sembolize edilmiştir?", a: ["8.5", "9.0", "9.5", "10"], correct: 3 }
    ],
    theamazingspiderman: [
        { q: "Andrew Garfield'ın canlandırdığı Peter Parker'ın lisedeki ilk büyük aşkı kimdir?", a: ["Mary Jane Watson", "Gwen Stacy", "Michelle Jones", "Felicia Hardy"], correct: 1 },
        { q: "Peter Parker'ın babasının eski ortağı olan ve 'Kertenkele'ye (Lizard) dönüşen doktor kimdir?", a: ["Dr. Otto Octavius", "Dr. Curt Connors", "Dr. Norman Osborn", "Dr. Miles Warren"], correct: 1 },
        { q: "Peter Parker'a güçlerini veren radyoaktif örümcek hangi şirketin laboratuvarındadır?", a: ["Oscorp", "Stark Industries", "Pym Technologies", "Roxxon"], correct: 0 },
        { q: "Gwen Stacy'nin babasının New York şehrindeki mesleği nedir?", a: ["Belediye Başkanı", "Polis Şefi", "Gazeteci", "Bilim İnsanı"], correct: 1 },
        { q: "Ben Amca'yı (Uncle Ben) vuran hırsızın elinde hangi ayırt edici dövme vardır?", a: ["Yıldız dövmesi", "Akrep dövmesi", "Bileğinde bir dövme", "Dövmesi yoktur"], correct: 2 },
        { q: "Peter Parker, kostümünü tasarlarken maskesinin göz kısımları için ne kullanmıştır?", a: ["Güneş gözlüğü camı", "Kamera merceği", "Özel plastik", "Bisiklet kaskı parçası"], correct: 0 },
        { q: "Dr. Connors'ın sürüngen DNA'sı üzerinde artwork çalışmasının asıl kişisel sebebi nedir?", a: ["Kanser tedavisi", "Eksik kolunu geri çıkartmak", "Ölümsüzlük arayışı", "Askeri silah üretmek"], correct: 1 },
        { q: "Lizard, tüm New York halkını kertenkeleye dönüştürmek için virüsü nereden salmayı planlar?", a: ["Brooklyn Köprüsü", "Oscorp Kulesi", "Özgürlük Anıtı", "Times Square"], correct: 1 },
        { q: "Filmin finalindeki savaşta trajik bir şekilde hayatını kaybeden karakter kimdir?", a: ["George Stacy (Polis Şefi)", "May Hala", "Dr. Connors", "Flash Thompson"], correct: 0 },
        { q: "Peter Parker, örümcek ağlarını atmak için kostümüne ne eklemiştir?", a: ["Biyolojik ağ bezleri", "Mekanik Ağ Fırlatıcıları (Web-Shooters)", "Özel eldivenler", "Ağ tüpü"], correct: 1 }
    ],
    gameofthrones: [
        { q: "Ned Stark'ın yönettiği ve kışın yaklaştığını savunan hanedanlık hangisidir?", a: ["Lannister", "Targaryen", "Stark", "Baratheon"], correct: 2 },
        { q: "Daenerys Targaryen'in başlangıçta kaç ejderhası kuluçkadan çıkmıştır?", a: ["1", "2", "3", "4"], correct: 2 },
        { q: "Jon Snow'un Duvar'da katıldığı, siyah pelerin giyen askeri birliğin adı nedir?", a: ["Altın Grup", "Gece Nöbeti (Night's Watch)", "İnanç Militanları", "Kral Muhafızları"], correct: 1 },
        { q: "Joffrey Baratheon'ın kendi düğününde zehirlenerek öldüğü meşhur olaya ne ad verilir?", a: ["Kanlı Düğün", "Mor Düğün (Purple Wedding)", "Kara Düğün", "Kış Düğünü"], correct: 1 },
        { q: "Lannister hanedanlığının arması olan ve güçlerini simgeleyen hayvan hangisidir?", a: ["Kurt", "Ejderha", "Aslan", "Geyik"], correct: 2 },
        { q: "Duvar'ın ötesinden gelen, canavarları yöneten ve dünyayı dondurmak isteyen ana düşman kimdir?", a: ["Mance Rayder", "Night King (Gece Kralı)", "Ramsay Bolton", "Joffrey"], correct: 1 },
        { q: "Arya Stark'ın Braavos'ta suikast eğitimi aldığı gizemli grubun adı nedir?", a: ["Yüzsüz Adamlar", "Kardeşlik", "Kuzeyin Muhafızları", "Kuzgunlar"], correct: 0 },
        { q: "Robb Stark ve ordusunun ihanete uğrayarak katledildiği o trajik düğün hangisidir?", a: ["Mor Düğün", "Kanlı Düğün (Red Wedding)", "Kuzey Düğünü", "Gümüş Düğün"], correct: 1 },
        { q: "Tyrion Lannister'ın en bilinen lakabı aşağıdakilerden hangisidir?", a: ["Yarım Adam / Küçük Şeytan", "Tazı", "Kral Katili", "Serçe"], correct: 0 },
        { q: "Westeros kıtasındaki tüm hanedanlıkların ele geçirmek istediği o meşhur taht neden yapılmıştır?", a: ["Altın", "Eritilmiş Kılıçlar (Demir Taht)", "Ejderha Kemiği", "Taş ve Zümrüt"], correct: 1 }
    ],
    "12angryman": [
        { q: "Filmin neredeyse tamamı hangi tek mekanda geçmektedir?", a: ["Mahkeme Salonu", "Hapishane Hücresi", "Jüri Odası", "Polis Karakolu"], correct: 2 },
        { q: "Başlangıçta 11 jüri üyesi 'Suçlu' derken, ilk oylamada 'Suçsuz' diyen kaç numaralı jüridir?", a: ["3 Numaralı Jüri", "8 Numaralı Jüri", "1 Numaralı Jüri", "12 Numaralı Jüri"], correct: 1 },
        { q: "Sanık koltuğundaki genç çocuk ne ile suçlanmaktadır?", a: ["Banka Soygunu", "Babasını öldürmek", "Dükkan yağmalamak", "İhanet"], correct: 1 },
        { q: "8 Numaralı Jüri (Henry Fonda), cinayet silahı olan çakı hakkında neyi kanıtlayarak jürinin şüphe duymasını sağlar?", a: ["Bıçağın kırık olduğunu", "Aynısından kendisinde de olduğunu ve kolayca bulunabildiğini", "Bıçakta parmak izi olduğunu", "Bıçağın sanığa ait olmadığını"], correct: 1 },
        { q: "Cinayeti gördüğünü iddia eden yaşlı adamın ifadesi neden çürütülür?", a: ["Yalan söylediği için", "Felçli olduğu için o sürede kapıya yetişmesi imkansız olduğundan", "Kör olduğu için", "O sırada uyuduğu için"], correct: 1 },
        { q: "Karşı binada oturan kadının cinayeti yatağından gördüğü iddiası hangi detayla geçersiz kılınır?", a: ["Gözlük takıyordu ve yatarken gözlüğü yoktu", "O sırada elektrikler kesikti", "Önünden tren geçiyordu", "Kadın aslında kördü"], correct: 0 },
        { q: "Jüri odasındaki havanın gerginliğini ve bunaltıcılığını fiziksel olarak artıran durum nedir?", a: ["Dışarıda fırtına çıkması", "Vantilatörün çalışmaması ve havanın aşırı sıcak olması", "Odanın kilitli kalması", "Işıkların bozulması"], correct: 1 },
        { q: "Sanığa karşı kişisel öfkesi yüzünden en son ana kadar 'Suçlu' diye direten jüri üyesi kimdir?", a: ["3 Numaralı Jüri", "7 Numaralı Jüri", "10 Numaralı Jüri", "1 Numaralı Jüri"], correct: 0 },
        { q: "Jürinin kararının mahkemede geçerli sayılması için gereken şart nedir?", a: ["Çoğunluğun kararı", "Oy birliği (12 kişinin de aynı kararda olması)", "En yaşlı jürinin kararı", "Hakimin onayı"], correct: 1 },
        { q: "8 Numaralı Jüri üyesinin filmin sonunda odadan çıkarken öğrendiğimiz ismi nedir?", a: ["Davis", "McCardle", "Smith", "Johnson"], correct: 0 }
    ],
    thegodfather: [
        { q: "Don Vito Corleone'nin düğün gününde kapısını çalan insanlara yardım etmesinin sebebi nedir?", a: ["Para kazanmak", "Sicilya geleneklerine göre hiçbir Sicilyalının düğün gününde istekleri reddedememesi", "Siyasi güç elde etmek", "Polisten kaçmak"], correct: 1 },
        { q: "Vito Corleone'nin en büyük, asabi ve agresif olan, otobanda pusuya düşürülüp öldürülen oğlunun adı nedir?", a: ["Michael", "Fredo", "Santino (Sonny)", "Tom Hagen"], correct: 2 },
        { q: "Film yapımcısı Jack Woltz, Corleone ailesinin isteğini reddedince sabah yatağında ne bulmuştur?", a: ["Ölü bir koruma", "Kesilmiş bir at kafası", "Kanlı bir mektup", "Dinamit"], correct: 1 },
        { q: "Michael Corleone, babasına suikast düzenleyen Sollozzo og polis şefini nerede vurarak mafya dünyasına adım atar?", a: ["Bir kumarhanede", "İtalyan restoranında", "Kendi evinde", "Sokak ortasında"], correct: 1 },
        { q: "Corneone ailesinin hukuki işlerine bakan, aileden sayılan evlatlık danışmanın (Consigliere) adı nedir?", a: ["Tom Hagen", "Peter Clemenza", "Salvatore Tessio", "Luca Brasi"], correct: 0 },
        { q: "Michael Corleone cinayetlerden sonra saklanmak ve can güvenliğini korumak için nereye kaçar?", a: ["Las Vegas", "Sicilya", "Roma", "Miami"], correct: 1 },
        { q: "Don Vito Corleone, filmin sonlarına doğru nerede kalp krizi geçirerek hayatını kaybeder?", a: ["Ofisinde çalışırken", "Domates bahçesinde torunuyla oynarken", "Restoranda yemek yerken", "Yatağında uyurken"], correct: 1 },
        { q: "Michael Corleone, ailenin başına geçtikten sonra düşmanlarını ne zaman toplu bir suikastla temizletir?", a: ["Kardeşinin düğününde", "Yeğeninin vaftiz töreninde (Vaftiz Sahnesi)", "Yılbaşı gecesinde", "Cenaze töreninde"], correct: 1 },
        { q: "Corleone ailesine ihanet ettiği için Michael tarafından Las Vegas'ta koruması tarafından boğdurulan enişte kimdir?", a: ["Carlo Rizzi", "Tessio", "Sollozzo", "Barzini"], correct: 0 },
        { q: "Don Vito Corleone, filmin sonlarına doğru nerede kalp krizi geçirerek hayatını kaybeder?", a: ["Para her kapıyı açar", "Ona reddedemeyeceği bir teklif yapacağım", "Dostunu yakın tut, düşmanını daha yakın", "Adalet mahkemede değil sokaktadır"], correct: 1 }
    ],
    esaretinbedeli: [
        { q: "Andy Dufresne, hangi mesleği yaptığı için hapishanede gardiyanların ve müdürün işlerine yardım etmiştir?", a: ["Avukatlık", "Bankacılık / Muhasebe", "Öğretmenlik", "Doktorluk"], correct: 1 },
        { q: "Andy Dufresne, hangi mesleği yaptığı için hapishanede gardiyanların ve müdürün işlerine yardım etmiştir?", a: ["Red (Morgan Freeman)", "Brooks", "Tommy", "Heywood"], correct: 0 },
        { q: "Andy Dufresne, Shawshank hapishanesinde kaç yıl esir kaldıktan sonra kaçmayı başarmıştır?", a: ["10", "15", "19", "25"], correct: 2 },
        { q: "Andy, hücre duvarındaki tüneli kazmak için Red'den ne sipariş etmiştir?", a: ["Büyük bir kazma", "Küçük bir kaya çekici (Rock Hammer)", "Tornavida", "Demir testeresi"], correct: 1 },
        { q: "Hapishane kütüphanesini yıllarca yöneten, şartlı tahliye olduktan sonra dış dünyaya alışamayarak intihar eden yaşlı karakter kimdir?", a: ["Brooks Hatlen", "Tommy Williams", "Captain Byron", "Samuel Norton"], correct: 0 },
        { q: "Andy Dufresne hapishaneden kaçarken tünelden sonra nereden sürünerek özgürlüğe ulaşmıştır?", a: ["Havalandırma borusundan", "Kanalizasyon (Pislik) borusundan", "Çamaşırhane sepetinden", "Mutfak kapısından"], correct: 1 },
        { q: "Andy, hapishane müdürü Norton'ın kara paralarını aklarken hangi hayali ismi kullanmıştır?", a: ["Randall Stephens", "Peter Stevens", "John Dufresne", "Ellis Boyd"], correct: 0 },
        { q: "Andy, kaçış planını tamamladıktan sonra Red've buluşmaları için işaret ettiği Meksika'daki o sahil kasabasının adı nedir?", a: ["Zihuatanejo", "Cancun", "Tijuana", "Acapulco"], correct: 0 },
        { q: "Andy'nin hücre duvarındaki tüneli gizlemek için kullandığı ilk ikonik poster kime aittir?", a: ["Marilyn Monroe", "Rita Hayworth", "Raquel Welch", "Audrey Hepburn"], correct: 1 },
        { q: "Andy'nin suçsuz olduğunu kanıtlayabilecek olan ama Müdür Norton tarafından susturulmak için öldürtülen genç mahkum kimdir?", a: ["Tommy Williams", "Brooks", "Bogs", "Elmo Blatch"], correct: 0 }
    ],
    hababamsinifi: [
        { q: "Hababam Sınıfı'nın haylazlıklarına karşı sürekli disiplin sağlamaya çalışan Kel Mahmut'un asıl branşı nedir?", a: ["Matematik", "Tarih", "Coğrafya", "Edebiyat"], correct: 1 },
        { q: "İnek Şaban karakterini canlandıran Türk sinemasının efsane oyuncusu kimdir?", a: ["Tarık Akan", "Kemal Sunal", "Halit Akçatepe", "Münir Özkul"], correct: 1 },
        { q: "Hababam Sınıfı öğrencilerinin okuldan kaçıp sürekli gittikleri o meşhur futbol maçı hangi takımların arasındadır?", a: ["Galatasaray - Fenerbahçe", "Fenerbahçe - Beşiktaş", "Beşiktaş - Galatasaray", "Trabzonspor - Fenerbahçe"], correct: 0 },
        { q: "Sınıfa yeni gelen ve Hafize Ana'nın kızı olan, Hababam Sınıfı'nın başta erkek zannedip trollediği karakter kimdir?", a: ["Semra Hoca", "Ayşegül", "Hürrem", "Filiz"], correct: 1 },
        { q: "Şaban'ın meşhur 'Aç kapıyı Veysel Efendi' repliğinde bahsettiği okulun kapıcısının adı nedir?", a: ["Veysel Efendi", "Rıza Efendi", "Ahmet Efendi", "Hasan Efendi"], correct: 0 },
        { q: "Sınıfın yakışıklısı lakabıyla bilinen, Tarık Akan'ın canlandırdığı karakterin adı nedir?", a: ["Güdük Necmi", "Damat Ferit", "Tulum Hayri", "Hayta İsmail"], correct: 1 },
        { q: "Hababam Sınıfı'nın kopya çekmek için geliştirdiği ama Kel Mahmut'a yakalandığı meşhur yöntem hangisidir?", a: ["Sıraya yazma", "Tavana asma / Ayakkabı altına yazma", "Kulaklıkla dinleme", "Arkadaşından bakma"], correct: 1 },
        { q: "Sınıfın sürekli uyuyan, uykucu lakaplı jenerasyonel karakteri kimdir?", a: ["Tulum Hayri", "Domdom Ali", "Hayta İsmail", "Uykucu Yaşar"], correct: 3 },
        { q: "Edebiyat derslerine giren, şairliğiyle bilinen ve öğrencilerin şiirleriyle dalga geçtiği hoca kimdir?", a: ["Badi Ekrem", "Akil Hoca", "Şevket Hoca", "Avni Hoca"], correct: 1 },
        { q: "Kırmızı eşofmanıyla hafızalara kazınan, sınıfa sürekli takla attırmaya çalışan beden eğitimi hocası kimdir?", a: ["Kel Mahmut", "Badi Ekrem (Şener Şen)", "Kül Yutmaz", "Paşa Nuri"], correct: 1 }
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