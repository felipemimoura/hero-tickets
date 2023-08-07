import { NextFunction, Request, Response } from "express"
import { HttpExecption } from "../interfaces/HttpException"

export function errorMiddleware(err: HttpExecption, req: Request, res: Response, next: NextFunction){
  const status: number = err.status ?? 500
  const message: string = err.message ?? 'Internal server error'

  res.status(status).json({
    message,
    status
  })
}