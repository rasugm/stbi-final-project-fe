/* eslint-disable no-useless-escape */
/* eslint-disable  max-len */
export const PASSWORD = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()\-=_+[\]{}|;:'",.<>/?`~])[\w!@#$%^&*()\-=_+[\]{}|;:'",.<>/?`~]+$/);
export const RE_DIGIT = new RegExp(/^\d+$/);
export const REGEX_PHONE_NUMBER = new RegExp(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/);
export const PHONE = new RegExp(/^[086]([\d]{8,})$/i);
export const URL = new RegExp(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/);
export const RE_ANS = new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()\-=_+[\]{}|;:'",.<>/?`~])[\w!@#$%^&*()\-=_+[\]{}|;:'",.<>/?`~]+$/); // Regex mengecek huruf, angka dan symbol