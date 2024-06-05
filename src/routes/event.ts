import { Router } from 'express';
import { getEvents, createEvent, updateEvent, deleteEvent } from '../controllers/event';

const router = Router();

router.get('/', getEvents);
router.post('/', createEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

export default router;
