(() => {
    const elements = {
        ids: {
            message: 'alert-message'
        }
    }

    document.addEventListener('loadstart', () => {
        getTime()
    })

    window.getTime = () => {
        const getTime = () => {
            fetch('/time').then((res) => res.json()).then(res => {
                document.getElementById('time').innerHTML = `Current time: ${JSON.stringify(res.time)}`
            }).catch(err => {
                document.getElementById('time').innerHTML = 'error'
            })
        }

        setInterval(() => {
            getTime()
        }, 500)
    }

    window.TodoManager = (() => {
        const addTodo = (todo) => {}
        return {
            addTodo
        }
    })()

    window.UserManager = (() => {
        const login = async (username, password) => {
            const result = await fetch(`${hostUrl}user/login`, {
                method: 'POST',
                body: JSON.stringify({
                    username,
                    password
                })
            }).then(res => res.json())
            .catch(err => console.error(err))

            console.log(result)
        }
        const register = async (username, password) => {
            const result = await fetch(`${hostUrl}user/register`, {
                method: 'POST',
                body: JSON.stringify({
                    username,
                    password
                })
            }).then(res => res.json())
            .catch(err => console.error(err))

            console.log(result)
        }
        return {
            login,
            register
        }
    })()
})()

getTime()