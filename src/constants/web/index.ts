export const LANDING = '/';
export const LOGIN = '/login';
export const LOGOUT = '/logout';
export const HOME = '/home';
export const DASHBOARD = '/home';

export const DASHBOARD_ORGANIZATION_PERFORMANCE = '/dashboard-organization';
export const DASHBOARD_MANAGEMENT = '/dashboard-management';
export const DASHBOARD_PRODUCT = '/dashboard-product';
export const DASHBOARD_EXPENSE = '/dashboard-expense';
export const REGISTER = '/register';
export const FORGOT = '/forgot-password';
// export const RESET = '/reset-password/:route';
export const RESET_PASSWORD = '/reset-password';
export const NEW_PASSWORD = '/new-password';
export const PROFILE = '/profile';
export const CHANGE_PASSWORD = '/change-password';
export const TERM_OF_USE = '/term-of-use';
export const DOC_VERIFY = '/doc-verify';
export const ORDER_SUMMARY = '/order-summary/:bast_id';
export const CONTRACT_VERIFICATION = '/contract-verification/:contract_id';
export const TRANSFER_REQUEST_SUMMARY = '/transfer-request-summary/:id';

export const PRODUCT_CATALOG = '/product-catalog';
export const PRODUCT_CATALOG_SHOW = '/product-catalog/:id';
export const PRODUCT_CATALOG_CREATE = '/my-product-catalog/create';
export const PRODUCT_CATALOG_EDIT = '/my-product-catalog/:id/edit';
export const MY_PRODUCT_CATALOG = '/my-product-catalog';
export const MY_PRODUCT_CATALOG_SHOW = '/my-product-catalog/:id';

export const PARTNERSHIP = '/partnership';
export const PARTNERSHIP_SHOW = '/partnership/:id';
export const PARTNERSHIP_CREATE = '/partnership/create';
export const PARTNERSHIP_EDIT = '/partnership/:id/edit';

export const WITHDRAWAL_APPROVAL = '/withdrawal-approval';
export const WITHDRAWAL_APPROVAL_SHOW = '/withdrawal-approval/:id';
export const WITHDRAWAL_DETAIL = '/cash-out/:id/withdrawal';
export const CASH_OUT_LIST = '/cash-out';
export const CASH_OUT_DETAIL = '/cash-out/:id';
export const CASH_OUT_LIST_APPROVAL = '/cash-out-approval';
export const CASH_OUT_APPROVE = '/cash-out-approval/:id/approve';

export const REVENUE_TRANSFER = '/revenue-transfer';
export const REVENUE_TRANSFER_SHOW = '/revenue-transfer/:id';

export const MY_PRODUCT_CATALOG_NEW_SHOW = '/my-product-catalog-new/:id';

export const PURCHASEORDER = '/purchaseorder';
export const PURCHASEORDER_SHOW = '/purchaseorder/:id/show';
export const PURCHASEORDER_EDIT = '/purchaseorder/:id/edit';
export const PURCHASEORDER_BILLING = '/purchaseorder/:id/billing';
export const PURCHASEORDER_FORM = '/purchaseorder/create';

export const BILLING = '/billing';
export const BILLING_SHOW = '/billing/:id/show';
export const BILLING_EDIT = '/billing/:id/edit';
export const BILLING_FORM = '/billing/create';
export const BILLING_PREVIEW = '/billing/:id/preview';

export const BILLING_RECURRING = '/recurring-billing';
export const BILLING_RECURRING_SHOW = '/recurring-billing/:id/show';
export const BILLING_RECURRING_EDIT = '/recurring-billing/:id/edit';
export const BILLING_RECURRING_FORM = '/recurring-billing/create';
export const BILLING_RECURRING_PREVIEW = '/recurring-billing/:id/preview';
export const BILLING_RECURRING_SEE_BILLING = '/recurring-billing/:recurringId/billing';

