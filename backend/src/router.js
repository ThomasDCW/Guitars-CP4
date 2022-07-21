const express = require("express");

const {
  ItemController,
  GuitarController,
  LogoController,
} = require("./controllers");

const router = express.Router();
// items routes for example
router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

// guitar routes

router.get("/guitars", GuitarController.browse);
router.get("/guitars/:id", GuitarController.read);
router.put("/guitars/:id", GuitarController.edit);
router.post("/guitars", GuitarController.add);
router.delete("/guitars/:id", GuitarController.delete);

router.get("/logos", LogoController.browse);
router.get("/logos/:id", LogoController.read);
router.put("/logos/:id", LogoController.edit);
router.post("/logos", LogoController.add);
router.delete("/logos/:id", LogoController.delete);
module.exports = router;
