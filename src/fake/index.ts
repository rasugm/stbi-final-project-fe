import { IMAGES } from '@/configs';

/* eslint-disable max-lines */
export const divisi = [
    { label: 'Digital Business', value: 'Digital Business' },
    { label: 'Enterprise Service', value: 'Enterprise Service' },
    { label: 'Digital Service', value: 'Digital Service' },
];

export const role = [
    { label: 'Bilco', value: 'Bilco' },
    { label: 'Product Owner', value: 'Product Owner' },
    { label: 'Designer', value: 'Designer' },
    { label: 'Super Admin', value: 'Super Admin' },
];

export const tribe = [
    { value: 'DSZ', label: 'DSZ' },
    { value: 'DDE', label: 'DDE' },
];

export const telkomPartner = [
    { value: 'Telkom', label: 'Telkom' },
    { value: 'Partner', label: 'Partner' },
];

export const status = [
    { value: 'ACTIVE', label: 'Active' },
    { value: 'INACTIVE', label: 'Inactive' },
    { value: 'BLOCK', label: 'Block' },
];

export const location = [
    { value: 'Bandung', label: 'Bandung' },
    { value: 'Jakarta', label: 'Jakarta' },
    { value: 'Semarang', label: 'Semarang' },
];

export const summary = {
    total: {
        user: 1000,
        current_month: 20,
    },
    active: {
        user: 500,
        current_month: 5,
    },
    nonaktif: {
        user: 20,
        current_month: 2,
    },
    blocked: {
        user: 0,
        current_month: 0,
    }
};

