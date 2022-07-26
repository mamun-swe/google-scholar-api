
import { NextFunction, Request, Response } from "express"
import { validator } from "../validators"
import { IRUserId, IRQuery } from "../interfaces"
import { findById, findByQuery } from "../services/google-scholar.service"

/* Articals by user ID */
export const ArticalsByUserId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let results: any = []
        const requestQuery: IRUserId = <any>req.query

        /* Validate request query */
        const validate = await validator.googleScholar.UserId(requestQuery)
        if (!validate.isValid) {
            return res.status(200).json({
                status: true,
                data: []
            })
        }

        /* Search data by scholar user ID */
        results = await findById({ scholar_user_id: requestQuery.scholar_user_id })

        res.status(200).json({
            status: true,
            data: results
        })
    } catch (error: any) {
        if (error) {
            console.log(error)
            next(error)
        }
    }
}

/* Articals by query */
export const ArticalsByQuery = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let results: any = []
        const requestQuery: IRQuery = <any>req.query

        /* Validate request query */
        const validate = await validator.googleScholar.Query(requestQuery)
        if (!validate.isValid) {
            return res.status(200).json({
                status: true,
                data: []
            })
        }

        /* Search articals by query */
        results = await findByQuery({ query: requestQuery.query })

        res.status(200).json({
            status: true,
            data: results
        })
    } catch (error: any) {
        if (error) {
            console.log(error)
            next(error)
        }
    }
}