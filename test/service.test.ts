
import { findById } from "../src/services/google-scholar.service"

describe("Google scholar service tests", () => {
    test('Test should return a user articals by user ID', async () => {
        const response = await findById({ scholar_user_id: "R4hZ8WMAAAAJ" })

        expect(typeof response?.[0].title).toBe("string")
        expect(typeof response?.[0].url).toBe("string")
        expect(typeof response?.[0].year).toBe("number")
        expect(typeof response?.[0].numCitations).toBe("number")
        expect(typeof response?.[0].journal).toBe("string")
        expect(typeof response?.[0].volume).toBe("number")
        expect(typeof response?.[0].issue).toBe("number")
        expect(typeof response?.[0].pages).toBe("string")
    })

    test('Test should return an empty array list articals by user ID', async () => {
        const response = await findById({ scholar_user_id: "R4hZ8WMAAAAJ234234" })
        expect(response).toEqual([])
    })
})