export const INVOICE = '/invoice';
export const INVOICE_DETAIL = '/invoice/:id';
export const INVOICE_SHOW = '/invoice/:id/show';
export const INVOICE_EDIT = '/invoice/:id/edit';
export const INVOICE_FORM = '/invoice/create';
export const INVOICE_PREVIEW = '/invoice/:id/preview';

export const TAX = '/tax-invoice';

export const PAYMENT_REPORT = '/payment-report';

export const PAYMENT = '/payment';
export const PAYMENT_SPLIT = '/payment/split';
export const PAYMENT_MULTI = '/payment/multi/:id';
export const PAYMENT_FORM = '/payment/:id/edit';

export const SKUM = '/skum';
export const SKUM_FORM = '/skum/:id/create';
export const SKUM_EDIT = '/skum/:id/edit';
export const SKUM_GROUP = '/skum/group';
export const SKUM_SHOW = '/skum/:id';

export const CUSTOMER_SERVICE = '/customer-service';

export const CUSTOMER = '/customer';
export const CUSTOMER_SHOW = '/customer/:id/show';
export const CUSTOMER_FORM = '/customer/create';
export const CUSTOMER_EDIT = '/customer/:id/edit';

export const APPROVER = '/approval-management';
export const APPROVER_FORM = '/approval-management/create';
export const APPROVER_SHOW = '/approval-management/:type/:id/show';
export const APPROVER_EDIT = '/approval-management/:type/:id/edit';

export const EXPENSE = '/expense';
export const EXPENSE_FORM = '/expense/create';
export const EXPENSE_EDIT = '/expense/:id/edit';

export const REPORT = '/report';
export const SALES_BY_CUSTOMER = '/report/sales-by-customer';
export const SALES_BY_PRODUCT = '/report/sales-by-product';
export const PAYMENT_RECEIVED = '/report/payment-received';
export const TIME_TO_GET_PAID = '/report/time-to-get-paid';
export const EXPENSE_BY_CATEGORY = '/report/expense-by-category';
export const EXPENSE_BY_CUSTOMER = '/report/expense-by-customer';
export const EXPENSE_BY_PRODUCT = '/report/expense-by-product';
export const EXPENSE_DETAIL = '/report/expense-detail';
export const REPORT_PO = '/report/po';
export const REPORT_BILLING = '/report/billing';
export const REPORT_BAD_DEBTS = '/report/bad-debts';
export const REPORT_RECEIVABLE_DETAILS = '/report/receivable-details';
export const REPORT_UNPAID_POSTPAID_INVOICE = '/report/unpaid-postpaid-invoice';
export const REPORT_INVOICE = '/report/invoice';
export const REPORT_TAX_SUMMARY = '/report-tax-sumary';
export const REPORT_PPH_OUTSTANDING = '/report-pph-outstanding';
export const REPORT_UAM = '/report-user-access-matrix';
export const REPORT_MATRIX = '/report-matrix';

export const DUTY_STAMP = '/duty-stamp';
export const RECEIVABLE_SUMMARY = '/report/receivable-summary';
export const REPORT_UNDELIVERED = '/report/undelivered';
export const SETTLEMENT_LIST = '/settlement';
export const SETTLEMENT_SHOW = '/settlement/:id/show';
export const SETTLEMENT_FORM = '/settlement/form';
export const SETTLEMENT_REPORT = '/settlement-report';
export const SETTLEMENT_DASHBOARD = '/settlement/dashboard';
export const REPORT_AM_PERFORMANCE_DASHBOARD = '/report-am-performance-dashboard';
export const REPORT_AM_PERFORMANCE_DETAIL = '/am-performance-detail';
export const REPORT_AM_PERFORMANCE_DETAIL_WID = '/am-performance-detail/:id/show';

export const AM_PERFORMANCE_DASHBOARD = '/am-performance-dashboard';
export const AM_PERFORMANCE_TRANSFER = '/am-performance-transfer';
export const MY_PERFORMANCE = '/my-performance';
export const AM_PERFORMANCE = '/am-performance';
export const AM_PERFORMANCE_DETAIL = '/am-performance/:id';

export const TEMPLATE_LIST = '/template';
export const TEMPLATE_CUSTOM = '/template/custom';

