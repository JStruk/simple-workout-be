#!/usr/bin/mongo --quiet

load('./seeds/exercises.js')
load('./seeds/workouts.js')

const conn = new Mongo()

let db = conn.getDB('test')
db = db.getSiblingDB('simple-workout')

db.exercises.insert(exercises)
db.workouts.insert(workouts)

