// const { getVoterById, getVoter } = require("../controllers/voter");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");
const { vote, election } = require("../controllers/vote")
const router = require("express").Router();

// router.param("voterId", getVoterById);

router.post("/vote/:voterId/:electionId/:candidateId", vote);
router.get("/elections", election);

module.exports = router;