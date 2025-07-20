// News Page Manager
class NewsPageManager {
  constructor() {
    this.updatesContainer = document.getElementById("updates-container");
    this.diariesContainer = document.getElementById("diaries-container");
    this.init();
  }

  async init() {
    await this.loadUpdates();
    await this.loadDiaries();
  }

  async loadUpdates() {
    try {
      const response = await fetch("./data/updates.json");
      const updates = await response.json();
      this.renderUpdates(updates);
    } catch (error) {
      console.error("Error loading updates:", error);
      this.renderDefaultUpdates();
    }
  }

  async loadDiaries() {
    try {
      const response = await fetch("./data/diaries.json");
      const diaries = await response.json();
      this.renderDiaries(diaries);
    } catch (error) {
      console.error("Error loading diaries:", error);
      this.renderDefaultDiaries();
    }
  }

  renderUpdates(updates) {
    if (!this.updatesContainer) return;

    const updatesHTML = updates
      .map(
        (update, index) => `
            <div class="news-card">
                <div class="news-content">
                    <div class="news-date">${update.date}</div>
                    <h3 class="news-title">${update.title}</h3>
                    <p class="news-excerpt">${update.excerpt}</p>
                    <div class="news-full" id="update-full-${index}">
                        ${update.fullText}
                    </div>
                    <button class="read-more-btn" onclick="toggleReadMore('update-full-${index}', this)">
                        Read more
                    </button>
                </div>
            </div>
        `
      )
      .join("");

    this.updatesContainer.innerHTML = updatesHTML;
  }

  renderDiaries(diaries) {
    if (!this.diariesContainer) return;

    const diariesHTML = diaries
      .map(
        (diary, index) => `
            <div class="news-card">
                <div class="news-content">
                    <div class="news-date">${diary.date}</div>
                    <h3 class="news-title">${diary.title}</h3>
                    <p class="news-excerpt">${diary.excerpt}</p>
                    <div class="news-full" id="diary-full-${index}">
                        ${diary.fullText}
                    </div>
                    <button class="read-more-btn" onclick="toggleReadMore('diary-full-${index}', this)">
                        Read more
                    </button>
                </div>
            </div>
        `
      )
      .join("");

    this.diariesContainer.innerHTML = diariesHTML;
  }

  renderDefaultUpdates() {
    if (!this.updatesContainer) return;

    const defaultUpdates = [
      {
        title: "New Desert Map Released!",
        date: "April 22, 2025",
        excerpt:
          "We're excited to announce the biggest update yet - the Desert Adventure Map! Players can now explore scorching sands and ancient ruins with Leon.",
        fullText:
          "The Desert Adventure Map introduces a completely new environment to Brawl Star Leon Rush. Players can now guide Leon through scorching sands, ancient ruins, and mysterious oases. The new map features unique obstacles like sandstorms, quicksand pits, and crumbling structures that test your jumping skills like never before. Additionally, we've added 20+ new coin types, including rare golden coins that can only be found in special desert events. The map also includes new enemy types like desert scorpions and sand snakes that add extra challenge to your runs. We've received amazing feedback from our beta testers, and we can't wait to see how far players can guide Leon in this challenging new environment!",
        image: "cardNew1.jpg",
      },
      {
        title: "Night Forest Challenge Event",
        date: "May 8, 2025",
        excerpt:
          "Get ready for the most thrilling challenge in Brawl Star Leon Rush! Special night-themed obstacles and limited-time rewards will be available.",
        fullText:
          "The Night Forest Challenge is approaching, and we're bringing the mystery and danger to Brawl Star Leon Rush! Starting January 20th, players will guide Leon through a dark forest filled with mysterious creatures and hidden dangers. The night environment features reduced visibility, making timing your jumps even more critical. Special night-themed coins and rare skins will be available only during this event. We're also introducing new enemy types like shadow wolves and night owls that appear only in the darkness. The event will run until February 5th, so make sure to collect all the nocturnal items while they're available!",
        image: "cardNew2.jpg",
      },
      {
        title: "Performance Improvements",
        date: "April 15, 2025",
        excerpt:
          "We've optimized the game engine for smoother gameplay and faster loading times across all devices.",
        fullText:
          "Our development team has been working hard to improve the overall performance of Brawl Star Leon Rush. The latest update includes significant optimizations to the game engine, resulting in smoother animations and faster loading times. We've also improved the mobile experience with better touch controls and reduced battery consumption. The jumping mechanics have been refined for more responsive gameplay, and the coin collection system now loads twice as fast. These improvements ensure that players can enjoy the game seamlessly across all devices, from smartphones to desktop computers.",
        image: "cardNew3.jpg",
      },
    ];

    this.renderUpdates(defaultUpdates);
  }

