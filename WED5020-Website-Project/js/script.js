document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("enquiryForm");
    const message = document.getElementById("formMessage");

    if (form && message) {

        form.addEventListener("submit", (event) => {

            event.preventDefault();

            message.textContent =
                "Thank you. Your enquiry has been captured for this website demonstration.";

            form.reset();
        });
    }
});