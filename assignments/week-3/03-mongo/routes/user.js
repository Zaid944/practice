const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    User.create({
        username,
        password,
    });
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
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const userame = req.headers.userame;
    const password = req.headers.password;
    User.updateOne(
        {
            username: userame,
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
        username: req.headers.username,
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
