const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Course, User } = require("../db");
const { JWT_SECRET } = require("../config");
//authorization
//user admin

// User Routes
router.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    User.create({
        username,
        password,
    });
});

router.post("/signin", async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const user = await User.findOne({
            username,
            password,
        });
        if (user) {
            const token = jwt.sign({ username: username }, JWT_SECRET);
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

router.get("/courses", async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find();
    return res.json({
        msg: "all courses",
        data: courses,
    });
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
    const courseId = req.params.courseId;
    const username = req.username;
    User.updateOne(
        {
            username: username,
        },
        {
            $push: {
                purchasedCourses: courseId,
            },
        }
    );
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.username,
    });
    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            $in: user.purchasedCourses,
        },
    });
    res.json({
        courses,
    });
});

module.exports = router;
