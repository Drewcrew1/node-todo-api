//const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
	return console.log('Unable to connect to MongoDb server.');
	}
	console.log('connected to mongodb server');
	
	//db.collection('Todos').findOneAndUpdate({
	//	_id: new ObjectID('5b69b644499f8227b064fa25')
	//},{
	//	$set: {
	//		completed: true
	//	}
	//}, {
	//	returnOriginal: false
	//}).then((result) => {
	//	console.log(result);
	//});
	
	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5b69b9d81954c22eb088bc5a')
	}, {
		$inc: {
			age: -1,
		},
		$set: {
			name: 'Drew H'
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});
	
	//db.close();
});