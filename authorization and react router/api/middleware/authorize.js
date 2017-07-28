/* 
	TASK 4: In this file, you will create a middleware that will check a request for the authToken.
	If a token is found it should verify the token with the secret key used to generate the token
	If the token is verified, the contents of the token should be stored in the request and the request should be passed on.
	
	If no token is found or cannot be verified, then send back a response with a status code of 403 along with an appropriate error message.
	Remember to require jsonwebtoken here.
*/
const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
	let token = req.body.token || req.params.token || req.headers['authorization'];
	// console.log(req);
	if (token) {
		// console.log(token)
		jwt.verify(token,'usernamekey', function(error, decoded){
			if(error){
				return res.status(403).json({success: false, message: "Access Denied Please Try Again"});
			} else {
				req.decoded = decoded;
				next();
			}
		});
	} else {
		return res.status(403).send({
			success: false,
			message: 'Token Not Found'
		});
	}
} 
