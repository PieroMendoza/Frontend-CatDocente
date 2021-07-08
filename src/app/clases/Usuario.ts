export class Usuario {
  id: number;
  username: string;
  password: string;
  idDocente: number;
  idCategorizacion: number;
  idEvaluacion: number;

  constructor(
    id: number,
    username: string,
    password: string,
    idDocente: number,
    idCategorizacion: number,
    idEvaluacion: number
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.idDocente = idDocente;
    this.idCategorizacion = idCategorizacion;
    this.idEvaluacion = idEvaluacion;
  }
}
