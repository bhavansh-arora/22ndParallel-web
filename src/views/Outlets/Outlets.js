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
  import {arraySearch} from './search'

const url = 'https://www.wissensquelle.com/testing/gvjygtyjftyftfuyfuuufufuy/22ndparallel/22ndParallel/public/api/get-outlets/'
const fields_data = ['name','location','manager','user_1','user_2','Manage People','View Reports','Delete Outlet']
function Outlets() {
    const [outlet,setOutlets] = useState([])
    const [name,setName] = useState("")
    const [location,setLocation] = useState("")
   // const [managerid,setManagerId] = useState("")
  //  const [user1id,setUser1id] = useState("")
  // const [user2id,setUser2id] = useState("")
  //  const [managerName,setManagerName] = useState("")
 //   const [user1Name,setUser1Name] = useState("")
 //   const [user2Name,setUser2Name] = useState("")
    const [error,setError] = useState(false)
    const [errormessage,setErrorMessage] = useState("")
    const [success,setSuccess] = useState(false)
    const [successMessage, setSuccessMessage] = useState("")
    const [errorModal,setErrorModal] = useState(false)
    const [errormessageModal,setErrorMessageModal] = useState("")
    const [delete_modal, setDeleteModal] = useState(false)
    const [modal, setModal] = useState(false)
    const [id,setId] = useState()
    const [userQueryData,setUserQueryData] = useState([])
    const [managerQueryData,setManagerQueryData] = useState([])
    const [managers,setManagers] = useState([])
    const [users,setUsers] = useState([])
    const [manageremail,setManagerEmail] = useState("")
    const [user1email,setUser1Email] = useState("")
    const [user2email,setUser2Email] = useState("")
    const [manager_val,setManagerVal] = useState(false)
    const [user1_val,setUser1Val] = useState(false)
    const [user2_val,setUser2Val] = useState(false)

var user1id = "",user1name = "",user2id = "",user2name = "", managerid = "", managername=""
    useEffect(() => {
        axios.get(url)
        .then(function (response) {
     //     console.log(response)
            setOutlets(response.data.data);
          },[success])

      },[success]);
      useEffect(() => {
        axios.get( 'https://www.wissensquelle.com/testing/gvjygtyjftyftfuyfuuufufuy/22ndparallel/22ndParallel/public/api/get-users')
        .then(function (response) {
            setUsers(response.data.data);
          })
        },[])

      useEffect(() => {
        axios.get('https://www.wissensquelle.com/testing/gvjygtyjftyftfuyfuuufufuy/22ndparallel/22ndParallel/public/api/get-managers')
        .then(function (response) {
            setManagers(response.data.data);
          })
        },[])
      
      function handleChangeName(e) {
        setName(e.target.value)

    } function handleChangeLocation(e) {
        setLocation(e.target.value)

    } 
    const handleChangeUser1Query = async (e) => {
      let value = e.target.value;
      setUser1Email(value.trim())
    /*  if (value.length >= 2) {
        let search = await arraySearch(users, value);
        setUserQueryData(search)
      } else {
        setUserQueryData(users)
      } */
    }
    const handleChangeUser2Query = async (e) => {
      let value = e.target.value;
      setUser2Email(value.trim())
    /*  if (value.length >= 2) {
        let search = await arraySearch(users, value);
        setUserQueryData(search)
      } else {
        setUserQueryData(users)
      } */
    }
    const handleChangeManagerQuery = async (e) => {
      let value = e.target.value;
      setManagerEmail(value.trim())
      /* if (value.length >= 2) {
        let search = await arraySearch(managers, value);
        setManagerQueryData(search)
      } else {
        setManagerQueryData(managers)
      } */
    }
    function managerExists(email) {
      return managers.some(function(el) {
        if(el.email === email) {
         // setManagerName(el.name)
         // setManagerId(el.id)
         managerid = el.id
         managername = el.name

          return true;
        } else {
         // setManagerName("")
         // setManagerId("")
         managerid = ""
         managername = ""
          return false;
        }
      }); 
    }
    function user1Exists(email) {
      return users.some(function(el) {
        if(el.email === email) {
        //  setUser1Name(el.name)
        //  setUser1id(el.id)
        user1id = el.id;
        user1name = el.name
    return true;
        } else {
          user1id = ""
        user1name = ""
        //  setUser1Name("")
        //  setUser1id("")
          return false
        }
      }); 
      
    }
    function user2Exists(email) {
      return users.some(function(el) {
        if(el.email === email) {
          user2id = el.id;
        user2name = el.name
      //    setUser2Name(el.name)
      //    setUser2id(el.id)
          return true;
        } else {
       //   setUser2Name("")
       //   setUser2id("")
       user2id = "";
        user2name = "";
          return false;
        }
      }); 
    }
    function emailCheck(e) {
return e===""
    }
function updateOutlet(e){
  var a=false,b=false ,c= false;
  setSuccess(false)
  setErrorModal(false)
  setErrorMessageModal("")
  if(manageremail==="" && user1email==="" && user2email==="") {
    setErrorMessageModal("Please enter atleast 1 field to update outlet.")
    setErrorModal(true)
  } else {
    var formData = new FormData()
    formData.append('id',e)
    if(managerExists(manageremail)){
      formData.append('manager',managername)
      formData.append('manager_id',managerid)
      a = true;
     // setManagerVal(true)
    } else if(emailCheck(manageremail)) {
      a = true;
    //  setManagerVal(true)
    } else {
    setErrorMessageModal("Please enter a valid email of the manager.")
    setErrorModal(true)
    a = false;
  //  setManagerVal(false)
    }
if(user1Exists(user1email)){
formData.append('user_1',user1name)
formData.append('user_1_id',user1id)
// setUser1Val(true)
b= true;
}
else if(emailCheck(user1email)) {
b=true
} else {
setErrorMessageModal("Please enter a valid email of the user 1.")
setErrorModal(true)
//setUser1Val(false)
b = false;
}
if(user2Exists(user2email)){
  formData.append('user_2',user2name)
  formData.append('user_2_id',user2id)
  // setUser1Val(true)
  c= true;
  }
  else if(emailCheck(user2email)) {
  c=true
  } else {
  setErrorMessageModal("Please enter a valid email of the user 1.")
  setErrorModal(true)
  //setUser1Val(false)
  c = false;
  }
if(a && b && c ) {
axios.post("https://www.wissensquelle.com/testing/gvjygtyjftyftfuyfuuufufuy/22ndparallel/22ndParallel/public/api/update-outlet",formData, {
}).then(res => {
if(res.data.status===1){
setSuccessMessage("Outlet has been successfully updated!")
setSuccess(true)
setModal(false)
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
}







function updateOutlet2(e) {
  setErrorModal(false)
  setErrorMessageModal("")
  setManagerVal(false)
      setUser1Val(false)
      setUser2Val(false)
       if(manageremail==="" && user1email==="" && user2email==="") {
        setErrorMessageModal("Please enter atleast 1 field to update outlet.")
        setErrorModal(true)
        setManagerVal(false)
      setUser1Val(false)
      setUser2Val(false)
      } else {
      var formData = new FormData()
        formData.append('id',e)
        alert(user1Exists(user1email))
        if(managerExists(manageremail)){
       //   formData.append('manager',managerName)
          formData.append('manager_id',managerid)
          setManagerVal(true)
        } else if(manageremail==="") {
          setManagerVal(true)
        } else {
        setErrorMessageModal("Please enter a valid email of the manager.")
        setErrorModal(true)
        setManagerVal(false)
        }
if(user1Exists(user1email)){
  formData.append('user_1',user1name)
  formData.append('user_1_id',user1id)
  setUser1Val(true)
}
else if(user1email==="") {
  setUser1Val(true)
} else {
setErrorMessageModal("Please enter a valid email of the user 1.")
setErrorModal(true)
setUser1Val(false)
}
if(user2Exists(user2email)){
 // formData.append('user_2',user2Name)
  formData.append('user_2_id',user2id)
  setUser2Val(true)
}
else if(user2email==="") {
  setUser2Val(true)
} else {
setErrorMessageModal("Please enter a valid email of the user 2.")
setErrorModal(true)
setUser2Val(false)
}
console.log(formData)
alert("manager  "+manager_val)
alert("user 1 "+ user1_val)
alert("user 2 "+ user2_val)

if(manager_val && user1_val && user2_val) {
  alert("sending")

axios.post("https://www.wissensquelle.com/testing/gvjygtyjftyftfuyfuuufufuy/22ndparallel/22ndParallel/public/api/update-outlet",formData, {
}).then(res => {
if(res.data.status===1){
setSuccessMessage("Outlet has been successfully updated!")
setSuccess(true)
setModal(false)
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
}
    function updateOutlet1(e) {
      setManagerVal(false)
      setUser1Val(false)
      setUser2Val(false)
      setErrorModal(false)
      setErrorMessageModal("")
      managers.filter(function(e) { 
        if (managers.filter(function(e) { return e.email === manageremail; }).length > 0) {
          if(managers.filter(function(e) { if(e.email === manageremail){
       //     setManagerName(e.name)
       //     setManagerId(e.id)
            setManagerVal(true)
            setErrorModal(false)
            setErrorMessageModal("")
          }})){
            
          }
          
      } else if(manageremail===""){
        setManagerVal(false)
      }
      else {
        setErrorMessageModal("Please enter a valid email of the manager.")
        setErrorModal(true)
      } })
      
      users.filter(function(e) { 
        if (users.filter(function(e) { return e.email === user1email; }).length > 0) {
          if(users.filter(function(e) { if(e.email === user1email){
            alert(e.email)
      //      setUser1Name(e.name)
      //      setUser1id(e.id)
            setUser1Val(true)
            setErrorModal(false)
            setErrorMessageModal("")
          }})) {  
          }
      } else if(user1email===""){
        setUser1Val(false)
      }
       else {
        setErrorMessageModal("Please enter a valid email of the user 1.")
        setErrorModal(true)
      } })
      
      users.filter(function(e) { 
        if (users.filter(function(e) { return e.email === user2email; }).length > 0) {
          if(users.filter(function(e) { if(e.email === user2email) { 
        //    setUser2Name(e.name)
        //    setUser2id(e.id)
            setUser2Val(true)
            setErrorModal(false)
            setErrorMessageModal("")
           } })){}
      } else if(user2email===""){
        setUser2Val(false)
      } else {
        setErrorMessageModal("Please enter a valid email of the user 2.")
        setErrorModal(true)
      } })
      
      if((user1_val||user2_val||manager_val)&&errorModal===false) {
        const formData = new FormData()
        formData.append('id',e)
        if(manager_val){
         // formData.append('manager',managerName)
          formData.append('manager_id',managerid)
        }
        if(user1_val) {
        //  formData.append('user_1',user1Name)
          formData.append('user_1_id',user1id)
        }
        if(user2_val) {
        //  formData.append('user_2',user2Name)
          formData.append('user_2_id',user2id)
        }
        alert("manager_val"+manager_val+"user1_val"+user1_val+"user2_val"+user2_val)
  axios.post("https://www.wissensquelle.com/testing/gvjygtyjftyftfuyfuuufufuy/22ndparallel/22ndParallel/public/api/update-outlet",formData, {
  }).then(res => {
    if(res.data.status===1){
      setSuccessMessage("Outlet has been successfully updated!")
     setSuccess(true)
     setModal(false)
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
      } else if(manageremail==="" && user1email==="" && user2email==="") {
        setErrorMessageModal("Please enter atleast 1 field to update outlet.")
        setErrorModal(true)
      }
      
      
      
    }
    function addOutlet(){
      setErrorMessage("")
      setSuccessMessage("")
      setError(false)
      setSuccess(false)
      if(name==""||location==""){
        setErrorMessage("Please enter all the fields.")
        setError(true)
        return;
      }
    else{
      setSuccess(false)
      setSuccessMessage("")
const formData = new FormData()
formData.append('name',name)
formData.append('location',location)
axios.post("https://www.wissensquelle.com/testing/gvjygtyjftyftfuyfuuufufuy/22ndparallel/22ndParallel/public/api/add-outlet",formData, {

}).then(res => {
  if(res.data.status===1){
    setSuccessMessage("Outlet has been successfully registered!")
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
    console.log(error)
})

    }
  }
  function delete_outlet(e) {
    setDeleteModal(false)
    setSuccess(false)
    setError(false)
    axios.delete("https://www.wissensquelle.com/testing/gvjygtyjftyftfuyfuuufufuy/22ndparallel/22ndParallel/public/api/delete-outlet/"+e, {

}).then(res => {
if(res.data.status==1){
  setSuccessMessage("Outlet has been successfully deleted.")
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
          <CModal 
              show={delete_modal} 
              onClose={() => setDeleteModal(!delete_modal)}
              color="danger"
            >
              <CModalHeader closeButton>
                <CModalTitle>Delete Outlet</CModalTitle>
              </CModalHeader>
              <CModalBody>
                Are you sure you want to delete the outlet?
                All the data of that outlet will be permanently deleted.
              </CModalBody>
              <CModalFooter>
                <CButton color="danger" onClick={() => delete_outlet(id)}>Delete Outlet</CButton>{' '}
                <CButton color="secondary" onClick={() => setDeleteModal(false)}>Cancel</CButton>
              </CModalFooter>
            </CModal>
          <CModal 
              show={modal} 
              onClose={() => setModal(!modal)}
              color="info"
            >
              <CModalHeader closeButton>
                <CModalTitle>Manage People</CModalTitle>
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
                    <CLabel htmlFor="email-input">Manager Email</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput list="datalistOptionsManager" placeholder="Enter Manager's Email" onChange={handleChangeManagerQuery}/>
                    
                    
                    <CFormText className="help-block">Please enter manager's email</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">User 1 Email</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <CInput list="datalistOptionsUser" placeholder="Enter User 1 Email" onChange={handleChangeUser1Query}/>
                    
                    <CFormText className="help-block">Please enter user 1 email</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">User 2 Email</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput list="datalistOptionsUser" placeholder="Enter User 2 Email" onChange={handleChangeUser2Query}/>
                    
                    <CFormText className="help-block">Please enter user 2 email</CFormText>
                  </CCol>
                </CFormGroup>
              </CModalBody>
              <CModalFooter>
                <CButton color="info" onClick={() => updateOutlet(id)}>Update Outlet</CButton>{' '}
                <CButton color="secondary" onClick={() => setModal(false)}>Cancel</CButton>
              </CModalFooter>
            </CModal>
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
                    <CInput type="name" id="email-input" name="email-input" placeholder="Enter Location" autoComplete="name" onChange={handleChangeLocation}/>
                    <CFormText className="help-block">Please enter outlet's location</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    
                  </CCol>
                  <CCol xs="12" md="9">
                    <CButton style={{marginTop:20,width:100}} block variant="outline" color="success" onClick={()=>addOutlet()}>Add</CButton>

                  </CCol>

                </CFormGroup>

                </CCardBody>

            <CCardBody>
            <CDataTable
              items={outlet}
              fields={fields_data}
              bordered
              itemsPerPage={4}
              pagination
              scopedSlots = {{
                  'Delete Outlet' :
                  (item)=>(
                    <td>
                   <CButton block variant="outline" color="danger" onClick={() =>{setId(item.id) 
                      setDeleteModal(true)}}>Delete Outlet</CButton>

                    </td>
                  ),'Manage People' :
                  (item)=>(
                    <td>
                   <CButton block variant="outline" color="info" onClick={() =>{setId(item.id) 
                      setModal(true) 
                      setErrorModal(false)
                      }}>Manage People</CButton>
                    </td>
                  ), 
                  'View Reports' :
                  (item)=>(
                    <td>
                   <CButton block variant="outline" color="warning" onClick={() =>window.location.href = "/#/reports"}>View Reports</CButton>

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
