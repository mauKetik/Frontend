import { Sidebar } from "../components/SideBar"
import React, { useEffect, useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import "./Profile.css"
import axios from "axios";


export const Profile = () => {
    const [user,setUser] = useState({})

    useEffect(() =>{
        getUserProfile()
    }, [])
    async function getUserProfile(){
        try {
            const {data} = await axios({
                method : "get",
                url : "http://localhost:3000/my-profile",
                headers : {
                    "Authorization" : "Bearer " + localStorage.access_token
                }
            })
            setUser(data)
            console.log(data, "<<<<<");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>   
       < Sidebar >
       <div class="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
        {/* <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Profile Tab</h3>
        <p class="mb-2">This is some placeholder content the Profile tab's associated content, clicking another tab will toggle the visibility of this one for the next.</p>
        <p>The tab JavaScript swaps classes to control the content visibility and styling.</p>  */}
        <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
   
   <MDBContainer className="py-5 h-100">
     <MDBRow className="justify-content-center align-items-center h-100">
       <MDBCol lg="6" className="mb-4 mb-lg-0">
         <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
           <MDBRow className="g-0">
             <MDBCol md="4" className="gradient-custom text-center text-white"
               style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
               <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                 alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                 
                 
               <MDBTypography tag="h5">{user.username}</MDBTypography>
               <MDBIcon far icon="edit mb-5" />
             </MDBCol>
             <MDBCol md="8">
               <MDBCardBody className="p-4">
                 <MDBTypography tag="h6">Information</MDBTypography>
                 <hr className="mt-0 mb-4" />
                 <MDBRow className="pt-1">
                   <MDBCol size="6" className="mb-3">
                     <MDBTypography tag="h6">Email</MDBTypography>
                     <MDBCardText className="text-muted">{user.email}</MDBCardText>
                   </MDBCol>
                   <MDBCol size="6" className="mb-3">
                     <MDBTypography tag="h6">Total Game</MDBTypography>
                     <MDBCardText className="text-muted">{user.totalGame}</MDBCardText>
                   </MDBCol>
                   <MDBCol size="6" className="mb-3">
                     <MDBTypography tag="h6">Win</MDBTypography>
                     <MDBCardText className="text-muted">{user.win}</MDBCardText>
                   </MDBCol>
                 </MDBRow>
                 

                 <div className="d-flex justify-content-start">
                   <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                   <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                   <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                 </div>
               </MDBCardBody>
               
             </MDBCol>
             
           </MDBRow>
         </MDBCard>
       </MDBCol>
     </MDBRow>
   </MDBContainer>
 
 </section> 
    </div>
    

   
    </Sidebar>
        </>
    )
}