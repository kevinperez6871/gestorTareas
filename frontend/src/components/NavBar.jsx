import Logo from '../assets/logo.png'
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const NavBar = () => {
    const { isAuthenticated, logout, user } = useAuth();
    return (
        <>
            <div className=" body-font">
                <nav className='text-white body-font  bg-slate-800  py-5 px-5  w-[100%] mx-auto shadow-md'>
                    <div className="container mx-auto py-0 px-5 flex flex-wrap items-end flex-col sm:flex-row sm:items-center sm:text-left text-center">
                        <div className="flex sm:justify-end justify-center w-full gap-10 items-center">
                            {isAuthenticated ? (
                                <>
                                    <Link
                                        to="/add-task"
                                        className="inline-flex items-center bg-[#68cdfe] border-0 py-1 px-3 focus:outline-none hover:bg-[#e79128] rounded text-white font-bold text-sm"
                                    >
                                        Agregar Tarea
                                    </Link>
                                    <span className="text-[#ffef6a] font-bold text-sm">
                                        Bienvenido, <span className="font-semibold">{user.username}</span>
                                    </span>
                                    <Link
                                        to="/"
                                        onClick={logout}
                                        className="text-white hover:text-[#ffef6a] font-bold text-sm"
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


                <div className="lg:px-16 px-4 py-6 flex flex-wrap items-center justify-between bg-[#68cdfe] w-[100%] mx-auto shadow-m">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex flex-col items-center text-white mb-4 w-full md:w-auto md:mb-0"
                    >
                        <img
                            className="w-24 md:w-1/2 object-cover object-center rounded-lg"
                            src={Logo}
                            alt="step"
                        />
                        <span className="text-lg font-bold text-[#fff]">Homework Management</span>
                    </Link>

                    {/* Menú */}
                    <nav className="lg:px-16 flex flex-col md:flex-row text-base items-center md:items-end justify-center md:justify-end gap-10 w-full md:w-auto">
                        <Link to="/" className="text-[#1e293b] hover:text-[#ffef6a] font-bold">
                            Inicio
                        </Link>
                        <Link to="/quienessomos" className="text-[#1e293b] hover:text-[#ffef6a] font-bold">
                            Quiénes Somos
                        </Link>
                        <Link to="/api" className="text-[#1e293b] hover:text-[#ffef6a] font-bold">
                            API
                        </Link>
                        <Link to="/contactenos" className="text-[#1e293b] hover:text-[#ffef6a] font-bold">
                            Contáctenos
                        </Link>
                    </nav>
                </div>
            </div>

        </>
    )
}

export default NavBar