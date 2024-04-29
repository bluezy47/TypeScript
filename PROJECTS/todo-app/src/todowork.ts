
// import the Todo class
import {Todo} from "./todo";


// implement the Todo class
export class TodoWork implements Todo {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    completed: boolean;
    //
    constructor(id: string, title: string, description: string, createdAt: Date, updatedAt: Date, completed: boolean) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.completed = completed;
    }

    getTitle(): string {
        return this.title;
    }

    /**
     * This method updates the description and title of the todo
     * @param description | string | A short description of the todo
     * @param title | string | The title of the todo
     * @returns | boolean | true if the update was successful
     */
    upDescriptionTitle(description: string, title: string): boolean {
        this.description = description;
        this.title = title;
        return true;
    }

    markAsCompleted(): boolean {
        this.completed = true;
        return true;
    }
}
