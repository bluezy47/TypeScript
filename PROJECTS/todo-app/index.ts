
import { TodoWork } from "./src/todowork"

let todo: TodoWork = new TodoWork("1", "Hello World", "The First Word Every Developer Used!", new Date(), new Date(), false);
let title: string = todo.getTitle();
//
//
console.log("-------------------------------------")
console.log("Todo Title: ", title);
console.log("-------------------------------------")
