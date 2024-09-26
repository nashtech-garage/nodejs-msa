import React from 'react';
import { NextPage } from 'next';
import AdminLayout from '@/layouts/AdminLayout';
import UsersProvider from '@/modules/user/contexts/UsersContext';
import UserList from '@/modules/user/components/UserList';
import { signOut } from 'next-auth/react';

const UsersPage: NextPage = () => {
	return (
		<UsersProvider>
			<AdminLayout>
				<h1>Admin Users</h1>
				<UserList />
				<button onClick={() => signOut()}>Sign out</button>
			</AdminLayout>
		</UsersProvider>
	);
};

export default UsersPage;
