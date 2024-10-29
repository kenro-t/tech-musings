
// TODO: DOMParserで利用できるよう修正したい
export const extractTags = (htmlString) => {
    return htmlString.replace(/<[^>]*>/g, '');
}

export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const months = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];
    
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    
    return `${month} ${day}, ${year}`;
}

// 文字列を丸めて…を付けて表示する
export const truncateContent = (contentText) => {
    const maxLength = 100;
    const suffix = '...';
    if (contentText.length > maxLength) {
        return contentText.slice(0, maxLength) + suffix;
    }
}