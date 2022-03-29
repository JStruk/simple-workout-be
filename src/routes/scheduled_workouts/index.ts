import Router from 'koa-router'
import { getAllExercises } from '../../db/exercises/exercises.dao'
import { getWorkoutById } from '../../db/workouts/scheduled_workouts.dao'

export type Exercise = {
    ID: number
    title: string
    recommended_sets: number
    recommended_reps: string
    demo_link: string
    scheduled_workout_id: number
}

export type ScheduledWorkout = {
	'_id': number
	Title: string
	Date: string
}

const scheduledWorkoutRouter = new Router()

scheduledWorkoutRouter.get('/scheduled_workouts', async (ctx) => {
	const workoutId = Number(ctx.query?.workoutId)
	if (!workoutId) {
		ctx.body = 'No workoutId provided'
		ctx.status = 422
		return
	}

	const exercises = await getAllExercises()
	const workout = await getWorkoutById(workoutId)

	ctx.body = {
		workout,
		exercises: exercises.filter((exercise: Exercise) => exercise.scheduled_workout_id === workoutId)
	}
})

export default scheduledWorkoutRouter