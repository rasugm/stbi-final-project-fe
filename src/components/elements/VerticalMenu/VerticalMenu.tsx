import VerticalMenuItem from './VerticalMenuItem';
import { useLocation } from 'react-router-dom';

interface VerticalMenuItemProps {
	label: string;
	value: string;
	icon?: string;
	key: string;
	status: boolean;
    mark?: boolean;
}

interface VerticalMenuProps {
	menuItems: VerticalMenuItemProps[];
}

const VerticalMenu = ({ menuItems }: VerticalMenuProps) => {

    const location = useLocation();

    const isActive = (value: string) => {
        return location.hash === value;
    };

    return (
        <>
            <div className="flex flex-col gap-2">
                {menuItems.map((item, index) =>
                    (<VerticalMenuItem 
                        key={`menu-item-${index}`} 
                        active={isActive(item.value)}
                        valid={item.status}
                        url={item.value}
                        mark={item.mark}
                    >
                        {item.label}
                    </VerticalMenuItem>)
                )}

				
                {/* <div
                    className="p-3 flex items-center justify-between cursor-pointer w-full text-tertiary-400"
                >
					Business Information
                </div>
                <div
                    className="p-3 flex items-center justify-between cursor-pointer w-full text-error-400"
                >
					Business Information <Icon name="info" color="error" size={16} />
                </div> */}
            </div>
        </>
    );
};

export default VerticalMenu;