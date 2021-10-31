(() => {
    const elements = {
        ids: {
            message: 'alert-message'
        }
    }

    const headers = {
        'Content-Type': 'application/json'
    }

    // document.addEventListener('loadstart', () => {
    //     getTime()
    // })

    window.CookieManager = (function () {
        function setCookie(name, value, days) {
            var expires = "";
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "") + expires + "; path=/";
        }
        function getCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }
        function eraseCookie(name) {
            document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }
        return {
            setCookie,
            getCookie,
            eraseCookie
        }
    })()

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
        const addTodo = async (todo) => {
            const result = await fetch(`${hostUrl}todos/add`, {
                headers,
                method: 'POST',
                body: JSON.stringify({ username: CookieManager.getCookie('username'), todo })
            }).then(res => res.json())
                .catch(err => console.error(err))

            if (result) {
                window.location.href = '/todos'
                return
            }
        }
        const getTodos = async (username) => {
            const result = await fetch(`${hostUrl}todos/get`, {
                headers,
                method: 'POST',
                body: JSON.stringify({ username })
            }).then(res => res.json())
                .catch(err => console.error(err))

            if (result) {
                return result
            }
        }
        const mapTodos = (domId, todos) => {
            return todos.map(userTodo => document.getElementById(domId).innerHTML += `<div id=${userTodo.id}>Todo: ${userTodo.todo} <a onclick="TodoManager.removeTodo(CookieManager.getCookie('username'), '${userTodo.id}');TodoManager.getTodos(CookieManager.getCookie('username'))
            .then(res => TodoManager.updateTodos('todos', res.todos))
            .catch(err => TodoManager.updateTodos('todos', ['Error!']))">(x)</a></div>`)
        }
        const updateTodos = (domId, todos) => {
            document.getElementById(domId).innerHTML = ""
            mapTodos(domId, todos)
        }
        const removeTodo = async (username, todoId) => {
            const result = await fetch(`${hostUrl}todos/remove`, {
                headers,
                method: 'POST',
                body: JSON.stringify({ username, todoId })
            }).then(res => res.json())
                .catch(err => console.error(err))

            if (result) {
                return result
            }
        }
        return {
            addTodo,
            getTodos,
            mapTodos,
            removeTodo,
            updateTodos
        }
    })()

    window.UserManager = (() => {
        const login = async (username, password) => {
            const body = {
                username,
                password
            }
            const result = await fetch(`${hostUrl}user/login`, {
                headers,
                method: 'POST',
                body: JSON.stringify(body)
            }).then(res => res.json())
                .catch(err => console.error(err))

            if (result.sessionId && result.status) {
                CookieManager.setCookie('sessionId', result.sessionId, 0)
                CookieManager.setCookie('username', username, 0)
                window.location.href = '/'
                return
            }

            alert('Invalid username or password!')
        }
        const register = async (username, password) => {
            const body = {
                username,
                password
            }
            console.log(body)
            const result = await fetch(`${hostUrl}user/register`, {
                headers,
                method: 'POST',
                body: JSON.stringify(body)
            }).then(res => res.json())
                .catch(err => console.error(err))

            if (result.status) {
                window.location.href = '/'
                return
            }
            alert('User exists!')
        }
        const logout = async () => {
            const body = {
                username: CookieManager.getCookie('username')
            }
            console.log(body)
            const result = await fetch(`${hostUrl}user/logout`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(body)
            }).then(res => res.json())
                .catch(err => console.error(err))

            if (result.status === true) {
                CookieManager.eraseCookie('sessionId')
                CookieManager.eraseCookie('username')
            }
            window.location.href = '/'
        }
        return {
            login,
            register,
            logout
        }
    })()
})()

//getTime()