  renderDefaultDiaries() {
    if (!this.diariesContainer) return;

    const defaultDiaries = [
      {
        title: "My First 10,000 Point Run",
        date: "May 3, 2025",
        excerpt:
          "After weeks of practice and perfecting my timing, I finally achieved my first 10,000 point run. Here's my journey and some tips for new players.",
        fullText:
          "When I first started playing Brawl Star Leon Rush, I had no idea how addictive this game would become. My journey began with simple runs, collecting basic coins and learning the jumping mechanics. As I progressed, I discovered the joy of perfect timing and strategic coin collection. The key to achieving high scores is patience and persistence. I learned to focus on timing my jumps perfectly - my first major breakthrough came when I mastered the double-jump technique. The most challenging part was avoiding the enemies while collecting coins, but the satisfaction of achieving a high score made it all worthwhile. My advice to new players: start with the basic maps and master the timing before moving to advanced challenges. Also, don't forget to upgrade Leon's abilities with the coins you collect - it makes a huge difference in your performance!",
        image: "cardNew1.jpg",
      },
      {
        title: "The Dungeon Path Adventure",
        date: "April 28, 2025",
        excerpt:
          "Exploring the new dungeon path revealed some of the most challenging yet rewarding obstacles I've ever encountered with Leon.",
        fullText:
          "The dungeon path is definitely the most challenging route in the game, but it's also the most rewarding. The path features narrow corridors, deadly traps, and unpredictable obstacles that test your timing and reflexes to the limit. However, the coins you find here are absolutely unique - dungeon treasures, ancient artifacts, and magical items that you won't find anywhere else. I spent three days mastering this path, and the effort was worth it. My 'Dungeon Explorer' skin collection is now one of my favorites, featuring armor pieces, magical accessories, and ancient weapons. The key to success on this path is to practice the timing of your jumps and to be patient - some of the best items are hidden behind the most dangerous obstacles. I recommend trying this path only after you've mastered the basic controls and have some experience with the game.",
        image: "cardNew2.jpg",
      },
      {
        title: "Coin Collection Strategies",
        date: "May 12, 2025",
        excerpt:
          "After collecting coins for months, I've learned some valuable strategies that I want to share with the community.",
        fullText:
          "Coin collection is the heart of Brawl Star Leon Rush, and mastering it can make the difference between a good player and a great one. My first tip is to always prioritize golden coins over regular ones - they're worth more and often unlock rare skins. Secondly, focus on one map at a time. Mastering a particular environment allows you to build expertise and create more efficient collection routes. Third, don't neglect the timing of your jumps - perfect timing means more coins collected and fewer lives lost. Finally, participate in community events and challenges. These often provide rare coins and exclusive skins that can't be obtained through regular gameplay. The collection aspect of this game is what keeps me coming back - there's always a new skin to unlock or a higher score to achieve!",
        image: "cardNew3.jpg",
      },
    ];

    this.renderDiaries(defaultDiaries);
  }
}

// Modal functionality
function showModal(content, title, image = null) {
  // Create modal overlay
  const modalOverlay = document.createElement("div");
  modalOverlay.className = "modal-overlay";
  modalOverlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  // Create modal content
  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";
  modalContent.style.cssText = `
    background: rgba(26, 26, 46, 0.95);
    padding: 2rem;
    border-radius: 12px;
    max-width: 600px;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
    margin: 1rem;
    border: 2px solid #ffd700;
    color: #e0e0e0;
  `;

  // Create close button
  const closeButton = document.createElement("button");
  closeButton.innerHTML = "×";
  closeButton.style.cssText = `
    position: absolute;
    top: 10px;
    right: 15px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #ffd700;
  `;

  // Add content to modal
  let modalHTML = `<h2 style="margin-bottom: 1rem; color: #ffd700;">${title}</h2>`;

  if (image) {
    modalHTML += `<img src="./contentImg/${image}" alt="${title}" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 1rem;">`;
  }

  modalHTML += `<div style="line-height: 1.6; color: #e0e0e0;">${content}</div>`;

  modalContent.innerHTML = modalHTML;

  // Add close button to modal
  modalContent.appendChild(closeButton);

  // Add modal to page
  modalOverlay.appendChild(modalContent);
  document.body.appendChild(modalOverlay);

  // Close modal functionality
  function closeModal() {
    document.body.removeChild(modalOverlay);
  }

  closeButton.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });
}

// Toggle read more functionality
function toggleReadMore(elementId, button) {
  const fullText = document.getElementById(elementId);
  if (fullText) {
    const content = fullText.innerHTML;
    const titleElement = fullText.previousElementSibling.previousElementSibling;
    const title = titleElement.textContent;

    // Get the card element to find the image
    const cardElement = fullText.closest(".news-card");
    const cardIndex = Array.from(cardElement.parentNode.children).indexOf(
      cardElement
    );

    // Check if this card should show image (exclude specific cards)
    const excludedTitles = [
      "New Desert Map Released!",
      "The Dungeon Path Adventure",
      "Coin Collection Strategies",
    ];

    let image = null;
    if (!excludedTitles.includes(title)) {
      // Determine which image to use based on card index (random selection)
      const images = ["cardNew1.jpg", "cardNew2.jpg", "cardNew3.jpg"];
      const imageIndex = cardIndex % 3; // Use modulo to cycle through images
      image = images[imageIndex];
    }

    if (fullText.classList.contains("show")) {
      fullText.classList.remove("show");
      button.textContent = "Read more";
      button.classList.remove("hidden");
    } else {
      showModal(content, title, image);
    }
  }
}

// Initialize the news page manager
document.addEventListener("DOMContentLoaded", function () {
  new NewsPageManager();
});
