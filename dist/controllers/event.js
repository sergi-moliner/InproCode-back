"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEvent = exports.updateEvent = exports.createEvent = exports.getEvents = void 0;
const event_1 = __importDefault(require("../models/event"));
const getEvents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const events = yield event_1.default.findAll();
        res.json(events);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching events' });
    }
});
exports.getEvents = getEvents;
const createEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, date, color } = req.body;
    try {
        const event = yield event_1.default.create({ title, date, color });
        res.json(event);
    }
    catch (error) {
        res.status(500).json({ error: 'Error creating event' });
    }
});
exports.createEvent = createEvent;
const updateEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, date, color } = req.body;
    try {
        const event = yield event_1.default.findByPk(id);
        if (event) {
            yield event.update({ title, date, color });
            res.json(event);
        }
        else {
            res.status(404).json({ error: 'Event not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Error updating event' });
    }
});
exports.updateEvent = updateEvent;
const deleteEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const event = yield event_1.default.findByPk(id);
        if (event) {
            yield event.destroy();
            res.json({ message: 'Event deleted' });
        }
        else {
            res.status(404).json({ error: 'Event not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Error deleting event' });
    }
});
exports.deleteEvent = deleteEvent;
