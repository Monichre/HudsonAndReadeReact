
// config.js
export const config =  {
	title: "Hudson and Reade",
	
  bucket: {
    slug: 'hudson-and-reade',
    media_url: 'https://cosmicjs.com/uploads',
    read_key: 'fUwPoBFCgrSOMSIObs5kUOi83ead98rsCEhDYPYT0MTP0KLnEk',
    write_key: 'DHv7gcGVx1rIS8rRyoAWLtuBrPzdhOQQCKzSLZftQtyqiGXDYy'
  },
  email_info : {
    host: 'smtp.gmail.com',
	  port: 465,
	  secure: true,  // secure:true for port 465, secure:false for port 587
	  auth: {
	      user: 'liamhellis@gmail.com',
	      pass: '102IndiaStreet'
	  }
  }
}
