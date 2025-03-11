import './App.css'
import Header from './components/Header'

function App() {

  return (
    <div className='h-screen flex flex-col bg-gray-800 text-white'>
      <Header />
      <main className='grow-1 p-6'>
        main
      </main>
    </div>
  )
}

export default App
