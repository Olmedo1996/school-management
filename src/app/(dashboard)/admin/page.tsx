import { ContentLayout } from '@/components/admin-panel/content-layout';
import UserCard from '@/modules/admin/components/info-cards/user-card';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge, Ellipsis } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AdminPage = () => {
    return (
        <ContentLayout title='Dashboard'>
            <div className='grid grid-cols-1 sm:grid-cols-12 gap-2'>
                <div className='sm:col-span-12 md:col-span-9 lg:col-span-8 rounded-lg'>
                    <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        <UserCard type='student' />
                        <UserCard type='teacher' />
                        <UserCard type='parent' />
                        <UserCard type='staff' />
                    </div>
                </div>
                <div className='sm:col-span-12 md:col-span-3 lg:col-span-4 bg-cyan-300 p-4 rounded-lg shadow'>
                    <h2 className='text-lg font-semibold'>Barra Lateral</h2>
                    <p>Este es el área de la barra lateral que se ajusta según el tamaño de la pantalla.</p>
                </div>
            </div>
        </ContentLayout>
    );
};

export default AdminPage;
