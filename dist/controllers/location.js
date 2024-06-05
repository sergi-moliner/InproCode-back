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
exports.deleteLocation = exports.putLocation = exports.postLocation = exports.getLocation = exports.getLocations = void 0;
const marker_1 = __importDefault(require("../models/marker"));
const getLocations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const locations = yield marker_1.default.findAll();
    res.json(locations);
});
exports.getLocations = getLocations;
const getLocation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const location = yield marker_1.default.findByPk(id);
    if (location) {
        res.json(location);
    }
    else {
        res.status(404).json({ msg: `No location found with id ${id}` });
    }
});
exports.getLocation = getLocation;
const postLocation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const location = yield marker_1.default.create(body);
        res.json(location);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Error creating location',
            error
        });
    }
});
exports.postLocation = postLocation;
const putLocation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const location = yield marker_1.default.findByPk(id);
        if (!location) {
            return res.status(404).json({
                msg: `No location found with id ${id}`
            });
        }
        yield location.update(body);
        res.json(location);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Error updating location',
            error
        });
    }
});
exports.putLocation = putLocation;
const deleteLocation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const location = yield marker_1.default.findByPk(id);
        if (!location) {
            return res.status(404).json({
                msg: `No location found with id ${id}`
            });
        }
        yield location.destroy();
        res.json({ msg: 'Location deleted' });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Error deleting location',
            error
        });
    }
});
exports.deleteLocation = deleteLocation;
