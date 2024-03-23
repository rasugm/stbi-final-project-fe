export const hidePhone = (phone: string) => {
    let newPhone = phone;
    if (phone.length > 8) {
        newPhone = phone.substring(0, 4) + '****' + phone.substring(phone.length - 4, phone.length);
    }
    return newPhone;
};

export const hideEmail = (email: string) => {
    const [username, domain] = email.split('@');
    
    if(username.length > 2) {
        const cencoredUsername = username.substring(0, 2) + '*'.repeat(username.length - 2);
        const cencoredEmail = cencoredUsername + '@' + domain;

        return cencoredEmail;
    } else return email;
    
};