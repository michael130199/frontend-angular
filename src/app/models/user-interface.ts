export interface UserInterface {
    id?:string;
    role_id?: number,
    name?: string,
    last_name?: string,
    ci?: number,
    emergency_tl?: number,
    extention?: number,
    email?: string,
    biography?: string,
    remember_token?: string,
    password?: string,
    created_at?: Date,
    update_at?: Date
  }
