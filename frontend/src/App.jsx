import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import { TaskProvider } from './context/TasksContext.jsx'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage'
import TasksPage from './pages/TasksPage.jsx'
import TasksFormPage from './pages/TasksFormPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'
import NavBar from './components/NavBar.jsx'
import QuienesSomos from './pages/QuienesSomos.jsx'
import Contactenos from './pages/Contactenos.jsx'
import ApiPage from './pages/ApiPage.jsx'
import Footer from './components/Footer.jsx'

function App() {
    return (
        <>
            <AuthProvider>
                <TaskProvider>
                    <BrowserRouter>
                        <main className="w-full px-0">
                            <NavBar />
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path='/login' element={<LoginPage />} />
                                <Route path='/register' element={<RegisterPage />} />
                                <Route path='/quienessomos' element={<QuienesSomos />} />
                                <Route path='/contactenos' element={<Contactenos />} />
                                <Route path='/api' element={<ApiPage />} />


                                <Route element={<ProtectedRoute />}>
                                    <Route path='/tasks' element={<TasksPage />} />
                                    <Route path='/add-task' element={<TasksFormPage />} />
                                    <Route path='/tasks/:id' element={<TasksFormPage />} />
                                    <Route path='/profile' element={<ProfilePage />} />
                                </Route>
                            </Routes>
                        </main>
                    </BrowserRouter>
                </TaskProvider>
            </AuthProvider>

            <Footer></Footer>
        </>

    )
}

export default App