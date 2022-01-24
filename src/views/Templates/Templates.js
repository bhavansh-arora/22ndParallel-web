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
    CSelect,
    CFormGroup,
    CLabel,
    CInput,
    CFormText,
    CAlert

  } from '@coreui/react'
  import { DocsLink } from 'src/reusable'
  import usersData from '../users/UsersData'
  import axios from 'axios';
const url = 'https://yourbuca.com/api/admin/get_template'
const image_url ="https://yourbuca.com/api/"
  const fields = ['Name','E-mail','Organisation Name', 'status', 'amount']
const fields_data = ['image','_id','Colours','Manage Colours','Delete Template']
function Templates() {
    const [templates,setTemplates] = useState([])
    const [response,setResponse] = useState()
    const [users,setUsers] = useState([])
    const [color,setColor] = useState('')
    const [textColor,setTextColor] = useState('')
    const [layout,setLayout] = useState(0)
    const [titleColor,setTitleColor] = useState('')
    const [iconColor,setIconColor] = useState('')
    const [fieldsColor,setFieldsColor] = useState('')
    const [headingColor,setHeadingColor] = useState('')
    
    const [error,setError] = useState(false)
    const [errormessage,setErrorMessage] = useState("")
    const [success,setSuccess] = useState(false)
    const [successMessage, setSuccessMessage] = useState("")
    const [templatename,setTemplatename] = useState("")
    const [templateFile,setTemplateFile] = useState()
    const [template,setTemplate] = useState(false)
    useEffect(() => {
        axios.get(url)
        .then(function (response) {
            setTemplates(response.data.data);
            if(response.data.status==true){
                setResponse(response.data.data)
          
            }
           // console.log(response.data.data.template[0].image)
          })

      },[success]);
      function handleChangeColor(e) {
        setColor(e.target.value)

    } function handleChangeTextColor(e) {
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
function deleteTemplate(id) {
  setSuccess(false)
      setError(false)
 var url =  'https://yourbuca.com/api/admin/delete_template?id='+id
 axios.get(url)
        .then(function (response) {
            if(response.data.status==true){
              setSuccessMessage("Template Deleted Successfully.")
              setSuccess(true)          
            }
            else{
              setErrorMessage(response.data.message)
              setError(true)
            }
           // console.log(response.data.data.template[0].image)
          })
}
      function addTemplate(){
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
  const formData = new FormData()
  formData.append('color',color)
  formData.append('textColor',textColor)
  formData.append('layout',layout)
  formData.append('titleColor',titleColor)
  formData.append('iconColor',iconColor)
  formData.append('fieldsColor',fieldsColor)
  formData.append('headingColor',headingColor)
  formData.append('imatges',templateFile)
  axios.post("https://yourbuca.com/api/admin/upload_template",formData, {
  
  }).then(res => {
    if(res.data.status==true){
      setSuccessMessage("Template Uploaded Successfully.")
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
  setTemplate(false)
  setLayout(0)
  setTemplateFile()
      }
    }
    const TemplateInput = React.useRef(null);
    const TemplateClick = event => {
      TemplateInput.current.click();
    };
    const handleTemplate = event => {
     // alert("handled")
      var fileUploaded = event.target.files[0];
      setTemplateFile(event.target.files[0])
      setTemplate(true)
    };
    return (
        <>
            
          <CCard>
            <CCardHeader>
              Templates
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
                    <CLabel htmlFor="email-input">Colour</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="colour" id="email-input" name="email-input" placeholder="Enter Colour" autoComplete="colour" onChange={handleChangeColor} />
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
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select"></CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <CFormGroup row>
                   
                    <CButton style={{marginTop:20,width:150,marginLeft:10}} block variant="outline" color="info" onClick={TemplateClick} >
                    <div>Select Template</div>
                    <input
        type="file"
        ref={TemplateInput}
        onChange={handleTemplate}
        style={{display: 'none'}} name="pic" accept="image/*" />
                    </CButton>
                    <CButton onClick={()=>addTemplate()} style={{marginTop:20,width:150,marginLeft:10}} block variant="outline" color="success" >Add Template</CButton>

                    </CFormGroup>
                  </CCol>

                </CFormGroup>
            <CDataTable
              items={response}
              fields={fields_data}
              bordered
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                'image':
                  (item)=>(
                    <td>
                      <img src={image_url+item.template[0].image} width={70} height={50}/>
                      
                        {console.log(item.template[0])}
                     
                      
                    </td>
                    
                  ),
                  'Delete Template' :
                  (item)=>(
                    <td>
                   <CButton block variant="outline" color="danger" onClick={() =>deleteTemplate(item._id)}>Delete Template</CButton>

                    </td>
                  ),
                   'Manage Colours' :
                  (item)=>(
                    <td>
                   <CButton block variant="outline" color="success" onClick={() =>window.location.href="/#/manage_colors?id="+item._id}>Manage Colours</CButton>

                    </td>
                  ),
                  'Colours' :
                  (item)=>(
                    <td>
                  <div style={{backgroundColor:item.template[0].color,width:30,height:30,borderRadius:30}}></div>

                    </td>
                  )

              }}
            />
            </CCardBody>
          </CCard>
        </>
    )
}

export default Templates
