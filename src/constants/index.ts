import { ALL } from './environment';

export * as WEB from './web';
export * as ENVIRONMENT from './environment';

export const STATUS_MESSAGE = {
    success: {
        create: 'Data created successfully',
        update: 'Data updated successfully',
        delete: 'Data deleted successfully',
        submit: 'Data submitted successfully',
        save: 'Data saved successfully',
        upload: 'Document uploaded successfully',
    },
    failed: {
        create: 'Failed to create data',
        update: 'Failed to update data',
        delete: 'Failed to delete data',
        submit: 'Failed to submit data',
        save: 'Failed to save data',
        getDetail: 'Failed to get detail data',
        upload: 'Failed to upload document',
    },
    confirmation: {
        create: 'Are you sure want to create data',
        update: 'Are you sure want to update data',
        delete: 'Are you sure want to delete this data',
        submit: 'Are you sure want to submit data',
        save: 'Are you sure want to save data',
        getDetail: '',
    },
};

export const STATIC_OPTIONS = {
    BUSINESS_MODEL_SCHEME: [
        {
            label: 'Channel - Platform Fee',
            value: 'platform_fee',
        },
        {
            label: 'Channel - Revenue Share',
            value: 'revenue_share',
        },
    ],
    PRICE_TYPE: [
        {
            label: 'Nominal',
            value: 'NOMINAL',
        },
        {
            label: 'Persentase',
            value: 'PERCENTAGE',
        },
    ],
    PRODUCT_TYPE: [
        {
            label: 'Produk Digital',
            value: 'DIGITAL PRODUCT',
        },
        {
            label: 'Produk Fisik',
            value: 'PHYSICAL PRODUCT',
        },
    ],
    BILLING_MODE: [
        {
            label: 'One Time Purchase',
            value: 'otc',
        },
        {
            label: 'Recurring Purchase',
            value: 'recurring',
        },
    ],
    PAYMENT_TYPE: [
        {
            label: 'Post Paid',
            value: 'postpaid',
        },
        {
            label: 'Pre Paid',
            value: 'prepaid',
        },
    ],
    INTEGRATION_MODE: [
        { label: 'NCX', value: 'NCX' },
        { label: 'FABD', value: 'FABD' },
    ],
    OWNER_TYPE: [
        { label: 'INTERNAL', value: 'INTERNAL' },
        { label: 'EXTERNAL', value: 'EXTERNAL' },
    ],
    ENVIRONMENT: ALL.map((item) => ({ label: item.toUpperCase(), value: item.toUpperCase() })),
    STATUS_ACTIVE_INACTIVE: [
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
    ],
    WEB_SOURCE: [
        { label: 'CORE', value: 'CORE' },
        { label: 'PO', value: 'PO' },
    ],
    CATEGORY_BLOG: [
        { label: 'Tips Berbisnis', value: 'Tips Berbisnis' },
        { label: 'Transaksi', value: 'Transaksi' },
        { label: 'Produk', value: 'Produk' },
    ],
    CATEGORY_FAQ: [
        { label: 'account', value: 'account' },
        { label: 'product', value: 'product' },
        { label: 'order-activation', value: 'order-activation' },
        { label: 'settlement', value: 'settlement' },
    ],
};

export const CATEGORIES_PRODUCT = [
    {
        label: 'Accomodation Service',
        value: 'Accomodation Service',
    },
    {
        label: 'Food Service',
        value: 'Food Service',
    },
    {
        label: 'Art, Entertainment & Recreation',
        value: 'Art, Entertainment & Recreation',
    },
    {
        label: 'Communication Technologies',
        value: 'Communication Technologies',
    },
    {
        label: 'Education',
        value: 'Education',
    },
    {
        label: 'Financial & Insurance Activities',
        value: 'Financial & Insurance Activities',
    },
    {
        label: 'Government ',
        value: 'Government ',
    },
    {
        label: 'Human Health & Social Work Activities',
        value: 'Human Health & Social Work Activities',
    },
    {
        label: 'Information Technologies',
        value: 'Information Technologies',
    },
    {
        label: 'IoT',
        value: 'IoT',
    },
    {
        label: 'Manufacturing',
        value: 'Manufacturing',
    },
    {
        label: 'Web Builder',
        value: 'Web Builder',
    },
    {
        label: 'Marketing & Sales',
        value: 'Marketing & Sales',
    },
    {
        label: 'Games',
        value: 'Games',
    },
    {
        label: 'Devices',
        value: 'Devices',
    },
    {
        label: 'Professional, Scientific, Technical Activities',
        value: 'Professional, Scientific, Technical Activities',
    },
];
