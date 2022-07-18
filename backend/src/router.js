const express = require("express");

const { ItemController, GuitarController } = require("./controllers");

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

module.exports = router;
