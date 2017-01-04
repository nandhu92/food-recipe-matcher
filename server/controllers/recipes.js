var request = require('request');
var StringBuffer = require('stringbuffer');

module.exports = (function(){
	return {
		find: function (req, res){
		//	console.log(req.session);
			// var sessions = req.session;
			// console.log(sessions);
  var ingredientsNamesList = [];
var igredientNames = req.body;

	var sb = new StringBuffer();
	for(names in igredientNames) {

if(names != 0){
	sb.append(",");
}
sb.append(igredientNames[names])


	}

   request("http://food2fork.com/api/search?key=b2f73dc524f0a1226eaaab45947d8819&q="+sb.toString(), function (error, response, body) {
		// request("http://www.recipepuppy.com/api/?i="+sb.toString(), function (error, response, body) {
    if (!error && response.statusCode == 200) {

      res.json(body);

    }
  })

		}

	}
})();
