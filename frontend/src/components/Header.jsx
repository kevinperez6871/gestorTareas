import banner from '../assets/banner.jpg'

const Header = () => {
    return (
        <>
            <section className="text-gray-600  lg:px-16">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 font-medium text-gray-900">
                            Tus Tareas en
                            <br className="hidden lg:inline-block" />
                            un Solo Lugar
                        </h1>
                        <p className="my-8 leading-relaxed">
                            Crear una cuenta es fácil y rápido. Solo necesitas unos minutos para tener tu propio espacio donde organizar tus tareas y actividades escolares
                        </p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-md">
                                Registrate!
                            </button>
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-md">
                                Inicia Sesión!
                            </button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src={banner} />
                        {/*  <img
                            className="rounded-xl shadow-lg w-80 h-80 object-cover"
                            src={banner}
                            alt="Banner"
                        /> */}
                    </div>
                </div>
            </section>


        </>
    )
}

export default Header