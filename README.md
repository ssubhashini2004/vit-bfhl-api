# BFHL API (VIT Full Stack Assignment as Part of Bajaj Finserv Health Test - Built within 1 hour)

This is a simple REST API built with **Node.js + Express** as part of the VIT Full Stack assignment as Part of Bajaj Finserv Health Test.

The API classifies input data into odd/even numbers, alphabets, and special characters.  
It also computes the sum of numbers and generates a special concatenated string as per the problem statement.

---

## 🚀 Live Demo
👉 [BFHL API on Render](https://vit-bfhl-api-h24f.onrender.com/bfhl)

---

## 📌 Endpoints

### 1. POST `/bfhl`
Accepts a JSON array of strings and returns a structured response.

Request Body Sample
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
### 2. GET `/bfhl`
For browser testing only.  
Returns a friendly message: ✅ This endpoint only accepts POST requests with JSON body at /bfhl.

---

## 🛠️ Features
- Identifies **odd** and **even** numbers.
- Converts pure alphabets to **UPPERCASE**.
- Extracts **special characters**.
- Ignores digits inside mixed tokens for classification (per problem spec).
- Computes the **sum** of numeric tokens.
- Generates a **concat_string** (reverse all letters, apply alternating caps).
- Deployed on **Render** with CI/CD from GitHub.

---

## ⚡ Tech Stack
- Node.js
- Express.js
- CORS
- Render (deployment)

---

## ▶️ Running Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/ssubhashini2004/vit-bfhl-api.git
   cd vit-bfhl-api
2. Install dependencies:
   ```bash
   npm install
3. Start the server:
   ```bash
   npm start
4. Test with curl:
   ```bash
   curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d "{\"data\":[\"a\",\"1\",\"334\",\"4\",\"R\",\"$\"]}"

## 👩‍💻 Author

Name: S Subhashini

Roll Number: 22BPS1070

Email: subhashini.s2022@vitstudent.ac.in
