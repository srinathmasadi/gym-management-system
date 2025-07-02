import { Link } from 'react-router-dom'
import logo from '../assets/image.png'
import { InputText } from '../components/InputText/InputText'
import { Checkbox } from 'primereact/checkbox'
import { useState } from 'react'
import { Button } from '../components/Button/Button'

const Login = () => {
    const [remember, setRemember] = useState(false)

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="flex w-full max-w-5xl rounded-lg overflow-hidden">
                <div className="w-1/2 flex flex-col justify-center p-10">
                    <h2 className="text-3xl font-bold mb-8 text-gray-800">Sign-in</h2>
                    <label htmlFor="email" className="block mb-2 text-gray-700">Email</label>
                    <InputText
                        id="email"
                        type="email"
                        className="w-full mb-6 border-2 border-[#332F64] focus:border-[#332F64] bg-white"
                    />
                    <label htmlFor="password" className="block mb-2 text-gray-700">Password</label>
                    <InputText
                        id="password"
                        type="password"
                        className="w-full mb-4 border-2 border-[#332F64] focus:border-[#332F64] bg-white"
                    />
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center text-gray-700 text-sm">
                            <Checkbox
                                inputId="remember"
                                checked={remember}
                                onChange={e => setRemember(e.checked!)}
                                className="mr-2"
                                style={{ borderColor: '#332F64' }}
                            />
                            <label htmlFor="remember" className="ml-2">Remember me</label>
                        </div>
                        <Link to="/forgot-password" className="text-blue-600 hover:underline text-sm">
                            Forgot password?
                        </Link>
                    </div>
                    <Button label="Login" className="w-full rounded-full bg-[#1A1363]" />
                </div>
                {/* Right Side */}
                <div className="w-1/2 flex items-center justify-center">
                    <img src={logo} alt="Logo" className="max-w-l" />
                </div>
            </div>
        </div>
    )
}

export default Login