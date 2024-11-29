const express = require('express');
const Player = require('../models/Player');
const router = express.Router();

// Get all players
router.get('/players', async (req, res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new player
router.post('/players', async (req, res) => {
    const player = new Player({
        name: req.body.name,
        position: req.body.position,
        team: req.body.team,
        rating: req.body.rating,
    });

    try {
        const newPlayer = await player.save();
        res.status(201).json(newPlayer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a player
router.delete('/players/:id', async (req, res) => {
    try {
        await Player.findByIdAndDelete(req.params.id);
        res.json({ message: 'Player deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
