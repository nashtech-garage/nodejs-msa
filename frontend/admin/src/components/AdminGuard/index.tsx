import React from 'react';
import { useUser } from '@/common/contexts/WhoAmIProvider';
import { Role } from '@/types/user';
import { signOut } from 'next-auth/react';

export function AdminGuard({ children }: React.PropsWithChildren) {
	const roles = useUser('roles');
	const isAdmin = roles.includes(Role.Admin);

	return isAdmin ? (
		children
	) : (
		<div>
			Forbidden
			<button onClick={() => signOut()}>Signout</button>
		</div>
	);
}
