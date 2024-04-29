"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todowork_1 = require("./src/todowork");
let todo = new todowork_1.TodoWork("1", "Hello World", "The First Word Every Developer Used!", new Date(), new Date(), false);
let title = todo.getTitle();
//
//
console.log("-------------------------------------");
console.log("Todo Title: ", title);
console.log("-------------------------------------");
