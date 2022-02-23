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
  CAlert,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,


  } from '@coreui/react'
  import { DocsLink } from 'src/reusable'
  import usersData from '../users/UsersData'
  import axios from 'axios';
const url = 'https://www.wissensquelle.com/testing/gvjygtyjftyftfuyfuuufufuy/22ndparallel/22ndParallel/public/api/get-admins'
  const getBadge = status => {
    switch (status) {
      case 'completed': return 'success'
      case 'Inactive': return 'secondary'
      case 'Pending': return 'warning'
      case 'Banned': return 'danger'
      default: return 'primary'
    }
  }
  const fields = ['Name','E-mail','Organisation Name', 'status', 'amount']
const fields_data = ['name','email','Change Password','Delete Admin']
function ManageAdmins() {
    const [delete_modal, setDeleteModal] = useState(false)
    const [password_modal, setPasswordModal] = useState(false)
    const [admins,setAdmins] = useState([])
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confpass,setConfPass] = useState("")
    const [pass_modal,setPassModal] = useState("")
    const [confpass_modal,setConfPassModal] = useState("")
    const [error,setError] = useState(false)
    const [errormessage,setErrorMessage] = useState("")
    const [success,setSuccess] = useState(false)
    const [successMessage, setSuccessMessage] = useState("")
    const [errorModal,setErrorModal] = useState(false)
    const [errormessageModal,setErrorMessageModal] = useState("")
    const [id,setId] = useState()
    useEffect(() => {
        axios.get(url)
        .then(function (response) {
     //     console.log(response)
            setAdmins(response.data.data);
          })

      },[success]);
      function handleChangeName(e) {
        setName(e.target.value)

    } function handleChangeEmail(e) {
        setEmail(e.target.value)

    } function handleChangePassword(e) {
        setPassword(e.target.value)

    }
    function handleChangeConfPass(e) {
      setConfPass(e.target.value)

  }
  function handleChangePasswordModal(e) {
    setPassModal(e.target.value)

}
function handleChangeConfPassModal(e) {
  setConfPassModal(e.target.value)

}
    function validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
    function addAdmin(){
      setErrorMessage("")
      setSuccessMessage("")
      setError(false)
      setSuccess(false)
      if(name==""||email==""||password==""||confpass==""){
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
    else if(password!==confpass){
      setErrorMessage("Password and confirm password don't match.")
      setError(true)
      return;
    }
    else{
      setSuccess(false)
      setSuccessMessage("")
      setError(false)
      setErrorMessage("")
const formData = new FormData()
formData.append('name',name)
formData.append('email',email)
formData.append('password',password)
axios.post("https://www.wissensquelle.com/testing/gvjygtyjftyftfuyfuuufufuy/22ndparallel/22ndParallel/public/api/create-admin",formData, {

}).then(res => {
  if(res.data.status==1){
    setSuccessMessage("Admin has been successfully registered!")
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
    function delete_admin(e) {
      setDeleteModal(false)
      setSuccess(false)
      setError(false)
      axios.delete("https://www.wissensquelle.com/testing/gvjygtyjftyftfuyfuuufufuy/22ndparallel/22ndParallel/public/api/"+e, {

}).then(res => {
  if(res.data.status==1){
    setSuccessMessage("Admin has been successfully deleted.")
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
    function change_admin_password(e) {
      if(pass_modal.length<6){
        setErrorMessageModal("Password should contain atleast 6 characters.")
        setErrorModal(true)
        return;
      }
      else if(pass_modal!==confpass_modal){
        setErrorMessageModal("Password and confirm password don't match.")
        setErrorModal(true)
        return;
      }
      else {
        setErrorModal(false)
        const param = { password: pass_modal };
        axios.put("https://www.wissensquelle.com/testing/gvjygtyjftyftfuyfuuufufuy/22ndparallel/22ndParallel/public/api/update-admin-password/"+e,param ,{
  
  }).then(res => {
    if(res.data.status==1){
      setSuccessMessage("Admin's password has been successfully updated.")
      setPasswordModal(false)
     setSuccess(true)
    }
    else{
      setErrorMessageModal(res.data.message)
      setErrorModal(true)
    }
  })
  .catch(error => {
    setErrorMessageModal(error.message)
      setErrorModal(true)
  })
  
      }
      
    }
    return (
        <>
            
          <CCard>
          <CModal 
              show={delete_modal} 
              onClose={() => setDeleteModal(!delete_modal)}
              color="danger"
            >
              <CModalHeader closeButton>
                <CModalTitle>Remove Access</CModalTitle>
              </CModalHeader>
              <CModalBody>
                Are you sure you want to remove the admin access of the user?
                The user will no longer be able to login to the admin panel.
              </CModalBody>
              <CModalFooter>
                <CButton color="danger" onClick={() => delete_admin(id)}>Remove Access</CButton>{' '}
                <CButton color="secondary" onClick={() => setDeleteModal(false)}>Cancel</CButton>
              </CModalFooter>
            </CModal>
            <CModal 
              show={password_modal} 
              onClose={() => setPasswordModal(!password_modal)}
              color="warning"
            >
              <CModalHeader closeButton>
                <CModalTitle>Change Password</CModalTitle>
              </CModalHeader>
              <CModalBody>
              <CAlert
                color="danger"
                show={errorModal}
              >
               {errormessageModal}
              </CAlert>
              <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">Password</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="password" id="pasword-input" name="password-input" placeholder="Enter Password" autoComplete="password" onChange={handleChangePasswordModal}/>
                    <CFormText className="help-block">Please enter admin's password</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">Confirm Password</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="password" id="confirm-password" name="confirm-password-input" placeholder="Enter Confirm Password" autoComplete="password" onChange={handleChangeConfPassModal}/>
                    <CFormText className="help-block">Please enter admin's password again</CFormText>
                  </CCol>
                </CFormGroup>
              </CModalBody>
              <CModalFooter>
                <CButton color="warning" onClick={() => change_admin_password(id)}>Change Password</CButton>{' '}
                <CButton color="secondary" onClick={() => setPasswordModal(false)}>Cancel</CButton>
              </CModalFooter>
            </CModal>
            <CCardHeader>
              Manage Admins
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
                    <CInput type="name" id="name-input" name="name-input" placeholder="Enter Name" autoComplete="name" onChange={handleChangeName}/>
                    <CFormText className="help-block">Please enter admin's name</CFormText>
                  </CCol>
                </CFormGroup>
            <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">Email Address</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email" onChange={handleChangeEmail}/>
                    <CFormText className="help-block">Please enter admin's email</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">Password</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="password" id="pasword-input" name="password-input" placeholder="Enter Password" autoComplete="password" onChange={handleChangePassword}/>
                    <CFormText className="help-block">Please enter admin's password</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">Confirm Password</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="password" id="confirm-password" name="confirm-password-input" placeholder="Enter Confirm Password" autoComplete="password" onChange={handleChangeConfPass}/>
                    <CFormText className="help-block">Please enter admin's password again</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    
                  </CCol>
                  <CCol xs="12" md="9">
                    <CButton style={{marginTop:20,width:100}} block variant="outline" color="success" onClick={()=>addAdmin()}>Add</CButton>

                  </CCol>

                </CFormGroup>

                </CCardBody>

            <CCardBody>
            <CDataTable
              items={admins}
              fields={fields_data}
              bordered
              itemsPerPage={4}
              pagination
              scopedSlots = {{
                  'Delete Admin' :
                  (item)=>(                    
                    (item.email==="incredible.aj@gmail.com"||item.email==="ajith@22ndparallel.com")?
                    <td></td>
                    :
                    <td>
                    <CButton block variant="outline" color="danger" onClick={() =>{setId(item.id) 
                      setDeleteModal(true)}}>Remove Access</CButton>

                    </td>

                  ),
                  'Change Password' :
                  (item)=>(
                    <td>
                    <CButton block variant="outline" color="info" onClick={() =>{setId(item.id) 
                      setPasswordModal(true)
                      setErrorModal(false)
                    }}>Change Password</CButton>
                    </td>
                  )
              }}
            />
            </CCardBody>
          </CCard>
        </>
    )
}

export default ManageAdmins