export const users = [
    {
        id: 'USER1',
        nik: '1234567890123456',
        name: 'Agus Gunawan',
        email: 'agus.gunawan@gmail.com',
        telepon: '628128651234',
        divisi: 'Digital Service',
        tribe: 'DSZ',
        jobPosition: 'Designer',
        role: 'Designer',
        status: 'ACTIVE',
        telkomPartner: 'Telkom',
        referralCode: 'A1B2C3'
    },
    {
        id: 'USER2',
        nik: '2345678901234567',
        name: 'Budi Santoso',
        email: 'budi.santoso@gmail.com',
        telepon: '628571231234',
        divisi: 'Digital Business',
        tribe: 'DDE',
        jobPosition: 'Product Owner',
        role: 'Product Owner',
        status: 'INACTIVE',
        telkomPartner: 'Partner',
        referralCode: 'D4E5F6'
    },
    {
        id: 'USER3',
        nik: '3456789012345678',
        name: 'Citra Wijaya',
        email: 'citra.wijaya@gmail.com',
        telepon: '628194561234',
        divisi: 'Enterprise Service',
        tribe: 'DSZ',
        jobPosition: 'Bilco',
        role: 'Bilco',
        status: 'BLOCK',
        telkomPartner: 'Telkom',
        referralCode: 'G7H8I9'
    },
    {
        id: 'USER4',
        nik: '4567890123456789',
        name: 'Dian Prasetyo',
        email: 'dian.prasetyo@gmail.com',
        telepon: '628762341234',
        divisi: 'Digital Service',
        tribe: 'DDE',
        jobPosition: 'Designer',
        role: 'Designer',
        status: 'ACTIVE',
        telkomPartner: 'Partner',
        referralCode: 'J1K2L3'
    },
    {
        id: 'USER5',
        nik: '5678901234567890',
        name: 'Eka Saputra',
        email: 'eka.saputra@gmail.com',
        telepon: '628217891234',
        divisi: 'Digital Business',
        tribe: 'DSZ',
        jobPosition: 'Super Admin',
        role: 'Super Admin',
        status: 'BLOCK',
        telkomPartner: 'Telkom',
        referralCode: 'M4N5O6'
    },
    {
        id: 'USER6',
        nik: '6789012345678901',
        name: 'Faisal Rahman',
        email: 'faisal.rahman@gmail.com',
        telepon: '628136781234',
        divisi: 'Enterprise Service',
        tribe: 'DDE',
        jobPosition: 'Product Owner',
        role: 'Product Owner',
        status: 'ACTIVE',
        telkomPartner: 'Partner',
        referralCode: 'P7Q8R9'
    },
    {
        id: 'USER7',
        nik: '7890123456789012',
        name: 'Gita Permata',
        email: 'gita.permata@gmail.com',
        telepon: '628562111234',
        divisi: 'Digital Business',
        tribe: 'DSZ',
        jobPosition: 'Designer',
        role: 'Designer',
        status: 'ACTIVE',
        telkomPartner: 'Telkom',
        referralCode: 'S1T2U3'
    },
    {
        id: 'USER8',
        nik: '8901234567890123',
        name: 'Hendra Kusuma',
        email: 'hendra.kusuma@gmail.com',
        telepon: '628753421234',
        divisi: 'Digital Service',
        tribe: 'DDE',
        jobPosition: 'Designer',
        role: 'Designer',
        status: 'INACTIVE',
        telkomPartner: 'Partner',
        referralCode: 'V4W5X6'
    },
    {
        id: 'USER9',
        nik: '9012345678901234',
        name: 'Indah Nur',
        email: 'indah.nur@gmail.com',
        telepon: '628123411234',
        divisi: 'Enterprise Service',
        tribe: 'DSZ',
        jobPosition: 'Bilco',
        role: 'Bilco',
        status: 'ACTIVE',
        telkomPartner: 'Telkom',
        referralCode: 'Y7Z8A1'
    },
    {
        id: 'USER10',
        nik: '0123456789012345',
        name: 'Joko Wibowo',
        email: 'joko.wibowo@gmail.com',
        telepon: '628567891234',
        divisi: 'Digital Business',
        tribe: 'DDE',
        jobPosition: 'Product Owner',
        role: 'Product Owner',
        status: 'ACTIVE',
        telkomPartner: 'Partner',
        referralCode: 'B2C3D4'
    },
    {
        id: 'USER11',
        nik: '1234567890123456',
        name: 'Kartika Sari',
        email: 'kartika.sari@gmail.com',
        telepon: '628173211234',
        divisi: 'Enterprise Service',
        tribe: 'DSZ',
        jobPosition: 'Super Admin',
        role: 'Super Admin',
        status: 'INACTIVE',
        telkomPartner: 'Telkom',
        referralCode: 'E5F6G7'
    },
    {
        id: 'USER12',
        nik: '2345678901234567',
        name: 'Lia Setiawan',
        email: 'lia.setiawan@gmail.com',
        telepon: '628789561234',
        divisi: 'Digital Service',
        tribe: 'DDE',
        jobPosition: 'Designer',
        role: 'Designer',
        status: 'BLOCK',
        telkomPartner: 'Partner',
        referralCode: 'H8I9J1'
    },
    {
        id: 'USER13',
        nik: '3456789012345678',
        name: 'Mira Perdana',
        email: 'mira.perdana@gmail.com',
        telepon: '628124671234',
        divisi: 'Digital Business',
        tribe: 'DSZ',
        jobPosition: 'Product Owner',
        role: 'Product Owner',
        status: 'ACTIVE',
        telkomPartner: 'Telkom',
        referralCode: 'K2L3M4'
    },
    {
        id: 'USER14',
        nik: '4567890123456789',
        name: 'Nadia Wijaya',
        email: 'nadia.wijaya@gmail.com',
        telepon: '628562341234',
        divisi: 'Enterprise Service',
        tribe: 'DDE',
        role: 'Bilco',
        jobPosition: 'Bilco',
        status: 'ACTIVE',
        telkomPartner: 'Partner',
        referralCode: 'N5O6P7'
    },
    {
        id: 'USER15',
        nik: '5678901234567890',
        name: 'Oscar Surya',
        email: 'oscar.surya@gmail.com',
        telepon: '628717891234',
        divisi: 'Digital Service',
        tribe: 'DSZ',
        jobPosition: 'Designer',
        role: 'Designer',
        status: 'INACTIVE',
        telkomPartner: 'Telkom',
        referralCode: 'Q8R9S1'
    },
    {
        id: 'USER16',
        nik: '6789012345678901',
        name: 'Putri Anggraeni',
        email: 'putri.anggraeni@gmail.com',
        telepon: '628136541234',
        divisi: 'Digital Business',
        tribe: 'DDE',
        jobPosition: 'Super Admin',
        role: 'Super Admin',
        status: 'ACTIVE',
        telkomPartner: 'Partner',
        referralCode: 'T2U3V4'
    },
    {
        id: 'USER17',
        nik: '7890123456789012',
        name: 'Qin Indra',
        email: 'qin.indra@gmail.com',
        telepon: '628567121234',
        divisi: 'Enterprise Service',
        tribe: 'DSZ',
        jobPosition: 'Product Owner',
        role: 'Product Owner',
        status: 'INACTIVE',
        telkomPartner: 'Telkom',
        referralCode: 'W5X6Y7'
    },
    {
        id: 'USER18',
        nik: '8901234567890123',
        name: 'Rahmat Hidayat',
        email: 'rahmat.hidayat@gmail.com',
        telepon: '628173451234',
        divisi: 'Digital Service',
        tribe: 'DDE',
        jobPosition: 'Designer',
        role: 'Designer',
        status: 'ACTIVE',
        telkomPartner: 'Partner',
        referralCode: 'Z8A1B2'
    },
    {
        id: 'USER19',
        nik: '9012345678901234',
        name: 'Sinta Damayanti',
        email: 'sinta.damayanti@gmail.com',
        telepon: '628781231234',
        divisi: 'Digital Business',
        tribe: 'DSZ',
        jobPosition: 'Designer',
        role: 'Designer',
        status: 'ACTIVE',
        telkomPartner: 'Telkom',
        referralCode: 'C3D4E5'
    },
    {
        id: 'USER20',
        nik: '0123456789012345',
        name: 'Taufik Satria',
        email: 'taufik.satria@gmail.com',
        telepon: '628156781234',
        divisi: 'Enterprise Service',
        tribe: 'DDE',
        jobPosition: 'Bilco',
        role: 'Bilco',
        status: 'INACTIVE',
        telkomPartner: 'Partner',
        referralCode: 'F6G7H8'
    },
    {
        id: 'USER21',
        nik: '1234567890123456',
        name: 'Umi Kuswari',
        email: 'umi.kuswari@gmail.com',
        telepon: '628563211234',
        divisi: 'Digital Business',
        tribe: 'DSZ',
        jobPosition: 'Product Owner',
        role: 'Product Owner',
        status: 'ACTIVE',
        telkomPartner: 'Telkom',
        referralCode: 'I9J1K2'
    },
    {
        id: 'USER22',
        nik: '2345678901234567',
        name: 'Vira Putri',
        email: 'vira.putri@gmail.com',
        telepon: '628174561234',
        divisi: 'Enterprise Service',
        tribe: 'DDE',
        jobPosition: 'Super Admin',
        role: 'Super Admin',
        status: 'BLOCK',
        telkomPartner: 'Partner',
        referralCode: 'L3M4N5'
    }
];



