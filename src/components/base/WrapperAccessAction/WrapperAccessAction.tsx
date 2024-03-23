// import { TAccessAction } from '@/constants/types';
import React from 'react';

type Props = {
    children: React.ReactNode;
    // action: TAccessAction | TAccessAction[];
};

const WrapperAccessAction = ({ children }: Props) => {
    // const { canRead, canCreate, canDelete, canUpdate, canApprove } = useCanAccess();
    // const calculate = () => {
    //     if (!action) return false;
    //     const listAction = [
    //         canRead && 'read',
    //         canCreate && 'create',
    //         canDelete && 'delete',
    //         canUpdate && 'update',
    //         canApprove && 'approve',
    //     ];
    //     if (typeof action === 'string') {
    //         return listAction.includes(action);
    //     }
    //     return action.every((act) => listAction.includes(act));
    // };
    // if (!calculate()) return null;
    return <>{children}</>;
};

export default WrapperAccessAction;
