import Icons from '@/configs/Icons';
import {
    USER_MANAGEMENT,
    ROLE_MANAGEMENT,
    // ORDER_MANAGEMENT,
    LOG_ACTIVITY,
    DASHBOARD,
    ECOSYSTEM_MANAGEMENT,
    MENU_MANAGEMENT,
    PRODUCT_MANAGEMENT,
    BA_REVENUE,
    ACTIVATION_TRACKING,
    TICKET_ISSUE,
    LAPORAN_BILLING,
    TAXONOMY_MANAGEMENT,
    ORDER_CUSTOMER,
    CUSTOMER_BILLING,
    INVOICE,
    CUSTOMER_SERVICE,
    NOTIFICATION,
} from '@/constants/web';
import { ENVIRONMENT } from '.';

// const LIST = [
//     {
//         id: '1',
//         key: 'dashboard.main',
//         name: 'Home One',
//         parent_id: 'ROOT',
//     },
//     {
//         id: '2',
//         key: 'dashboard.1',
//         name: 'Home Two',
//         parent_id: 'ROOT',
//     },
//
//     {
//         id: '3',
//         key: 'product.main',
//         name: 'Product One ',
//         parent_id: 'ROOT',
//     },
//     {
//         id: '4',
//         key: 'product.1',
//         name: 'Product Two ',
//         parent_id: 'ROOT',
//     },
//     {
//         id: '5',
//         key: 'product.2',
//         name: 'Product Three ',
//         parent_id: 'ROOT',
//     },
//     {
//         id: '6',
//         key: 'dashboard.2',
//         name: 'Home Three',
//         parent_id: 'ROOT',
//     },
//     {
//         id: '7',
//         key: 'dashboard.5',
//         name: 'Home FIve',
//         parent_id: 'ROOT',
//     },
//     {
//         id: '8',
//         key: 'product.3',
//         name: 'Product Three ',
//         parent_id: '4',
//     },
// ];
//
// const check = () => {
//     const MENUS_TITLE = LIST.filter((item) => item.key.includes('main'));
//
//     const MENUS_MAIN = MENUS_TITLE.map((item) => {
//         const title = item.key.split('.')[0];
//         const menus = LIST.filter((menu_item) => menu_item.key.includes(title)
//         && menu_item.parent_id === 'ROOT').map((menu_item) => {
//             return {
//                 ...menu_item,
//                 sub_menu: LIST.filter((x_s) => x_s.parent_id === menu_item.id),
//             };
//         });
//         return {
//             ...item,
//             title: title.toUpperCase(),
//             menus,
//         };
//     });
//     console.log('MENU', MENUS_MAIN);
// };

