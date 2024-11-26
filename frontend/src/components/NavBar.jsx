import Logo from '../assets/logo.png'
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    const { isAuthenticated, logout, user } = useAuth();
    return (
        <>
            <div className=" body-font">
                <nav className='text-white body-font  bg-slate-800  py-5 px-5  w-[100%] mx-auto shadow-lg'>
                    <div className="container mx-auto py-0 px-5 flex flex-wrap items-end flex-col sm:flex-row sm:items-center sm:text-left text-center">
                        <div className="flex sm:justify-end justify-center w-full gap-10 items-center">
                            {isAuthenticated ? (
                                <>
                                    <Link
                                        to="/tasks"
                                        className="inline-flex items-center bg-[#2d6397] border-0 py-1 px-3 focus:outline-none hover:bg-[#e79128] rounded text-white font-bold text-sm"
                                    >
                                        Todas mis Tareas
                                    </Link>

                                    <Link
                                        to="/add-task"
                                        className="inline-flex items-center bg-[#2d6397] border-0 py-1 px-3 focus:outline-none hover:bg-[#e79128] rounded text-white font-bold text-sm"
                                    >
                                        Agregar Tarea
                                    </Link>
                                    <span className="text-[#68cdfe] font-bold text-sm">
                                        Bienvenido, <span className="font-semibold">{user.username}</span>
                                    </span>
                                    <Link
                                        to="/"
                                        onClick={logout}
                                        className="text-white hover:text-[#68cdfe] font-bold text-sm"
                                    >
                                        Cerrar Sesión
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        className="inline-flex items-center bg-[#68cdfe] border-0 py-1 px-3 focus:outline-none hover:bg-[#fcb202] rounded text-white font-bold"
                                    >
                                        Iniciar Sesión
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="inline-flex items-center bg-[#68cdfe] border-0 py-1 px-3 focus:outline-none hover:bg-[#fcb202] rounded  text-white font-bold"
                                    >
                                        Registrarse
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </nav>


                <div className="px-[6%] py-6 flex flex-wrap items-center justify-between bg-[#fff] w-full mx-auto shadow-md">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex flex-col items-center text-white mb-4 w-full md:w-auto md:mb-0"
                    >
                        <img
                            className="  h-[240px] sm:h-[200px] md:h-[240px] lg:h-[120px] xl:h-[150px] object-cover rounded-lg"
                            src={Logo}
                            alt="logo"
                        />

                    </Link>

                    {/* Menú */}
                    <nav className="lg:px-16 flex flex-col md:flex-row text-base items-center md:items-end justify-center md:justify-end gap-10 w-full md:w-auto">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? 'text-[#68cdfe] font-bold' : 'text-[#2d6397] hover:text-[#68cdfe] font-bold'
                            }
                        >
                            Inicio
                        </NavLink>
                        <NavLink
                            to="/quienessomos"
                            className={({ isActive }) =>
                                isActive ? 'text-[#68cdfe] font-bold' : 'text-[#1e293b] hover:text-[#68cdfe] font-bold'
                            }
                        >
                            Quiénes Somos
                        </NavLink>
                        <NavLink
                            to="/api"
                            className={({ isActive }) =>
                                isActive ? 'text-[#68cdfe] font-bold' : 'text-[#1e293b] hover:text-[#68cdfe] font-bold'
                            }
                        >
                            API
                        </NavLink>
                        <NavLink
                            to="/contactenos"
                            className={({ isActive }) =>
                                isActive ? 'text-[#68cdfe] font-bold' : 'text-[#1e293b] hover:text-[#68cdfe] font-bold'
                            }
                        >
                            Contáctenos
                        </NavLink>
                    </nav>
                </div>
            </div >

        </>
    )
}

export default NavBar