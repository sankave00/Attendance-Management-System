import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function Footer(){

    return (
        <div style={{position: "absolute",
            left:0,
            bottom:0,
            right:0}}>
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
          
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright: <a href="#"> AttdMS.com </a>
            </MDBContainer>
          </div>
        </MDBFooter>
        </div>
      );
}

export default Footer