import Koa from 'koa'
import { DEFAULT_PORT, startServer } from '../src/server'
jest.mock('koa')

describe('server', function () {
	// afterAll(() => {
	// 	delete process.env.APP_PORT
	// })

	const use = jest.fn()
	const listen = jest.fn()
	beforeEach(() => {
		jest.clearAllMocks()
		;(Koa as unknown as jest.Mock).mockImplementation(() => ({
			use,
			listen
		}))
	})

	afterAll(() => {
		jest.resetAllMocks()
	})

	describe('APP_PORT is set', () => {
		it('starts the server on the port from env', () => {
			process.env.APP_PORT = '1234'

			startServer()

			expect(Koa).toHaveBeenCalledTimes(1)
			expect(listen).toHaveBeenCalledTimes(1)
			expect(listen).toHaveBeenCalledWith(process.env.APP_PORT)
		})
	})

	describe('APP_PORT is not set', () => {
		it('starts the server on the default port', () => {
			delete process.env.APP_PORT

			startServer()

			expect(Koa).toHaveBeenCalledTimes(1)
			expect(listen).toHaveBeenCalledTimes(1)
			expect(listen).toHaveBeenCalledWith(DEFAULT_PORT)
		})
	})
})