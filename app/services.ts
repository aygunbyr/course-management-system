import axios from "axios";

const fetchStudents = async () => {
  const res = await axios.get('https://dummyjson.com/users')
  return res.data
}

export {fetchStudents}