export const roles = [
    {
        roleId: 'R1',
        roleName: 'Super Admin',
        deskripsi: 'Super Admin',
        permissions: {
            maker: true,
            viewer: true,
            approver: true
        },
        status: true,
        roleMenu: [{
            menu: 'User Management',
            level: 2,
            permissions: {
                maker: true,
                viewer: true,
                approver: true
            }
        },
        {
            menu: 'Role Management',
            level: 2,
            permissions: {
                maker: true,
                viewer: true,
                approver: true
            }
        },
        {
            menu: 'Order Management',
            level: 2,
            permissions: {
                maker: true,
                viewer: true,
                approver: true
            }
        },
        {
            menu: 'Log Management',
            level: 2,
            permissions: {
                maker: true,
                viewer: true,
                approver: true
            }
        }]
    },
    {
        roleId: 'R2',
        roleName: 'Product Owner',
        deskripsi: 'Product Owner',
        permissions: {
            maker: true,
            viewer: true,
            approver: true
        },
        status: true,
        roleMenu: [{
            menu: 'User Management',
            level: 2,
            permissions: {
                maker: true,
                viewer: true,
                approver: false
            }
        },
        {
            menu: 'Role Management',
            level: 2,
            permissions: {
                maker: true,
                viewer: true,
                approver: false
            }
        },
        {
            menu: 'Order Management',
            level: 2,
            permissions: {
                maker: true,
                viewer: true,
                approver: false
            }
        },
        {
            menu: 'Log Management',
            level: 2,
            permissions: {
                maker: false,
                viewer: false,
                approver: false
            }
        }]
    },
    {
        roleId: 'R1',
        roleName: 'Companion',
        deskripsi: 'Companion',
        permissions: {
            maker: false,
            viewer: true,
            approver: false
        },
        status: false,
        roleMenu: [{
            menu: 'User Management',
            level: 2,
            permissions: {
                maker: false,
                viewer: false,
                approver: false
            }
        },
        {
            menu: 'Role Management',
            level: 2,
            permissions: {
                maker: false,
                viewer: false,
                approver: false
            }
        },
        {
            menu: 'Order Management',
            level: 2,
            permissions: {
                maker: false,
                viewer: false,
                approver: false
            }
        },
        {
            menu: 'Log Management',
            level: 2,
            permissions: {
                maker: false,
                viewer: false,
                approver: false
            }
        }]
    },
];

