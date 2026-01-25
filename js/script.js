document.addEventListener("DOMContentLoaded", () => {

  // ================= USER NAME =================
  const userName = document.getElementById("userName");
  if (userName) {
    userName.innerText = "Kenny Adrian Setiabudi";
  }

  // ================= CONTACT FORM =================
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const message = document.getElementById("messageText").value.trim();

      if (!name || !email || !phone || !message) {
        alert("Please fill all fields");
        return;
      }

      document.getElementById("result").innerHTML = `
        <h3>Message Sent</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `;

      this.reset();
    });
  }

  // ================= NAVBAR TOGGLE =================
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      navToggle.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        navToggle.classList.remove("active");
      });
    });
  }

  // ================= THEME TOGGLE (DARK / LIGHT) =================
  const themeToggle = document.getElementById("themeToggle");

  if (themeToggle) {

    // 🔥 load saved theme (sinkron dengan <head>)
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }

    themeToggle.addEventListener("click", () => {

      // animasi halus
      document.documentElement.classList.add("theme-switching");

      document.documentElement.classList.toggle("dark");

      const isDark = document.documentElement.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");

      setTimeout(() => {
        document.documentElement.classList.remove("theme-switching");
      }, 400);
    });
  }

  // ================= ENABLE TRANSITION AFTER LOAD =================
  window.addEventListener("load", () => {
    document.documentElement.classList.add("theme-ready");
  });

});
