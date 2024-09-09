import React from 'react';
import { NextPage } from 'next';
import AdminLayout from '@/layouts/AdminLayout';
import UsersProvider from '@/modules/user/contexts/UsersContext';
import UserList from '@/modules/user/components/UserList';

const UsersPage: NextPage = () => {
    return (
        <UsersProvider>
            <AdminLayout>
                <h1>Admin Users</h1>
                <UserList />
            </AdminLayout>
        </UsersProvider>
    );
};

export default UsersPage;