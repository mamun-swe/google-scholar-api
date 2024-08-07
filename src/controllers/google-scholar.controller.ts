import { NextFunction, Request, Response } from "express";
import { IRequestQuery } from "../interfaces";
import { findById } from "../services/google-scholar.service";

/* Articals by user ID */
export const ArticalsByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let results: any = [];
    const requestQuery: IRequestQuery = <any>req.query;

    /* Validate request query */
    if (!requestQuery) {
      return res.status(200).json({
        status: true,
        data: [],
      });
    }

    /* Search data by scholar user ID */
    if (requestQuery.scholar_user_id) {
      results = await findById({
        scholar_user_id: requestQuery.scholar_user_id,
      });
    }

    res.status(200).json({
      status: true,
      data: results,
    });
  } catch (error: any) {
    if (error) {
      console.log(error);
      next(error);
    }
  }
};
