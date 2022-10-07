"use strict";

require("dotenv").config();
const PORT = process.env.PORT || 8080;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(cors());

app.get("/pokemon/:name", async (req, res) => {
  const API = `https://pokeapi.co/api/v2/pokemon/${req.params.name}`;

  try {
    const pokemonRes = await axios.get(API);
    console.log(pokemonRes.data);
    res.json(pokemonRes.data);
  } catch (err) {
    console.log("This is our error", err);
    res.status(500).send(err);
  }
});

app.listen(PORT, () => console.log(`Port is listening on port ${PORT}`));
