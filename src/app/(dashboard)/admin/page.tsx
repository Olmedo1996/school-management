import { ContentLayout } from '@/components/admin-panel/content-layout';
import Announcements from '@/modules/admin/components/announcements/announcements';
import AttendanceChart from '@/modules/admin/components/charts/attendance-chart';
import CountChart from '@/modules/admin/components/charts/count-chart';
import Finance from '@/modules/admin/components/charts/finance';
import Events from '@/modules/admin/components/events/events';
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
                    <div className='h-full w-full'>
                        <Finance/>
                    </div>
                </div>
                <div className='sm:col-span-12 md:col-span-3 lg:col-span-4'>
                    <Events />
                    <Announcements />
                </div>
            </div>
        </ContentLayout>
    );
};

export default AdminPage;
