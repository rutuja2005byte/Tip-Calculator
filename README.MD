💰 Tip Calculator
A simple and responsive Tip Calculator web application that helps users quickly calculate the tip amount and total bill based on service quality.

🚀 Features
- Enter bill amount
- Select service rating (Excellent, Good, Average, Poor)
- Automatically calculates:
    Tip amount 💸
    Total bill 🧾
- Clean UI with restaurant-themed background
- Fully responsive design (mobile-friendly 📱)

🛠️ Technologies Used
* HTML5 – Structure of the app
* CSS3 – Styling and responsive design
* JavaScript (Vanilla JS) – Logic and calculations

📂 Project Structure
tip-calculator/
│
├── index.html        # Main HTML file
├── style.css         # Styling file
├── script.js         # JavaScript logic
└── images/
    ├── restaurant.jpeg
    └── favicon.ico

⚙️ How It Works
- User enters the bill amount.
- Selects a service rating:
    Excellent → 20%
    Good → 15%
    Average → 10%
    Poor → 5%
- Clicks Calculate button.
- App displays:
    Tip amount
    Total bill (bill + tip)

🧠 Core Logic
- const tip = billAmount * tipPercentage;
- const total = billAmount + tip;

📸 UI Highlights
- Centered container with shadow and rounded corners
- Background restaurant image
- Interactive button with hover effect
- Responsive layout using media queries

📱 Responsive Design
- Works on:
    Desktop 💻
    Tablet 📲
    Mobile 📱
- Uses flexbox and media queries for layout adjustment

🐞 Known Issues / Improvements
- Add input validation message instead of alert
- Support splitting bill between multiple people
- Add currency selector
- Improve accessibility (labels, ARIA)

🌐 Live Demo
https://responsivetipcalculator.netlify.app

📜 License
This project is open-source and free to use.
