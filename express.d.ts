// types/express.d.ts
import { JwtPayload } from "./middlewares/jwtMiddleware"; 

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}
