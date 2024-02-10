
module.exports = {
    apps: [
        {
            name: 'counter',
            port: '3004',
            exec_mode: 'cluster',
            instances: '1',
            script: 'bun',
            watch: true,
            args: 'run dev',
            env: {}
        }
    ]
}