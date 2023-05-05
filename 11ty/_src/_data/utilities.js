module.exports = {
    copyrightYear() {
        const firstYear = 2022;
        const today = new Date();
        return today.getFullYear() === firstYear ? today.getFullYear() : `${firstYear}-${today.getFullYear()}`;
    }
};