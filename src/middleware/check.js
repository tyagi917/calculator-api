exports.checkType=(req,res)=>{
	const {n1,n2}=req.body;
	if(typeof num1==="string"||typeof num2==="string")
	{
		return res.json({
			status:'error',
			message:'Invalid data types',
		});
	}
}