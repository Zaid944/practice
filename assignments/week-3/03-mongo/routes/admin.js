const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async function (req, res) {
    try {
        const username = req.body.username;
        const password = req.body.password;

        const user = await Admin.create({
            username,
            password,
        });
        return res.json({
            msg: "admin created",
            data: user,
        });
    } catch (err) {
        return res.json({
            err: err.message,
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
