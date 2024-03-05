const express = require('express');
const auth = require('auth')
const router = express.Router();

const stuffCtrl = require('../controllers/stuff.js')

router.post("/", auth,  stuffCtrl.createThing);
  router.get("/:id", auth,  stuffCtrl.getOneThing);
  router.get("/", auth,  stuffCtrl.getAllThing);
  router.put("/:id", auth, stuffCtrl.modifyThing);
  router.delete("/:id", auth, stuffCtrl.deleteThing);

module.exports = router;