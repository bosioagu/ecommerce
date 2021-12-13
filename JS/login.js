let loginUser = []
let loginForm = document.getElementById ("loginForm")
let divLogin = document.getElementById('loginUser')

class Login{
    constructor(identification, password){
        this.identification = identification
        this.password = password
    }
}

loginForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    let identification = document.getElementById('identification').value
    let password = document.getElementById('password').value
        console.log(identification,password)
    const logForm= new Login (identification,password)
    loginUser.push(logForm)
    loginForm.reset()
    localStorage.setItem ('loginUser',JSON.stringify(loginUser))
})

