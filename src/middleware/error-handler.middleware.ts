import { NextFunction, Request, Response } from 'express';
import { AppError } from '../errors/app.error';
import { StatusCodes } from 'http-status-codes';

export function errorHandler(
  error: AppError | Error,
  _: Request,
  res: Response,
  __: NextFunction,
) {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      message: error.message,
    });
  }

  // Se o erro não for uma instância de AppError, retorna um status 500.
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    message: error.message,
  });
}
