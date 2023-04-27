export class Serie {
    id: number;
    titulo: string;
    plataforma: string;
    numTemporadas: number;
    descripcion: string;
    imagen: string;
    link: any;

    constructor(id: number, titulo: string, plataforma: string, numTemporadas: number,
         descripcion: string, imagen: string) {
        this.id = id;
        this.titulo = titulo;
        this.plataforma = plataforma;
        this.numTemporadas = numTemporadas;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}