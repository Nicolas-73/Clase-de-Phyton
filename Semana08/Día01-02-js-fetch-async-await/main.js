const url = 'https://jsonplaceholder.typicode.com/users'

// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     })
//     .catch(error => {
//         console.log(error)
//     })

const fetchUserSinRetorno = async () => {
    const response = await fetch(url)

    const data = await response.json()

    console.log(data)
}

fetchUserSinRetorno()

const fetchUserConRetorno = async () => {
    const response = await fetch(url)

    return await response.json()
}

// fetchUserConRetorno() // Retorna una promesa
//     .then(users => console.log(users))

const renderUsers =(users = []) => {
    const divApp = document.querySelector('#app')

    let userLists = ''

    users.forEach(user => {
        userLists += `
        <div>
            <h2>${user.id} - ${user.name}</h2>
            <p>Company: ${user.company.name}</p>
        </div>
        `
    })

    divApp.innerHTML = userLists
}

const fetchUserConManejoDeErrores = async () => {
    try {

        const response = await fetch(url)

        console.log(response.status) // 200

        if (response.status === 404) {
            console.log('Tuvimos un problema para cargar el recurso users')
            // return
            throw new Error('ERROR HTTP: '+ response.status)
        }

        return await response.json()

    } catch (error) { // Manejamos errores inesperados com por ejemplo ausencia de internet
        console.log(error)
    }
}

fetchUserConManejoDeErrores()
    .then(users => {
        console.log(users)
        renderUsers(users)
    })

// TODO: Resolver los siguientes ejercicios:
// Mostrar un mensaje de cargando
// Mostrar solo usuarios de una ciudad, la ciudad a su elección
// Mostrar cuános usuarios hay en el listado