import { Request, Response } from "express";

interface ICidade {
    name: string;
}

export const create = (req: Request<{}, {}, ICidade>, res: Response) => {
    const data = req.body
    console.log(data);
    
    return res.send('Create!');
}
