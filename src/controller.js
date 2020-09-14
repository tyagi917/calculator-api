exports.addnum=(req,res)=>{
	const {n1,n2}=req.body;
	const res=n1+n2;
	if(res>1000000)
	{
		return res.json({
			status:'error',
			message:'Overflow',
		});
	}
	return res.json({
		status:'success',
		message:'the sum of given two numbers',
		sum:res,
	});
}
exports.subtractnum=(req,res)=>
{
	const {n1,n2}=req.body;
	const res=n1-n2;
	if(res<1000000)
	{
		return  res.json({
			status:'error',
			message:'Underflow'
		});
	}
	return res.json({
		status:'success',
		message:'two difference of given two number',
		difference:res,
	});
}
exports.mulnum=(req,res)=>{
	const {n1,n2}=req.body;
	const res=n1*n2;
	if(res>1000000)
	{
		return res.json({
			status:'error',
			message:'Overflow',
		});

	}
	return res.json({
		status:'success',
		message:'the product of given two numbers',
		mul:res,
	});
}
exports.dividenum=(req,res)=>{
	const {n1,n2}=req.body;
	if(n2==0)
	{
		return res.json({
			status:'error',
			message:'Cannot divide by zero',
		});
	}
	const res=n1/n2;
	if(res>1000000)
	{
		return res.json({
			status:'error',
			message:'Overflow',
		});
	}
	return res.json({
		status:'success',
		message:'the divison of given numbers',
		divide:res
	})
}