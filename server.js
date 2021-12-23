//Install express server
const express = require('express');
const path = require('path');
var cors = require('cors');
const app = express();
app.use(cors())
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/FinalExam'));
app.get('/*', function(req,res) {
//res.sendFile(path.join(__dirname + "/dist/FinalExam/src/index.html"));   
//res.sendFile(path.join(__dirname + '/dist/FinalExam/src/index.html'));
res.sendFile(path.join(__dirname + "/dist/FinalExam/index.html"));     
//res.sendFile(path.join(__dirname + '/dist/FinalExam/index.html')); original
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);