// const express = require('express');
// const path = require('path');
// const app = express();
// app.use(express.static('./dist/APP/src'));
// app.get('/*',(req,res) => 
// res.sendFile('index.html',{root:'dist/APP/src'}),);
// app.listen(process.env.PORT || 8080);



//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/app'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/app'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);