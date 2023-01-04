    const express = require("express");
    const router = express();

    router.get("/", (req, res) => { //서버 띄우기
        res.render("home/index"); //기능
    });

    router.get("/login", (req,res) => {
        res.render("home/login");
    });

    module.exports = router; //내보내기