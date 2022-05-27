import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { history } from "../history";
import { Link } from 'react-router-dom';


const SignOut = () => {
    
    const signOutUser = async (e) => {
        try {
            const auth = getAuth();
            await signOut(auth);
            //dispatch({ type: "ACCOUNT_TYPE", payload: -1 });
            //history.replace("/");
        } catch (error) {
            console.log("Error :(");
        }
    };

    return (
        <div className="float-right mt-2 mr-2">
            <Link to="/">
            <button
                className="btn btn-danger bg-transparent text-gray-200 p-2 rounded border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                onClick={signOutUser}
            >
                Log Out
            </button>
            </Link>
        </div>
    );
};

export default SignOut;