import express, { Request, Response, Router, NextFunction } from 'express';
import {TestMiddleware} from '../middlewares/index';
const router: Router = express.Router();


router.get('/', TestMiddleware, async (request: Request, response: Response) => {
   console.log("after mid")
   response.send("test ");
});

router.post('/t', async (request: Request, response: Response) => {
   response.json({t:"test t"});
});

export const testRouter: Router = router;
