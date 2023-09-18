import { useState } from 'react';
import { login } from '../../store/authSlice';
import { useDispatch } from 'react-redux';



const Login = () => {
    const dispatch = useDispatch()
    const [ formData, setFormData ] = useState({
        "username": "",
        "password": "",
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(formData, info))
    }

    const info = (message) => {
        alert(message)
    }

    return (
        <div>
            <h2>Please Login</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    placeholder='User'
                    name="username"
                    value={formData.username}
                    onChange={(e) => handleChange(e)}
                    required
                />
                <input
                    type="password"
                    placeholder='Password'
                    name="password"
                    value={formData.password}
                    onChange={(e) => handleChange(e)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}



export default Login;