module.exports.furnitureGetAll = function(req,res){
  res
    .status(200)
    .json({"data":true});
}

module.exports.furnitureGetOne = function(req,res){
var id = req.params.furnitureId;

  res
    .status(200)
    .json({"data":true});
}
