function isValidDate(dateString) {
    const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$|^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    
    // Check format
    if (!regex.test(dateString)) return false;
    
    const date = new Date(dateString);
    return !isNaN(date.getTime());
};

const startOfWeek = (date) => {
    const diff = date.getDate() - date.getDay();
    return new Date(date.setDate(diff));
};

const endOfWeek = (date) => {
    const start = startOfWeek(new Date(date));
    return new Date(start.setDate(start.getDate() + 6));
};

const startOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1);
};

const endOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
};


module.exports = { isValidDate, startOfWeek, endOfWeek, startOfMonth, endOfMonth };