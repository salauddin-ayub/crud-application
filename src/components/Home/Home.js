import React from 'react';
import cricket from '../../images/cricket.png';
import './Home.css';

const Home = () => {
    return (
      <div class="container">
          <div class="row">
              <div class="col-sm-6">
                  <h1>Cricketer List</h1>
                  <p class="big-text">Crud Application to show Cricketer list with information</p>
                  <p>This is a simple CRUD Application.Where user can add a player with Information and see player details in player list.User can also update and delete player from the list.</p>
              </div>
              <div class="col-sm-6">
              <img class="img-responsive" style={{ width: '450px' }} src={cricket} alt="" />
             </div>
          </div>
          <hr />
          <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} CRUD APPLICATION | All right reserved | Term of service | Privacy
                    </p>
                </div>
      </div>
    );
};

export default Home;