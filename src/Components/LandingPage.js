import { React } from "react";
import { useNavigate } from "react-router-dom";

function LandingPage(){
  const navigate = useNavigate();
  const landingPage = "./pexels-ylanite-koppens-796605.jpg";
  
  function handleLogIn(){
    navigate("/login");
  }

  function handleSignUp(){
    navigate("/signup");
  }


  return(
    <div className="landingPage">
      <span>
          <img src={landingPage} alt="colorful ribbon on beige background" />
      </span>
      <span>
        <div>
          <h1>Sherehe</h1>
          <p>Creating unforgettable experiences one event at a time.</p>
          <button onClick={handleLogIn}>Log in</button>
          <br />
          <button onClick={handleSignUp}>Sign up</button>
        </div> 
      </span>      
    </div>
  );
}

export default LandingPage;