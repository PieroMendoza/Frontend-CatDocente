export class Docente {
  id: number;
  nombres: string;
  paterno: string;
  materno: string;
  dni: string;
  correo: string;
  nacimiento: string;
  sexo: string;
  usuario: string;
  campus: string;
  estado: string;
  idCategorizacion: number;
  idEvaluacion: number;

  constructor(
    id: number,
    nombres: string,
    paterno: string,
    materno: string,
    dni: string,
    correo: string,
    nacimiento: string,
    sexo: string,
    usuario: string,
    campus: string,
    estado: string,
    idCategorizacion: number,
    idEvaluacion: number
  ) {
    this.id = id;
    this.nombres = nombres;
    this.paterno = paterno;
    this.materno = materno;
    this.dni = dni;
    this.correo = correo;
    this.nacimiento = nacimiento;
    this.sexo = sexo;
    this.usuario = usuario;
    this.campus = campus;
    this.estado = estado;
    this.idCategorizacion = idCategorizacion;
    this.idEvaluacion = idEvaluacion;
  }
}
