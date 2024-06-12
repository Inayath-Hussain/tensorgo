const key = "email";


export const setUserEmail = (value: string) => {
    localStorage.setItem(key, value);
}


export const getUserEmail = () => localStorage.getItem(key) || "";