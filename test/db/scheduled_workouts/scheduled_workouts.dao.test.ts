import { getAllScheduledWorkouts } from '../../../src/db/scheduled_workouts/scheduled_workouts.dao'
import { ScheduledWorkout } from '../../../src/routes/scheduled_workouts'

const mockScheduledWorkouts = [
	{
		_id: 1,
		Title: 'Chest & Abs',
		Date: '2022-02-02'
	}
]

jest.mock('../../../src/db/client', () => {
	return {
		client: {
			db: () => ({
				collection: () => {
					return ({
						find: () => ({
							toArray: (): ScheduledWorkout[] => {
								return mockScheduledWorkouts
							}
						})
					})
				}
			})
		}
	}
})

describe('scheduled_workouts', () => {
	it('should fetch all scheduled_workouts from the database', async () => {
		const workouts = await getAllScheduledWorkouts()
		expect(workouts).toEqual(mockScheduledWorkouts)
	})
})