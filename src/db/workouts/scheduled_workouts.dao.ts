import { client } from '../client'

const workouts = client.db(process.env.MONGO_DB_NAME).collection('workouts')

interface Workout {
	_id: number,
	date: string,
	title: string
}

export const getAllWorkouts = async (): Promise<Workout[]> => {
	return (await workouts.find({}).toArray()) as unknown as Workout[]
}

export const getWorkoutById = async(_id: number): Promise<Workout> => {
	return (await workouts.findOne({ _id })) as unknown as Workout
}