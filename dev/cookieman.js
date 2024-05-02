// connor33341
export async function GetAllCookies() {
    const cookies = document.cookie.split(';');
    let cookieTable = [];
    cookies.forEach(cookie => {
        const [name, value] = cookie.trim().split('=');
        cookieTable.push([name,value]);
    });
}
