import axios from 'axios'
const baseUrl = '/api/blogs/'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getSingleBlog = async id => {
  const url = baseUrl + id
  const config = {
    headers: {
      Authorization: token
    }
  }

  const response = await axios.get(url, config)
  return response.data
}

const create = async newNote => {
  const config = {
    headers: {
      Authorization: token
    }
  }

  const response = await axios.post(baseUrl, newNote, config)

  return console.log('New blog added: ', response.data)
}

const update = async (updatedInfo, id) => {
  const url = baseUrl + id
  const config = {
    headers: {
      Authorization: token
    }
  }

  const response = await axios.put(url, updatedInfo, config)

  return console.log('Blog updated: ', response.data)
}

const _delete = async id => {
  const url = baseUrl + id
  const config = {
    headers: {
      Authorization: token
    }
  }

  const response = await axios.delete(url, config)

  return console.log('The blog has been deleted', response.data)
}

export default { getAll, create, update, getSingleBlog, _delete, setToken }
