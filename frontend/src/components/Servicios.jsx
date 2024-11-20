import stepimg from '../assets/stepBystep.jpg'

const Servicios = () => {
    return (
        <>
            {/* seccion 2 */}
            <section className="text-gray-600 body-font">
                <div className="container px-7 py-24 mx-auto">
                    <div className="flex flex-wrap items-start">
                        {/* Columna de Imagen */}
                        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                            <img
                                className="max-h-[600px] object-center rounded-lg "
                                src={stepimg}
                                alt="step"
                            />
                        </div>

                        {/* Columna de Contenido */}
                        <div className="w-full md:w-1/2 px-4">
                            {/* STEP 1 */}
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#68cdfe] inline-flex items-center justify-center text-white relative z-10">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-bold text-sm text-gray-900 mb-1 tracking-wider uppercase">
                                        1. Gestión de Tareas Escolares:
                                    </h2>
                                    <p className="leading-relaxed">
                                        Organiza y lleva el control de tus tareas diarias. Podrás crear,
                                        editar y eliminar tus actividades para mantener todo bajo control.
                                    </p>
                                </div>
                            </div>

                            {/* STEP 2 */}
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#68cdfe] inline-flex items-center justify-center text-white relative z-10">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-bold text-sm text-gray-900 mb-1 tracking-wider uppercase">
                                        2. Calendario Interactivo:
                                    </h2>
                                    <p className="leading-relaxed">
                                        Visualiza tus tareas en un calendario dinámico. Planifica mejor tus
                                        semanas y establece recordatorios para que siempre estés al día.
                                    </p>
                                </div>
                            </div>

                            {/* STEP 3 */}
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#68cdfe] inline-flex items-center justify-center text-white relative z-10">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle cx="12" cy="5" r="3"></circle>
                                        <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-bold text-sm text-gray-900 mb-1 tracking-wider uppercase">
                                        3. Historial de Actividades:
                                    </h2>
                                    <p className="leading-relaxed">
                                        Lleva un registro de todas tus tareas completadas y celebra tus
                                        logros. ¡Mira cómo vas alcanzando tus metas paso a paso!
                                    </p>
                                </div>
                            </div>

                            {/* STEP 4 */}
                            <div className="flex relative">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#68cdfe] inline-flex items-center justify-center text-white relative z-10">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-bold text-sm text-gray-900 mb-1 tracking-wider uppercase">
                                        4. Sección de Entretenimiento:
                                    </h2>
                                    <p className="leading-relaxed">
                                        Explora el Multiverso de Rick and Morty Tómate un descanso entre
                                        tareas y descubre personajes de la famosa serie Rick and Morty.
                                    </p>
                                    <ul>
                                        <li>Conoce datos curiosos sobre cada personaje.</li>
                                        <li>Explora sus planetas de origen y habilidades únicas.</li>
                                        <li>
                                            Perfecto para un momento de diversión mientras recargas energías
                                            para seguir estudiando.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Servicios