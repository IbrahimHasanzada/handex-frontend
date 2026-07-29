export const formatPhoneNumber = (value?: string | null) => {
    if (!value) return "";
    let numbers = value.replace(/\D/g, "");
    if (numbers.startsWith("994")) {
        numbers = numbers.substring(3);
    }

    let formatted = "+994 ";

    if (numbers.length > 2) {
        formatted += numbers.substring(0, 2) + " ";
        if (numbers.length > 5) {
            formatted += numbers.substring(2, 5) + " ";
            if (numbers.length > 7) {
                formatted += numbers.substring(5, 7) + " ";
                formatted += numbers.substring(7, 9);
            } else {
                formatted += numbers.substring(5);
            }
        } else {
            formatted += numbers.substring(2);
        }
    } else {
        formatted += numbers;
    }

    return formatted.trim();
};