export const MPS_REPORT = '/mps-report';
export const MANUAL = '/manual';
export const FAQ = '/faq';
export const FAQ_DETAIL = '/faq/:id';

export const NOTIFICATION = '/notification';
export const CUSTOM_BILLING = '/data/:id/billing';
export const CUSTOM_INVOICE = '/data/:id/invoice';
export const CUSTOM_PO = '/data/:id/po';

export const POSITION_LIST = '/position';

export const ORGANIZATION_LIST = '/organization';
export const ORGANIZATION_DETAIL = '/organization/:id';

export const PRODUCT_APPROVAL_LIST = '/product-approval';
export const PRODUCT_APPROVAL_FORM = '/product-approval/:id/product-manager';
export const PRODUCT_APPROVAL_FINANCE = '/product-approval/:id/finance';

export const BUSINESS = '/business-model';
export const BUSINESS_SHOW = '/business-model/:id/show';
export const BUSINESS_EDIT = '/business-model/:id/edit';
export const BUSINESS_FORM = '/business-model/create';

export const API_SCHEDULER_LIST = '/api-scheduler';
export const API_SCHEDULER_SHOW = '/api-scheduler/:id/show';
export const API_SCHEDULER_EDIT = '/api-scheduler/:id/edit';
export const API_SCHEDULER_CREATE = '/api-scheduler/create';

export const POSITION_MAPPING_LIST = '/position-mapping';
export const POSITION_MAPPING_SHOW = '/position-mapping/:id';

export const CHANNELING_PRODUCT_LIST = '/channeling';
export const CHANNELING_PRODUCT_SHOW = '/channeling/:id/show';
export const CHANNELING_PRODUCT_EDIT = '/channeling/:id/edit';
export const CHANNELING_PRODUCT_CREATE = '/channeling/create';

export const HOW_TO_USE = '/how-to-use';

export const CUSTOMER_SAP = '/customer-sap';
export const CUSTOMER_SAP_SHOW = '/customer-sap/:id/show';
export const CUSTOMER_SAP_DETAIL_REQUEST = '/customer-sap/:id/request';
export const CUSTOMER_SAP_CREATE = '/customer-sap/create';

export const CATEGORY = '/category';
export const CATEGORY_FORM = '/category/create';
export const CATEGORY_EDIT = '/category/:id/edit';
export const CATEGORY_SHOW = '/category/:id/show';

export const ITEM = '/item-service';
export const ITEM_FORM = '/item/create';
export const ITEM_EDIT = '/item/:id/edit';
export const ITEM_DETAIL = '/item/:id/detail';

export const WEBHOOK = '/webhook';
export const WEBHOOK_FORM = '/webhook/create';
export const WEBHOOK_EDIT = '/webhook/:id/edit';
export const WEBHOOK_SHOW = '/webhook/:id/show';
export const SIMULATOR = '/simulator';

export const RECONCILE = '/reconcile';
export const RECONCILE_FORM = '/reconcile/:collect/create';
export const RECONCILE_SHOW = '/reconcile/:id/show';
export const RECONCILE_BILLING = '/reconcile/:id/billing';
export const RECONCILE_PDF = '/reconcile/:id/pdf';

export const BAST_LIST = '/bast';
export const BAST_FORM = '/bast/create';
export const BAST_FORM_REGULAR = '/bast/create/:id/regular';
export const BAST_SHOW = '/bast/:id/show';

export const CONTRACT_FORM = '/contract/:id/create';
export const CONTRACT_SHOW = '/contract/:id/show';

export const TICKET = '/ticket';
export const TICKET_CHOOSE_BILLING = '/ticket/choose-billing';
export const TICKET_FORM = '/ticket/create';
export const TICKET_BILLING = '/ticket/billing';
export const TICKET_SHOW = '/ticket/:id';

