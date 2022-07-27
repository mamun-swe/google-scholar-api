
import request from "supertest"
import { app } from "../src/app"

describe("Test should return articals by user ID", () => {
    test('Test should return a user articals by user ID', async () => {
        const response = await request(app).get(`/api/v1/scholar?scholar_user_id=R4hZ8WMAAAAJ`)

        expect(response.statusCode).toBe(200)
        expect(typeof response.body.data[0].title).toBe("string")
        expect(typeof response.body.data[0].url).toBe("string")
        expect(typeof response.body.data[0].year).toBe("number")
        expect(typeof response.body.data[0].numCitations).toBe("number")
        expect(typeof response.body.data[0].journal).toBe("string")
        expect(typeof response.body.data[0].volume).toBe("number")
        expect(typeof response.body.data[0].issue).toBe("number")
        expect(typeof response.body.data[0].pages).toBe("string")
    })

    test('Test should return an empty array list articals by user ID', async () => {
        const response = await request(app).get(`/api/v1/scholar?scholar_user_id=sdfsdfsefwsgdghdf`)

        expect(response.statusCode).toBe(200)
        expect(response.body.data).toEqual([])
    })

    test('Test should return an empty array list articals by no query', async () => {
        const response = await request(app).get(`/api/v1/scholar`)

        expect(response.statusCode).toBe(200)
        expect(response.body.data).toEqual([])
    })
})