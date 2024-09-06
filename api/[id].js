const meta = require ('../M.json');

module.exports = (req,res) => {
    const {id} = req.query;
    res.json(JSON.parse(JSON.stringify(meta[id])));
}