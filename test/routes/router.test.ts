import request from 'supertest'
import server from '../../src/server'

describe('router', () => {
	afterAll(() => {
		server.close()
	})

	describe('home', () => {
		it('returns hello world', async () => {
			const response = await request(server).get('/test')
			expect(response.status).toBe(200)
			expect(response.text).toMatchSnapshot()
		})
	})
})