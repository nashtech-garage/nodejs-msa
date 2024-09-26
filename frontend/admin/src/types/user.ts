export enum Role {
	User = 'User',
	Admin = 'Admin',
}

export interface User {
	id: string;
	name: string;
	email: string;
	roles: Role[];
}
