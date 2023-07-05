import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Table.module.css'
import SearchIcon from '@/public/assets/icons/search.svg'
import EditIcon from '@/public/assets/icons/edit.svg'
import TrashIcon from '@/public/assets/icons/trash.svg'
import ArrowLeftIcon from '@/public/assets/icons/arrow-left.svg'
import ArrowRightIcon from '@/public/assets/icons/arrow-right.svg'
import { User } from '@/types/user'
import Form from '../Form'

type TableRowProps = {
  rowData: User
  handleEditStudent: () => void
  handleDelete: (id: number) => void
}

function TableRow({ rowData, handleEditStudent, handleDelete }: TableRowProps) {
  return (
    <tr className={styles['table-row']}>
      <td>
        <Image
          src={rowData.image}
          width={65}
          height={55}
          alt="Profile Image"
          aria-label="Profile Image"
        />
      </td>
      <td>
        {rowData.firstName} {rowData.lastName}
      </td>
      <td>{rowData.email}</td>
      <td>{rowData.phone}</td>
      <td>{rowData.domain}</td>
      <td>{rowData.company.name}</td>
      <td>
        <Image
          src={EditIcon}
          onClick={handleEditStudent}
          width={19}
          height={19}
          alt="Edit"
          aria-label="Edit"
        />
        <Image
          className={styles.trashIcon}
          onClick={() => handleDelete(rowData.id)}
          src={TrashIcon}
          width={16}
          height={18}
          alt="Delete"
          aria-label="Delete"
        />
      </td>
    </tr>
  )
}

type TableProps = {
  title: string
  cols: string[]
  data: User[]
  setData: React.Dispatch<React.SetStateAction<User[]>>
}

function Table({ title, cols, data, setData }: TableProps) {
  const [searchText, setSearchText] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const [rows, setRows] = useState<string>('6')
  const [filtered, setFiltered] = useState<User[]>(data)
  const [paginated, setPaginated] = useState<User[]>([])
  const [numPages, setNumPages] = useState<number>(1)
  const [startIndex, setStartIndex] = useState<number>(0)
  const [endIndex, setEndIndex] = useState<number>(startIndex + Number(rows))
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isEditModalOpen, setEditModalOpen] = useState(false)
  const [rowData, setRowData] = useState<User | null>(null)

  // Pagination
  useEffect(() => {
    const numberOfRows = Number(rows)

    const startIndex = 0 + (page - 1) * numberOfRows
    setStartIndex(startIndex)

    const endIndex = Math.min(startIndex + numberOfRows, filtered.length)
    setEndIndex(endIndex)

    const numberOfPages = Math.ceil(filtered.length / numberOfRows)
    setNumPages(numberOfPages)

    const newPaginated = filtered.slice(startIndex, endIndex)

    setPaginated(newPaginated)
  }, [filtered, page, rows])

  // Filtering
  useEffect(() => {
    const searchTextLC = searchText.toLowerCase()
    const newFiltered = data.filter(
      (item) =>
        `${item.firstName} ${item.lastName}`
          .toLowerCase()
          .includes(searchTextLC) ||
        item.email.includes(searchText) ||
        item.phone.includes(searchText) ||
        item.domain.includes(searchText) ||
        item.company.name.toLowerCase().includes(searchTextLC)
    )

    setFiltered(newFiltered)
  }, [data, searchText])

  useEffect(() => {
    setPage(1)
  }, [rows, searchText])

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const handleNextPage = () => {
    if (page < numPages) {
      setPage(page + 1)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.currentTarget.value)
  }

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRows(event.currentTarget.value)
  }

  const handleDelete = (id: number) => {
    if (window.confirm(`Are you sure you want to delete this student?`)) {
      const newData = data.filter((item) => item.id !== id)
      setData(newData)
      setPage(1)
    }
  }

  const handleAddNewStudent = () => {
    setIsAddModalOpen(true)
  }

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false)
  }

  const handleEditStudent = (rowData: User) => {
    setRowData(rowData)
    setEditModalOpen(true)
  }

  const handleCloseEditModal = () => {
    setEditModalOpen(false)
  }

  return (
    <section className={styles.container}>
      {isAddModalOpen && (
        <div className={styles.modalBackground}>
          <Modal onClose={handleCloseAddModal}>
            <h2 className={styles.title}>Add New Student</h2>
            <Form
              data={data}
              setData={setData}
              handleCloseModal={handleCloseAddModal}
              mode="add"
            />
          </Modal>
        </div>
      )}
      {isEditModalOpen && (
        <div className={styles.modalBackground}>
          <Modal onClose={handleCloseEditModal}>
            <h2 className={styles.title}>Edit Student</h2>
            <Form
              data={data}
              setData={setData}
              handleCloseModal={handleCloseEditModal}
              mode="edit"
              rowData={rowData}
            />
          </Modal>
        </div>
      )}
      <div className={styles.topbar}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.search}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search..."
            onChange={handleChange}
            value={searchText}
          />
          <span className={styles.searchIcon}>
            <Image
              src={SearchIcon}
              width={14}
              height={14}
              alt="Search Icon"
              aria-label="Search Icon"
            />
          </span>
        </div>
        <button className={styles.btn} onClick={handleAddNewStudent}>
          ADD NEW STUDENT
        </button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            {cols.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginated &&
            paginated.map((rowData, index) => (
              <TableRow
                key={rowData.id}
                rowData={rowData}
                handleEditStudent={() => handleEditStudent(rowData)}
                handleDelete={handleDelete}
              />
            ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={7}>
              <div className={styles['table-footer']}>
                <span className={styles.rowsText}>Rows per page:</span>
                <select
                  className={styles.selectPage}
                  value={rows}
                  onChange={handleSelectChange}
                >
                  <option value="6">6</option>
                  <option value="8">8</option>
                  <option value="10">10</option>
                </select>
                <span className={styles.pageInfo}>
                  {filtered.length > 0 ? startIndex + 1 : 0}-{endIndex} of{' '}
                  {filtered.length}
                </span>{' '}
                <div className={`${styles.iconContainer} ${styles.left}`}>
                  <Image
                    className={styles.arrowLeft}
                    onClick={handlePreviousPage}
                    src={ArrowLeftIcon}
                    width={8}
                    height={14}
                    alt="Previous Page"
                    aria-label="Previous Page"
                  />
                </div>
                <div className={`${styles.iconContainer} ${styles.right}`}>
                  <Image
                    className={styles.arrowRight}
                    onClick={handleNextPage}
                    src={ArrowRightIcon}
                    width={24}
                    height={24}
                    alt="Next Page"
                    aria-label="Next Page"
                  />
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </section>
  )
}

type ModalProps = {
  children: React.ReactNode
  onClose: () => void
}

function Modal({ children, onClose }: ModalProps) {
  return (
    <div className={styles.modal}>
      <div>
        {children}
        <button className={styles.closeModal} onClick={onClose}>
          CLOSE
        </button>
      </div>
    </div>
  )
}

export default Table
