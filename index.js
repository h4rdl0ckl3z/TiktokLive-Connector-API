const { WebcastPushConnection } = require('tiktok-live-connector');

require('dotenv').config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Starting node.js at port " + port);
});

app.get('/roominfo', (req, res) => {
    let tiktokLiveConnection = new WebcastPushConnection(req.query.tiktokUsername, {
        sessionId: process.env.sessionId,
    });
    tiktokLiveConnection.getRoomInfo().then(roomInfo => {
        // console.log(roomInfo);
        res.json(roomInfo);
    }).catch(err => {
        console.error(err);
    })
})
