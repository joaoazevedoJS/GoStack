import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../config/auth';

interface TokenPayload {
  iat: number; // data de criação
  exp: number; // data de expiração
  sub: string; // dados do payload
}

function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('JWT token is missing');
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret) as TokenPayload;

    const { sub } = decoded;

    request.user = {
      id: sub,
    };

    next();
  } catch {
    throw new Error('Invalid JWT token');
  }
}

export default ensureAuthenticated;
