import { Router } from 'express';
import { getUsers, getUser, deleteUser, postUser, putUser } from '../controllers/user';

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.post('/', postUser);
router.put('/:id', putUser);

export default router;