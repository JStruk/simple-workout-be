import { client } from '../client'
import { Exercise } from '../../routes/scheduled_workouts'

const exercises = client.db(process.env.MONGO_DB_NAME).collection('exercises')

export const getAllExercises = async (): Promise<Exercise[]> => {
	return (await exercises.find({}).toArray()) as unknown as Exercise[]
}