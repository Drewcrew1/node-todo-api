//const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
	return console.log('Unable to connect to MongoDb server.');
	}
	console.log('connected to mongodb server');
	
	//db.collection('Todos').insertOne({
	//	text: 'Something to do',
	//	completed: 'false'
	//}, (err, result) => {
	//	if (err) {
	//		return console.log('unable to insert to do', err);
	//	}
	//	
	//	console.log(JSON.stringify(result.ops, undefined, 2));
	//});
	
	//db.collection('Users').insertOne({
	//	name: 'Drew Harper',
	//	age: '25',
	//	location: 'Harrisburg, PA'
	//}, (err, result) => {
	//	if (err) {
	//		return console.log('unable to connect to users', err);
	//	}
	//	
	//	console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
	//});
	
	
	db.close();
});