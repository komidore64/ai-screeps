module.exports = function(grunt) {
    var config = require('./credentials.json')
    grunt.loadNpmTasks('grunt-screeps');
    grunt.initConfig({
        screeps: {
            options: {
                email: config.email,
                password: config.password,
                branch: config.branch,
                ptr: config.ptr
            },
            dist: {
                src: ['src/*.js']
            }
        }
    });
}
