export const apiKeyRawg = 'key=cb22081c42d1484a891e93583e6dd344'

let user2 = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

export const user = () => {
    if (localStorage.getItem('user') !== null) {
        return JSON.parse(localStorage.getItem("user")!)
    } else {
        localStorage.setItem("user", JSON.stringify(user2))
    }
}

export const token = sessionStorage.getItem("token");