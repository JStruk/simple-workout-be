import { config } from 'dotenv'
config()

import Koa from 'koa'
import cors from '@koa/cors'

import router from './routes/router'

export const DEFAULT_PORT = 3001

const bodyParser = require('koa-bodyparser')

export function startServer() {
	const port = process.env.APP_PORT || DEFAULT_PORT

	const app = new Koa()
	app.use(cors())
	app.use(bodyParser())
	app.use(router.routes())

	if (process.env.NODE_ENV !== 'test') {
		return app.listen(port, () => {
			console.log(`Server running on port ${port}`)
		})
	}
	return
}

export default startServer()
