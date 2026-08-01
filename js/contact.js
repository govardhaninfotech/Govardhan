/*====================================
CONTACT FORM
====================================*/

function initContactForm() {

    const form = document.getElementById("whatsappForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();

        const phone = document.getElementById("phone").value.trim();

        const email = document.getElementById("email").value.trim();

        const course = document.getElementById("course").value;

        const message = document.getElementById("message").value.trim();

        if (name === "") {

            alert("Please enter your name.");

            return;

        }

        if (!/^[0-9]{10}$/.test(phone)) {

            alert("Please enter a valid 10-digit mobile number.");

            return;

        }

        const whatsappMessage =

            `Hello Govardhan Institute,

🎓 New Course Inquiry

👤 Name: ${name}

📱 Phone: ${phone}

📧 Email: ${email || "Not Provided"}

📚 Interested Course: ${course}

💬 Message:
${message || "No Message"}

Please contact me with more details. Thank you.`;

        const whatsappURL =
            `https://wa.me/919898576877?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, "_blank");

        form.reset();

    });

}   