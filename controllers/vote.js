const { vote_service, election_service } = require("../services/vote");

exports.vote = (req, res) => {
    let data = req.params;
    console.log(req.params);
    vote_service(data, (err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        return res.json({
            success: 1,
            data: results
        });
    });
}
exports.election = (req, res) => {
    election_service((err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        return res.json({
            success: 1,
            data: results
        });
    });
}