export const LIST_MENU = [
    {
        name: 'DASHBOARD',
        code: 'dashboard',
        stage: ENVIRONMENT.ALL,
        list_menu: [
            {
                title: 'Home',
                icon: Icons.home,
                link: DASHBOARD,
                stage: ENVIRONMENT.ALL,
                submenu: [],
            },
        ],
    },
    {
        name: 'PRODUCT',
        code: 'product',
        stage: ENVIRONMENT.ALL,
        list_menu: [
            {
                title: 'Manajemen Ekosistem',
                icon: Icons['3d-cubescan'],
                link: ECOSYSTEM_MANAGEMENT,
                stage: ENVIRONMENT.ALL,
                submenu: [],
            },
            {
                title: 'Manajemen Produk',
                icon: Icons.box,
                link: PRODUCT_MANAGEMENT,
                stage: ENVIRONMENT.ALL,
                submenu: [],
            },
        ],
    },
    {
        name: 'FULLFILMENT',
        code: 'fullfilment',
        stage: ENVIRONMENT.ALL,
        list_menu: [
            // {
            //     title: 'Manajemen Pesanan',
            //     icon: Icons['document-text'],
            //     link: ORDER_MANAGEMENT,
            //     stage: ENVIRONMENT.ALL,
            //     submenu: []
            // },
            {
                title: 'Pesanan Pelanggan',
                icon: Icons['clipboard-text'],
                link: ORDER_CUSTOMER,
                stage: ENVIRONMENT.ALL,
                submenu: [],
            },
            {
                title: 'Pelacakan Aktivasi',
                icon: Icons['truck-fast'],
                link: ACTIVATION_TRACKING,
                stage: ENVIRONMENT.ALL,
                submenu: [],
            },
        ],
    },
    {
        name: 'BILLING',
        code: 'billing',
        stage: ENVIRONMENT.ALL,
        list_menu: [
            {
                title: 'Tagihan Pelanggan',
                icon: Icons.bill,
                link: CUSTOMER_BILLING,
                stage: ENVIRONMENT.ALL,
                submenu: [],
            },
            {
                title: 'Laporan Billing',
                icon: Icons['money'],
                link: LAPORAN_BILLING,
                stage: ENVIRONMENT.ALL,
                submenu: [],
            },
            {
                title: 'Laporan Pendapatan',
                icon: Icons.wallet,
                link: BA_REVENUE,
                stage: ENVIRONMENT.ALL,
                submenu: [],
            },
        ],
    },
    {
        name: 'INVOICE',
        code: 'invoice',
        stage: ENVIRONMENT.ALL,
        list_menu: [
            {
                title: 'Invoice Pelanggan',
                icon: Icons['archive-book'],
                link: INVOICE,
                stage: ENVIRONMENT.ALL,
                submenu: [],
            },
        ],
    },
    {
        name: 'ASSURANCE',
        code: 'assurance',
        stage: ENVIRONMENT.ALL,
        list_menu: [
            {
                title: 'Ticket Issue',
                icon: Icons.ticket,
                link: TICKET_ISSUE,
                stage: ENVIRONMENT.ALL,
                submenu: [],
            },
        ],
    },
    {
        name: 'CUSTOMER SERVICE',
        code: 'customer-service',
        stage: ENVIRONMENT.ALL,
        list_menu: [
            {
                title: 'Customer Service',
                icon: Icons.ticket,
                link: CUSTOMER_SERVICE,
                stage: ENVIRONMENT.ALL,
                submenu: [],
            },
        ],
    },
    {
        name: 'NOTIFICATION',
        code: 'notification',
        stage: ENVIRONMENT.ALL,
        list_menu: [
            {
                title: 'Notification',
                icon: Icons.bell,
                link: NOTIFICATION,
                stage: ENVIRONMENT.ALL,
                submenu: [],
            },
        ],
    },
    {
        name: 'OTHER',
        code: 'other',
        stage: [ENVIRONMENT.STAGING, ENVIRONMENT.DEV],
        list_menu: [
            {
                title: 'Admin Tools',
                icon: Icons.settings,
                link: MENU_MANAGEMENT,
                stage: [ENVIRONMENT.STAGING, ENVIRONMENT.DEV],
                submenu: [
                    {
                        title: 'Manajemen Menu',
                        icon: Icons.file,
                        link: MENU_MANAGEMENT,
                        stage: [ENVIRONMENT.STAGING, ENVIRONMENT.DEV],
                        submenu: [],
                    },
                    {
                        title: 'Manajemen Pengguna',
                        icon: Icons.users,
                        link: USER_MANAGEMENT,
                        stage: [ENVIRONMENT.STAGING, ENVIRONMENT.DEV],
                        submenu: [],
                    },
                    {
                        title: 'Manajemen Taksonomi',
                        icon: Icons.users,
                        link: TAXONOMY_MANAGEMENT,
                        stage: [ENVIRONMENT.STAGING, ENVIRONMENT.DEV],
                        submenu: [],
                    },
                    {
                        title: 'Manajemen Role',
                        icon: Icons.tool,
                        link: ROLE_MANAGEMENT,
                        stage: [ENVIRONMENT.STAGING, ENVIRONMENT.DEV],
                        submenu: [],
                    },
                    {
                        title: 'Aktivitas Log',
                        icon: Icons.tool,
                        link: LOG_ACTIVITY,
                        stage: [ENVIRONMENT.STAGING, ENVIRONMENT.DEV],
                        submenu: [],
                    },
                ],
            },
        ],
    },
];
