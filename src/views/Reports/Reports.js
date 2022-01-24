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
  CNavItem,
  CTabContent,
  CTabPane,
  CTabs,
  CNav,
  CNavLink


  } from '@coreui/react'
  import { DocsLink } from 'src/reusable'
  import usersData from '../users/UsersData'
  import axios from 'axios';
const url = 'https://yourbuca.com/api/login'
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'

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
const fields_data = ['name','type','unit','details']
const stock_inward = ['Product','Unit','Vendor','Opening Stock','Total Inward','Closing Stock']
const stock_outward = ['Product','Unit','Vendor','Total Outward']
const stock_consumption = ['Product','Vendor','Type','Opening Stock','Total Inward','Total Outward','Closing Stock','Consumption','Avg. Consumption per Day','Price per Unit','Tax','Price including Tax','Total Consumption in INR','Total Inhand stock','Total Outward Cost']
const vendorwise_stocks = ['Vendor','Type','Details','Billed Amount','Billed Percentage','Consumption Amount','Percentage']
const total_cost_sheet = ['Total Cost Percentage','Vendor Payment','Cost Percentage']
function Reports() {
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
              Manage Reports
            </CCardHeader>
            <CCardBody>
             <CCol  className="mb-4">
        <CCard>
          <CCardBody>
            <CTabs activeTab="home">
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink data-tab="stock_inward">
                    Stock Inward
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink data-tab="stock_outward">
                    Stock Outward
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink data-tab="stock_consumption">
                    Stock Consumption
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink data-tab="vendorwise_stocks">
                    Vendorwise Stocks
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink data-tab="total_cost_sheet">
                    Total Cost Sheet
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane data-tab="stock_inward">
          <CCard>
            <CCardBody>
            <CDataTable
              items={users}
              fields={stock_inward}
              striped
              itemsPerPage={5}
              pagination
            />
            </CCardBody>
          </CCard>
                </CTabPane>
                <CTabPane data-tab="stock_outward">
                  <CCard>
            <CCardBody>
            <CDataTable
              items={users}
              fields={stock_outward}
              striped
              itemsPerPage={5}
              pagination
            />
            </CCardBody>
          </CCard>
                </CTabPane>
                <CTabPane data-tab="stock_consumption">
                  <CCard>
            <CCardBody>
            <CDataTable
              items={users}
              fields={stock_consumption}
              striped
              itemsPerPage={5}
              pagination
            />
            </CCardBody>
          </CCard>
                </CTabPane>
                <CTabPane data-tab="vendorwise_stocks">
                  <CCard>
            <CCardBody>
            <CDataTable
              items={users}
              fields={vendorwise_stocks}
              striped
              itemsPerPage={5}
              pagination
            />
            </CCardBody>
          </CCard>
                </CTabPane>
                <CTabPane data-tab="total_cost_sheet">
                  <CCard>
            <CCardBody>
            <CDataTable
              items={users}
              fields={total_cost_sheet}
              striped
              itemsPerPage={5}
              pagination
            />
            </CCardBody>
          </CCard>
                </CTabPane>
              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
            
            </CCardBody>
          </CCard>
        </>
    )
}

export default Reports
