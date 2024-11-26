

import Header from '../components/Header'
import Servicios from '../components/Servicios'

const HomePage = () => {
    return (
        <>

            <Header />
            <h2 className="text-[24px] sm:text-[42px] italic font-semibold text-center">Todo lo que Necesitas para Organizar tus Estudios</h2>
            <Servicios />
        </>
    )
}

export default HomePage