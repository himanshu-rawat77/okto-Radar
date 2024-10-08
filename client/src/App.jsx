import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { OktoProvider, BuildType } from 'okto-sdk-react';
import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';
import LoginPage from './pages/LoginPage'; 

const OKTO_CLIENT_API_KEY = "45f2e500-bbaa-4dd2-becf-c91b9290b866";

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen">
      {/* <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar /> */}
        
      <OktoProvider apiKey={OKTO_CLIENT_API_KEY} buildType={BuildType.SANDBOX}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
        </OktoProvider>
      {/* </div> */}
      
     </div>
  )
}

export default App