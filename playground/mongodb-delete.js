//const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
	return console.log('Unable to connect to MongoDb server.');
	}
	console.log('connected to mongodb server');
	
	//deleteMany
	//db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
	//	console.log(result);
	//});
	//deleteOne
	//db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
	//	console.log(result);
	//});
	//findOneAndDelete
	//db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	//	console.log(result);
	//});
	
	//db.collection('Users').deleteMany({name: 'Drew Harper'}).then((result) => {
	//	console.log(result);
	//});
	
	
	db.collection('Users').deleteOne({
		_id: new ObjectID('5b69ba2bcf1d571a64c5d514')
	}).then((result) => {
		console.log(result);
	});
	
	//db.close();
});