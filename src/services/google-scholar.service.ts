
import { search, user } from "scholarly"
import { IUserID, IQuery, IArticalByUserId, IArticalByQuery } from "../interfaces"

/* Find articals by user id */
export const findById = async (data: IUserID) => {
    try {
        return await user(data.scholar_user_id) as IArticalByUserId[]
    } catch (error: any) {
        if (error) throw error
    }
}

/* Find articals by query */
export const findByQuery = async (data: IQuery) => {
    try {
        return await search(data.query) as IArticalByQuery[]
    } catch (error: any) {
        if (error) throw error
    }
}