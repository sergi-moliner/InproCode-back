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
exports.getMarkersByCategory = exports.deleteAllMarkers = exports.createMarker = exports.getMarkers = void 0;
const marker_1 = __importDefault(require("../models/marker"));
const getMarkers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const markers = yield marker_1.default.findAll();
        res.json(markers);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching markers' });
    }
});
exports.getMarkers = getMarkers;
const createMarker = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { longitude, latitude, name, category } = req.body;
    try {
        const marker = yield marker_1.default.create({ longitude, latitude, name, category });
        res.json(marker);
    }
    catch (error) {
        res.status(500).json({ error: 'Error creating marker' });
    }
});
exports.createMarker = createMarker;
const deleteAllMarkers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield marker_1.default.destroy({ where: {}, truncate: true });
        res.json({ msg: 'All markers deleted' });
    }
    catch (error) {
        res.status(500).json({ error: 'Error deleting markers' });
    }
});
exports.deleteAllMarkers = deleteAllMarkers;
const getMarkersByCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = req.params.category;
    try {
        const markers = yield marker_1.default.findAll({ where: { category } });
        res.json(markers);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching markers by category' });
    }
});
exports.getMarkersByCategory = getMarkersByCategory;
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
