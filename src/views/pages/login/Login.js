import React,{ useState} from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CAlert
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from 'axios';

const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState(false)
  const [errormessage,setErrorMessage] = useState("")
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  function handleChangeEmail(e) {
    setEmail(e.target.value)

} function handleChangePassword(e) {
    setPassword(e.target.value)

}
function login(props){
  setErrorMessage("")
  setError(false)
  if(email==""||password==""){
    setErrorMessage("Please enter all the fields.")
    setError(true)
    return;
  }
  else if(!validateEmail(email)){
    setErrorMessage("Please enter a valid email address.")
    setError(true)
    return;
  }
  else if(password.length<6){
    setErrorMessage("Password should contain atleast 6 characters.")
    setError(true)
    return;
  }
  else {
  const formData = new FormData()
  formData.append('email_address',email)
 
  axios.post("https://yourbuca.com/api/login/login-user",formData, {
  
  }).then(res => {
    if(res.data.users.length=="0"){
      setErrorMessage("You're email is not registered with us.")
      setError(true)
    }
    else if(res.data.message=="User retrieved successfully!"){
      {res.data.users.map((item, i) =>{
        if(item.password==password){
          localStorage.setItem('login', true);
if(item.role=="superadmin"){
  localStorage.setItem('screen', "superadmin");
   window.location.href = "http://admin.yourbuca.com/";  

}
else if(item.role=="designer"){
  localStorage.setItem('screen',"designer")
window.location.href = "http://admin.yourbuca.com/";  

}
                  
        }
        else{
          setErrorMessage("Please check the password you entered.")
          setError(true)
        }
      } )}
    }
     
  
    else{
      setErrorMessage(res.data.message)
      setError(true)
    }
  })
  .catch(error => {
    setErrorMessage(error.message)
      setError(true)
  })
  
}
}

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
        
      <CContainer>
     
        <CRow className="justify-content-center">
          
          <CCol md="8">
          <CAlert
                color="danger"
                show={error}
              >
               {errormessage}
              </CAlert>
            <CCardGroup>
              
              <CCard className="p-4">
                
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-envelope-closed" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Email Address" autoComplete="email" onChange={handleChangeEmail}/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Password" autoComplete="current-password" onChange={handleChangePassword} />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4" onClick={()=>login()}>Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Please contact the Super-Admin if you don't have the login credentails for the admin/designer panel of YourBuca S.L.</p>
                    
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
