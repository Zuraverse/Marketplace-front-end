import React from 'react';
import { BrowserRouter, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import Layout from './components/layout';
import Collection from './components/modules/home/Collection';
import ProductDetails from './components/modules/home/ProductDetails';
import Profile from './components/modules/home/Profile';
import AdminNavbar from './Admin/Compontents/Sidebar';
import Home from './components/modules/home';
import { useAccount } from 'wagmi';
import { useEffect } from 'react';
import { getContractGetterFunc } from './slices/contractGetterSlice';
import { useDispatch, useSelector } from 'react-redux';


const AppRoutes = () => {
  const { address, isConnected } = useAccount();
  const dispatch = useDispatch();
  const getterData = useSelector(state => state.getterFunc);

  useEffect(() => {
    dispatch(getContractGetterFunc(address))
  }, [dispatch])

  const { allowAdminAddress } = useSelector((state) => state.custom);

  return (
    <div className='lighTheme'>
      <BrowserRouter>
        <Routes>
          <Route exact path="/*" element={<Layout />}>
            <Route exact path="" element={<Home />} />
            <Route exact path="collection" element={<Collection />} />
            <Route exact path='profile' element={isConnected && (!allowAdminAddress.includes(address)) ? <Profile /> : <Navigate to="/" replace />} />
            <Route exact path="product-details/:id" element={<ProductDetails />} />
            <Route path="*" element={<p>There's nothing here!</p>} />
            </Route>
          <Route exact path='admin/:tab' element={isConnected && (allowAdminAddress.includes(address)) ? <AdminNavbar /> : <Navigate to="/" replace />} />
          <Route exact path='admin/:tab1/:tab2' element={isConnected && (allowAdminAddress.includes(address)) ? <AdminNavbar /> : <Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;