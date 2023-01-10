const router = require("express").Router();
const controller = require("./tables.controller");
const cors = require("cors");

router
  .route("/:table_id/seat")
  .all(cors())
  .put(controller.update)
  .delete(controller.destroy);
router.route("/").get(controller.list).post(controller.create);

module.exports = router;
