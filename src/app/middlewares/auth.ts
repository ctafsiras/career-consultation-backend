import { NextFunction, Request, Response } from "express";
import { Secret } from "jsonwebtoken";
import { jwtHelpers } from "../../shared/jwt";

const auth =
  (...requiredRoles: string[]) =>
  async (req: any, res: Response, next: NextFunction) => {
    try {
      //get authorization token
      const token = req.headers.authorization;
      if (!token) {
        throw new Error("You are not authorized");
      }
      // verify token
      let verifiedUser = null;

      verifiedUser = jwtHelpers.verifyToken(
        token,
        process.env.JWT_SECRET as Secret
      );

      req.user = verifiedUser; // role  , userid

      // role diye guard korar jnno
      if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
        throw new Error("Forbidden");
      }
      next();
    } catch (error) {
      next(error);
    }
  };

export default auth;
