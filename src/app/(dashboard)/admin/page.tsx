import { ContentLayout } from '@/components/admin-panel/content-layout';
import CountChart from '@/modules/admin/components/charts/CountChart';
import UserCard from '@/modules/admin/components/info-cards/user-card';

const AdminPage = () => {
    return (
        <ContentLayout title='Dashboard'>
            <div className='grid grid-cols-1 sm:grid-cols-12 gap-4'>
                <div className='grid sm:col-span-12 md:col-span-9 lg:col-span-8 rounded-lg gap-4'>
                    <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        <UserCard type='student' className='bg-lama-purple' />
                        <UserCard type='teacher' className='bg-lama-yellow' />
                        <UserCard type='parent' className='bg-lama-purple' />
                        <UserCard type='staff' className='bg-lama-yellow' />
                    </div>
                    {/* Middle chart */}
                    <div className='flex gap-4 flex-col lg:flex-row'>
                        {/* Count chart*/}
                        <div className='w-full lg:w-1/3 h-[450px]'>
                            <CountChart />
                        </div>
                        <div className='w-full lg:w-2/3 h-[450px]'></div>
                    </div>
                    {/* Bottom chart */}
                    {/* <div>
                        <CountChart/>
                    </div> */}
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
