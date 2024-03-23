export const cutTwoDigitCodePhone = (phonenumber: string) => {
    if (phonenumber) {
        let newPhonenumber = phonenumber;
        if (newPhonenumber.startsWith('62')) {
            newPhonenumber = newPhonenumber.slice(2);
        }
        return newPhonenumber;
    }
};

export const capitalizeString = (str: string) => {
    if (str) {
        return String(str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()).replace(/_/g, '');
    }
};

export const capitalizeAllString = (str: string) => {
    if(str) {
        return str.toUpperCase();
    }
};

export const loweringString = (str: string) => {
    if (str) {
        return str.toLowerCase();
    }
};

export const limitStringLength = (inputString: string, maxLength: number) => {
    if (inputString.length > maxLength) {
        return inputString.substring(0, maxLength) + '...';
    }
    return inputString;
};

export const convertFormatDatetimeString = (input: string): string => {
    // Memisahkan tanggal dan waktu menggunakan spasi sebagai pemisah
    const [tanggal, waktu] = input.split(' ');

    // Memisahkan komponen tanggal
    const [hari, bulan, tahun] = tanggal.split('-');

    // Menggabungkan semua komponen dengan format yang diinginkan
    const hasil = `${hari}/${bulan}/${tahun}, ${waktu}`;

    return hasil;
};