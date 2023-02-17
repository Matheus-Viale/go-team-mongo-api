"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose_1 = require("mongoose");
const routes_1 = require("./routes");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
mongoose_1.default.connect('mongodb+srv://discordbot:6cK8k44ITR6mmXor@discordbot.gh611mu.mongodb.net/?retryWrites=true&w=majority').catch(console.error);
app.use(express.json());
app.use(routes_1.default);
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    app.use(cors());
    next();
});
app.listen(port, () => {
    console.log('Server is listening');
});
