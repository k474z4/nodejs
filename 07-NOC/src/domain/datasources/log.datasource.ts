import { LogEntity, LogSeverityLevel } from "../entities/log.entity";

// abstract nos permite rechazar la creacion de una instancia de la clase a la que apunta.
// una clase abstracta define un comportamiento estricto sobre otras clases.
// cualquier clase que implemente una clase estricta debe contener sus propiedades.
export abstract class LogDatasource {
    // todo origen de datos debe implementar el metodo 'saveLog()'
    abstract saveLog(log: LogEntity): Promise<void>;
    // define la respuesta segun la implementacion y devuelve el resultado como un arreglo
    abstract getlogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]>
}
