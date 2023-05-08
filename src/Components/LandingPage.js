import { React } from "react";
import { useNavigate } from "react-router-dom";

const landingPage = "./pexels-ylanite-koppens-796605.jpg";
// const landingPage = "./landingPage.jpg";

function LandingPage(){
  const navigate = useNavigate();

  function handleLogIn(){
    navigate("/login");
  }

  function handleSignUp(){
    navigate("/signup");
  }


  return(
    <div className="landingPage">
      <span>
          <img src={landingPage} />
        {/* <h2 className="imageText">Sign up now to start organizing your events</h2> */}
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