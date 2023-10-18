import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import {AppProvider} from "./context/AppProvider";

function App(){
  return (
    <>  
        <AppProvider>
          <HashRouter>
            <Routes>
              <Route index element={<HomePage/>}/>
              <Route path="login" element={<LoginPage/>}/>
              <Route path="signup" element={<SignupPage/>}/>
            </Routes>
          </HashRouter>
        </AppProvider>
    </>
  );
}
export default App ;