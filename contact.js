document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      event.preventDefault();
    }
  });
document.querySelectorAll('a[href^="Prarthanagade25@gmail.com"]').forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    emailjs
      .send("service_flbs32g", "YOUR_TEMPLATE_ID", {
        from_name: name,
        from_email: email,
        message: message,
      })
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("Your message has been sent successfully!");
        },
        function (error) {
          console.log("FAILED...", error);
          alert("There was an error sending your message. Please try again.");
        }
      );
  });

