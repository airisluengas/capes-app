const formFields = [
  { name: "name", text: "Name", placeholder: "Karen Ken", element: "input" },
  {
    name: "email",
    text: "Email Address",
    placeholder: "karen@ken.com",
    element: "input",
    error: {
      "no-email": "This is a required field",
      invalid: "Enter a valid email",
    },
  },
  {
    name: "subject",
    text: "Subject",
    placeholder: "The recipes are not unique at all!",
    element: "input",
    error: {
      "no-subject": "This is a required field",
      invalid: "Subject title should be at least 8 characters long",
    },
  },
  {
    name: "content",
    text: "Content",
    placeholder:
      "I honestly don’t know how you can advertise your site as having “unique” recipes when they are clearly the same basic ones I’ve seen a million times on the internet. Banana bread? Really? That’s your idea of “original”? I hope you fix this, because right now, your site is not living up to its promises.",
    element: "textarea",
    error: {
      "no-content": "This is a required field",
      invalid: "Content should be at least 50 characters long",
    },
  },
];

const ContactForm = (imgSrc) => {
  const contactFormOverlay = document.getElementById("contact-us__overlay");
  contactFormOverlay.innerHTML = `
    <div id="contact-us__form-div">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="close-contactForm-btn"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        <img
          src=${imgSrc}
          alt=""
          class="contact-us__img"
        />
        <div class="contact-us__div">
            <h4>Have some issues? Talk to us.</h4>

            <form id="contact-us__form">
            ${formFields
              .map(
                (field) => `<div class="contact-us__input-div">
                    <label for=${field.name}>${field.text}</label>
                    <${field.element} type="text" name=${field.name} id=${
                  field.name
                } placeholder="${field.placeholder} "
                    ${field.element === "input" ? 'type="text"' : ""}></${
                  field.element
                }>
                
                    <div id="${
                      field.name
                    }-error-display" class="contact-us__form-input-error"></div>
                    </div>`
              )
              .join("")}
            <button id="submit-contactForm-btn">Submit</button>
            </form>
        </div>
      </div>
    `;

  const validateInputs = () => {
    let isFormValid = true;
    const inputs = {
      email: {
        value: document.getElementById("email").value.trim(),
        errorDisplay: document.getElementById("email-error-display"),
        validation: (value) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!value) return "* This is a required field.";
          if (!emailRegex.test(value)) return "* Enter a valid email.";
          return false;
        },
      },
      subject: {
        value: document.getElementById("subject").value.trim(),
        errorDisplay: document.getElementById("subject-error-display"),
        validation: (value) => {
          if (!value) return "* This is a required field.";
          if (value.length < 8)
            return "* Subject title should be at least 8 characters long.";
          return false;
        },
      },
      content: {
        value: document.getElementById("content").value.trim(),
        errorDisplay: document.getElementById("content-error-display"),
        validation: (value) => {
          if (!value) return "* This is a required field.";
          if (value.length < 50)
            return "* Content should be at least 50 characters long.";
          return false;
        },
      },
    };

    for (const input in inputs) {
      const { value, errorDisplay, validation } = inputs[input];
      const errorMessage = validation(value);
      errorDisplay.innerHTML = errorMessage ? `<p>${errorMessage}</p>` : "";
      if (errorMessage) {
        isFormValid = false;
      }
    }

    if (isFormValid) {
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("content").value = "";
      return isFormValid;
    }
  };

  const form = document.getElementById("contact-us__form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formValid = validateInputs();
    if (formValid) {
      const toastDiv = document.createElement("div");
      toastDiv.classList.add("toast");
      toastDiv.innerHTML = `
        <p>Message sent!</p>`;
      const parentElement = document.body;
      parentElement.appendChild(toastDiv);
      setTimeout(() => {
        parentElement.removeChild(toastDiv);
      }, 3000);
    }
  });
};

export default ContactForm;
