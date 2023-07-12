// validation.js

export const validateFullName = (fullName) => {
    // Perform validation logic for full name
    // Return true if valid, false otherwise
    return fullName.trim() !== '';
};

export const validateEmail = (email) => {
    // Perform validation logic for email
    // Return true if valid, false otherwise
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validateMobileNumber = (mobileNumber) => {
    // Regular expression to match Indian mobile number format
    const mobileRegex = /^(\+?91|0)?[6789]\d{9}$/;

    return mobileRegex.test(mobileNumber);
};



export const validateDateOfBirth = (dob) => {
    // Regular expression to match the date format (YYYY-MM-DD)
    const regex = /^\d{4}-\d{2}-\d{2}$/;

    if (!dob || !regex.test(dob)) {
        return false;
    }

    // Convert the DOB string to a Date object
    const date = new Date(dob);

    // Check if the Date object is a valid date
    if (isNaN(date.getTime())) {
        return false;
    }

    // Perform additional validation if needed
    // Example: Check if the user is at least 18 years old

    return true;
};