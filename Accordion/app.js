const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        // Toggle 'active' class on the clicked FAQ
        faq.classList.toggle("active");

        // Close other FAQs
        faqs.forEach(otherFaq => {
            if (otherFaq !== faq) {
                otherFaq.classList.remove("active");
            }
        });
    });
});
