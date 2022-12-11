import express, { Request, Response, Router, NextFunction } from 'express';
const router: Router = express.Router();


router.get('/', async (request: Request, response: Response) => {
   response.send("test ");
});

router.post('/t', async (request: Request, response: Response) => {
   response.json({t:"test t"});
});

export const testRouter: Router = router;
