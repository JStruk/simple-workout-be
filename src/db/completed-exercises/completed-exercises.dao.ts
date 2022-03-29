import { client } from '../client'
import { InsertOneResult, WithId } from 'mongodb'

const exercises = client.db(process.env.MONGO_DB_NAME).collection<CompletedExercise>('completed_exercises')

type CompletedExercise = {
    exercise_id: string
    user_id: string
    completed_workout_id: string
    date: string
    sets: string
    reps: string
    weight: string
}

export const createCompletedExercises = (exercise: CompletedExercise): Promise<InsertOneResult<CompletedExercise>> => {
	return exercises.insertOne(exercise)
}

export const getAllCompletedExercises = (): Promise<WithId<CompletedExercise>[]> => {
	return exercises.find({}).toArray()
}

export const getCompletedExerciseByExerciseId = (exerciseId: string): Promise<WithId<CompletedExercise>[]> => {
	return exercises.find({ exercise_id: exerciseId }).toArray()
}

export const getCompletedExercisesByUserId = (userId: string): Promise<WithId<CompletedExercise>[]> => {
	return exercises.find({ user_id: userId }).toArray()
}


