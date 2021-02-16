const express = require('express');
const helper = require('../helpers/common')

module.exports = app => {

    app.get('/', (req, res) => {
        return helper.sendResponseMsg(res, "Welcome to Node Server", true, 200)
    });
}