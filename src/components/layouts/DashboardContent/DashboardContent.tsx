import { Card } from '@/components/base';
import Breadcrumb from '@/components/base/Breadcrumb/Breadcrumb';
import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';

type Props = {
    backTitle?: string;
    backUrl?: string;
    breadcrumb?: { title: string; path: string }[];
    children: React.ReactNode;
    description?: string;
    title?: React.ReactNode | string;
    withoutCard?: boolean;
};

function DashboardContent(props: Props) {
    const { title, description, children, backUrl, backTitle, breadcrumb, withoutCard } = props;

    const titlePage = typeof title === 'string' ? <h5 className="font-bold text-primary-500">{title}</h5> : title;


    return (
        <div className="w-full">
            {backUrl && (
                <Link to={backUrl} className="flex items-center gap-3 mb-5 text-sm">
                    <BiArrowBack />
                    {backTitle}
                </Link>
            )}
            {(title || description) && (
                <div className="mb-1">
                    {title && titlePage}
                    {description && <h6 className="text-xs text-[#667085]">{description}</h6>}
                </div>
            )}
            {breadcrumb && (
                <div className="mb-6">
                    <Breadcrumb items={breadcrumb || []} />
                </div>
            )}
            {withoutCard ? (
                <div className="">{children}</div>
            ) : (
                <Card rounded="secondary" className="bg-white p-5 rounded-md">
                    {children}
                </Card>
            )}
        </div>
    );
}

DashboardContent.defaultProps = {
    title: '',
    description: '',
    backUrl: '',
    backTitle: 'Kembali',
    breadcrumb: undefined,
};
export default DashboardContent;
