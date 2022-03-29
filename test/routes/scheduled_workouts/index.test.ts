import request from 'supertest'
import server from '../../../src/server'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import exercises from '../../../scripts/seeds/exercises'
import { Exercise } from '../../../src/routes/scheduled_workouts'

describe('scheduled_workouts', () => {
	const workoutId = 1
	afterAll(() => {
		server.close()
	})

	it('returns mock scheduled_workouts for given workoutId', async () => {
		const expectedResponseBody = {
			exercises: Object.values(exercises).filter((exercise: Exercise) => exercise.scheduled_workout_id === workoutId)
		}

		const response = await request(server).get(`/scheduled_workouts?workoutId=${workoutId}`)
		expect(response.status).toBe(200)
		expect(response.body).toEqual(expectedResponseBody)
	})

	describe('no workoutId query param given', () => {
		it('returns 422 with descriptive error message', async () => {
			const expectedResponseBody = 'No workoutId provided'

			const response = await request(server).get('/scheduled_workouts')
			expect(response.status).toBe(422)
			expect(response.body).toEqual(expectedResponseBody)
		})
	})
})