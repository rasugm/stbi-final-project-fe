import { BASE_URL } from '@/configs';

export const DOWNLOAD_LOG_ACTIVITY = `${BASE_URL}/v4/log-activities/export/excel`;
export const DOWNLOAD_REPORT_ECOSYSTEM = `${BASE_URL}/v4/ecosystems/export/excel`;
export const DOWNLOAD_ACTIVATION_TRACKING = `${BASE_URL}/v4/activation-trackings/export/excel`;
export const DOWNLOAD_ORDER_CUSTOMER = `${BASE_URL}/v4/customer-orders/export/excel`;
export const DOWNLOAD_ORDER_CUSTOMER_MPS = `${BASE_URL}/v4/customer-orders/export/excel-mps`;
export const DOWNLOAD_CUSTOMER_BILLING = `${BASE_URL}/v4/customer-billings/export/excel`;
export const DOWNLOAD_CUSTOMER_INVOICE_PDF = `${BASE_URL}/v4/customer-invoices/export`;
export const DOWNLOAD_CUSTOMER_BILLING_PDF = `${BASE_URL}/v4/customer-billings/export`;
export const DOWNLOAD_INVOICE_TAX_PDF = (id: string) =>  `${BASE_URL}/v4/customer-invoices/tax-invoice/${id}/pdf`;
