
// make the todo interface...
export interface Todo {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    completed: boolean;
    //
    getTitle(): string;
    upDescriptionTitle(description: string, title: string): boolean;
    markAsCompleted(): boolean;
}
