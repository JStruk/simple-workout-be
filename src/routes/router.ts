import Router from 'koa-router'
import scheduledWorkoutRouter from './scheduled_workouts'
import completedExerciseRouter from './completed_exercises'
import completedWorkoutsRouter from './completed_workouts'

const router = new Router()

router.use(scheduledWorkoutRouter.routes())
router.use(completedExerciseRouter.routes())
router.use(completedWorkoutsRouter.routes())

router.get('/test', async (ctx) => {
	ctx.body = 'Hello World!'
})

export default router
