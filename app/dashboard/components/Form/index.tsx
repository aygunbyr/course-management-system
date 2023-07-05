import React, { useEffect, useState } from 'react'
import styles from './Form.module.css'
import { User } from '@/types/user'

type FormProps = {
  data: User[]
  setData: React.Dispatch<React.SetStateAction<User[]>>
  handleCloseModal: () => void
  mode: 'add' | 'edit'
  rowData?: User | null
}

function Form({ data, setData, handleCloseModal, mode, rowData }: FormProps) {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [domain, setDomain] = useState<string>('')
  const [companyName, setCompanyName] = useState<string>('')

  useEffect(() => {
    if (mode === 'edit') {
      setFirstName(rowData?.firstName || '')
      setLastName(rowData?.lastName || '')
      setEmail(rowData?.email || '')
      setPhone(rowData?.phone || '')
      setDomain(rowData?.domain || '')
      setCompanyName(rowData?.company.name || '')
    }
  }, [rowData, mode])

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()

    if (firstName === '') return
    if (lastName === '') return
    if (email === '') return
    if (phone === '') return
    if (domain === '') return
    if (companyName === '') return

    if (mode === 'add') {
      const newStudent: User = {
        id: Math.floor(Math.random() * 1000000 + 1),
        firstName,
        lastName,
        maidenName: '',
        age: 0,
        gender: '',
        email,
        phone,
        username: '',
        password: '',
        birthDate: '',
        image: '/assets/profile.png',
        bloodGroup: '',
        height: 0,
        weight: 0,
        eyeColor: '',
        hair: {
          color: '',
          type: '',
        },
        domain,
        ip: '',
        address: {
          address: '',
          city: '',
          coordinates: {
            lat: 0,
            lng: 0,
          },
          postalCode: '',
          state: '',
        },
        macAddress: '',
        university: '',
        bank: {
          cardExpire: '',
          cardNumber: '',
          cardType: '',
          currency: '',
          iban: '',
        },
        company: {
          address: {
            address: '',
            city: '',
            coordinates: {
              lat: 0,
              lng: 0,
            },
            postalCode: '',
            state: '',
          },
          department: '',
          name: companyName,
          title: '',
        },
        ein: '',
        ssn: '',
        userAgent: '',
      }

      const newData = [...data, newStudent]
      setData(newData)
    }

    if (mode === 'edit' && rowData !== undefined && rowData !== null) {
      const index = data.findIndex((student) => student.id === rowData.id)

      data[index].firstName = firstName
      data[index].lastName = lastName
      data[index].email = email
      data[index].phone = phone
      data[index].domain = domain
      data[index].company.name = companyName
    }

    handleCloseModal()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles['form-control']}>
          <label className={styles['form-control-label']} htmlFor="firstName">
            First Name
          </label>
          <input
            className={styles['form-control-input']}
            name="firstName"
            value={firstName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setFirstName(event.currentTarget.value)
            }
            placeholder="Enter your first name"
            type="text"
          />
        </div>
        <div className={styles['form-control']}>
          <label className={styles['form-control-label']} htmlFor="lastName">
            Last Name
          </label>
          <input
            className={styles['form-control-input']}
            name="lastName"
            value={lastName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setLastName(event.currentTarget.value)
            }
            placeholder="Enter your last name"
            type="text"
          />
        </div>
        <div className={styles['form-control']}>
          <label className={styles['form-control-label']} htmlFor="email">
            Email
          </label>
          <input
            className={styles['form-control-input']}
            name="email"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(event.currentTarget.value)
            }
          />
        </div>
        <div className={styles['form-control']}>
          <label className={styles['form-control-label']} htmlFor="phone">
            Phone
          </label>
          <input
            className={styles['form-control-input']}
            name="phone"
            value={phone}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setPhone(event.currentTarget.value)
            }
            placeholder="Enter your phone"
            type="text"
          />
        </div>
        <div className={styles['form-control']}>
          <label className={styles['form-control-label']} htmlFor="domain">
            Web Site
          </label>
          <input
            className={styles['form-control-input']}
            name="domain"
            value={domain}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setDomain(event.currentTarget.value)
            }
            placeholder="Enter your web site"
            type="text"
          />
        </div>
        <div className={styles['form-control']}>
          <label className={styles['form-control-label']} htmlFor="companyName">
            Company Name
          </label>
          <input
            className={styles['form-control-input']}
            name="companyName"
            value={companyName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setCompanyName(event.currentTarget.value)
            }
            placeholder="Enter your company name"
            type="text"
          />
        </div>
        <br />
        <div className={styles.required}>
          <p style={{ alignContent: 'center' }}>All fields are required.</p>
        </div>
        <button className={styles.button} type="submit">
          {mode === 'add'
            ? 'ADD STUDENT'
            : mode === 'edit'
            ? 'EDIT STUDENT'
            : null}
        </button>
      </form>
    </div>
  )
}

export default Form
