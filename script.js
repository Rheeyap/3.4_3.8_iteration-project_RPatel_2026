/* ---- Accordion (Skills page) ---- */
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
	});
}

/* ---- Contact form validation ---- */
var contactForm = document.getElementById("contactForm");
if (contactForm) {
	contactForm.addEventListener("submit", function(e) {
		var valid = true;

		var nameField = document.getElementById("fieldName");
		var nameVal = document.getElementById("name").value.trim();
		nameField.classList.toggle("error", nameVal.length === 0);
		if (nameVal.length === 0) { valid = false; }

		var emailField = document.getElementById("fieldEmail");
		var emailVal = document.getElementById("email").value.trim();
		var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal);
		emailField.classList.toggle("error", !emailOk);
		if (!emailOk) { valid = false; }

		var phoneField = document.getElementById("fieldPhone");
		var phoneVal = document.getElementById("phone").value.trim();
		var phoneOk = /^[0-9+\-\s()]{6,}$/.test(phoneVal);
		phoneField.classList.toggle("error", !phoneOk);
		if (!phoneOk) { valid = false; }

		var commentField = document.getElementById("fieldComment");
		var commentVal = document.getElementById("message").value.trim();
		commentField.classList.toggle("error", commentVal.length === 0);
		if (commentVal.length === 0) { valid = false; }

		if (!valid) {
			e.preventDefault();
		}
	});
}
