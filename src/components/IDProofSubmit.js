import './css/upload.css';
import { useState } from "react";
import axios from "axios";

const IDProofSubmit = (props) => {


const formData = new FormData();

	const[file,setFile] = useState();
	// const[formData,setFormData] = useState(new FormData());
	// const[error,setError] = useState();
    
   const onFileChange = (event) => {
		// setFile({
		// 	file: event.target.files[0]
		// });

		for(let key of Object.keys(event.target.files)) {
			if (key !== 'length') {
			   formData.append('file', event.target.files[key]);
			}
		  }
		  
	}
	
  const uploadFileData = (event) => {
		event.preventDefault();



		// for(let key of Object.keys(event.target.files)) {
		// 	if (key !== 'length') {
		// 	  formData.append('files', event.target.files[key]);
		// 	}
		//   }
		  


		let customerData = { 'id': props.data.row.id,'name':props.data.row.name,'mobileNo': props.data.row.mobileNo};
		formData.append('customerData',
		new Blob([JSON.stringify(customerData)], { 
		  type: 'application/json'
		}));

		fetch('http://localhost:9080/idProofUpload/upload/', {
			method: 'POST',
			// headers:{'Content-Type':'multipart/form-data','Authorization' : token},
			headers:{'Authorization' : token},
			// headers:{'Authorization' : token},
			body: formData
		}).then(response => response.json())
		.then(result => console.log('Files successfully uploaded!'),
			alert("File uploaded successfully"))
		.catch(error => console.log('error occurred!')); 
	  }

		// const config = {
		// 	headers: {
		// 		'Content-Type':'multipart/form-data',
		// 		'Authorization': token
		// 	}
		// }

	// 	axios.post(
	// 		'http://localhost:9080/idProofUpload/upload/'+props.data.row.id,
	// 		// data: formData,
	// 		// headers: {'Content-Type': 'multipart/form-data','Authorization' : token }
	// 		formData,
	// 		config
	// 	 )
	// 	 .then(function (response) {
	// 		//handle success
	// 		setMsg("File successfully uploaded");
	// 		console.log(response);
	// 		console.log(response.data);
	// 	 }, 
	// 	 function(error) { 
	// 		// handle error 
	// 		setError(error);
	// 	 });

	// }


	   const token = sessionStorage.getItem("jwt");

	//    fetch('http://localhost:9080/idProofUpload/upload', {
	// 	method: 'POST',
	// 	headers:{'Authorization' : token},
	// 	body: formData
	// }).then(response => {
	// 	setMsg("File successfully uploaded");
	// }).catch(err => {
	// 	setError(err);
	// });

// }



		return (
			<div id="container">
				<h1>Upload ID Proof</h1>
				<input type="file" onChange={(event) =>onFileChange(event)}></input>
				<button onClick={uploadFileData}>Upload</button>
			</div>
		)

}
export default IDProofSubmit; 