// debit note
export const TRANSFER_REQUEST = '/transfer-request';
export const TRANSFER_REQUEST_CREATE = '/transfer-request/create';
export const TRANSFER_REQUEST_FORM = '/transfer-request/:id/create';
export const TRANSFER_REQUEST_NEW = '/transfer-request/new';
export const TRANSFER_REQUEST_SHOW = '/transfer-request/:id/show';
export const TRANSFER_REQUEST_APPROVAL = '/transfer-request/:id/approval';

// transaction approval
export const TRANSACTION_APPROVAL = '/transaction-approval';
export const INVOICE_APPROVAL = '/invoice-approval';

// SETTLEMENT MPS
export const SETTLEMENT_MPS_LIST = '/settlement-mps-list';

// GENERAL SETTINGS
export const SETTINGS = '/settings';

export const NOT_FOUND_404 = '/page-not-found';
export const ACCESS_DENIED_403 = '/page-denied';

// health check
export const HEALTH_CHECK = '/health-check';

// activation tracking
export const ACTIVATION_TRACKING = '/pelacakan-aktivasi';
export const ACTIVATION_TRACKING_SHOW = '/pelacakan-aktivasi/:id/detail';

// Quotation
export const QUOTATION = '/quotation';
export const QUOTATION_FORM = '/quotation/new/:type';
export const QUOTATION_DETAIL = '/quotation/detail/:id';

// Dashboard NPS
export const DASHBOARD_NPS = '/nps-dashboard';

// Redeem My Point
export const REEDEM_MY_POINT = '/redeem-my-point';
export const REEDEM_MY_POINT_SHOW = '/redeem-my-point/:id/show';

// REWARD CATALOG
export const REWARD_CATALOG = '/reward-catalog';
export const REWARD_CATALOG_CREATE = `${REWARD_CATALOG}/create`;
export const REWARD_CATALOG_EDIT = `${REWARD_CATALOG}/:id/edit`;
export const REWARD_CATALOG_SHOW = `${REWARD_CATALOG}/:id/show`;

// REDEMPTIONS APPROVAL
export const REDEMPTION_APPROVAL = '/redemptions-approval';
export const REDEMPTION_APPROVAL_SHOW = `${REDEMPTION_APPROVAL}/:id/show`;

// E-METERAI
export const EMETERAI = '/emeterai';
export const EMETERAI_FORM = '/emeterai/new';
export const EMETERAI_DETAIL = '/emeterai/detail/:id';

// REPORT TRANSACTION HISTORY
export const REPORT_TRANSACTION_HISTORY = '/report/transaction-tracking-history';

// REVENUE TARGET SETTING
export const REVENUE_TARGET_SETTING = '/revenue-target-setting';
export const REVENUE_TARGET_SETTING_CREATE = `${REVENUE_TARGET_SETTING}/create`;
export const REVENUE_TARGET_SETTING_EDIT = `${REVENUE_TARGET_SETTING}/:id/edit`;

// REPORT TREMS TRANSACTIONS
export const REPORT_TREMS_TRANSACTIONS = '/report/trems-transactions';
export const REPORT_TREMS_CUSTOMER_BILLING_INVOICE = '/report/trems-customer-billing-invoice';
export const REPORT_TREMS_CUSTOMER_BILLING_INVOICE_DETAIL = '/report/trems-customer-billing-invoice/:bpNumber';

// BULK
export const BULK_LIST = '/bulk-posting';
export const BULK_DETAIL = '/bulk-posting/:id/detail';
export const BULK_FORM = '/bulk-posting/new';

// REWARD POINT CONVERSION
export const REWARD_POINT_CONVERSION = '/reward-point-conversion';
export const REWARD_POINT_CONVERSION_CREATE = `${REWARD_POINT_CONVERSION}/create/:type`;
export const REWARD_POINT_CONVERSION_SHOW = `${REWARD_POINT_CONVERSION}/:id/show`;
export const REWARD_POINT_CONVERSION_RESUBMIT = `${REWARD_POINT_CONVERSION}/resubmit/:type/:id`;

// BA RECON REVENUE PRODUCT
export const BA_RECON_LIST = '/ba-recon-product';
export const BA_RECON_FORM = '/ba-recon-product/new';
export const BA_RECON_SHOW = '/ba-recon-product/:id/show';

