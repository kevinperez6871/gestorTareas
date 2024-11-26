import { useForm } from "react-hook-form"
import { useTasks } from "../context/TasksContext"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)


function TasksFormPage() {

    const { register, handleSubmit, setValue } = useForm()
    const { createTask, getTask, updateTask } = useTasks()
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const task = await getTask(params.id)
                console.log(task)
                setValue("title", task.title)
                setValue("description", task.description)
            }
        }
        loadTask()
    }, [])

    const onSubmit = handleSubmit((data) => {
        if (params.id) {
            updateTask(params.id, {
                ...data, date: dayjs.utc(data.date).format(),
            })
        } else {
            createTask({
                ...data, date: dayjs.utc(data.date).format(),
            })
        }
        navigate("/tasks")

    })
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-100px)] px-4">
            <div className="bg-gradient-to-r from-[#fff] to-[#fdfeff]  max-w-md w-full p-8 rounded-md shadow-lg">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    ¡Agrega tu tarea! 📝
                </h1>
                <form onSubmit={onSubmit} className="space-y-4">
                    {/* Título */}
                    <div>
                        <label
                            htmlFor="title"
                            className="block text-lg font-semibold text-gray-800 mb-2"
                        >
                            Título
                        </label>
                        <input
                            type="text"
                            id="title"
                            placeholder="Ej: Estudiar para matemáticas"
                            {...register("title")}
                            className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            autoFocus
                        />
                    </div>

                    {/* Descripción */}
                    <div>
                        <label
                            htmlFor="description"
                            className="block text-lg font-semibold text-gray-800 mb-2"
                        >
                            Descripción
                        </label>
                        <textarea
                            id="description"
                            rows="3"
                            placeholder="Ej: Resolver los ejercicios de la página 45 del libro"
                            {...register("description")}
                            className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>

                    {/* Fecha */}
                    <div>
                        <label
                            htmlFor="date"
                            className="block text-lg font-semibold text-gray-800 mb-2"
                        >
                            Fecha de entrega
                        </label>
                        <input
                            type="date"
                            id="date"
                            {...register("date")}
                            className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Botón */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200 font-bold"
                    >
                        Guardar tarea
                    </button>
                </form>
            </div>
        </div>
    )
}

export default TasksFormPage