const phoneMasking = (phone: string) => {
    const phoneSecred = phone.replace(phone.substring(3, 9), '*****');
    return phoneSecred;
};

export default phoneMasking;
