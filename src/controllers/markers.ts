import { Request, Response } from 'express';
import Marker from '../models/marker';

export const getMarkers = async (req: Request, res: Response) => {
    try {
        const markers = await Marker.findAll();
        res.json(markers);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching markers' });
    }
};

export const createMarker = async (req: Request, res: Response) => {
    const { longitude, latitude, name, category } = req.body;
    try {
        const marker = await Marker.create({ longitude, latitude, name, category });
        res.json(marker);
    } catch (error) {
        res.status(500).json({ error: 'Error creating marker' });
    }
};

export const deleteAllMarkers = async (req: Request, res: Response) => {
    try {
        await Marker.destroy({ where: {}, truncate: true });
        res.json({ msg: 'All markers deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting markers' });
    }
};

export const getMarkersByCategory = async (req: Request, res: Response) => {
    const category = req.params.category;
    try {
        const markers = await Marker.findAll({ where: { category } });
        res.json(markers);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching markers by category' });
    }
};

/*
export const postLocation = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const location = await Location.create(body);
        res.json(location);
    } catch (error) {
        res.status(500).json({
            msg: 'Error creating location',
            error
        });
    }
};

export const putLocation = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const location = await Location.findByPk(id);
        if (!location) {
            return res.status(404).json({
                msg: `No location found with id ${id}`
            });
        }

        await location.update(body);
        res.json(location);
    } catch (error) {
        res.status(500).json({
            msg: 'Error updating location',
            error
        });
    }
};*/

