export const apiKeyRawg = 'key=cb22081c42d1484a891e93583e6dd344'
// const apiKey = '?apikey=c909af42'

//@ts-expect-error
export const user = JSON.parse(localStorage.getItem("user"));

export const token = sessionStorage.getItem("token");
 