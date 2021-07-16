import {useEffect, useState} from "react";
import axios from "axios";
import {useLocation} from "react-router-dom"


function YourDistance (){

    const location = useLocation()

    function cleanUpAuthToken (str)  {
        return str.split("&")[1].slice(5);
    }




    async function testAuthGetter (authTok) {
        try {
            const response = await axios.post(
                `https://www.strava.com/api/v3/oauth/token?client_id=64170&client_secret=3ff187481c800d50cab4c77eaf228aeffa0d7d10&code=${authTok}&grant_type=authorization_code`
            );
            console.log("response", response)
            return response.data;
        } catch (error) {
            console.log(error);
        }
    };

    // get mogen samen

    async function fetchUserProfile(accestoken) {
                try {
                    const result = await axios.get(`https://www.strava.com/api/v3/athlete?access_token=${accestoken}`)
                    console.log("is dit result", result.data)

                    //return data
                    // variable const

                } catch (e) {
                    console.error(e)

                }
            }

    async function fetchUserActivities(accestoken) {
        try {
            const result = await axios.get(`https://www.strava.com/api/v3/athlete/activities?access_token=${accestoken}&per_page=200`)
            console.log("is dit result", result.data)

        } catch (e) {
            console.error(e)

        }
    }

    useEffect(() => {

        async function fetchData() {

            try {
                // Haal eerst de accesstoken op
                // eslint-disable-next-line no-restricted-globals

                console.log("location???", location)
                const stravaAuthToken = cleanUpAuthToken(location.search)
                console.log("stravaAuthToken", stravaAuthToken)
                // setAutToken
                const responseTokens = await testAuthGetter(stravaAuthToken);
                console.log("responseTokens", responseTokens)

                //@todo hier gaat het fout met opslaan
                const accesToken = responseTokens.access_token;
                console.log("accesToken", accesToken)
                const profile = fetchUserProfile(accesToken)
                //set state met activities en profile data
                console.log("profile", profile.username)
                const activities = fetchUserActivities(accesToken)
                console.log("activities", activities)

            } catch (e) {
                console.error(e);
            }
        }
        fetchData()
    }, []);





    return (
        <div>
            <h1>StravaRedirect</h1>
        </div>
    );
};

export default YourDistance