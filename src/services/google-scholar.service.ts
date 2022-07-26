
import { search, user } from "scholarly"
import { IRUserId, IRQuery } from "../interfaces"

/* Find articals by user id */
export const findById = async (data: IRUserId) => {
    try {
        return await user(data.scholar_user_id)
    } catch (error: any) {
        if (error) throw error
    }
}

/* Find articals by query */
export const findByQuery = async (data: IRQuery) => {
    try {
        return await search(data.query)
    } catch (error: any) {
        if (error) throw error
    }
}