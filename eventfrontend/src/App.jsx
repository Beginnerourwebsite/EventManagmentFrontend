
import Navbar from './Controler/Common/Navbar';
import PageHeader from './Controler/Common/PageHeader';
import useTemplateScripts from './Controler/Healper/Script';
import AddCoustmor from './Views/Customer/Addcustomer/AddCoustmor';

import Home from './Views/DashBoard/Root';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  useTemplateScripts()
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container mx-auto px-2 min-h-[calc(100vh-138px)]  relative pb-14 ">

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Addcustomer' element={<AddCoustmor />} />
          </Routes>

          <div className="absolute bottom-0 left-2 right-2 block print:hidden">
            <div className="container mx-auto">

              <footer className="footer mt-4 rounded-tr-md rounded-tl-md bg-white dark:bg-slate-800 p-4 text-center font-medium text-slate-600 dark:text-slate-400 shadow md:text-left">
                ©
                OurWebsite
                <span className="float-right hidden text-slate-600 dark:text-slate-400 md:inline-block">Crafted with <i className="ti ti-heart text-red-500" />RadheDas (Pankaj)</span>
              </footer>

            </div>
          </div></div>
      </BrowserRouter>
    </>

  )
}

export default App
