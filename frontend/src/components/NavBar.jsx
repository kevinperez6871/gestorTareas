/* import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"


function NavBar() {
    const { isAuthenticated, logout, user } = useAuth()

    return (
        <nav className="bg bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
            <Link to="/">
                <h1 className="text-2xl font-bold">Administra tus tareas</h1>
            </Link>
            <ul className="flex gap-x-2">

                {isAuthenticated ? (
                    <>
                        <li>
                            Bienvenido  {user.username}
                        </li>
                        <li>
                            <Link to="/add-task" className="bg-indigo-500 px-4 py-1 rounded-md my-2 "> Agregar Tarea </Link>
                        </li>
                        <li>
                            <Link to="/" onClick={() => { logout() }}>Cerrar Sesión</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/login" className="bg-indigo-500 px-4 py-1 rounded-md my-2">Iniciar Sesión</Link>
                        </li>
                        <li>
                            <Link to="/register" className="bg-indigo-500 px-4 py-1 rounded-md my-2">Registrarse</Link>
                        </li>


                    </>
                )}
            </ul>


        </nav>
    )
}

export default NavBar  */

/* import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function NavBar() {
    const { isAuthenticated, logout, user } = useAuth();

    return (
        <nav className="bg bg-zinc-700 my-3 flex justify-evenly py-5 px-10 rounded-lg">
            <ul className="flex gap-x-4">
                <li>
                    <Link to="/quienessomos" className="text-white hover:text-indigo-300">Quiénes Somos</Link>
                </li>
                <li>
                    <Link to="/contactenos" className="text-white hover:text-indigo-300">Contáctenos</Link>
                </li>
                <li>
                    <Link to="/api" className="text-white hover:text-indigo-300">API</Link>
                </li>
                <Link to="/">
                    <h1 className="text-white text-2xl font-bold">Tareas.com</h1>
                </Link>

                {isAuthenticated ? (
                    <>
                        <li className="text-white">
                            Bienvenido, {user.username}
                        </li>
                        <li>
                            <Link to="/add-task" className="bg-indigo-500 px-4 py-1 rounded-md my-2 text-white hover:text-yellow-500">
                                Agregar Tarea
                            </Link>
                        </li>
                        <li>
                            <Link to="/" onClick={logout} className="text-white hover:text-red-500">
                                Cerrar Sesión
                            </Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/login" className="bg-indigo-500 px-4 py-1 rounded-md my-2 ">
                                Iniciar Sesión
                            </Link>
                        </li>
                        <li>
                            <Link to="/register" className="bg-indigo-500 px-4 py-1 rounded-md my-2">
                                Registrarse
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default NavBar; */

import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function NavBar() {
    const { isAuthenticated, logout, user } = useAuth();

    return (
        <nav className="text-gray-600 body-font bg-zinc-700 py-5 px-5 rounded-lg w-[100%] mx-auto shadow-md">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">Tareas.com</span>
                </Link>

                {/* Menú */}
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-4">
                    <Link to="/quienessomos" className="mr-5 hover:text-gray-300 text-white">
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

    );
}

export default NavBar;


