/**
 * Utility functions for handling dynamic wedding dates
 */

/**
 * Returns a date with a month offset from the current date.
 * Default is 1 month ahead (the wedding date).
 */
export const getMarriageDate = (monthOffset: number = 1): Date => {
    const now = new Date();
    const targetDate = new Date(now);
    targetDate.setMonth(now.getMonth() + monthOffset);
    return targetDate;
};

/**
 * Formats a date string for display (e.g., "08.03.2018" or "08 March 2018")
 * @param date The Date object to format
 * @param lang 'en' or 'te'
 * @param type 'short' (DD.MM.YYYY) or 'long' (DD Month YYYY)
 */
export const formatWeddingDate = (date: Date, lang: 'en' | 'te' = 'en', type: 'short' | 'long' = 'short'): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    if (type === 'short') {
        return `${day}.${month}.${year}`;
    }

    const monthsEn = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const monthsTe = [
        "జనవరి", "ఫిబ్రవరి", "మార్చి", "ఏప్రిల్", "మే", "జూన్",
        "జూలై", "ఆగస్టు", "సెప్టెంబరు", "అక్టోబరు", "నవంబరు", "డిసెంబరు"
    ];

    const monthName = lang === 'en' ? monthsEn[date.getMonth()] : monthsTe[date.getMonth()];

    if (lang === 'te') {
        return `${day} ${monthName}, ${year}`;
    }

    return `${day} ${monthName} ${year}`;
};
