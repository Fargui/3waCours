
console.log('looool');

const login = (email, password, callback) => {
	setTimeout(() => {
		callback(email)
	}, 1000);
};


    login("gui.dumez@gmail.com", 1234567890, (verifiedEmail)=>{
        console.log(verifiedEmail);
    })

