const express = require("express");

const app = express();
app.use(express.json());

const users = [];

// GET API
app.get("/users", (req, res) => {
    res.json(users);
});

// POST API
app.post("/users", (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({
            message: "Name is required"
        });
    }

    users.push({ name });

    res.status(201).json({
        message: "User added successfully"
    });
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});