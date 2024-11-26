import { useTasks } from "../context/TasksContext"
import { Link } from 'react-router-dom'
import days from "dayjs"
import utc from "dayjs/plugin/utc"
days.extend(utc)

function TaskCard({ task }) {

    const { deleteTask } = useTasks()

    return (
        <div className="bg-gradient-to-r from-[#fff] to-[#fdfeff] max-w-md w-full p-8 mt-20 rounded-md shadow-lg hover:shadow-2xl transition duration-200 flex flex-col">
            <header className="text-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{task.title}</h1>


            </header>

            {/* Sección de información de la tarea */}
            <div className="text-center mb-6">
                <div className="mb-4">
                    <span className="block text-lg font-semibold text-gray-700">Descripción</span>
                    <p className="text-gray-600 text-sm">{task.description}</p>
                </div>
                <div className="mb-4">
                    <span className="block text-lg font-semibold text-gray-700">Fecha de entrega</span>
                    <p className="text-gray-500 text-xs">{days(task.date).utc().format("DD/MM/YYYY")}</p>
                </div>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mt-auto">
                {/* Edit Button */}
                <Link
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold transition duration-200 w-full sm:w-auto text-center"
                    to={`/tasks/${task._id}`}
                >
                    Editar
                </Link>

                {/* Delete Button */}
                <button
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold transition duration-200 w-full sm:w-auto text-center"
                    onClick={() => {
                        deleteTask(task._id);
                    }}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}
export default TaskCard