let AINFTLOGO = artifacts.require("AINFTLOGO");

module.exports = async (deployer)=>{
    let ainftlogo = null;
	try{
		try{
            ainftlogo = await AINFTLOGO.deployed();
            console.log("AINFTLOGO DEPLOYED Early");
            console.log("AINFTLOGO contract address: ", ainftlogo.address);
        }catch(e){
			console.log("DEPLOY");
            await deployer.deploy(AINFTLOGO);
            ainftlogo = await AINFTLOGO.deployed();
            console.log("AINFTLOGO contract address: ", ainftlogo.address);
        }
	}catch(e){
		console.error(e);
	}
}