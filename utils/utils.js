export const generateCode = (count) => {
    const chars = 'acdefhiklmnoqrstuvwxyz0123456789'.split('');
    let result = '';
    for (let i = 0; i < count; i++) {
        const x = Math.floor(Math.random() * chars.length);
        result += chars[x];
    }
    return result;
};

export const calculateTotal = (items) => {
    let total = 0;
    for (let item of items) {
        total += item.price;
    }
    return total;
};
