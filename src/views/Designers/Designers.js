import React,{useEffect,useState} from 'react'
import {
    CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CButton,
    CAlert,
    CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CFormGroup,
    CLabel,
    CInput,
    CFormText,

  } from '@coreui/react'
  import { DocsLink } from 'src/reusable'
  import usersData from '../users/UsersData'
  import { saveAs } from 'file-saver';
  import axios from 'axios';
const url = 'https://yourbuca.com/api/user/pending-designs'
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
const fields_data = ['_id','name','email','org_name','date','status','message','logo','businessCard',"upload"]

function Designers() {
    const [users,setUsers] = useState([])
    const templateInput = React.useRef(null);
    const [templateFile,setTemplateFile] = useState()
    const [template,setTemplate] = useState(false)
    const [error,setError] = useState(false)
    const [errormessage,setErrorMessage] = useState("")
    const [success,setSuccess] = useState(false)
    const [successMessage, setSuccessMessage] = useState("")
    const [modal,setModal] = useState(false)
    const [email,setEmail] = useState("")
    const [textColor,setTextColor] = useState('')
    const [layout,setLayout] = useState(0)
    const [titleColor,setTitleColor] = useState('')
    const [iconColor,setIconColor] = useState('')
    const [fieldsColor,setFieldsColor] = useState('')
    const [headingColor,setHeadingColor] = useState('')
    const [color,setColor] = useState('')
    const [id,setid] = useState('')

    useEffect(() => {
        axios.get(url)
        .then(function (response) {
            setUsers(response.data.users);
          })

      },[success]);
      const TemplateSelect = event => {
        templateInput.current.click();
      };
      const handleTemplate = event => {
        const fileUploaded = event.target.files[0];
        setTemplateFile(event.target.files[0])
        setTemplate(true)
      };
      function handleChangeColor(e) {
        setColor(e.target.value)

    } 
      function handleChangeTextColor(e) {
        setTextColor(e.target.value)

    } function handleChangeLayout(e) {
        setLayout(e.target.value)

    }
    function handleChangeTitleColor(e) {
        setTitleColor(e.target.value)

    }
    function handleChangeIconColor(e) {
      setIconColor(e.target.value)

  }
  function handleChangeFieldsColor(e) {
    setFieldsColor(e.target.value)

}
function handleChangeHeadingColor(e) {
  setHeadingColor(e.target.value)

}
      function submit() {
        if(template){
          
          setError(false)
          setErrorMessage("")
          setSuccess(false)
          setSuccessMessage("")
          setModal(true)
         
          
  
        }
        else {
          setError(true)
          setErrorMessage("Please select a file for the template.")
          setSuccess(false)
          setSuccessMessage("")
        }
       
          }

          function template_submit() {
            setErrorMessage("")
        setSuccessMessage("")
        setError(false)
        setSuccess(false)

        if(color==""||textColor==""||titleColor==""||iconColor==""||fieldsColor==""||headingColor==""){
          setErrorMessage("Please enter all the fields.")
          setError(true)
          return;
        }
        else if(!(layout>=1&&layout<=7)){
          setErrorMessage("Please enter a valid layout.")
          setError(true)
          return;
        }
        else if(!(color.charAt(0)=="#"&&color.length==7)){
          setErrorMessage("Please enter a valid color.")
          setError(true)
          return;
        }
        else if(!(textColor.charAt(0)=="#"&&textColor.length==7)){
          setErrorMessage("Please enter a valid secondary color.")
          setError(true)
          return;
        }
        else if(!(titleColor.charAt(0)=="#"&&titleColor.length==7)){
          setErrorMessage("Please enter a valid title color.")
          setError(true)
          return;
        }
        else if(!(iconColor.charAt(0)=="#"&&iconColor.length==7)){
          setErrorMessage("Please enter a valid icon color.")
          setError(true)
          return;
        }
        else if(!(fieldsColor.charAt(0)=="#"&&fieldsColor.length==7)){
          setErrorMessage("Please enter a valid fields color.")
          setError(true)
          return;
        }
        else if(!(headingColor.charAt(0)=="#"&&headingColor.length==7)){
          setErrorMessage("Please enter a valid heading color.")
          setError(true)
          return;
        }
        else if(!template){
          setErrorMessage("Please upload a template.")
          setError(true)
          return;
        }
        
      else{
        setError(false)
        setSuccess(false)
        setSuccessMessage("")

        const config = {
          headers: {
            'Content-Type': 'application/form-data'
          }
        }
        const formData = new FormData()
        formData.append('template', templateFile)
        formData.append('email', email)
        formData.append('color',color)
formData.append('textColor',textColor)
formData.append('layout',layout)
formData.append('titleColor',titleColor)
formData.append('iconColor',iconColor)
formData.append('fieldsColor',fieldsColor)
formData.append('headingColor',headingColor)
formData.append('id',id)
//console.log("called")
        axios.post("https://yourbuca.com/api/user/template-upload", formData,config, {
        }).then(res => {
        //console.log("then"+res)
            if(res.data.status==1){
              setSuccessMessage("The template has been successfully updated.")
             setSuccess(true)
             setTemplate(false)
             setLayout(0)
             setTemplateFile()
             setModal(false)
            }
            else{
setErrorMessage("OOPS! Some error occured.")
setError(false)

            }
        })
        . catch (error => {
             // console.log("Error", error)
              
                setErrorMessage(error.message)
                setError(false)
            })

      }

           
          }
      
    return (
        <>
            
          <CCard>
          

            <CCardHeader style={{flexDirection:"row"}}>
            <CModal 
              show={modal} 
              onClose={() => setModal(!modal)}
              color="info"
              size="lg"
            >
              <CModalHeader closeButton>
                <CModalTitle>Template Details</CModalTitle>
              </CModalHeader>
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
              <CModalBody>
              <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">Colour</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="colour" id="email-input" name="email-input" placeholder="Enter Colour" autoComplete="colour" onChange={handleChangeColor}  />
                    <CFormText className="help-block">Please enter template colour</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">Secondary Colour</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="text-colour" id="email-input" name="email-input" placeholder="Enter Secondary Colour" autoComplete="text-colour" onChange={handleChangeTextColor} />
                    <CFormText className="help-block">Please enter secondary colour</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">Layout</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="layout" id="email-input" name="email-input" placeholder="Enter Layout" autoComplete="layout" onChange={handleChangeLayout} />
                    <CFormText className="help-block">Please enter template layout</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">Title Colour</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="title-colour" id="email-input" name="email-input" placeholder="Enter Title Colour" autoComplete="title-colour" onChange={handleChangeTitleColor} />
                    <CFormText className="help-block">Please enter title colour</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">Icon Colour</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="icon-colour" id="email-input" name="email-input" placeholder="Enter Icon Colour" autoComplete="icon-colour" onChange={handleChangeIconColor} />
                    <CFormText className="help-block">Please enter icon colour</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">Fields Colour</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="fields-colour" id="email-input" name="email-input" placeholder="Enter Fields Colour" autoComplete="fields-colour" onChange={handleChangeFieldsColor} />
                    <CFormText className="help-block">Please enter fields colour</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">Heading Colour</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="heading-colour" id="email-input" name="email-input" placeholder="Enter Heading Colour" autoComplete="heading-colour" onChange={handleChangeHeadingColor} />
                    <CFormText className="help-block">Please enter heading colour</CFormText>
                  </CCol>
                </CFormGroup>
              </CModalBody>
              <CModalFooter>
                <CButton color="primary" onClick={() => template_submit()}>
                  Submit
                </CButton>{' '}
                <CButton color="secondary" onClick={() => setModal(!modal)}>
                  Cancel
                </CButton>
              </CModalFooter>
            </CModal>
              <CRow>
                <div style={{marginLeft:10}}>Designer Panel</div>
                <div style={{flex:1}}></div>
                <a style={{marginRight:10}} href="/#/" onClick={()=>{
            localStorage.setItem('login', false)
            localStorage.setItem('screen', "");
            window.location.href = "http://admin.yourbuca.com/";  

            }}>Logout</a>
              </CRow>
             
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
            <CDataTable
              items={users}
              fields={fields_data}
              bordered
              itemsPerPage={6}
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
               
                'logo':
                (item)=>(
                    <td>
                   <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <CButton block variant="outline" color="primary" onClick={() =>{window.open(item.logo, "_blank")}}>View</CButton>
              <CButton block variant="outline" color="info" onClick={()=>saveAs(item.logo,item.name+"_logo")}>Download</CButton>
          
            </CCol>
                    </td>
                ),
                'businessCard':
                (item)=>(
                    <td>
                   <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <CButton block variant="outline" color="primary" onClick={() =>{window.open(item.businessCard, "_blank")}}>View</CButton>
              <CButton block variant="outline" color="info" onClick={()=>saveAs(item.businessCard,item.name+"_businessCard")}>Download</CButton>

            </CCol>
                    </td>
                ),
                'upload':
                (item)=>(
                    <td>
                   <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <CButton block variant="outline" color="warning" onClick={TemplateSelect}>Select</CButton>
              <input
        type="file"
        ref={templateInput}
        onChange={handleTemplate}
        style={{display: 'none'}} name="pic" accept="image/*" />
              <CButton block variant="outline" color="success" style={{marginTop:10}} onClick={()=>{submit(item.email); setEmail(item.email); setid(item._id)}}>Submit</CButton>

            </CCol>
                    </td>
                ),
              }}
            />
            </CCardBody>
          </CCard>
        </>
    )
}

export default Designers
