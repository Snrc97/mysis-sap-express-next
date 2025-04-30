import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const userAuthentication = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.header("Authorization")?.replace("Bearer ", "") ?? "";

  if (!token) {
    res.status(401).json({ msg: "No token, authorization denied" });
    return;
  }

  try {
    const jwtSecret = process.env.JWT_SECRET || "secret";
    const decoded = jwt.verify(token, jwtSecret) as {
      user: {
        id: string;
      };
    };

    (req as any).user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid JWT Token" });
  }
};

