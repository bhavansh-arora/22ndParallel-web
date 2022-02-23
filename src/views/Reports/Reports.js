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
  CNavLink,
  CBreadcrumb,
  CBreadcrumbItem,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CLink,
  CBreadcrumbRouter


  } from '@coreui/react'
  import { DocsLink } from 'src/reusable'
  import usersData from '../users/UsersData'
  import axios from 'axios';
  import routes from '../../routes'
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
const stock_inward = ['Product','Unit','type','Vendor','Total Consumption in Qty','Total Consumption in INR','Average Cosnumption','Holding Value']
const stock_outward = ['Product','Unit','type','Vendor','Perecentage Cost']
const overall_report = ['Product','Vendor','Type','Opening Stock','Date of Opening Stock','Inward','Date of Inward','Closing Stock','Date of Closing Stock','Price per Unit','Total Sale for Period']
const stock_consumption = ['Food Cost','Non Food Cost','Food Percentage Cost','Non FoodPercent Cost']
const vendorwise_stocks = ['Expense Name','Value']
const total_cost_sheet = ['Total Cost Percentage','Vendor Payment','Cost Percentage']
function Reports(props) {
    const [users,setUsers] = useState([])
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState(false)
    const [errormessage,setErrorMessage] = useState("")
    const [success,setSuccess] = useState(false)
    const [successMessage, setSuccessMessage] = useState("")
    const [month,setMonth] = useState(1)
    const [export_modal, setExportModal] = useState(false)
    const [data,setData] = useState([])

    useEffect(() => {
        axios.get(url)
        .then(function (response) {
        //  console.log(response)
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
  function exportData() {
if(data.length <= 0) {
  setExportModal(true)
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
          <CModal 
              show={export_modal} 
              onClose={() => setExportModal(!export_modal)}
              color="danger"
            >
              <CModalHeader closeButton>
                <CModalTitle>Error!</CModalTitle>
              </CModalHeader>
              <CModalBody>
                There is no data found in the table.
              </CModalBody>
              <CModalFooter>
                <CButton color="secondary" onClick={() => setExportModal(false)}>Okay</CButton>
              </CModalFooter>
            </CModal>
            <CCardHeader>   
            <CBreadcrumb>
              <CBreadcrumbItem>
                <CLink href="#/outlets">Outlets</CLink>
              </CBreadcrumbItem>
              <CBreadcrumbItem active>Reports</CBreadcrumbItem>
            </CBreadcrumb>
            </CCardHeader>
            <CCardBody>
             <CCol  className="mb-4">
        <CCard>
          <CCardBody>
          <nav aria-label="...">
  <ul class="pagination">
    <li class={(month===1)?"page-item active":"page-item"}><a class="page-link" href="#/reports" onClick={() => setMonth(1)}>January</a></li>
    <li class={(month===2)?"page-item active":"page-item"}><a class="page-link" href="#/reports" onClick={() => setMonth(2)}>February</a></li>
    <li class={(month===3)?"page-item active":"page-item"}><a class="page-link" href="#/reports" onClick={() => setMonth(3)}>March</a></li>
    <li class={(month===4)?"page-item active":"page-item"}><a class="page-link" href="#/reports" onClick={() => setMonth(4)}>April</a></li>
    <li class={(month===5)?"page-item active":"page-item"}><a class="page-link" href="#/reports" onClick={() => setMonth(5)}>May</a></li>
    <li class={(month===6)?"page-item active":"page-item"}><a class="page-link" href="#/reports" onClick={() => setMonth(6)}>June</a></li>
    <li class={(month===7)?"page-item active":"page-item"}><a class="page-link" href="#/reports" onClick={() => setMonth(7)}>July</a></li>
    <li class={(month===8)?"page-item active":"page-item"}><a class="page-link" href="#/reports" onClick={() => setMonth(8)}>August</a></li>
    <li class={(month===9)?"page-item active":"page-item"}><a class="page-link" href="#/reports" onClick={() => setMonth(9)}>September</a></li>
    <li class={(month===10)?"page-item active":"page-item"}><a class="page-link" href="#/reports" onClick={() => setMonth(10)}>October</a></li>
    <li class={(month===11)?"page-item active":"page-item"}><a class="page-link" href="#/reports" onClick={() => setMonth(11)}>November</a></li>
    <li class={(month===12)?"page-item active":"page-item"}><a class="page-link" href="#/reports" onClick={() => setMonth(12)}>December</a></li>
    <div class="col-auto" >
    <button class="btn btn-outline-warning" type="button" onClick={() => exportData()}>Export</button>
    </div>

  </ul>
  
</nav>
            <CTabs activeTab="home">
              <CNav variant="tabs">
              <CNavItem>
                  <CNavLink data-tab="overall_report">
                    Overall Report
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink data-tab="stock_inward">
                    Monthly Consumption
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink data-tab="stock_outward">
                    Vendorwise Consumption
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink data-tab="stock_consumption">
                   Food/Non Food Consumption
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink data-tab="vendorwise_stocks">
                    Total Cost Percentage
                  </CNavLink>
                </CNavItem>
                
              </CNav>
              
              <CTabContent>
              
                <CTabPane data-tab="stock_inward">
                <div class="row-auto" style={{marginTop: 20, marginBottom:20}}>
            <input class="form-control" id="exampleDataList" list="datalistOptions" placeholder="Type to search..." />
<datalist id="datalistOptions">
  <option value="San Francisco"></option>
  <option value="New York"></option>
  <option value="Seattle"></option>
  <option value="Los Angeles"></option>
  <option value="Chicago"></option>
</datalist>
</div>
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
                <CTabPane data-tab="overall_report">
                <div class="row-auto" style={{marginTop: 20, marginBottom:20}}>
            <input class="form-control" id="exampleDataList" list="datalistOptions" placeholder="Type to search..." />
<datalist id="datalistOptions">
  <option value="San Francisco"></option>
  <option value="New York"></option>
  <option value="Seattle"></option>
  <option value="Los Angeles"></option>
  <option value="Chicago"></option>
</datalist>
</div>
          <CCard>
            
            <CCardBody>
            <CDataTable
              items={users}
              fields={overall_report}
              striped
              itemsPerPage={5}
              pagination
            />
            </CCardBody>
          </CCard>
                </CTabPane>
                <CTabPane data-tab="stock_outward">
                <div class="row-auto" style={{marginTop: 20, marginBottom:20}}>
            <input class="form-control" id="exampleDataList" list="datalistOptions" placeholder="Type to search..." />
<datalist id="datalistOptions">
  <option value="San Francisco"></option>
  <option value="New York"></option>
  <option value="Seattle"></option>
  <option value="Los Angeles"></option>
  <option value="Chicago"></option>
</datalist>
</div>
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
