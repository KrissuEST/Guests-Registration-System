import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { HomePage } from './layouts/HomePage/HomePage';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ParticipantInfoPage } from './layouts/ParticipantInfoPage/ParticipantInfoPage';
import { AddEventPage } from './layouts/AddEventPage/AddEventPage';
import { AddParticipantToEventPage } from './layouts/AddParticipantToEventPage/AddParticipantToEventPage';


export const App = () => {   //We make it to functional component, like all others
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Navbar/>
      <br />
      <div className='flex-grow-1'>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/home'/>
          </Route>
          <Route path='/home'>
            <HomePage/>
          </Route>
          <Route path='/search'>
            <SearchBooksPage/>
          </Route>
          <Route path='/addEvent'>
            <AddEventPage/>
          </Route>
          <Route path='/addParticipantToEvent'>
            <AddParticipantToEventPage/>
          </Route>
          <Route path='/participant'>
            <ParticipantInfoPage/>
          </Route>
        </Switch>
      </div>
      <Footer/>
    </div>
  );
}