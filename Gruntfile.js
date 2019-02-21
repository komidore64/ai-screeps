module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-screeps');

    var creds = require('./credentials.json')
    var branch = grunt.option('branch') || 'default';

    grunt.initConfig({
        screeps: {
            options: {
                email: creds.email,
                password: creds.password,
                branch: branch,
                ptr: false
            },
            dist: {
                src: ['src/*.js']
            }
        }
    });
}
