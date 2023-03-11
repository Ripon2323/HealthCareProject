import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user]=useAuthState(auth);
    const [admin]=useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h2 className='text-2xl font-bold text-purple-500'>Welcome To Your Dashboard</h2>
                <Outlet></Outlet>
                
               

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 w-48 bg-base-100 text-base-content">
                
                    <li><Link to='/dashboard'>My Appointments</Link></li>
                    <li><Link to='/dashboard/review'>My Review</Link></li>
                    <li><Link to='/dashboard/history'>My History</Link></li>
                    <li>{admin && <>
                        <Link to='/dashboard/users'>All Users</Link>
                        <Link to='/dashboard/addDoctor'>Add a doctor</Link>
                        <Link to='/dashboard/manageDoctor'>Manage a doctor</Link>
                    </>}</li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;