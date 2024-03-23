import Icons, { IconType } from '@/configs/Icons';
// import { TAccessAction } from '@/constants/types';
import React, { memo } from 'react';
import { IconBaseProps } from 'react-icons';

export interface IconProps extends IconBaseProps {
    color?: string;
    name?: IconType;
    testId?: string | undefined;
    onClick?: (event: React.MouseEvent<SVGElement, MouseEvent>) => void;
    // action?: TAccessAction | TAccessAction[];
}

const IC = (name: IconType) => {
    return Icons[name] as React.ComponentType<IconBaseProps>;
};

const Icon: React.FC<IconProps> = memo(({ testId = 'icon', name, color, onClick, ...props }) => {
    // const { canRead, canCreate, canDelete, canUpdate, canApprove } = useCanAccess();
    // const calculate = () => {
    //     if (!action) return undefined;
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
    // if (calculate() === false) return null;
    if (!name || !(name in Icons)) return null;

    const IconComponent = IC(name);

    return <IconComponent color={color} data-testid={`${testId}-${name}`} onClick={onClick} {...props} />;
});

export default Icon;
