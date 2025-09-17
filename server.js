const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

// React build klasörünü statik olarak sun
app.use(express.static(path.join(__dirname, "dist")));
// Express 5 uyumlu regex
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 React app running on port ${PORT}`);
});
