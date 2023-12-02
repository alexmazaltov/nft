let AINFT = artifacts.require("AINFT");

module.exports = async (deployer)=>{
    let ainft = null;
	try{
		try{
            ainft = await AINFT.deployed();
            console.log("AINFT DEPLOYED Early");
            console.log("AINFT contract address: ", ainft.address);
        }catch(e){
			console.log("DEPLOY");
            await deployer.deploy(AINFT);
            ainft = await AINFT.deployed();
            console.log("AINFT contract address: ", ainft.address);
        }
	}catch(e){
		console.error(e);
	}
}