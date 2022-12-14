const express = require('express');

const app = express();
app.use("/", express.static(__dirname + '/public/'));
// app.use('/js', express.static(__dirname + 'public/js'))
// app.use('/json_data', express.static(__dirname + 'public/json_data'))

app.get('/', function(req, res){
	res.sendFile(__dirname + "/main.html");
});

app.listen(process.env.PORT || 3000, () =>{
	console.log("Server running on port 3000");
})