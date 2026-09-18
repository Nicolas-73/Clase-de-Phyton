const API_URL = 'https://apibox.vercel.app/6pfqodg6KcghTiOxcXLgIhksnhbSzTD1/api/students'

export const fetchStudents = async () => {
    const response = await fetch(API_URL)

      return await response.json()

}

// TODO: crear la función createStudent que haga un post al recurso students

export const createStudent = async (payload) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(payload)
    }

    const response = await fetch(API_URL, options)

    return await response.json()
}

export const removeStudent = async (id) => {
    const options = {
        method: 'DELETE'
    }

    const response = await fetch(`${API_URL}/${id}`, options)

    return await response.json()
}

export const updateStudent = async (payload, id) => {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      body: JSON.stringify(payload)
    }
  }

  const response = await fetch(`${API_URL}/${id}`, options)

  return await response.json()
}