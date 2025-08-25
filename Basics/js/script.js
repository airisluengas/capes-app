import recipes from "./recipe.js";
import Header from "../components/Header.js";
import ContactForm from "../components/ContactForm.js";

const headerDisplayLogic = (caller) => {
  if (caller === 1) {
    const header = document.querySelector("header");
    const body = document.querySelector("body");
    header.style.backgroundColor = "#36392d";
    header.style.position = "sticky";
    header.style.top = 0;
    body.style.backgroundColor = "#d7dacf";
    return;
  } else {
    return;
  }
};

const recipeSectionScroll = () => {
  const prevButton = document.getElementById("latest-recipes__prev-btn");
  const nextButton = document.getElementById("latest-recipes__next-btn");

  const latestRecipeScrollview = document.getElementById(
    "recipe-scrollview-section__div"
  );

  const scrollAmount = 300;

  prevButton.addEventListener("click", () => {
    latestRecipeScrollview.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  });

  nextButton.addEventListener("click", () => {
    latestRecipeScrollview.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  });

  const scrollBy = "300px";
};

const homePageScript = (caller) => {
  headerDisplayLogic(caller);
  recipeSectionScroll();
  const recipeScrollviewDiv = document.getElementById(
    "recipe-scrollview-section__div"
  );

  const recipeScrollviewHTML = recipes
    .map(
      (
        recipe,
        index
      ) => `        <div class="recipe-scrollview-section__card" data-index=${index}>
          <img
            src=${recipe.image_path}
            alt=""
            class="recipe-scrollview-section__card-img"
          />
          <div class="recipe-scrollview-section__card-overlay">
            <h5 class="recipe-scrollview-section__card-title">${recipe.name}</h5>
          </div>
        </div>`
    )
    .join("");

  recipeScrollviewDiv.innerHTML = recipeScrollviewHTML;

  const recipeScrollViewCards = document.querySelectorAll(
    ".recipe-scrollview-section__card"
  );

  recipeScrollViewCards.forEach((card) => {
    card.addEventListener("click", () => {
      const index = card.dataset.index;
      window.location.href = `index/result.html?index=${index}`;
    });
  });
};

const resultPageLogic = (caller) => {
  headerDisplayLogic(caller);

  const urlParams = new URLSearchParams(window.location.search);
  const recipeIndex = parseInt(urlParams.get("index"));

  const recipeSectionDiv = document.getElementById("recipe-section");

  const recipeSectionHTML = `
      <img src=${
        recipes[recipeIndex].image_path
      } alt="" class="recipe-section__img" />
      <h4 class="recipe-section__title">
        ${recipes[recipeIndex].name}
      </h4>
      <p class="recipe-section__desc">
        ${recipes[recipeIndex].description}
      </p>
      <div class="recipe-section__ingr-proc-div">
        <div class="recipe-section__ingr recipe-section__ingr-proc">
          <h6>Ingredients</h6>
          <ul>
            ${recipes[recipeIndex].recipe
              .map(
                (ingredient, index) => `
                <li><p>${ingredient.amount} ${ingredient.uom} ${ingredient.ingredient}</p></li>
                `
              )
              .join("")}
          </ul>
        </div>
        <div class="recipe-section__proc recipe-section__ingr-proc">
          <h6>Procedure</h6>
          <ul>
            ${recipes[recipeIndex].instructions
              .map(
                (instruction, index) => `
              <li><p>${index + 1}. ${instruction}</p></li>
              `
              )
              .join("")}
          </ul>
        </div>
      </div>
  `;

  recipeSectionDiv.innerHTML = recipeSectionHTML;
};

const contactUsScript = (callerIds) => {
  callerIds.forEach((callerId) => {
    const caller = document.getElementById(callerId);
    caller.addEventListener("click", () => {
      document.getElementById("contact-us__overlay").style.display = "flex";
    });
  });

  const closeContactFormBtn = document.getElementById("close-contactForm-btn");

  closeContactFormBtn.addEventListener("click", () => {
    document.getElementById("contact-us__overlay").style.display = "none";
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  Header();
  if (path.endsWith("/index.html") || path === "/") {
    ContactForm("/images/SpongeBob_Awful_Customer.jpg");
    contactUsScript(["hero-cta-btn", "header-cta-li", "header-cta-li-popup"]);
    homePageScript(0);
  } else if (path.endsWith("/result.html")) {
    ContactForm("../images/SpongeBob_Awful_Customer.jpg");
    contactUsScript(["header-cta-li", "header-cta-li-popup"]);
    resultPageLogic(1);
  } else {
    window.location.href = "/index.html";
  }
});
