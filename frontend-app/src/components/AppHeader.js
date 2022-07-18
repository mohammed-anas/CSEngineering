import React from "react";
class AppHeader extends React.Component {
    render() {
      return ( 
        <nav class="navbar navbar-dark navbar-expand-lg bg-dark fixed-top"> 
          <div class="flex-container" style={{display:"flex", flexDirection:"row"}}>
            <div>
              <a href="/" class="navbar-brand"><i class="fas fa-blog"></i> &nbsp;CS Engineering</a>
            </div>
            <div>
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">DS</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Algorithms</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Design Pattern</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">System Design</a>
                </li>
              </ul>
            </div>
            <div style={{marginLeft: "750px"}}>
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">Login</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Signup</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )
    }
}

export default AppHeader;