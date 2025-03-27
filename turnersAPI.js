const express = require("express");
const app = express();
const port = 4000;

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
      res.send("Hello World!");
});

app.post("/api", (req, res) => {
      res.json({ message: "Received your request!", data: req.body });
});

// Start server
app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
});
