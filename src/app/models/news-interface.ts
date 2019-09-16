export interface NewsInterface {
    id?: number;
    user_id?: number;
    file_id?:number;
    title?: string; //titulo
    content?: string;//contenido
    resume?: string;// resumen
    slug?: string;
    status?: string;
    publication_date?:Date;//Fecha de Publicacion
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}