var express = require('express');
var multer = require('multer');

var app = new express();
var upload = multer({dest: 'uploads/'});

app.use(express.static('public'));

app.post('/upload_file', upload.single('file'), function(req, res){
	res.json({file_size: req.file.size });
});

app.listen(process.env.PORT || 7000);