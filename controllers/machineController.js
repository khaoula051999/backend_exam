const Machine = require("../models/machineSchema")


module.exports = {
    async addMachine(req, res) {
   
        const machinee = req.body;
        const machi = new Machine({ nom: machinee.nom, addresseip: machinee.addresseip,sysexploitation:machinee.sysexploitation,etat:machinee.etat });

        res.send(await machi.save());
    },
    async getAllMachines (req, res) {
        const machines = await Machine.find();
        res.send(machines);
    },
    async getMachinebyIp(req, res) {
        const ip = req.params["ip"];
        const machine = await Machine.find({addresseip:ip});
        res.send(machine);
    },

    async deleteMachinebyIp(req, res) {
        const ip = req.params["ip"];
        const findMachineByIp = User.findOne({addresseip:ip})
        const deleteu = await findMachineByIp.remove();
        res.send(deleteu);
    },
    
}
