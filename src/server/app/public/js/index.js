(() => {
    const elements = {
        ids: {
            message: 'alert-message'
        }
    }

    let timeoutInstance

    document.addEventListener('loadstart', () => {
        getTime()
    })

    window.ExpressTsTemplateGreet = () => {
        if (timeoutInstance) {
            clearTimeout(timeoutInstance)
        }
        const timeout = 5000
        const element = document.getElementById(elements.ids.message)
        element.innerHTML = `<h1>Express.TS Template Hello :)<br>This message will clear after ${timeout / 1000} seconds</h1>`
        timeoutInstance = setTimeout(() => {
            element.innerHTML = ''
        }, timeout)
    }

    window.ResetGreeting = () => {
        clearTimeout(timeoutInstance)
        const element = document.getElementById(elements.ids.message)
        element.innerHTML = ''
    }

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
})()

getTime()