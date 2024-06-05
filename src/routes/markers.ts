import { Router } from 'express';
import { getMarkers, createMarker, deleteAllMarkers, getMarkersByCategory } from '../controllers/markers';

const router = Router();

router.get('/', getMarkers);
router.post('/', createMarker);
router.delete('/', deleteAllMarkers);
router.get('/category/:category', getMarkersByCategory);


export default router;
