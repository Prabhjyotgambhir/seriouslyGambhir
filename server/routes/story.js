const express = require('express');
const router = express.Router();
const Story = require('../models/story');
const mongoose = require('mongoose');

router.post('/', (req, res) => {
    const story = new Story({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        content: req.body.content
    });

    story.save().then((result) => {
        res.status(201).json({
            message: 'Story saved'
        });
    })
})

router.get('/', (req, res) => {
    Story.find().exec().then((result) => {
        res.status(200).json({
            story: result
        });
    })
});

module.exports = router;