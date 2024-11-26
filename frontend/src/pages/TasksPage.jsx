import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";
import noHayTareas from '../assets/no-tienes-tareas.png'
function TasksPage() {
    const { getTasks, tasks } = useTasks();

    useEffect(() => {
        getTasks();
    }, []);

    if (tasks.length === 0)
        return (
            <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)] text-center p-4">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
                    ¡No tienes tareas pendientes! 🎉
                </h1>
                <p className="text-gray-600 text-lg md:text-xl mt-4">
                    ¡Disfruta tu tiempo libre o aprovecha para aprender algo nuevo! 🌟
                </p>
                <img
                    src={noHayTareas} // Cambia esta ruta por la imagen que desees usar
                    alt="No hay tareas pendientes"
                    className="w-3/4 md:w-1/2 max-w-md mt-6"
                />
            </div>
        );

    return (
        <div className="min-h-[calc(100vh-100px)] py-8 px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
                Tus tareas pendientes 📝
            </h1>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {tasks.map((task) => (
                    <TaskCard task={task} key={task._id} />
                ))}
            </div>
        </div>
    );
}

export default TasksPage;