// ====================
    // Game Data
    // ====================
    const games = [
        {
            title: "Geometry Arrow",
            url: "https://html5.gamedistribution.com/9ee26ba4405c456094c70af7dc31a524/",
            image: "https://thaka.bing.com/th?id=OCGE.9p3gwtlnq3ss_abtesting_5b94664e-e219-4847-ae91-bc1ce2166b6e_webp&w=128&h=128&qlt=80&c=0&rs=1"
        },
        {
            title: "Soccer Head",
            url: "https://html5.gamedistribution.com/30d4a2b0a84242ba9844124d1b2401d2/",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBw1Q46kBIMQtw7ll50JGyYFXt3FuX3wp8jA&s"
        },
        {
            title: "Minecraft 1.8.8",
            url: "mine18.html",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDZrPgCIqq_LJM1aAJ8qx-rM41maieeGHlWA&s"
        },
        {
            title: "Minecraft 1.12.2",
            url: "mine12.html",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX3Wgs4edg1CcRTQcBeI43yMU3uJfDEr6EPA&s"
        },
        {
            title: "Road Rush 3D",
            url: "https://html5.gamedistribution.com/0d6c422de82f4f6b832697ed1da3c0b7/",
            image: ""
        },
        {
            title: "Gunspin",
            url: "https://r2.maddox.page/html/gun_spin/",
            image: ""
        },
        {
            title: "Snowrider",
            url: "https://html5.gamedistribution.com/3b79a8537ebc414fb4f9672a9b8c68c8/",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyj6msCs9pE9mi-LsYyA5wvKH10yFeGanGyg&s"
        },
        {
            title: "Super Soccer Noggins",
            url: "https://html5.gamedistribution.com/e9020d1fa4bd48d6ad5da5c6981faa0c/",
            image: ""
        },
        {
            title: "Noob Biker",
            url: "noobbiker.html",
            image: ""
        },
        {
            title: "Block Blast",
            url: "blockblast.html",
            image: ""
        },
        {
            title: "Fruit Ninja",
            url: "fruitninja.html",
            image: ""
        },
        {
            title: "Extreme run 3d",
            url: "extremerun.html",
            image: ""
        },
        {
            title: "Escape the prison (stick man)",
            url: "Stickman.html",
            image: "https://codehs.com/uploads/d36aeb36ade6975912b16a4401886aa5"
        },
        {
            title: "Steal a Brainrot",
            url: "stealabrainrot.html",
            image: ""
        },
        {
            title: "1v1 Lol",
            url: "1v1lol.html",
            image: 
        },
        {
            title: "Amongus",
            url: "amongus.html",
            image: ""
        },
        {
            title: "Angrybirds",
            url: "angrybird.html",
            image: ""
        },
        {
            title: "Baldi's Basics",
            url: "baldi.html",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfThFrHW3Wy6Ueqwc0C3-to8y1RMrS579xWghgWhC1it0uBBNskNm6GvlEOr0kRlsjxhrt&s=10"
        },
        { 
            title: "Basket Random",
            url: "basketrandom.html",
            image: ""
        },
        {
           title: "Escape Road",
            url: "escaperoad.html",
            image: ""
        },
        {
            title: "Drift Boss",
            url: "driftbos.html",
            image: ""
        },
        {
            title: "Doomz.io",
            url: "doomzio.html",
            image: ""
        },
        {
            title: "Grow a Garden",
            url: "growagarden.html",
            image:""
        },
        {
            title: "Paper.io",
            url: "paperio.html",
            image: ""
        },
        {
            title: "Plants vs. Zombies 2 Gardenless",
            url: "plantsvzombie.html",
            image: ""
        },
        {
            title: "Flood Runner",
            url: "floodrunner.html",
            image: ""
        },
        {
            title: "Fireboy and Watergirl",
            url: "firebwaterg.html",
            image: ""
        },
        {
            title: "Temple Run 2",
            url: "templerun2.html",
            image: ""
        },
        {
            title: "Traffic Jam 3d",
            url: "trafficjam3d.html",
            image: ""
        },    
        {
            title: "Soccer Random",
            url: "soccerrandom.html",
            image: ""
        },
        {
            title: "Baseball Bros ",
            url: "",
            image: "" 
            
        },
        {
            title: "",
            url: "",
            image: "" 
            
        },
        {
            title: "",
            url: "",
            image: "" 
            
        },
        {
            title: "",
            url: "",
            image: "" 
            
        },
        
    ];

    // ====================
    // DOM Elements
    // ====================
    const cardContainer = document.getElementById('card-container');
    const gameContainer = document.getElementById('game-container');
    const fullscreenIframe = document.getElementById('fullscreen-iframe');
    
    // ====================
    // Functions
    // ====================
    function generateCards() {
        cardContainer.innerHTML = '';
        games.forEach(game => {
            const gameCard = document.createElement('div');
            gameCard.className = 'game-card';
            gameCard.dataset.url = game.url;
            gameCard.innerHTML = `
                <img src="${game.image}" alt="${game.title}">
                <h2>${game.title}</h2>
            `;
            gameCard.addEventListener('click', openGameInFullscreen);
            cardContainer.appendChild(gameCard);
        });
    }

    function openGameInFullscreen(event) {
    event.preventDefault();

    const url = event.currentTarget.dataset.url;
    if (!url) return;
    
    // 1. Remove any previous game URL from session storage
    sessionStorage.removeItem('currentGameUrl');
    
    // 2. Store the new game URL in session storage
    sessionStorage.setItem('currentGameUrl', url);
    
    // 3. Redirect the user to the loader page
    window.location.href = 'loader.html'; 
}




    function loadSettings() {
        const isDark = localStorage.getItem('darkTheme') === 'true';
        document.body.classList.toggle('dark-theme', isDark);
        
        const customBackground = localStorage.getItem('customBackground');
        if (customBackground) {
            document.body.style.backgroundImage = `url('${customBackground}')`;
        }
    }

    // ====================
    // Event Listeners
    // ====================

    document.addEventListener('keydown', function(event) {
        if (event.key === '/' && document.fullscreenElement) {
                event.preventDefault();
            document.exitFullscreen();
        }
    });

    document.addEventListener('fullscreenchange', function() {
        if (!document.fullscreenElement) {
            gameContainer.style.display = 'none';
            document.body.classList.remove('iframe-active');
        }
    });

    // Ensure you call generateCards() when the page loads
window.onload = () => {
    // loadSettings(); // If you use this function
    generateCards();
};
