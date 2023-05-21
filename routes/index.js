import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    res.render("inicio")

})


router.get("/nosotros", (req, res) => {
    res.render("nosotros")

})

router.get("/contacto", (req, res) => {
    res.json({
        id: 3
    })

});

export default router;