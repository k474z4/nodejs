"use strict";
// console.log(process.env);
Object.defineProperty(exports, "__esModule", { value: true });
exports.characters = void 0;
const { SHELL, npm_config_local_prefix, npm_lifecycle_script } = process.env;
// console.table({ SHELL, npm_config_local_prefix, npm_lifecycle_script });
exports.characters = ['Flash', 'Superman', 'Batman'];
const [, , batman] = exports.characters;
// console.log(batman);
