import { client } from '../client'
import { ScheduledWorkout } from '../../routes/scheduled_workouts'

const scheduled_workouts = client.db(process.env.MONGO_DB_NAME).collection('scheduled_workouts')

export const getAllScheduledWorkouts = async (): Promise<ScheduledWorkout[]> => {
	return (await scheduled_workouts.find({}).toArray()) as unknown as ScheduledWorkout[]
}

export const getScheduledWorkoutById = async(_id: number): Promise<ScheduledWorkout> => {
	return (await scheduled_workouts.find({ _id }).toArray()) as unknown as ScheduledWorkout
}