import Router from 'koa-router'
import {
	createCompletedExercises,
	getAllCompletedExercises,
	getCompletedExercisesByUserId
} from '../../db/completed-exercises/completed-exercises.dao'

const completedExerciseRouter = new Router()

completedExerciseRouter.post('/completed_exercise',async ctx => {
	console.log(ctx)
	const result = await createCompletedExercises(ctx.request.body)
	ctx.status = 201
	ctx.body = result
})

completedExerciseRouter.get('/completed_exercise', async ctx => {
	ctx.body = await getAllCompletedExercises()
})

completedExerciseRouter.get('/completed_exercises/:id', async ctx => {
	const { id } = ctx.params
	ctx.status = 200
	ctx.body = await getCompletedExercisesByUserId(id)
})

export default completedExerciseRouter
