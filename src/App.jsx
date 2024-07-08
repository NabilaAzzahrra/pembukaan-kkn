import handLogo from '/HIHI.png'
import lp3iLogo from '/lp3i.png'
import ugmLogo from '/ugm.png'
import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <div>
        <p className='font-bold mb-10 text-[25px] text-center'><span className='text-[#00426D]'>OPENING KKN TEMATIK 2024</span><br></br><span className='text-[#00426D]'>POLITEKNIK LP3I KAMPUS TASIKMALAYA</span></p>
        <a href="/public/kkn24.mp4" className='flex items-center justify-center'>
          <img src={handLogo} alt=""/>
        </a>
        <div className='flex gap-5 mt-10 items-center justify-center'>
          <div className='w-56'><img src={lp3iLogo} alt=""/></div>
          <div className='w-48'><img src={ugmLogo} alt=""/></div>
        </div>
      </div>
    </>
  )
}

export default App
