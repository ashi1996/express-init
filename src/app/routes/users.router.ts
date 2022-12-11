import express, { Request, Response, Router, NextFunction } from 'express';
const router: Router = express.Router();


router.get('/', async (request: Request, response: Response) => {
   response.send("hello ");
});

export const usersRouter: Router = router;
