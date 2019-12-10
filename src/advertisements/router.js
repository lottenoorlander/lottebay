const { Router } = require("express");
const Advertisement = require("./model");
const router = new Router();

// //GET /advertisements -> all advertisements
router.get("/advertisements", (req, res, next) =>
  Advertisement.findAll()
    .then(result => res.send(result))
    .catch(error => res.status(404).json({ error }))
);

// 	POST /advertisements -> post a new advertisement
router.post("/advertisements", (req, res, next) =>
  Advertisement.create(req.body)
    .then(advertisement => res.send(advertisement))
    .catch(error => res.status(404).json({ error }))
);

// 	GET /advertisement/id -> get one advertisement
router.get("/advertisements/:id", (req, res, next) =>
  Advertisement.findByPk(req.params.id)
    .then(result => res.send(result))
    .catch(error => res.status(404).json({ error }))
);

// 	PUT /advertisement/id -> update one advertisement
router.get("/advertisements/:id", (req, res, next) =>
  Advertisement.findByPk(req.params.id)
    .then(result => result.update(req.body))
    .then(updatedresult => res.send(updatedresult))
    .catch(error => res.status(404).json({ error }))
);

// 	DELETE /advertisement/id -> delete your advertisement
router.delete("/advertisements/:id", (req, res, next) =>
  Advertisement.destroy({ where: { id: req.params.id } })
    .then(number => res.send({ number }))
    .catch(error => res.status(404).json({ error }))
);

module.exports = router;
