export interface Task {
    id: number;
    title: string;
    description: string;
    priority: number;
    dueDate: string;  // ISO string from backend
    isCompleted: boolean;
    categoryId: number;
    createdAt: string;
}