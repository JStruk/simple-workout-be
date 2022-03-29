import { client } from '../client'
import { InsertOneResult, WithId } from 'mongodb'

const completedWorkouts = client.db(process.env.MONGO_DB_NAME).collection<CompletedWorkout>('completed_completedWorkouts')

type CompletedWorkout = {
    user_id: string
    completed_workout_id: string
    date: string
}

export const createCompletedWorkout = (workout: CompletedWorkout): Promise<InsertOneResult<CompletedWorkout>> => {
	return completedWorkouts.insertOne(workout)
}

export const getAllCompletedWorkouts = (): Promise<WithId<CompletedWorkout>[]> => {
	return completedWorkouts.find({}).toArray()
}


export const getCompletedWorkoutsByUserId = (userId: string): Promise<WithId<CompletedWorkout>[]> => {
	return completedWorkouts.find({ user_id: userId }).toArray()
}


