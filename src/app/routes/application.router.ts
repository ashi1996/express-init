import express, { Router } from 'express';
import { usersRouter } from './users.router';
import { testRouter } from './test.router';

const router: Router = express.Router();
router.use('/users', usersRouter);
router.use('/test', testRouter);

export const applicationRouter: Router = router;
