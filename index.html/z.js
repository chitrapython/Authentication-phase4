// ===================== 
// Header/Footer loader
// =====================
document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.querySelector("header");
    const footerContainer = document.querySelector("footer");

    // =====================
    // Register page logic
    // =====================
    const registerForm = document.getElementById("registerForm");
    if(registerForm){
        // Create message element below form
        let registerMsg = document.createElement("p");
        registerMsg.style.fontWeight = "bold";
        registerForm.appendChild(registerMsg);

        registerForm.addEventListener("submit", function(e){
            e.preventDefault();

            const username = document.getElementById("username").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            // Basic validation
            if(!username || !email || !password || !confirmPassword){
                registerMsg.textContent = "Please fill all fields!";
                registerMsg.style.color = "red";
                return;
            }

            if(!validateEmail(email)){
                registerMsg.textContent = "Please enter a valid email!";
                registerMsg.style.color = "red";
                return;
            }

            if(password !== confirmPassword){
                registerMsg.textContent = "Passwords do not match!";
                registerMsg.style.color = "red";
                return;
            }

            // Get existing users
            const users = JSON.parse(localStorage.getItem("users") || "[]");
            if(users.find(u => u.username === username)){
                registerMsg.textContent = "Username already exists!";
                registerMsg.style.color = "red";
                return;
            }

            users.push({username, email, password});
            localStorage.setItem("users", JSON.stringify(users));

            registerMsg.textContent = "Registration successful! Redirecting to login...";
            registerMsg.style.color = "green";

            setTimeout(() => {
                window.location.href = "index.html";
            }, 1500);
        });
    }

    // =====================
    // Login page logic
    // =====================
    const loginForm = document.getElementById("loginForm");
    if(loginForm){
        let loginMsg = document.createElement("p");
        loginForm.appendChild(loginMsg);

        loginForm.addEventListener("submit", function(e){
            e.preventDefault();

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value;

            if(!username || !password){
                loginMsg.textContent = "Please enter username and password!";
                loginMsg.style.color = "red";
                return;
            }

            const users = JSON.parse(localStorage.getItem("users") || "[]");
            const user = users.find(u => u.username === username && u.password === password);

            if(user){
                localStorage.setItem("loggedInUser", username);
                loginMsg.textContent = "Login successful! Redirecting...";
                loginMsg.style.color = "green";

                setTimeout(() => {
                    window.location.href = "welcome.html";
                }, 1000);
            } else {
                loginMsg.textContent = "Invalid username or password!";
                loginMsg.style.color = "red";
            }
        });
    }

    // =====================
    // Welcome page logic
    // =====================
    const welcomeMessage = document.getElementById("welcomeMessage");
    const logoutBtn = document.getElementById("logoutBtn");

    if(welcomeMessage){
        const loggedUser = localStorage.getItem("loggedInUser");
        if(!loggedUser){
            window.location.href = "index.html";
        } else {
            welcomeMessage.innerText = `Hello, ${loggedUser}! You are successfully logged in.`;
        }
    }

    if(logoutBtn){
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("loggedInUser");
            window.location.href = "index.html";
        });
    }

    // =====================
    // Utility functions
    // =====================
    function validateEmail(email){
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.toLowerCase());
    }
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const loginMessage = document.getElementById("loginMessage");

    loginForm.addEventListener("submit", function(e){
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value;

        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find(u => u.username === username && u.password === password);

        if(user){
            localStorage.setItem("loggedInUser", username);
            loginMessage.textContent = "Login successful! Redirecting...";
            loginMessage.style.color = "green";
            setTimeout(() => {
                window.location.href = "welcome.html";
            }, 1000);
        } else {
            loginMessage.textContent = "Invalid username or password!";
            loginMessage.style.color = "red";
        }
    });
});


});
