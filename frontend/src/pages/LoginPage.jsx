import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from "react";
import imgInicio from '../assets/img-inicio.png'

function LoginPage() {

    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { signin, errors: signinErrors, isAuthenticated } = useAuth();

    const navigate = useNavigate()

    const onSubmit = handleSubmit(data => {
        signin(data)
    })

    useEffect(() => {
        if (isAuthenticated) navigate("/tasks")
    }, [isAuthenticated])

    return (
        <div className="flex flex-col lg:flex-row h-[calc(100vh-100px)] items-center justify-center gap-8 lg:gap-16 p-4">
            {/* Columna izquierda para el formulario */}
            <div className="bg-gradient-to-r from-[#fff] to-[#fdfeff] max-w-md w-full p-10 rounded-md shadow-md flex-shrink-0">
                {signinErrors.map((error, i) => (
                    <div className="bg-red-500 p-2 text-white mb-2 rounded-md text-center" key={i}>
                        {error}
                    </div>
                ))}
                <h1 className="text-3xl font-bold my-2 text-gray-800 text-center">
                    Inicia Sesión
                </h1>
                <form onSubmit={onSubmit}>
                    <input
                        type="email"
                        {...register("email", { required: true })}
                        className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-md my-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Email"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm">El Email es necesario</p>
                    )}
                    <input
                        type="password"
                        {...register("password", { required: true })}
                        className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-md my-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Contraseña"
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm">La contraseña es necesaria</p>
                    )}
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md my-2 w-full hover:bg-blue-600 transition duration-200 font-bold"
                    >
                        Iniciar Sesión
                    </button>
                </form>
                <p className="text-gray-700 text-center mt-4">
                    ¿No tienes cuenta aún?{" "}
                    <Link to="/register" className="text-gray-800 hover:underline font-bold">
                        ¡Regístrate!
                    </Link>
                </p>
            </div>

            {/* Columna derecha para la imagen */}
            <div className="hidden lg:flex items-center justify-center w-full lg:w-1/2 h-[auto] flex-shrink-0">
                <img
                    src={imgInicio}
                    alt="Motivational image for students"
                    className="max-w-full max-h-full"
                />
            </div>
        </div>
    )
}

export default LoginPage