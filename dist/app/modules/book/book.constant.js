"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookFilterableFields = exports.bookSearchableFields = void 0;
exports.bookSearchableFields = ["title", "author", "genre"];
exports.bookFilterableFields = [
    ...exports.bookSearchableFields,
    "search",
    "minPrice",
    "maxPrice",
    "category",
];
