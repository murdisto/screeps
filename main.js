
const roleHarvester = require('role.harvester');
const roleUpgrader = require('role.upgrader');
const roleBuilder = require('role.builder');

module.exports.loop = function () {
    Game.spawns.Spawn0.spawnCreep([WORK, MOVE, MOVE, CARRY], 'Builder0', {memory: {role: 'builder'}});
    Game.spawns.Spawn0.spawnCreep([WORK, MOVE, MOVE, CARRY], 'Builder1', {memory: {role: 'builder'}});
    Game.spawns.Spawn0.spawnCreep([WORK, MOVE, MOVE, CARRY], 'Upgrader0', {memory: {role: 'upgrader'}});
    Game.spawns.Spawn0.spawnCreep([WORK, CARRY, MOVE, MOVE], 'Upgrader1', {memory: {role: 'upgrader'}});
    Game.spawns.Spawn0.spawnCreep([WORK, CARRY, MOVE, MOVE], 'Upgrader2', {memory: {role: 'upgrader'}});
    Game.spawns.Spawn0.spawnCreep([WORK, CARRY, MOVE, MOVE], 'Harvester0', {memory: {role: 'harvester'}});
    Game.spawns.Spawn0.spawnCreep([WORK, CARRY, MOVE, MOVE], 'Harvester1', {memory: {role: 'harvester'}});
    Game.spawns.Spawn0.spawnCreep([WORK, CARRY, MOVE, MOVE], 'Harvester2', {memory: {role: 'harvester'}});

    for (const name in Game.creeps) {
        const creep = Game.creeps[name];
        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if (creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}

// Game.spawns.Spawn0.store.getCapacity(RESOURCE_ENERGY)
// Memory.creeps.Harvester0.role = 'builder'