const express = require("express")
const router = express.Router()
const controller = require("../controllers/cafeteriasController")

router.get("/", controller.getAll)
router.get("/cidade", controller.getPorCidade)
router.get("/aberto", controller.getPorAberto)
router.get("/:id", controller.getById)
router.post("/", controller.postCafeteria)
router.delete("/datainclusao", controller.deleteCafeteriasPorDataInclusao)
router.delete("/:id", controller.deleteCafeteria)
router.put("/:id", controller.putCafeteria)


module.exports = router;