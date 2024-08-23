import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Ensure this file exists in the src directory

// Import componets from Admin Director
import Admin from './admin/Admin';
import CreateUser from './admin/addUser';
import DelUser from './admin/removeUser';
import GetUser from './admin/getUser';
import UpdateUser from './admin/updateUser';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    {/* Admin Panel */}
                    <Route path="/add" element={<CreateUser/>} />
                    <Route path="/get" element={<GetUser/>} />
                    <Route path="/delete" element={<DelUser/>} />
                    <Route path="/update" element={<UpdateUser/>} />
                    {/* Default route or fallback */}
                    <Route path="/" element={<Admin />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
