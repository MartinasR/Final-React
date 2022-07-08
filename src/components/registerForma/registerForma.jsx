import { useNavigate} from 'react-router-dom'

const Register = () => {
    const redirect = useNavigate()

    const RegisterForma = (e) => {
        e.preventDefault()
        const login = {
            email: e.target.elements.email.value,
            password: e.target.elements.password.value
        }
        e.target.elements.email.value = ''
        e.target.elements.password.value = ''
        fetch('https://autumn-delicate-wilderness.glitch.me/v1/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(login),
        })
            .then(response => response.json())
            .then(data => {
                if (data.changes !== 1) return alert('Not good')
                else {
                    data.changes === 1 ? alert('All good'): '';
                    setTimeout(() => redirect('/login'), 1000)
                };
            })
            .catch(err => {return alert(err)})
    }

    return (
    <form onSubmit={RegisterForma}>
        <h1>Register</h1>
        <label htmlFor="email">Email</label>
        <input type="email" name="email"/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password"/>
        <input type="submit" value={"Register"} />
    </form>
    );
}

export default Register;