// UAR LIST
export const UAR_LIST = '/report-user-access-review';
export const UAR_DETAIL = '/report-user-access-review/:id/detail';
export const UAR_FORM = '/report-user-access-review/create';

// UAR LIST
export const NCX_PRODUCT_LIST = '/ncx-product';

// CABASA
export const CABASA_LIST = '/cabasa';
export const CABASA_DETAIL = '/cabasa/detail';

// MPS SETTLEMENT
export const MPS_SETTLEMENT = '/mps-settlement';
export const MPS_SETTLEMENT_CREATE = '/mps-settlement/create';
export const MPS_SETTLEMENT_TRX_SETTLE = '/mps-settlement/settle/:id';
export const MPS_SETTLEMENT_TRX_SETTLED = '/mps-settlement/detail/:id';

// AGREEMENT
export const AGREEMENT_LIST = '/agreement';
export const AGREEMENT_DETAIL = '/agreement/detail/:id';
export const AGREEMENT_CREATE = '/agreement/create';

// METRIC SETTING
export const METRIC_SETTING = '/metric-setting';
export const METRIC_SETTING_CREATE = `${METRIC_SETTING}/create`;
export const METRIC_SETTING_EDIT = `${METRIC_SETTING}/:id/edit`;
export const METRIC_SETTING_SHOW = `${METRIC_SETTING}/:id`;

// REWARD POINT CONVERSION APPROVAL
export const REWARD_POINT_CONVERSION_APPROVAL_LIST = '/point-conversion-approval';

// WALLET CASHOUT T-MONEY
export const WALLET_CASHOUT_LIST = '/wallet-cashout';
export const WALLET_CASHOUT_DETAIL = '/wallet-cashout/detail/:id';

// COMMAND CENTER
export const COMMAND_CENTER = '/command-center';

export const CONCURRENT_USER_PAGE = '/command-center/concurrent-user';
export const COMMAND_CENTER_COMPLIANCE = '/command-center/compliance';

// INTERNAL_CHARGING_URL
export const INTERNAL_CHARGING_URL = '/internal-charging';
export const INTERNAL_CHARGING_FORM_URL = '/internal-charging/create';
export const INTERNAL_CHARGING_DETAIL_URL = '/internal-charging/:id/detail';
export const INTERNAL_CHARGING_BAIC_URL = '/internal-charging/:id/baic';

export const BAIC_URL = '/baic';
export const MYBRAIN_URL = '/mybrain';

// UTILITIES
export const UTILITIES_LIST = '/utilities';
// PRODUCT CHANNEL
export const PRODUCT_CHANNEL_EDIT = '/product-channel/:id/edit';

// POSTING FINEST
export const POSTING_FINEST_LIST = '/posting-finest';
export const POSTING_FINEST_SHOW = '/posting-finest/:id';

// LIST PO NCX - TICKET
export const LIST_PO_NCX_TICKET = '/list-po-ncx';
export const NCX_TICKET_CREATE = '/ticket/noss-a/create/:id';

export const NCX_TICKET_NEW = '/ticket/noss-a/new';

// APPROVAL CONFIGURATION
export const APPROVAL_CONFIGURATIONS = '/approval-configurations';

// DELIVERY TRACKING
export const DELIVERY_TRACKING = '/delivery-tracking';

// LOG ACTIVITY
export const LOG_ACTIVITY = '/aktivitas-log';

// ECOSYSTEM MANAGEMENT
export const ECOSYSTEM_MANAGEMENT_CREATE = '/manajemen-ekosistem/form';
export const ECOSYSTEM_MANAGEMENT_EDIT = '/manajemen-ekosistem/:id/edit';
export const ECOSYSTEM_MANAGEMENT_DETAIL = '/manajemen-ekosistem/:id/detail';
export const ECOSYSTEM_MANAGEMENT = '/manajemen-ekosistem';

