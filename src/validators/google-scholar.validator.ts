
import { isEmpty } from "../helpers"
import {
    IRSearchDocument,
    IRSearchErrorDocument
} from "../interfaces"

/* Search validator */
export const Search = async (data: IRSearchDocument) => {
    let errors: IRSearchErrorDocument = <IRSearchErrorDocument>{}

    if (!data.index || isEmpty(data.index)) errors.index = "Index is required."
    if (!data.query || isEmpty(data.query)) errors.query = "Query is required."

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}