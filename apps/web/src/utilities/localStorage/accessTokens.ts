const key = "accessToken";

export const setAccessToken = (value: string) => {
    localStorage.setItem(key, value)
}


export const getAccessToken = () => localStorage.getItem(key) || "";