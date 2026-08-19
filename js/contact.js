(() => {
  const form = document.getElementById("contactForm");
  const formStatus = document.getElementById("form-status");
  if (!form || !formStatus) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector(".submit-btn");
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";
    }

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Form submission failed");

      formStatus.textContent = "Thanks — I will get back to you soon.";
      formStatus.className = "form-status success";
      form.reset();
    } catch (_) {
      formStatus.textContent = "Something went wrong. Please email me directly.";
      formStatus.className = "form-status error";
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";
      }
    }
  });
})();
