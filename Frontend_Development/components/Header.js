const Header = () => {
  const header = document.querySelector("header");
  const headerNav = `
          <ul class="header-nav__ul">
          <li><a href="/index.html#top">Home</a></li>
          <li><a href="/index.html#latest-recipes">Recipes</a></li>
          <li><a href="/index.html#about-us">Our Team</a></li>
          <li id="header-cta-li-popup">Contact Us</li>
        </ul>
  `;
  header.innerHTML = `
        <div class="header-menu-popup">
          ${headerNav}
        </div>
          <a href="/index.html" class="header-logo">recipes.com</a>
      <nav class="header-nav">
                  <ul class="header-nav__ul">
          <li><a href="/index.html#top">Home</a></li>
          <li><a href="/index.html#latest-recipes">Recipes</a></li>
          <li><a href="/index.html#about-us">Our Team</a></li>
          <li id="header-cta-li">Contact Us</li>
        </ul>
      </nav>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        id="header-menu-btn"
        data-open="false"
      ><path d="M4 12h16" />
               <path d="M4 18h16" />
               <path d="M4 6h16" />
      </svg>
  `;

  const headerMenuBtn = document.getElementById("header-menu-btn");
  headerMenuBtn.addEventListener("click", () => {
    const isOpen = headerMenuBtn.dataset.open;
    const headerMenuDiv = document.querySelector(".header-menu-popup");
    if (isOpen === "false") {
      headerMenuBtn.dataset.open = "true";
      headerMenuDiv.style.display = "flex";
      headerMenuBtn.innerHTML = `
        <path d="M18 6 6 18" />
  <path d="m6 6 12 12" />`;
    } else {
      headerMenuBtn.dataset.open = "false";
      headerMenuDiv.style.display = "none";
      headerMenuBtn.innerHTML = `<path d="M4 12h16" />
               <path d="M4 18h16" />
               <path d="M4 6h16" />`;
    }
  });
};

export default Header;
