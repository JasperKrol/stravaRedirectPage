import React from "react";

function Home (){
    const redirectUrl = "http://localhost:3001/redirect"

    // Helaas was het niet mogelijk om de link te pushen via history push en ook niet met een Link component. Docent en ik hebben er naar gekeken en gezien de tijd kregen we het niet voor elkaar.
    const handleLogin = () => {
        window.location = `https://www.strava.com/oauth/authorize?client_id=64170&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=read_all,activity:read_all`;
    };

    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleLogin}>Connect with Strava</button>
        </div>
    );
}

export default Home;