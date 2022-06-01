const jsonData = require('../../api/products/index.json') ;

exports.getData = (req, res) => {
	res.status(200).send(jsonData);

};
exports.postData = (req, res) =>{
    res.status(200).send({status : "success"});
};