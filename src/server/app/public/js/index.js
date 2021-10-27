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
            await fetch('/user/login', {
                method: 'POST',
                body: JSON.stringify({
                    username,
                    password
                })
            }).then(res => window.location.href = '/')
        }
        const register = async (username, password) => {
            await fetch('/user/register', {
                method: 'POST',
                body: JSON.stringify({
                    username,
                    password
                })
            }).then(res => window.location.href = '/')
        }
        return {
            login,
            register
        }
    })()
})()

getTime()