# BFHL API (VIT Full Stack Assignment — Bajaj Finserv Health Test)

This is a small REST API built with **Node.js + Express** for the VIT Full Stack assignment (Bajaj Finserv Health Test).  
It accepts an array of string tokens and classifies them into odd/even numbers, alphabets, and special characters; computes the numeric sum; and builds a custom concatenated string as required.

---

## 🚀 Live Demo
**Endpoint (POST):**  
`https://vit-bfhl-api-h24f.onrender.com/bfhl`

A friendly message is available for browser checks (GET `/bfhl`) explaining that the endpoint expects POST with JSON.

---

## 📌 Endpoints

### POST `/bfhl`  
Accepts a JSON body containing an array of strings (tokens). Returns a JSON response containing:
- `is_success` (boolean)
- `user_id`, `email`, `roll_number`
- `odd_numbers`, `even_numbers` (arrays of strings)
- `alphabets` (uppercase tokens)
- `special_characters`
- `sum` (string)
- `concat_string`

> All responses use HTTP status **200**; the `is_success` field indicates logical success/failure.

### GET `/bfhl`  
For browser testing only. Returns a short message informing users to POST JSON to `/bfhl`.

---

## 🛠️ Features
- Classifies **pure numeric** tokens into odd / even (keeps tokens as strings).  
- Converts **pure alphabet** tokens to uppercase and lists them under `alphabets`.  
- Extracts **special characters** (non-alphanumeric).  
- Ignores digits that appear inside mixed tokens for numeric classification (per spec).  
- Computes the **sum** of pure numeric tokens and returns it as a string.  
- Builds `concat_string` by collecting all letters (in token order), reversing them, and applying alternating capitalization starting with Upper.  
- Deployed to **Render** with source on GitHub.

---

## ⚡ Tech Stack
- Node.js
- Express.js
- CORS
- Render (deployment)
- GitHub (source)

---

## ▶️ Run Locally

Clone the repository:
```bash
git clone https://github.com/ssubhashini2004/vit-bfhl-api.git
cd vit-bfhl-api



