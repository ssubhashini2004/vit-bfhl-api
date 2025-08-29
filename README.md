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

#### Request Body
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
