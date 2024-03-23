import HeaderDashboard from '@/components/elements/Header/HeaderDashboard.tsx';
import Sidebar from '@/components/elements/Sidebar/Sidebar.tsx';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import SidebarMobile from '@/components/elements/SidebarMobile';
import { usePageIdentity } from '@/hooks/useContext';
import Breadcrumb from '@/components/base/Breadcrumb';
import { useBreadcrumb } from '@/hooks/useBreadcrumb';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    const { width } = useWindowDimensions();
    const { minimize, setMinimize, ...pageIdentity } = usePageIdentity();
    const breadcrumbs = useBreadcrumb();

    return (
        <div className="flex w-full h-full flex-col justify-between">
            <div className="flex relative h-screen w-full ">
                <div className="h-full">{width > 768 ? <Sidebar /> : <SidebarMobile />}</div>
                <div className="flex-1 flex flex-col w-full relative md:rounded-l-[18px] rounded-none bg-tertiary-100 overflow-auto">
                    <div className="sm:px-6 px-3 pt-4 flex flex-col gap-2">
                        <HeaderDashboard minimize={minimize} setMinimize={setMinimize} />
                    </div>

                    <div className="w-full overflow-auto scroll-smooth">
                        <div className="md:hidden block my-2 sm:px-6 px-3 pt-2">
                            {/* <p className="text-tertiary-800 text-[15px] sm:hidden block mb-2 font-bold"> */}
                            {/*     {pageIdentity?.title} */}
                            {/* </p> */}
                            <Breadcrumb
                                items={
                                    pageIdentity?.breadcrumbs && pageIdentity?.breadcrumbs?.length > 0
                                        ? pageIdentity.breadcrumbs
                                        : breadcrumbs
                                }
                            />
                        </div>
                        <div className="flex flex-col justify-between">
                            <div className="mb-10 pt-3 sm:px-6 px-3">
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
