// Models
import { Token } from './token';

export class ResponseAuth {
    UsuarioId: number;
    TipoUsuario: string;
    Placa: number;
    Access_token: Token;
}
