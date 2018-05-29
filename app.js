const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
	res.render('main', {
		title: 'lines linked',
		jsonName: 'lines_bubbles.json'
	});	
});

app.get('/bubbles',(req, res)=>{
	res.render('bubbles', {
		title: 'Bubbles',
		jsonName: 'bubbles.json'
	});
});

app.get('/space',(req, res)=>{
	res.render('space',{
		title: 'Space',
		jsonName: 'space.json'
	});
});

app.get('*', (req, res)=>{
	res.render('error', {title: 'NOT FOUND'});
});


const port = process.env.PORT || 3000;

app.listen(port,()=>{
	console.log(`listening on port ${port}`);
});