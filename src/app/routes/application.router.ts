import express, { Router } from 'express';
import { usersRouter } from './users.router';
import { testRouter } from './test.router';

const router: Router = express.Router();
router.use('/users', usersRouter);
router.use('/test', testRouter);

router.use((req,res) => {
    res.status(404).json({msg: "404 url page not found"})
})

export const applicationRouter: Router = router;
