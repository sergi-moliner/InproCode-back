import { Request, Response } from 'express';
import User from '../models/user';

export const getUsers = async (req: Request, res: Response) => {
    const listUsers = await User.findAll();
    res.json(listUsers);
}

export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if(user){
        res.json(user);
    } else {
        res.status(404).json({
            msg : `User with id ${id} not found`
        })
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if(!user){
        return res.status(404).json({
            msg : `User with id ${id} not found`
        })
    } else {
        await user.destroy();
        res.json({
            msg : 'User deleted',
            user
        })
    }
 }

export const postUser = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await User.create (body);
        res.json({
            msg : 'User created'
        })
    

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg : 'Error in the server'
        })
    }
}

export const putUser = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const user = await User.findByPk(id);
        if(user){
            await user.update(body);
            res.json({
                msg : 'User updated',
                user
            })
        } else {
            res.status(404).json({
                msg : `User with id ${id} not found`
            })
        }    
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg : 'Error in the server'
        })
    }
}
