import { ContentLayout } from '@/components/admin-panel/content-layout';
import Announcements from '@/modules/admin/components/announcements/announcements';
import Events from '@/modules/admin/components/events/events';
import StudentClass from '@/modules/student/components/student-class';

const StudentPage = () => {
    return (
        <ContentLayout title='Students'>
            <div className='grid grid-cols-1 sm:grid-cols-12 gap-4'>
                <div className='grid sm:col-span-12 md:col-span-9 lg:col-span-8 rounded-lg gap-4'>
                    <StudentClass/>
                </div>
                <div className='sm:col-span-12 md:col-span-3 lg:col-span-4'>
                    <Events />
                    <Announcements />
                </div>
            </div>
        </ContentLayout>
    );
};

export default StudentPage;
