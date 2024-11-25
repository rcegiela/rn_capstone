const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

const validatePhoneNumber = (phone) => {
    const re = /^\d{10}$/;
    return re.test(String(phone));
};

const validateName = (name) => {
    const re = /^[A-Za-z\s-]+$/;
    return re.test(String(name));
};

const validateProfile = (profile) => {
    return (
        validateName(profile.firstName) &&
        validateName(profile.lastName) &&
        validateEmail(profile.email) &&
        validatePhoneNumber(profile.phone)
    );
};


export { validateEmail, validatePhoneNumber, validateName, validateProfile }