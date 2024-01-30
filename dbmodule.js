var databaseUrl = "mongodb://127.0.0.1:27017/mydb";
var mongojs = require("./nodedb/node_modules/mongojs");
var db = mongojs(databaseUrl);
console.log("Connected to MongoDB");
var fs=require('fs');
exports.authenticateUser = function(username, email, password, response) {
db.users.find({ "username": username, "email": email, "password":password },
	function(err, users) 
	{
		if (err || !users) {
		response.write("Not authorized user");
		response.end();
            } 
		else if (users.length == 0) {
		response.write("Not authorized user");
		response.end();
            } 
		else {
			/* fs.readFile('./bootfront.html', function(err, data) {
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data);
                return response.end();
              }); */
		response.write("Authorized user");
		response.end();
            }
        });
}

exports.saveUser = function(name, username, email, phno, password, password1, response) {
console.log('Saving user to mongo');
db.users.insert({ "name":name, "username": username, "email": email, "phno":phno, "password":password, "password1":password1 },
function(err, saved) 
{
	if (err || !saved)
		console.log(err);
	else
		/* response.AddHeader("Refresh", "3: url.index.html"); */
		response.write("User saved");
		response.end();
         });
}