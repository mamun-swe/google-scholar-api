
import { isEmpty } from "../helpers"
import { IRUserId, IRQuery } from "../interfaces"

/* Scholar user id validator */
export const UserId = async (data: IRUserId) => {
    let errors: IRUserId = <IRUserId>{}

    if (!data.scholar_user_id || isEmpty(data.scholar_user_id)) errors.scholar_user_id = "Scholar user id is required."

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}


/* Scholar query validator */
export const Query = async (data: IRQuery) => {
    let errors: IRQuery = <IRQuery>{}

    if (!data.query || isEmpty(data.query)) errors.query = "Query is required."

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}