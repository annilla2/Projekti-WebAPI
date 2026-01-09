const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Një endpoint test për të provuar lidhjen me React
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend funksionon!' });
});

app.listen(PORT, () => {
  console.log(`Serveri i backend po punon në portin ${PORT}`);
});
