import { useEffect } from "react"
import { useTasks } from "../src/context/TasksContext"
import TaskCard from "../src/components/TaskCard"



function TasksPage() {

    const { getTasks, tasks } = useTasks()

    useEffect(() => {
        getTasks()
    }, [])

    if (tasks.length == 0) return (<h1>No tienes tareas pendientes :D</h1>)


    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-2 py-16">
            {tasks.map((task) => (
                <TaskCard task={task} key={task._id} />
            ))}
        </div>
    )
}

export default TasksPage