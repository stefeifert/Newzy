import React from 'react';

function toggleSidebar (){
  document.getElementById("sidebar").classList.toggle('active');
}

const HomePage = () => (
  <div>
  <div>Home</div>

        <div id = "sidebar">
        <div className="toggle-btn" onclick={toggleSidebar}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul>
            <li>Home</li>
            <li>My Profile</li>
            <li>My Saved Articles</li>
            <li>Log Out</li>
        </ul>
    </div>
    
  </div>

)

export default HomePage;