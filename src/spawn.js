var utils = require('utils');

var spawn = {
    run: function(spawn) {
        if (Game.spawns[spawn].spawning === null) {
            Game.spawns[spawn].spawnCreep(
                [MOVE, CARRY, WORK],
                `creep${Game.time}`,
                {
                    memory: {
                        role: utils.next_job()
                    }
                }
            );
        }
    }
};

module.exports = spawn;
