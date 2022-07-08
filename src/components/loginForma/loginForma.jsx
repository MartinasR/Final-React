import { useNavigate } from 'react-router-dom'

const Login = () => {
    const redirect = useNavigate()

    const LoginForma = (e) => {
        e.preventDefault()
        const login = {
            email: e.target.elements.email.value,
            password: e.target.elements.password.value
        }
        e.target.elements.email.value = ''
        e.target.elements.password.value = ''
        fetch('https://autumn-delicate-wilderness.glitch.me/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(login),
        })
            .then(response => response.json())
            .then(data => {
                if (data.err) {
                    return alert(data.err)
                }
                else {
                    localStorage.setItem('token', data.token)
                    redirect('/Home')
                }
            })
            .catch(err => { return alert(err) })

    }

    return (
        <form onSubmit={LoginForma}>
            <h1>Login</h1>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password"/>
            <input type="submit" value={"Login"} />
        </form>
    );
}

export default Login;