// USER MANAGEMENT
export const USER = '/manajemen-pengguna';
export const USER_FORM = '/manajemen-pengguna/tambah';
export const USER_EDIT = '/manajemen-pengguna/:id/edit';
export const USER_SHOW = '/manajemen-pengguna/:id/detail';
export const USER_MANAGEMENT = '/manajemen-pengguna';

// ROLE MANAGEMENT
export const ROLE = '/manajemen-role';
export const ROLE_FORM = '/manajemen-role/tambah';
export const ROLE_EDIT = '/manajemen-role/:id/edit';
export const ROLE_MANAGEMENT = '/manajemen-role';

// PRODUCT MANAGEMENT
export const PRODUCT_MANAGEMENT = '/manajemen-produk';
export const PRODUCT_MANAGEMENT_DETAIL = '/manajemen-produk/:idLayer';
export const PRODUCT_MANAGEMENT_DETAIL_VARIANT = '/manajemen-produk/:idLayer/:idVariant';
export const PRODUCT_MANAGEMENT_EDIT_VARIANT = '/manajemen-produk/:idLayer/:idVariant/edit';
export const PRODUCT_MANAGEMENT_CREATE = '/manajemen-produk/create';

// MENU MANAGEMENT
export const MENU = '/manajemen-menu';
export const MENU_FORM = '/manajemen-menu/tambah';
export const MENU_EDIT = '/manajemen-menu/:id/edit';
export const MENU_DETAIL = '/manajemen-menu/:id/detail';
export const MENU_MANAGEMENT = '/manajemen-menu';
export const MENU_ORGANIZE = '/manajemen-menu/organize';

// ORDER MANAGEMENT
export const ORDER_MANAGEMENT = '/manajemen-pesanan';
export const ORDER_MANAGEMENT_DETAIL = '/manajemen-pesanan/:id/detail';

// BA REVENUE
export const BA_REVENUE = '/laporan-pendapatan';
export const BA_REVENUE_CREATE = '/laporan-pendapatan/tambah';
export const BA_REVENUE_DETAIL = '/laporan-pendapatan/:id/detail';
export const BA_REVENUE_RESEND = '/laporan-pendapatan-gagal';

// TAGIHAN PELANGGAN
export const CUSTOMER_BILLING = '/tagihan-pelanggan';
export const CUSTOMER_BILLING_DETAIL = '/tagihan-pelanggan/:id';

// ORDER CUSTOMER
export const ORDER_CUSTOMER = '/pesanan-pelanggan';
export const ORDER_CUSTOMER_DETAIL = '/pesanan-pelanggan/:id';

// TICKET ISSUE
export const TICKET_ISSUE = '/ticket-issue';

// REPORT
export const LAPORAN_BILLING = '/laporan-billing';
// TAXONOMY MANAGEMENT
export const TAXONOMY_MANAGEMENT = '/manajemen-taksonomi';

// FAQ
export const PO_FAQ = '/dashboard-faq';
export const PO_FAQ_CREATE = '/dashboard-faq/create';
export const PO_FAQ_EDIT = '/dashboard-faq/:id/edit';

// BLOG
export const BLOG_MANAGEMENT = '/manajemen-blog';
export const BLOG_MANAGEMENT_CREATE = '/manajemen-blog/create';
export const BLOG_MANAGEMENT_DETAIL = '/manajemen-blog/:idBlog';
export const BLOG_MANAGEMENT_EDIT = '/manajemen-blog/:idBlog/edit';

// SIMULATOR BILLING
export const SIMULATOR_BILLING = '/simulator-billing';

// BA ACTIVATION
export const BA_ACTIVATION_PREVIEW = '/ba-aktivasi/:id/preview';

// DIVISION
export const DIVISION_MANAGEMENT = '/manajemen-divisi';

// LOKER
export const LOKER_MANAGEMENT = '/manajemen-loker';

// UNIT
export const UNIT_MANAGEMENT = '/manajemen-unit';

// SECTION
export const SECTION_MANAGEMENT = '/manajemen-section';

// DIRECTORATE
export const DIRECTORATE_MANAGEMENT = '/manajemen-direktorat';
