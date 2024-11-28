"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
const studentRouter = (0, express_1.Router)();
// Routes
studentRouter.get('/', product_controller_1.default.getAllProducts);
studentRouter.get('/:id', product_controller_1.default.getProductById);
studentRouter.post('/', product_controller_1.default.addProduct);
studentRouter.put('/:id', product_controller_1.default.updateProductById);
studentRouter.delete('/:id', product_controller_1.default.deleteProductById);
exports.default = studentRouter;
