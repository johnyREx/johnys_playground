document.addEventListener("DOMContentLoaded", function () {
  const app = document.getElementById('app');
  let userProfile = {};

  function renderLogin() {
    app.innerHTML = `
      <div class="container">
        <div class="header">
          <h1>Smart Student</h1>
          <p>Empowering Academic Collaboration and Support</p>
        </div>
        <div>
          <div class="form-group">
            <input type="text" id="login-username" placeholder="Username">
          </div>
          <div class="form-group">
            <input type="password" id="login-password" placeholder="Password">
          </div>
          <button id="login-button">Login</button>
          <p>Don't have an account? <a href="#" id="register-link">Register here</a></p>
        </div>
      </div>
    `;

    document.getElementById('register-link').addEventListener('click', (event) => {
      event.preventDefault();
      renderRegister();
    });

    document.getElementById('login-button').addEventListener('click', (event) => {
      event.preventDefault();
      login();
    });
  }

  function renderRegister() {
    app.innerHTML = `
      <div class="container">
        <div class="header">
          <h1>Smart Student</h1>
          <p>Empowering Academic Collaboration and Support</p>
        </div>
        <div>
          <div class="form-group">
            <input type="text" id="register-firstname" placeholder="First Name">
          </div>
          <div class="form-group">
            <input type="text" id="register-lastname" placeholder="Last Name">
          </div>
          <div class="form-group">
            <input type="email" id="register-email" placeholder="Email">
          </div>
          <div class="form-group">
            <input type="text" id="register-username" placeholder="Username">
          </div>
          <div class="form-group">
            <input type="password" id="register-password" placeholder="Password">
          </div>
          <div class="form-group">
            <select id="register-education">
              <option value="" disabled selected>Select Education Level</option>
              <option value="High School">High School</option>
              <option value="University">University</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div class="form-group">
            <input type="text" id="register-country" placeholder="Country">
          </div>
          <button id="register-button">Register</button>
          <p>Already have an account? <a href="#" id="login-link">Login here</a></p>
        </div>
      </div>
    `;

    document.getElementById('login-link').addEventListener('click', (event) => {
      event.preventDefault();
      renderLogin();
    });

    document.getElementById('register-button').addEventListener('click', (event) => {
      event.preventDefault();
      register();
    });
  }

  function renderDashboard() {
    app.innerHTML = `
      <div class="navbar">
        <span>Smart Student</span>
        <span><a href="#" onclick="logout()">Logout</a></span>
      </div>
      <div class="container">
        <div class="header">
          <h1>Welcome, ${userProfile.firstName}!</h1>
        </div>
        <div class="profile">
          <img src="https://via.placeholder.com/100" alt="Profile Picture">
          <h2>${userProfile.firstName} ${userProfile.lastName}</h2>
          <p>${userProfile.country}</p>
        </div>
        <div>
          <p>This is the dashboard.</p>
          <p>You can upload files, ask questions, and manage tasks here.</p>
        </div>
      </div>
    `;
  }

  function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const storedUsers = JSON.parse(localStorage.getItem('users')) || {};

    console.log('Login attempt:', { username, password });

    if (storedUsers[username] && storedUsers[username].password === password) {
      userProfile = storedUsers[username];
      renderDashboard();
    } else {
      alert('Invalid username or password.');
    }
  }

  function register() {
    const firstName = document.getElementById('register-firstname').value;
    const lastName = document.getElementById('register-lastname').value;
    const email = document.getElementById('register-email').value;
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const education = document.getElementById('register-education').value;
    const country = document.getElementById('register-country').value;
    const storedUsers = JSON.parse(localStorage.getItem('users')) || {};

    console.log('Registration attempt:', {
      firstName,
      lastName,
      email,
      username,
      password,
      education,
      country
    });

    if (storedUsers[username]) {
      alert('Username already exists. Please choose another one.');
      return;
    }

    if (firstName && lastName && email && username && password && education && country) {
      userProfile = { firstName, lastName, email, username, password, education, country };
      storedUsers[username] = userProfile;
      localStorage.setItem('users', JSON.stringify(storedUsers));
      alert('Registration successful!');
      renderLogin();
    } else {
      alert('Please fill in all the fields.');
    }
  }

  function logout() {
    userProfile = {};
    renderLogin();
  }

  renderLogin();
});
