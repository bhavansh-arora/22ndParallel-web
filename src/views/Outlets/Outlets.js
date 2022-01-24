import React,{useEffect,useState} from 'react'
import {
    CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CForm,
  CFormGroup,
  CFormText,
  CLabel,
  CInput,
  CSelect,
  CButton,
  CAlert


  } from '@coreui/react'
  import { DocsLink } from 'src/reusable'
  import usersData from '../users/UsersData'
  import axios from 'axios';
const url = 'https://yourbuca.com/api/login'
  const getBadge = status => {
    switch (status) {
      case 'completed': return 'success'
      case 'Inactive': return 'secondary'
      case 'Pending': return 'warning'
      case 'Banned': return 'danger'
      default: return 'primary'
    }
  }
  const fields = ['Name','Location','O', 'status', 'amount']
const fields_data = ['name','location','manager name','user 1 name','user 2 name']
function Outlets() {
    const [users,setUsers] = useState([])
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState(false)
    const [errormessage,setErrorMessage] = useState("")
    const [success,setSuccess] = useState(false)
    const [successMessage, setSuccessMessage] = useState("")
    useEffect(() => {
        axios.get(url)
        .then(function (response) {
          console.log(response)
            setUsers(response.data.users);
          })

      },[success]);
      function handleChangeName(e) {
        setName(e.target.value)

    } function handleChangeEmail(e) {
        setEmail(e.target.value)

    } function handleChangePassword(e) {
        setPassword(e.target.value)

    }
    function validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
    function addUser(){
      setErrorMessage("")
      setSuccessMessage("")
      setError(false)
      setSuccess(false)
      if(name==""||email==""||password==""){
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
    else{
      setSuccess(false)
      setSuccessMessage("")
const formData = new FormData()
formData.append('name',name)
formData.append('email_address',email)
formData.append('password',password)
axios.post("https://yourbuca.com/api/login/add-user",formData, {

}).then(res => {
  if(res.data.message=="User registered successfully!"){
    setSuccessMessage("User has been successfully registered!")
   setSuccess(true)
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
    function delete_user(e) {
      setSuccess(false)

      const formData = new FormData()
      formData.append('email_address',e)
      axios.post("https://yourbuca.com/api/login/delete-user",formData, {

}).then(res => {
  if(res.data.message=="Field updated successfully!"){
    setSuccessMessage("User has been successfully delted.")
   setSuccess(true)
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
    
    return (
        <>
            
          <CCard>
            <CCardHeader>
              Manage Outlets
            </CCardHeader>
            <CAlert
                color="danger"
                show={error}
              >
               {errormessage}
              </CAlert>
              <CAlert
                color="success"
                show={success}
              >
               {successMessage}
              </CAlert>
            <CCardBody>
                
            <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="name" id="email-input" name="email-input" placeholder="Enter Name" autoComplete="name" onChange={handleChangeName}/>
                    <CFormText className="help-block">Please enter outlet's name</CFormText>
                  </CCol>
                </CFormGroup>
            <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">Location</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="name" id="email-input" name="email-input" placeholder="Enter Location" autoComplete="name" onChange={handleChangeName}/>
                    <CFormText className="help-block">Please enter outlet's location</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">Manager Id</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="name" id="email-input" name="email-input" placeholder="Enter Manager's Id" autoComplete="name" onChange={handleChangeName}/>
                    <CFormText className="help-block">Please enter manager's id</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">User 1 Id</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="name" id="email-input" name="email-input" placeholder="Enter User 1 Id" autoComplete="name" onChange={handleChangeName}/>
                    <CFormText className="help-block">Please enter user 1 id</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">User 2 Id</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="name" id="email-input" name="email-input" placeholder="Enter User 2 Id" autoComplete="name" onChange={handleChangeName}/>
                    <CFormText className="help-block">Please enter user 2 id</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    
                  </CCol>
                  <CCol xs="12" md="9">
                    <CButton style={{marginTop:20,width:100}} block variant="outline" color="success" onClick={()=>addUser()}>Add</CButton>

                  </CCol>

                </CFormGroup>

                </CCardBody>

            <CCardBody>
            <CDataTable
              items={users}
              fields={fields_data}
              bordered
              itemsPerPage={4}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                  'Delete Admin' :
                  (item)=>(
                    <td>
                   <CButton block variant="outline" color="danger" onClick={() =>delete_user(item.email)}>Remove Access</CButton>

                    </td>
                  )

              }}
            />
            </CCardBody>
          </CCard>
        </>
    )
}

export default Outlets
