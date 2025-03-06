function isValidDate(dateString) {
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

module.exports = { isValidDate, startOfWeek, endOfWeek };