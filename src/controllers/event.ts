import { Request, Response } from 'express';
import Event from '../models/event';

export const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await Event.findAll();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching events' });
  }
};

export const createEvent = async (req: Request, res: Response) => {
  const { title, date, color, type } = req.body;
  try {
    const event = await Event.create({ title, date, color, type });
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: 'Error creating event' });
  }
};

export const updateEvent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, date, color, type } = req.body;
  try {
    const event = await Event.findByPk(id);
    if (event) {
      await event.update({ title, date, color, type });
      res.json(event);
    } else {
      res.status(404).json({ error: 'Event not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating event' });
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const event = await Event.findByPk(id);
    if (event) {
      await event.destroy();
      res.json({ message: 'Event deleted' });
    } else {
      res.status(404).json({ error: 'Event not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting event' });
  }
};
