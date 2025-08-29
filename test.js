const fetch = require("node-fetch");

(async () => {
  const res = await fetch("http://localhost:3000/bfhl", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: ["a", "1", "334", "4", "R", "$"] }),
  });
  const json = await res.json();
  console.log(json);
})();
