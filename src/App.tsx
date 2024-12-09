import { BrowserRouter, Route, Routes } from "react-router"

import {RootLayout} from '@/app/layout'

// Pages
import {Home} from '@/app/page'
import {Donantes} from '@/app/donantes/page'
import {Campanas} from '@/app/campanas/page'
import {Donaciones} from '@/app/donaciones/page'
import {Reportes} from '@/app/reportes/page'

function App() {
  
  return (
    <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<RootLayout/>}>
            <Route index element={<Home/>} />
            <Route path="donantes" element={<Donantes/>} />
            <Route path="campanas" element={<Campanas/>} />    
            <Route path="donaciones" element={<Donaciones/>} />    
            <Route path="reportes" element={<Reportes/>} />    
          </Route>
        </Routes>
    
  </BrowserRouter>
  )
}

export default App
