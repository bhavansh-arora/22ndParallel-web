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
const url = 'https://www.wissensquelle.com/testing/gvjygtyjftyftfuyfuuufufuy/22ndparallel/22ndParallel/public/api/get-products'
  const getBadge = status => {
    switch (status) {
      case 'completed': return 'success'
      case 'Inactive': return 'secondary'
      case 'Pending': return 'warning'
      case 'Banned': return 'danger'
      default: return 'primary'
    }
  }
const fields_data = ['id','name','type','units','vendor' ,'details', 'Delete Product']
function Products() {
    const [delete_modal, setDeleteModal] = useState(false)
    const [products,setProducts] = useState([])
    const [name,setName] = useState("")
    const [type,setType] = useState("")
    const [units,setUnits] = useState("")
    const [vendor,setVendor] = useState("")
    const [details,setDetails] = useState("")
    const [error,setError] = useState(false)
    const [errormessage,setErrorMessage] = useState("")
    const [success,setSuccess] = useState(false)
    const [successMessage, setSuccessMessage] = useState("")
    const [delete_id,setDeleteId] = useState()

    useEffect(() => {
        axios.get(url)
        .then(function (response) {
     //     console.log(response)
            setProducts(response.data.data);
          })

      },[success]);
      function handleChangeName(e) {
        setName(e.target.value)

    } function handleChangeType(e) {
        setType(e.target.value)

    } function handleChangeUnits(e) {
        setUnits(e.target.value)

    }
    function handleChangeVendor(e) {
      setVendor(e.target.value)

  }
  function handleChangeDetails(e) {
    setDetails(e.target.value)

}
function delete_product(e) {
  setDeleteModal(false)
  setSuccess(false)
  setError(false)
  axios.delete("https://www.wissensquelle.com/testing/gvjygtyjftyftfuyfuuufufuy/22ndparallel/22ndParallel/public/api/delete-product/"+e, {

}).then(res => {
if(res.data.status===1){
setSuccessMessage("Product has been successfully deleted.")
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
    function addProduct(){
      setErrorMessage("")
      setSuccessMessage("")
      setError(false)
      setSuccess(false)
      if(name==""||type==""||units==""||type==0||units==0||vendor==""){
        setErrorMessage("Please enter all the fields.")
        setError(true)
        return;
      }
    else{
      setSuccess(false)
      setSuccessMessage("")
const formData = new FormData()
formData.append('name',name)
formData.append('type',type)
formData.append('units',units)
formData.append('details',details)
formData.append('vendor',vendor)

axios.post("https://www.wissensquelle.com/testing/gvjygtyjftyftfuyfuuufufuy/22ndparallel/22ndParallel/public/api/add-product",formData, {

}).then(res => {
  if(res.data.status==1){
    setSuccessMessage("Product has been successfully added!")
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
    
    return (
        <>
            
          <CCard>
          <CModal 
              show={delete_modal} 
              onClose={() => setDeleteModal(!delete_modal)}
              color="danger"
            >
              <CModalHeader closeButton>
                <CModalTitle>Delete Product</CModalTitle>
              </CModalHeader>
              <CModalBody>
                Are you sure you want to remove the product from the database permanently?
              </CModalBody>
              <CModalFooter>
                <CButton color="danger" onClick={() => delete_product(delete_id)}>Delete Product</CButton>{' '}
                <CButton color="secondary" onClick={() => setDeleteModal(false)}>Cancel</CButton>
              </CModalFooter>
            </CModal>
            <CCardHeader>
              Manage Products
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
                    <CLabel htmlFor="email-input">Product Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="name" id="email-input" name="email-input" placeholder="Enter Product Name" autoComplete="name" onChange={handleChangeName}/>
                    <CFormText className="help-block">Please enter products's name</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Type</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">

                    <CSelect custom name="select" id="select" onChange={handleChangeType}>
                      <option value="0">Please select Type</option>
                      <option value="food">Food</option>
                      <option value="non-food">Non-Food</option>
                    </CSelect>
                  </CCol>

                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Units</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">

                    <CSelect custom name="select" id="select" onChange={handleChangeUnits}>
                      <option value="0">Please select Units</option>
                      <option value="pckts">Pckts</option>
                      <option value="kg">Kg</option>
                      <option value="nos">Nos</option>
                    </CSelect>

                  </CCol>

                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">Vendor Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="vendor" id="vendor-input" name="vendor-input" placeholder="Enter Vendor Name" autoComplete="vendor_name" onChange={handleChangeVendor}/>
                    <CFormText className="help-block">Please enter vendor's name</CFormText>
                  </CCol>
                </CFormGroup>
            <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">Details</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="details" id="details-input" name="email-input" placeholder="Enter Product Details (optional)" autoComplete="details" onChange={handleChangeDetails}/>
                    <CFormText className="help-block">Please enter product details</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    
                  </CCol>
                  <CCol xs="12" md="9">
                    <CButton style={{marginTop:20,width:100}} block variant="outline" color="success" onClick={()=>addProduct()}>Add</CButton>

                  </CCol>

                </CFormGroup>

                </CCardBody>

            <CCardBody>
            <CDataTable
              items={products}
              fields={fields_data}
              bordered
              itemsPerPage={4}
              pagination
              scopedSlots = {{
                  'Delete Product' :
                  (item)=>(                    
                    <td>
                    <CButton block variant="outline" color="danger" onClick={() =>{setDeleteId(item.id) 
                      setDeleteModal(true)}}>Delete Product</CButton>
                    </td>

                  ),
              }}
            />
            </CCardBody>
          </CCard>
        </>
    )
}

export default Products
