var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

var utils = require('utils');
var spawn = require('spawn');

Memory.jobs = [
    'harvester',
    'upgrader',
    'builder'
];
Memory.last_job = 'builder'; // we do this so the first spawned creep will be a harvester

var spawn_name = 'Spawn1'; // FIXME: don't hardcode spawn?

module.exports.loop = function () {
    spawn.run(spawn_name);

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
};
