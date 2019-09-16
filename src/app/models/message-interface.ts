export interface MessageInterface {
    id?: number;
    chat?: number;
    sender?: number;
    message?: string;
    status?: string;
    created_at?: Date;
    updated_at?: Date;
    user_id?: number;
}
