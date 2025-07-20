// Cookie Banner Management
class CookieBanner {
  constructor() {
    this.banner = document.getElementById("cookie-banner");
    this.acceptButton = document.getElementById("accept-cookies");
    this.cookieAccepted = localStorage.getItem("cookiesAccepted");
    this.bannerShown = false;

    this.init();
  }

  init() {
    // Check if cookies are already accepted
    if (!this.cookieAccepted) {
      // Show banner after a short delay
      setTimeout(() => {
        this.showBanner();
      }, 1500);
    }

    // Add event listener to accept button
    if (this.acceptButton) {
      this.acceptButton.addEventListener("click", () => this.acceptCookies());
    }

    // Add keyboard support (Enter key)
    document.addEventListener("keydown", (e) => {
      if (
        e.key === "Enter" &&
        this.banner &&
        this.banner.classList.contains("show")
      ) {
        this.acceptCookies();
      }
    });
  }

  showBanner() {
    if (this.banner && !this.bannerShown) {
      this.banner.classList.add("show");
      this.bannerShown = true;

      // Add focus to accept button for accessibility
      if (this.acceptButton) {
        this.acceptButton.focus();
      }
    }
  }

  acceptCookies() {
    // Save acceptance to localStorage
    localStorage.setItem("cookiesAccepted", "true");
    this.cookieAccepted = true;

    // Hide banner with smooth animation
    if (this.banner) {
      this.banner.classList.remove("show");

      // Remove banner from DOM after animation
      setTimeout(() => {
        if (this.banner && this.banner.parentNode) {
          this.banner.parentNode.removeChild(this.banner);
        }
      }, 300);
    }

    // Optional: Track acceptance (for analytics)
    this.trackAcceptance();
  }

  trackAcceptance() {
    // You can add analytics tracking here
    console.log("Cookies accepted by user");

    // Example: Send to analytics service
    // if (typeof gtag !== 'undefined') {
    //   gtag('event', 'cookie_accept', {
    //     'event_category': 'engagement',
    //     'event_label': 'cookie_banner'
    //   });
    // }
  }

  // Method to check if cookies are accepted
  static isAccepted() {
    return localStorage.getItem("cookiesAccepted") === "true";
  }

  // Method to reset cookie acceptance (for testing)
  static resetAcceptance() {
    localStorage.removeItem("cookiesAccepted");
  }
}

// Initialize cookie banner when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  new CookieBanner();
});

// Export for potential use in other scripts
if (typeof module !== "undefined" && module.exports) {
  module.exports = CookieBanner;
}
