const pool = require("../database");

const signUp_service = (data, callBack) => {
    pool.query("", [], (err, result, fields) => {
        if (err) {
            callBack(err);
        }
        return callBack(null, result);
    })
}

const getVoterById_service = (data, callBack) => {
    pool.query("", [], (err, result, fields) => {
        if (err) {
            callBack(err);
        }
        return callBack(null, result);
    })
}

const getVoterByEmail_service = (data, callBack) => {
    pool.query("", [], (err, result, fields) => {
        if (err) {
            callBack(err);
        }
        return callBack(null, result);
    })
}

const getVoters_service = (data, callBack) => {
    pool.query("", [], (err, result, fields) => {
        if (err) {
            callBack(err);
        }
        return callBack(null, result);
    })
}

const updateVoter_service = (data, callBack) => {
    pool.query("", [], (err, result, fields) => {
        if (err) {
            callBack(err);
        }
        return callBack(null, result);
    })
}

const deleteVoter_service = (data, callBack) => {
    pool.query("", [], (err, result, fields) => {
        if (err) {
            callBack(err);
        }
        return callBack(null, result);
    })
}


module.exports = { signUp_service, getVoterById_service, getVoters_service, updateVoter_service, deleteVoter_service, getVoterByEmail_service };