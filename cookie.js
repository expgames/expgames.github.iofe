import { GetLocalIPs } from "./dev/getip";
import { SetCookie, SetUser, SetIP, FromCookies } from "./dev/cloudbackup";
import { GetAllCookies } from "./dev/cookieman";
export async function CookieSetup(){
    try {
        const Cookies = await GetAllCookies();
        const IPAddress = GetLocalIPs()[0];
        await SetIP(IPAddress);
        await SetUser();
        FromCookies(Cookies)
        SetCookie("user", "browser")
        return true;
      }
      finally {
        console.warn("Failed to save cookies")
        return false;
      }
}