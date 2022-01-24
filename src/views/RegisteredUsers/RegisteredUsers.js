import React,{useEffect,useState} from 'react'
import {
    CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow
  } from '@coreui/react'
  import { DocsLink } from 'src/reusable'
  import usersData from '../users/UsersData'
  import axios from 'axios';
const url = 'https://yourbuca.com/api/admin/get_users'
const getBadge = status => {
  switch (status) {
    case 'ACTIVE': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
  const fields = ['Name','E-mail','Organisation Name', 'status', 'amount']
const fields_data = ['name','email','userStatus']
function RegisteredUsers() {
    const [user,setUser] = useState([])
    useEffect(() => {
        axios.get(url)
        .then(function (response) {
            setUser(response.data.data);
           // console.log(response.data.data)
          })

      },[]);
    return (
        <>
            
          <CCard>
            <CCardHeader>
              Registered Users
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={user}
              fields={fields_data}
              bordered
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                'userStatus':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.userStatus)}>
                        {item.userStatus}
                      </CBadge>
                    </td>
                  )

              }}
            />
            </CCardBody>
          </CCard>
        </>
    )
}

export default RegisteredUsers
