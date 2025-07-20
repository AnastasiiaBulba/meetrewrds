// Header Builder
async function buildHeader() {
  const headerPlaceholder = document.getElementById("header-placeholder");
  if (!headerPlaceholder) return;

  try {
    const response = await fetch("./game-components/header.html");
    const headerHTML = await response.text();
    headerPlaceholder.innerHTML = headerHTML;
  } catch (error) {
    console.error("Error loading header:", error);
    // Fallback header if file loading fails
    const fallbackHeader = `
            <header>
                <div class="header-container">
                    <a href="./" class="logo">meetrewrds.com</a>
                    <nav>
                        <ul class="nav-menu">
                            <li><a href="./">Home</a></li>
                            <li><a href="./brawl-news.html">News</a></li>
                            <li><a href="./brawl-contacts.html">Contact</a></li>
                        </ul>
                    </nav>
                    <div class="mobile-menu-toggle" onclick="toggleMobileMenu()">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div class="mobile-menu" id="mobile-menu">
                    <div class="mobile-menu-close" onclick="toggleMobileMenu()">×</div>
                    <a href="./">Home</a>
                    <a href="./brawl-news.html">News</a>
                    <a href="./brawl-contacts.html">Contact</a>
                </div>
            </header>
        `;
    headerPlaceholder.innerHTML = fallbackHeader;
  }
}

// Footer Builder
async function buildFooter() {
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (!footerPlaceholder) return;

  try {
    const response = await fetch("./game-components/footer.html");
    const footerHTML = await response.text();

    // Replace the year placeholder with current year
    const currentYear = new Date().getFullYear();
    const updatedFooterHTML = footerHTML.replace("2025", currentYear);

    footerPlaceholder.innerHTML = updatedFooterHTML;
  } catch (error) {
    console.error("Error loading footer:", error);
    // Fallback footer if file loading fails
    const currentYear = new Date().getFullYear();
    const fallbackFooter = `
            <footer>
                <div class="footer-container">
                    <div class="footer-content">
                        <div class="footer-section">
                            <h3>Contact Information</h3>
                            <p>Email: connection@meetrewrds.com</p>
                            <p>Phone: +1 (902) 447-5744</p>
                            <p>Location: 9247 Main Street, Halifax, NS B3K 5N3, Canada</p>
                        </div>
                        <div class="footer-section">
                            <h3>Legal</h3>
                            <p><a href="./brawl-cookies.html">Cookie Policy</a></p>
                            <p><a href="./brawl-privacy.html">Privacy Policy</a></p>
                            <p><a href="./brawl-disclaimer.html">Disclaimer</a></p>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>&copy; ${currentYear} meetrewrds.com. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
    footerPlaceholder.innerHTML = fallbackFooter;
  }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu) {
    mobileMenu.classList.toggle("active");
  }
}

// Initialize components when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  buildHeader();
  buildFooter();
});
