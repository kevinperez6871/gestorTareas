
import Logo from '../assets/logo.png'
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function NavBar() {
    const { isAuthenticated, logout, user } = useAuth();

    return (
        <>
            <nav className="text-white body-font bg-[#2d6397] py-5 px-5 rounded-lg w-[100%] mx-auto shadow-md">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        {isAuthenticated ? (
                            <>
                                <span className="text-white">
                                    Bienvenido, <span className="font-semibold">{user.username}</span>
                                </span>
                                <Link
                                    to="/add-task"
                                    className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-400 rounded text-white"
                                >
                                    Agregar Tarea
                                </Link>
                                <Link
                                    to="/"
                                    onClick={logout}
                                    className="text-white hover:text-red-400"
                                >
                                    Cerrar Sesión
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-gray-800"
                                >
                                    Iniciar Sesión
                                </Link>
                                <Link
                                    to="/registro"
                                    className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-gray-800"
                                >
                                    Registrarse
                                </Link>
                            </>
                        )}
                    </div>
                </div>


                <div className="container mx-auto flex flex-wrap items-center justify-around">
                    {/* Logo */}
                    <Link to="/" className="flex flex-col items-center text-white mb-4 md:mb-0">

                        <img className="  lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src={Logo} alt="step" />
                        <span className="ml-3 text-sm font-bold text-[#fff]">Homework Management</span>

                    </Link>

                    {/* Menú */}
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-4">
                        <Link to="/quienessomos" className="mr-5 hover:text-gray-300 text--500 font-bold">
                            Quiénes Somos
                        </Link>
                        <Link to="/contactenos" className="mr-5 hover:text-gray-300 text-white">
                            Contáctenos
                        </Link>
                        <Link to="/api" className="mr-5 hover:text-gray-300 text-white">
                            API
                        </Link>
                    </nav>

                    {/* Botones / Condicional de autenticación */}
                    <div className="flex items-center gap-4">
                        {isAuthenticated ? (
                            <>
                                <span className="text-white">
                                    Bienvenido, <span className="font-semibold">{user.username}</span>
                                </span>
                                <Link
                                    to="/add-task"
                                    className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-400 rounded text-white"
                                >
                                    Agregar Tarea
                                </Link>
                                <Link
                                    to="/"
                                    onClick={logout}
                                    className="text-white hover:text-red-400"
                                >
                                    Cerrar Sesión
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-gray-800"
                                >
                                    Iniciar Sesión
                                </Link>
                                <Link
                                    to="/registro"
                                    className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-gray-800"
                                >
                                    Registrarse
                                </Link>
                            </>

                        )}
                    </div>
                </div>
            </nav>
        </>

    );
}

export default NavBar;


