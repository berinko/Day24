import React, {Component} from 'react';

class App extends Component {
  setMyStorage = () => {
    document.cookie="Year=2021";
    localStorage.setItem("Paragon", 'yes, but Arena first');
    sessionStorage.setItem('frontend', 'React');
  }
  getCookie = (name) => {
    
    var cookieArr = document.cookie.split(";");
    
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        
        if(name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    
    return null;
  }
  
  getMyStorage = () => {
    let myCookieData = this.getCookie("Year=2021");
    let myLocalStorageData = localStorage.getItem("Paragon", 'yes, but Arena first');
    let mySessionStorageData = sessionStorage.setItem('frontend', 'React');
  }
  
  render() {
    return(
      <div className="App">
        <button onClick={this.setMyStorage}>Dugme</button>
        <button onClick={this.getMyStorage}>Dugme1</button>
      </div>
    )
  }
}

export default App;