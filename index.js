const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const FULL_NAME = "s_subhashini"; 
const DOB_DDMMYYYY = "02122004"; 
const EMAIL = "subhashini.s2022@vitstudent.ac.in";
const ROLL = "22BPS1070";
const isIntegerString = (s) => /^-?\d+$/.test(s);
const isAlphaString = (s) => /^[A-Za-z]+$/.test(s);

function buildConcatString(allAlphaChars) {
  const rev = allAlphaChars.slice().reverse();
  return rev
    .map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
    .join("");
}

app.get("/bfhl", (req, res) => {
  res
    .status(200)
    .send(
      "✅ This endpoint only accepts POST requests with JSON body at /bfhl."
    );
});

app.post("/bfhl", (req, res) => {
  try {
    const data = Array.isArray(req.body?.data) ? req.body.data : null;
    if (!data) {
      return res.status(200).json({
        is_success: false,
        user_id: `${FULL_NAME}_${DOB_DDMMYYYY}`,
        email: EMAIL,
        roll_number: ROLL,
        odd_numbers: [],
        even_numbers: [],
        alphabets: [],
        special_characters: [],
        sum: "0",
        concat_string: "",
      });
    }

    const odd_numbers = [];
    const even_numbers = [];
    const alphabets = [];
    const special_characters = [];
    const allAlphaChars = [];
    let sum = 0;

    for (const tokenRaw of data) {
      const token = String(tokenRaw);

      if (isIntegerString(token)) {
        const n = parseInt(token, 10);
        sum += n;
        if (Math.abs(n) % 2 === 0) even_numbers.push(token);
        else odd_numbers.push(token);
      } else if (isAlphaString(token)) {
        alphabets.push(token.toUpperCase());
        for (const ch of token) allAlphaChars.push(ch);
      } else {
        for (const ch of token) {
          if (/[^A-Za-z0-9]/.test(ch)) {
            special_characters.push(ch);
          } else if (/[A-Za-z]/.test(ch)) {
            allAlphaChars.push(ch);
          } else {
          }
        }
      }
    }

    const concat_string = buildConcatString(allAlphaChars);

    return res.status(200).json({
      is_success: true,
      user_id: `${FULL_NAME}_${DOB_DDMMYYYY}`,
      email: EMAIL,
      roll_number: ROLL,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: String(sum),
      concat_string,
    });
  } catch (err) {
    return res.status(200).json({
      is_success: false,
      user_id: `${FULL_NAME}_${DOB_DDMMYYYY}`,
      email: EMAIL,
      roll_number: ROLL,
      odd_numbers: [],
      even_numbers: [],
      alphabets: [],
      special_characters: [],
      sum: "0",
      concat_string: "",
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
