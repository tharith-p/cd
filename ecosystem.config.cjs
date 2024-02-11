module.exports = {
    apps: [
        {
            name: 'counter',
            port: '3032',
            exec_mode: 'cluster',
            instances: '2',
            script: 'npm',
            args: "run dev",
            env: {}
        }
    ]
}