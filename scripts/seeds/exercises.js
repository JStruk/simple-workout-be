const exercises = [
	{
		'_id': 1,
		'title': 'Incline Barbell Bench Press',
		'recommended_sets': 3,
		'recommended_reps': '8-12',
		'demo_link': 'https://www.muscleandstrength.com/exercises/incline-bench-press.html',
		'scheduled_workout_id': 1
	},
	{
		'_id': 2,
		'title': 'Dumbbell Fly',
		'recommended_sets': 3,
		'recommended_reps': '8-12',
		'demo_link': 'https://www.muscleandstrength.com/exercises/dumbbell-flys.html',
		'scheduled_workout_id': 1
	},
	{
		'_id': 3,
		'title': 'Weighted Triceps Dip',
		'recommended_sets': 3,
		'recommended_reps': '8-12',
		'demo_link': 'https://www.muscleandstrength.com/exercises/weighted-tricep-dips.html',
		'scheduled_workout_id': 1
	},
	{
		'_id': 4,
		'title': 'Pec Dec',
		'recommended_sets': 3,
		'recommended_reps': '8-12',
		'demo_link': 'https://www.muscleandstrength.com/exercises/pec-dec.html',
		'scheduled_workout_id': 1
	},
	{
		'_id': 5,
		'title': 'Cable Crossover',
		'recommended_sets': 3,
		'recommended_reps': '8-12',
		'demo_link': 'https://www.muscleandstrength.com/exercises/cable-crossovers.html',
		'scheduled_workout_id': 1
	},
	{
		'_id': 6,
		'title': 'Pushups',
		'recommended_sets': 3,
		'recommended_reps': '8-12',
		'demo_link': 'https://www.muscleandstrength.com/exercises/push-up.html',
		'scheduled_workout_id': 1
	},
	{
		'_id': 7,
		'title': 'Hanging Leg Raise',
		'recommended_sets': 3,
		'recommended_reps': '8-12',
		'demo_link': 'https://www.muscleandstrength.com/exercises/hanging-leg-raise.html',
		'scheduled_workout_id': 1
	},
	{
		'_id': 8,
		'title': 'Decline Situp',
		'recommended_sets': 3,
		'recommended_reps': '8-12',
		'demo_link': 'https://www.muscleandstrength.com/exercises/decline-situp.html',
		'scheduled_workout_id': 1
	},
	{
		'_id': 9,
		'title': 'Dumbbell Side Bends',
		'recommended_sets': 3,
		'recommended_reps': '8-12',
		'demo_link': 'https://www.muscleandstrength.com/exercises/dumbbell-side-bends.html',
		'scheduled_workout_id': 1
	},
	{
		'_id': 10,
		'title': 'Plank',
		'recommended_sets': 3,
		'recommended_reps': '8-12',
		'demo_link': 'https://www.muscleandstrength.com/exercises/hover.html',
		'scheduled_workout_id': 1
	},
	{
		'_id': 11,
		'title': 'Cable Crunch',
		'recommended_sets': 3,
		'recommended_reps': '8-12',
		'demo_link': 'https://www.muscleandstrength.com/exercises/cable-crunch.html',
		'scheduled_workout_id': 1
	},
	{
		'_id': 12,
		'title': 'Neutral Grip Pull Ups',
		'recommended_sets': 3,
		'recommended_reps': '8-12',
		'demo_link': 'https://www.muscleandstrength.com/exercises/v-bar-pull-up.html',
		'scheduled_workout_id': 2
	},
	{
		'_id': 13,
		'title': 'Barbell Row',
		'recommended_sets': 3,
		'recommended_reps': '8-12',
		'demo_link': 'https://www.muscleandstrength.com/exercises/bent-over-barbell-row.html',
		'scheduled_workout_id': 2
	},
	{
		'_id': 14,
		'title': 'Lat Pulldown',
		'recommended_sets': 3,
		'recommended_reps': '8-12',
		'demo_link': 'https://www.muscleandstrength.com/exercises/reverse-grip-lat-pull-down.html',
		'scheduled_workout_id': 2
	},
	{
		'_id': 15,
		'title': 'Straight Arm Pulldown',
		'recommended_sets': 3,
		'recommended_reps': '8-12',
		'demo_link': 'https://www.muscleandstrength.com/exercises/straight-arm-lat-pull-down.html',
		'scheduled_workout_id': 2
	},
	{
		'_id': 16,
		'title': 'Cable Row',
		'recommended_sets': 3,
		'recommended_reps': '8-12',
		'demo_link': 'https://www.muscleandstrength.com/exercises/seated-row.html',
		'scheduled_workout_id': 2
	},
	{
		'_id': 17,
		'title': 'Deadlift',
		'recommended_sets': 3,
		'recommended_reps': '8-12',
		'demo_link': 'https://www.muscleandstrength.com/exercises/deadlifts.html',
		'scheduled_workout_id': 2
	},
	{
		'_id': 18,
		'title': 'Upright Row',
		'recommended_sets': 3,
		'recommended_reps': '8-12',
		'demo_link': 'https://www.muscleandstrength.com/exercises/upright-row.html',
		'scheduled_workout_id': 3
	},
	{
		'_id': 19,
		'title': 'Seated Lateral Raise',
		'recommended_sets': 3,
		'recommended_reps': '8-12',
		'demo_link': 'https://www.muscleandstrength.com/exercises/seated-dumbbell-lateral-raise.html',
		'scheduled_workout_id': 3
	},
	{
		'_id': 20,
		'title': 'Smith Machine Shoulder Press',
		'recommended_sets': 3,
		'recommended_reps': '8-12',
		'demo_link': 'https://www.muscleandstrength.com/exercises/smith-machine-shoulder-press.html',
		'scheduled_workout_id': 3
	},
	{
		'_id': 21,
		'title': 'Front Plate Raise',
		'recommended_sets': 3,
		'recommended_reps': '8-12',
		'demo_link': 'https://www.muscleandstrength.com/exercises/weight-plate-front-raise.html',
		'scheduled_workout_id': 3
	},
	{
		'_id': 22,
		'title': 'Cable Face Pull',
		'recommended_sets': 3,
		'recommended_reps': '8-12',
		'demo_link': 'https://www.muscleandstrength.com/exercises/cable-face-pull',
		'scheduled_workout_id': 3
	},
	{
		'_id': 23,
		'title': 'Preacher Curl',
		'recommended_sets': 3,
		'recommended_reps': '8-12',
		'demo_link': 'https://www.muscleandstrength.com/exercises/ez-bar-preacher-curl.html',
		'scheduled_workout_id': 4
	},
	{
		'_id': 24,
		'title': 'Close Grip Bench Press',
		'recommended_sets': 3,
		'recommended_reps': '8-12',
		'demo_link': 'https://www.muscleandstrength.com/exercises/close-grip-bench-press.html',
		'scheduled_workout_id': 4
	},
	{
		'_id': 25,
		'title': 'Hammer Curl',
		'recommended_sets': 3,
		'recommended_reps': '8-12',
		'demo_link': 'https://www.muscleandstrength.com/exercises/standing-hammer-curl.html',
		'scheduled_workout_id': 4
	},
	{
		'_id': 26,
		'title': 'Overhead Rope Extension',
		'recommended_sets': 3,
		'recommended_reps': '8-12',
		'demo_link': 'https://www.muscleandstrength.com/exercises/overhead-tricep-extension.html',
		'scheduled_workout_id': 4
	},
	{
		'_id': 27,
		'title': 'Standing Cable Curl',
		'recommended_sets': 3,
		'recommended_reps': '8-12',
		'demo_link': 'https://www.muscleandstrength.com/exercises/standing-high-pulley-cable-curl.html',
		'scheduled_workout_id': 4
	},
	{
		'_id': 28,
		'title': 'Reverse Grip Pushdown',
		'recommended_sets': 3,
		'recommended_reps': '8-12',
		'demo_link': 'https://www.muscleandstrength.com/exercises/reverse-grip-tricep-extension.html',
		'scheduled_workout_id': 4
	},
	{
		'_id': 29,
		'title': 'Squat',
		'recommended_sets': 3,
		'recommended_reps': '8-10',
		'demo_link': 'https://www.muscleandstrength.com/exercises/squat.html',
		'scheduled_workout_id': 5
	},
	{
		'_id': 30,
		'title': 'Leg Press',
		'recommended_sets': 3,
		'recommended_reps': '15',
		'demo_link': 'https://www.muscleandstrength.com/exercises/45-degree-leg-press.html',
		'scheduled_workout_id': 5
	},
	{
		'_id': 31,
		'title': 'Single Leg Extension',
		'recommended_sets': 3,
		'recommended_reps': '15',
		'demo_link': 'https://www.muscleandstrength.com/exercises/single-leg-extension.html',
		'scheduled_workout_id': 5
	},
	{
		'_id': 32 ,
		'title': 'Calf Raises',
		'recommended_sets': 3,
		'recommended_reps': '15',
		'demo_link': 'https://www.muscleandstrength.com/exercises/seated-calf-raise.html',
		'scheduled_workout_id': 5
	}
]