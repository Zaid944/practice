const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { User, Course } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../index");

// Admin Routes
router.post("/signup", async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const user = await User.create({
            username,
            password,
        });
        return res.json({
            msg: "admin created",
            data: user,
        });
    } catch (err) {
        return res.json({
            msg: err.message,
        });
    }
});

router.post("/signin", async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const user = await User.findOne({
            username,
            password,
        });
        console.log("username", username);
        console.log("password", password);
        console.log("user", user);
        if (user) {
            console.log("JWT_KEY", JWT_SECRET);
            const token = jwt.sign({ username: username }, "abc");
            console.log(token);
            return res.json({
                token: token,
            });
        } else {
            return res.json({
                msg: "user not found",
            });
        }
    } catch (err) {
        return res.json({
            msg: err.message,
        });
    }
});

router.post("/courses", adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    const course = await Course.create({
        title,
        description,
        imageLink,
        price,
    });
    res.json({
        msg: "course created",
        courseId: course._id,
    });
});

router.get("/courses", adminMiddleware, async (req, res) => {
    const courses = await Course.find();
    return res.json({
        msg: "all courses fetched",
        courses,
    });
});

module.exports = router;
