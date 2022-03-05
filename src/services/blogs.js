import axios from 'axios'
const baseUrl = '/api/blogs/'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getSingleBlog = id => {
  const url = baseUrl + id
  const config = {
    headers: {
      Authorization: token
    }
  }

  const request = axios.get(url, config)
  return request.then(response => response.data)
}

const create = newNote => {
  const config = {
    headers: {
      Authorization: token
    }
  }

  const request = axios.post(baseUrl, newNote, config)

  return request.then(response =>
    console.log('New blog added: ', response.data))
}

const update = (updatedInfo, id) => {
  const url = baseUrl + id
  const config = {
    headers: {
      Authorization: token
    }
  }

  const request = axios.put(url, updatedInfo, config)

  return request.then(response =>
    console.log('Blog updated: ', response.data))
}

const _delete = id => {
  const url = baseUrl + id
  const config = {
    headers: {
      Authorization: token
    }
  }

  const request = axios.delete(url, config)

  return request.then(response =>
    console.log('Blog deleted: ', response.data)
  )
}

export default { getAll, create, update, getSingleBlog, _delete, setToken }
