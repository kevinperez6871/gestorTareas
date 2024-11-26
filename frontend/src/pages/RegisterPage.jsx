import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import imgRegistro from '../assets/img-registro.png'


function RegisterPage() {

    const { register,
        handleSubmit,
        formState: { errors }, }
        = useForm();

    const { signup, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate("/tasks")
    }, [isAuthenticated])



    const onSubmit = handleSubmit(async (values) => {
        signup(values)
    })

    return (
        <div className="flex flex-col lg:flex-row h-[calc(100vh-100px)] items-center justify-center gap-8 lg:gap-16 p-4">
            {/* Columna izquierda para el formulario */}
            <div className="bg-gradient-to-r from-[#fff] to-[#fdfeff] max-w-md w-full p-10 rounded-md shadow-md flex-shrink-0">
                {registerErrors.map((error, i) => (
                    <div className="bg-red-500 p-2 text-white mb-2 rounded-md" key={i}>
                        {error}
                    </div>
                ))}
                <h1 className="text-3xl font-bold my-2 text-gray-800 text-center">
                    ¡Regístrate!
                </h1>
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        {...register("username", { required: true })}
                        className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-md my-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Nombre de usuario"
                    />
                    {errors.username && (
                        <p className="text-red-500 text-sm">Usuario es necesario</p>
                    )}
                    <input
                        type="email"
                        {...register("email", { required: true })}
                        className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-md my-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Correo electrónico"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm">Email es necesario</p>
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
                        Registrarse
                    </button>
                </form>
                <p className="text-gray-700 text-center mt-4 font-bold">
                    ¿Ya tienes una cuenta?{" "}
                    <Link to="/login" className="text-gray-800 hover:underline font-bold">
                        Inicia Sesión
                    </Link>
                </p>
            </div>

            {/* Columna derecha para la imagen */}
            <div className="hidden lg:flex items-center justify-center w-full lg:w-1/2 h-auto flex-shrink-0">
                <img
                    src={imgRegistro}
                    alt="Motivational image for students"
                    className="max-w-full max-h-full"
                />
            </div>
        </div>
    )
}

export default RegisterPage