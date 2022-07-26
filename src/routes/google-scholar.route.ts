
import { Router } from "express"
import * as ScholarController from "../controllers/google-scholar.controller"

export const googleScholarRouter = Router()

googleScholarRouter.get("/", ScholarController.ArticalsByUserId)

