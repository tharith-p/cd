
module.exports = {
    apps: [
        {
            name: 'qipadmin',
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