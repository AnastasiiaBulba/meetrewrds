// Homepage JavaScript
class HomepageManager {
  constructor() {
    this.reviewsContainer = document.getElementById("reviews-container");
    this.init();
  }

  async init() {
    await this.loadReviews();
  }

  async loadReviews() {
    try {
      const response = await fetch("./data/reviews.json");
      const reviews = await response.json();
      this.renderReviews(reviews);
    } catch (error) {
      console.error("Error loading reviews:", error);
      this.renderDefaultReviews();
    }
  }

  renderReviews(reviews) {
    if (!this.reviewsContainer) return;

    const reviewsHTML = reviews
      .map(
        (review) => `
            <div class="review-card">
                <div class="review-author">${review.author}</div>
                <div class="review-text">"${review.text}"</div>
            </div>
        `
      )
      .join("");

    this.reviewsContainer.innerHTML = reviewsHTML;
  }

  renderDefaultReviews() {
    if (!this.reviewsContainer) return;

    const defaultReviews = [
      {
        author: "LeonRunner",
        text: "This game is absolutely addictive! I love helping Leon jump through obstacles and collecting all the coins. The timing mechanics are perfect and the different maps keep it exciting.",
      },
      {
        author: "CoinCollector",
        text: "Perfect game for quick breaks! The jumping mechanics are smooth and the coin collection system is really satisfying. I love unlocking new skins for Leon.",
      },
      {
        author: "JumpMaster",
        text: "My kids love this game! It's educational and fun at the same time. They learn about timing and coordination while having a blast helping Leon run and jump.",
      },
      {
        author: "SurvivalPro",
        text: "Great casual game with beautiful graphics. The different themed maps keep things interesting, and I love discovering new coins and skins for Leon.",
      },
      {
        author: "BrawlStar",
        text: "Amazing game! The desert map is my favorite - so challenging but rewarding. The golden coins are worth the extra effort!",
      },
      {
        author: "SpeedRunner",
        text: "This game tests your reflexes perfectly. I've been playing for hours and still discovering new strategies. Highly recommended!",
      },
    ];

    this.renderReviews(defaultReviews);
  }
}

// Scroll to game function
function scrollToGame() {
  const gameSection = document.querySelector(".game-section");
  if (gameSection) {
    gameSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Initialize homepage when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  new HomepageManager();
});
