import React from 'react';
import "./Home.css";



const Home = () => {

    const handleGithub = (event) => {
        event.preventDefault();
        const url = 'https://github.com/dhananjaychourasiya'; // Replace with your desired URL
        window.open(url, '_blank');
      };

      const handleLinkedin = (event) => {
        event.preventDefault();
        const url = 'https://www.linkedin.com/in/dhananjay-chourasiya-481289ba/'; // Replace with your desired URL
        window.open(url, '_blank');
      };


    return(
        <div className="container">
            <h1>Gmail Login</h1>
            <form>
            <div className="form-group">
                <input type="text" placeholder="Email"/>
            </div>
            <div className="form-group">
                <input type="text" placeholder="Password"/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn">Login</button>
                <h4>Forgot Password?</h4>
            </div>
            
            <div className="form-register">
                <p>Don't have Account? <br/> Sign Up or Register below</p>
                <button type="submit" className="btn">Sign Up</button>
            </div>
            <div className="form-connect">
            <p>Let's Connect</p>
            <button type="submit" className="form-connect-github" href="https://github.com/dhananjaychourasiya" onClick={handleGithub}>GitHub</button>
            <button type="submit" className="form-connect-linkedin" href="https://www.linkedin.com/in/dhananjay-chourasiya-481289ba/" onClick={handleLinkedin}>LinkedIn</button>
            </div>
            </form>
        </div>       
    )
    };    

export default Home;