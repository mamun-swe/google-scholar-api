
import { Router } from "express"
import { googleScholarRouter } from "./google-scholar.route"

export const router = Router()

router.use("/scholar", googleScholarRouter)