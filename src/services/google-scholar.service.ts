
import { user } from "scholarly"
import { IUserID, IArticalByUserId } from "../interfaces"

/* Find articals by user id */
export const findById = async (data: IUserID) => {
    try {
        return await user(data.scholar_user_id) as IArticalByUserId[]
    } catch (error: any) {
        if (error) throw error
    }
}