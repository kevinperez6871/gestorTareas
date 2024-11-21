import LogoTic from '../assets/logo-tic.png'
import Logo from '../assets/logo.png'
import LogoTech from '../assets/logo-tech.png'

const Footer = () => {
    return (
        <>

            <footer className="text-gray-600 body-font border-t-2 border-gray-300">
                <div className="container px-5 py-8 mx-auto flex items-center flex-wrap sm:flex-row justify-center sm:justify-between">


                    {/* Logo MinTIC y Logotech */}
                    <div className="flex items-center justify-center sm:justify-start w-full sm:w-auto mb-4 sm:mb-0">
                        <img
                            className="h-[60px] object-cover object-center rounded-lg"
                            src={LogoTech}
                            alt="Logo Tech"
                        />


                        <div className="flex justify-center space-x-4">
                            <img
                                className="h-[40px] object-cover object-center rounded-lg"
                                src={LogoTic}
                                alt="Logo MinTIC"
                            />
                        </div>



                    </div>

                    {/* Logos de MinTIC y Tech */}
                    <img
                        className="h-[120px] sm:h-[130px] object-cover object-center rounded-lg"
                        src={Logo}
                        alt="Logo MinTIC"
                    />



                    {/* Redes Sociales */}
                    <div className="inline-flex justify-center sm:justify-start w-full sm:w-auto mt-4 sm:mt-0">
                        <a className="text-gray-500 mx-3">
                            <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="text-gray-500 mx-3">
                            <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a className="text-gray-500 mx-3">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a className="text-gray-500 mx-3">
                            <svg
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="0"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="none"
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                ></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>


        </>
    )
}

export default Footer