export const roleMenu = [
    {
        menu: 'User Management',
        level: 2,
        permissions: {
            maker: false,
            viewer: false,
            approver: false
        }
    },
    {
        menu: 'Role Management',
        level: 2,
        permissions: {
            maker: false,
            viewer: false,
            approver: false
        }
    },
    {
        menu: 'Order Management',
        level: 2,
        permissions: {
            maker: false,
            viewer: false,
            approver: false
        }
    },
    {
        menu: 'Log Management',
        level: 2,
        permissions: {
            maker: false,
            viewer: false,
            approver: false
        }
    }
];

export const activity = [
    {
        datetime: '2023-08-29T10:30:00Z',
        name: 'John Doe',
        imageUrl: IMAGES.USER_PROFILE,
        role: 'Bilco',
        location: 'Jakarta',
        activity: 'Login'
    },
    {
        datetime: '2023-08-29T11:45:00Z',
        name: 'Jane Smith',
        imageUrl: IMAGES.USER_PROFILE,
        role: 'Product Owner',
        location: 'Bandung',
        activity: 'Logout'
    },
    {
        datetime: '2023-08-30T08:15:00Z',
        name: 'David Johnson',
        imageUrl: IMAGES.USER_PROFILE,
        role: 'Designer',
        location: 'Semarang',
        activity: 'User Management - Maker'
    },
    {
        datetime: '2023-08-30T13:20:00Z',
        name: 'Emily Brown',
        imageUrl: IMAGES.USER_PROFILE,
        role: 'Super Admin',
        location: 'Jakarta',
        activity: 'Order Management - Maker'
    },
    {
        datetime: '2023-08-31T09:00:00Z',
        name: 'Michael Lee',
        imageUrl: IMAGES.USER_PROFILE,
        role: 'Bilco',
        location: 'Bandung',
        activity: 'Role Management - Maker'
    },
    {
        datetime: '2023-08-31T14:30:00Z',
        name: 'Sarah Wilson',
        imageUrl: IMAGES.USER_PROFILE,
        role: 'Product Owner',
        location: 'Semarang',
        activity: 'Login'
    },
    {
        datetime: '2023-09-01T12:10:00Z',
        name: 'Robert Martinez',
        imageUrl: IMAGES.USER_PROFILE,
        role: 'Designer',
        location: 'Jakarta',
        activity: 'Logout'
    },
    {
        datetime: '2023-09-01T15:45:00Z',
        name: 'Laura Davis',
        imageUrl: IMAGES.USER_PROFILE,
        role: 'Super Admin',
        location: 'Bandung',
        activity: 'User Management - Maker'
    },
    {
        datetime: '2023-09-02T08:30:00Z',
        name: 'Daniel White',
        imageUrl: IMAGES.USER_PROFILE,
        role: 'Bilco',
        location: 'Semarang',
        activity: 'Order Management - Maker'
    },
    {
        datetime: '2023-09-02T11:55:00Z',
        name: 'Jessica Taylor',
        imageUrl: IMAGES.USER_PROFILE,
        role: 'Product Owner',
        location: 'Jakarta',
        activity: 'Role Management - Maker'
    },
    {
        datetime: '2023-09-03T10:20:00Z',
        name: 'William Brown',
        imageUrl: IMAGES.USER_PROFILE,
        role: 'Designer',
        location: 'Bandung',
        activity: 'Login'
    },
    {
        datetime: '2023-09-03T14:15:00Z',
        name: 'Olivia Jones',
        imageUrl: IMAGES.USER_PROFILE,
        role: 'Super Admin',
        location: 'Semarang',
        activity: 'Logout'
    },
    {
        datetime: '2023-09-04T09:40:00Z',
        name: 'Ethan Wilson',
        imageUrl: IMAGES.USER_PROFILE,
        role: 'Bilco',
        location: 'Jakarta',
        activity: 'User Management - Maker'
    },
    {
        datetime: '2023-09-04T12:25:00Z',
        name: 'Ava Anderson',
        imageUrl: IMAGES.USER_PROFILE,
        role: 'Product Owner',
        location: 'Bandung',
        activity: 'Order Management - Maker'
    },
    {
        datetime: '2023-09-05T08:55:00Z',
        name: 'James Johnson',
        imageUrl: IMAGES.USER_PROFILE,
        role: 'Designer',
        location: 'Semarang',
        activity: 'Role Management - Maker'
    },
    {
        datetime: '2023-09-05T15:05:00Z',
        name: 'Sophia Davis',
        imageUrl: IMAGES.USER_PROFILE,
        role: 'Super Admin',
        location: 'Jakarta',
        activity: 'Login'
    },
    {
        datetime: '2023-09-06T11:30:00Z',
        name: 'Benjamin Smith',
        imageUrl: IMAGES.USER_PROFILE,
        role: 'Bilco',
        location: 'Bandung',
        activity: 'Logout'
    },
    {
        datetime: '2023-09-06T14:50:00Z',
        name: 'Mia Wilson',
        imageUrl: IMAGES.USER_PROFILE,
        role: 'Product Owner',
        location: 'Semarang',
        activity: 'User Management - Maker'
    },
    {
        datetime: '2023-09-07T09:15:00Z',
        name: 'Logan Lee',
        imageUrl: IMAGES.USER_PROFILE,
        role: 'Designer',
        location: 'Jakarta',
        activity: 'Order Management - Maker'
    },
    {
        datetime: '2023-09-07T12:40:00Z',
        name: 'Chloe Harris',
        imageUrl: IMAGES.USER_PROFILE,
        role: 'Super Admin',
        location: 'Bandung',
        activity: 'Role Management - Maker'
    }
];

export const summaryEcosystem = {
    approved: {
        ecosystem: 32
    },
    returned: {
        ecosystem: 2
    },
    review: {
        ecosystem: 3
    },
    rejected: {
        ecosystem: 27
    }
};