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
const url = 'https://yourbuca.com/api/user'
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
const fields_data = ['name','email','org_name','status','date']
function PaidUsers() {
    const [users,setUsers] = useState([])
    useEffect(() => {
        axios.get(url)
        .then(function (response) {
            setUsers(response.data.users);
          })

      },[]);
    return (
        <>
            
          <CCard>
            <CCardHeader>
              Paid Users
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={users}
              fields={fields_data}
              bordered
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
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

export default PaidUsers
