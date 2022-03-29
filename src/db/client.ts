import { MongoClient } from 'mongodb'

export const client = new MongoClient(process.env.MONGO_CONN_STRING)

client.connect(err => {
	if(err){
		console.error(err)
		process.exit(-1)
	}
	console.log('Successfully connected to MongoDB')
})
