import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Login from './Pages/Login.jsx'
import Card from './components/card.jsx'
import './App.css'
// import Alert from '../Garbadge/Alert.jsx'
// import Films from '../Garbadge/Films.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
// import Error from '../Garbadge/Error.jsx'
// import UseCustome from './components/UseCustome.jsx'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import FilmsRedux from './Pages/FilmsRedux.jsx'
import TrendingMovies from './Pages/TrendingMovies.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ProtectedRoutes from './components/ProtectedRoutes.jsx'
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>

        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Nav />
            <main className='flex-1'>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/films" element={<ProtectedRoutes><FilmsRedux /></ProtectedRoutes>} />
                <Route path="/dashboard" element={<ProtectedRoutes><Dashboard /></ProtectedRoutes>} />
                <Route path="/trending-movies" element={<ProtectedRoutes><TrendingMovies /></ProtectedRoutes>} />
                <Route path="*" element={<Error />} />
              </Routes>

            </main>
            <Footer />

          </div>
        </BrowserRouter >
      </QueryClientProvider>
    </>
  )
}

export default App
/*

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
    
    }
  useEffect(() => {
    {
      console.log("Count has reached 5!");
    }
  }, [count])
  <Login />
  <h1 className='bg-red-900'>Vite + React</h1>
  <p>count is {count}  </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={increment}>Increment</button>
      { arr.length >= 1 ? ( <div className="flex flex-wrap gap-4 justify-center items-center">

         {
           arr.map((e,i) => {
            return (
              <Card n="John Doe" key={i} title={e.title} description={e.description} click={click} />
               )
              })
            }
            </div>):<Alert />
        }
        const arr = [{ title: "card1" }, { title: "card2" }, { title: "card3" }, { title: "card4" }]
        
        const click=()=> {
          console.log("clicked")
          
          // const forHeader = () => {
  //   if (window.location.pathname === '/login') {
  //     return <Login />;
  //   } else if (window.location.pathname === '/films') {
    //     return <Films />;
    //   } else if (window.location.pathname === '/dashboard') {
      //     return <Dashboard />;
  //   } else if (window.location.pathname === '/') {
    //     return <Login />;
    //   } else {
      //     return null;
      //   }
      // }
      
      */
// const feax = async () => {
//   const c = await axios.get("https://jsonplaceholder.typicode.com/todos/")
//   console.log(c.data)
// }

// useEffect(() => {
//   feax()
// }, [])
// const [t] = UseCustome('https://jsonplaceholder.typicode.com/todos/')
// console.log(t)
{/* <Route path="/filmsRedux" element={<FilmsRedux />} /> */ }
