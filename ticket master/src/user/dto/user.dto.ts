export class CreateUserDTO {
    readonly name: string;
    readonly surname: string;
    readonly phone: string; 
    readonly email: string;
    readonly password: string;
    readonly isAdmin: boolean;
    readonly createdAt: Date;
}