import { ContentLayout } from '@/components/admin-panel/content-layout';
import AttendanceChart from '@/modules/admin/components/charts/attendance-chart';
import CountChart from '@/modules/admin/components/charts/CountChart';
import UserCard from '@/modules/admin/components/info-cards/user-card';

const AdminPage = () => {
    return (
        <ContentLayout title='Dashboard'>
            <div className='grid grid-cols-1 sm:grid-cols-12 gap-4'>
                <div className='grid sm:col-span-12 md:col-span-9 lg:col-span-8 rounded-lg gap-4'>
                    <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        <UserCard type='student'/>
                        <UserCard type='teacher'/>
                        <UserCard type='parent' />
                        <UserCard type='staff' />
                    </div>
                    <div className='flex gap-4 flex-col lg:flex-row'>
                        <div className='w-full lg:w-1/3'>
                            <CountChart />
                        </div>
                        <div className='w-full lg:w-2/3'>
                            <AttendanceChart/>
                        </div>
                    </div>
                </div>
                <div className='sm:col-span-12 md:col-span-3 lg:col-span-4 bg-lama-purple p-4 rounded-lg shadow'>
                    <h2 className='text-lg font-semibold'>Barra Lateral</h2>
                    <p>Este es el área de la barra lateral que se ajusta según el tamaño de la pantalla.</p>
                </div>
            </div>
        </ContentLayout>
    );
};

export default AdminPage;
