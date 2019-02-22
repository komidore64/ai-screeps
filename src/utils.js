var utils = {
    next_job: function() {
        var next_job_index = (Memory.jobs.indexOf(Memory.last_job) + 1) % Memory.jobs.length;
        Memory.last_job = Memory.jobs[next_job_index];
        return Memory.last_job;
    }
};

module.exports = utils;
