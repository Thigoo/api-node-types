import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (_, res) => {
    return res.end('Hello World!');
});

router.post('/teste', (req, res) => {
    return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
});

export { router };
