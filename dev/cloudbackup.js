// connor33341
import { GetLocalIPs } from "./getip";
let IP;
export async function SetUser(){
    var UserIP = GetLocalIPs();
    if (UserIP){
        IP = UserIP;
    } else {
        IP = null;
    }
}
export async function SetIP(SelectedIP){
    IP = SelectedIP;
}
export async function SetCookie(Name,Value) {
    try {
        const Response = await fetch('https://exp-games.glitch.me/StoreCookie', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                CookieName: Name,
                CookieValue: Value,
                User: IP
            })
        });
        if (!response.ok) {
            throw new Error('Failed to edit cookie');
        }
        console.log('Cookie added successfully:', value);
    } catch (error) {
        console.error('Error:', error.message);
    }
}
