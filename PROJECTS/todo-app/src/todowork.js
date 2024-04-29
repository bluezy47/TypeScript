"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoWork = void 0;
// implement the Todo class
class TodoWork {
    //
    constructor(id, title, description, createdAt, updatedAt, completed) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.completed = completed;
    }
    getTitle() {
        return this.title;
    }
    /**
     * This method updates the description and title of the todo
     * @param description | string | A short description of the todo
     * @param title | string | The title of the todo
     * @returns | boolean | true if the update was successful
     */
    upDescriptionTitle(description, title) {
        this.description = description;
        this.title = title;
        return true;
    }
    markAsCompleted() {
        this.completed = true;
        return true;
    }
}
exports.TodoWork = TodoWork;
