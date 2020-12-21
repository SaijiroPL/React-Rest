import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications'

import './App.css';
import TopPage from 'pages/TopPage';
import CourseIntroPage from 'pages/CourseIntroPage';
import EmailConfirmPage from 'pages/EmailConfirmPage';
import PaymentPage from 'pages/PaymentPage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import ForgotPage from 'pages/ForgotPage';
import AdminPage from 'pages/AdminPage';
import SearchResultPage from 'pages/SearchResultPage';
import SearchDetailPage from 'pages/SearchDetailPage';
import ResultRankPage from 'pages/ResultRankPage';
import InqueryPage from 'pages/InqueryPage';

function App() {
  return (
    <ToastProvider>
      <div className='page-container'>
        <Switch>
          <Route path="/" exact component={TopPage} />
          <Route path="/course" exact component={CourseIntroPage} />
          <Route path="/confirmemail" exact component={EmailConfirmPage} />
          <Route path="/payment" exact component={PaymentPage} />
          <Route path="/inquery" exact component={InqueryPage} />
          <Route path="/register" exact component={RegisterPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/forgot" exact component={ForgotPage} />
          <Route path="/admin" exact component={AdminPage} />
          <Route path="/search/result" exact component={SearchResultPage} />
          <Route path="/search/detail" exact component={SearchDetailPage} />
          <Route path="/search/rank" exact component={ResultRankPage} />
        </Switch>
      </div>
    </ToastProvider>
  );
}

export default App;
