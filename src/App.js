// import Main from './pages/main'
// import { Routes, Route } from "react-router-dom";
import Inbox from './pages/Inbox';
// import Today from './pages/Today';
// import Upcoming from './pages/Upcoming';
import Layout from './components/layout';


function App() {
  return (
    <div className='App bg-sky-100 h-screen p-3'>
      <Layout><Inbox></Inbox></Layout>
      {/* <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Main />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/today" element={<Today /> } />
          <Route path="/upcoming" element={<Upcoming />} />
        </Route>
      </Routes> */}

    </div>
  );
}

export default App;