function calculateExactAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
        const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += lastDayOfMonth;
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    return { years, months, days };
}

export default calculateExactAge;