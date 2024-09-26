import React, { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { decode } from 'jsonwebtoken';
import { setUser } from '@/store/user/slice';
import { useAppDispatch, useAppSelector } from '../hooks';
import Loading from '@/components/Loading';
import { Role, User } from '@/types/user';

interface DecodedToken {
	exp: number;
	iat: number;
	auth_time: number;
	jti: string;
	iss: string;
	aud: string;
	sub: string;
	type: string;
	azp: string;
	sid: string;
	realm_access: {
		roles: Role[];
	};
	resource_access: {
		account: {
			roles: string[];
		};
	};
	scope: string;
	email_verified: boolean;
	name: string;
	preferred_username: string;
	given_name: string;
	family_name: string;
	email: string;
}

export function WhoAmIProvider({ children }: React.PropsWithChildren) {
	// Require true: force the user to be logged in
	const { data, status } = useSession({
		required: true,
		onUnauthenticated: () => signIn('keycloak'),
	});
	const dispatch = useAppDispatch();

	useEffect(() => {
		const accessToken = data?.accessToken;

		if (accessToken) {
			const decoded = decode(accessToken) as DecodedToken;
			dispatch(
				setUser({
					id: decoded.sub,
					name: decoded.name,
					email: decoded.email,
					roles: decoded.realm_access.roles,
				})
			);
		}
	}, [data]);

	return status === 'loading' ? <Loading /> : children;
}

// Overload
export function useUser(): User;
export function useUser<K extends keyof User>(key: K): User[K];

// Implementation
export function useUser<K extends keyof User>(key?: K) {
	return useAppSelector((state) => {
		const user = state.user;
		return key ? user[key] : user;
	});
}
