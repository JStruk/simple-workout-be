import Router from 'koa-router'
import {
	createCompletedWorkout,
	getAllCompletedWorkouts,
	getCompletedWorkoutsByUserId
} from '../../db/completed-workouts/completed-exercises.dao'

const completedWorkoutRouter = new Router()

completedWorkoutRouter.post('/completed_workouts',async ctx => {
	console.log(ctx)
	const result = await createCompletedWorkout(ctx.request.body)
	ctx.status = 201
	ctx.body = result
})

completedWorkoutRouter.get('/completed_workouts', async ctx => {
	ctx.status = 200
	ctx.body = await getAllCompletedWorkouts()
})

completedWorkoutRouter.get('/completed_workouts/:id', async ctx => {
	const { id } = ctx.params
	ctx.status = 200
	ctx.body = await getCompletedWorkoutsByUserId(id)
})

export default completedWorkoutRouter
