function submitData(name, email) {

    const formData = {
        name,
        email
    }
    
    const configurationObject = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        },
        body: JSON.stringify(formData)
    }

    return fetch("http://localhost:3000/users", configurationObject)
    .then(res => res.json())
    .then(data => {
        document.body.innerHTML = `<p>${data.id}</p>`
    })
    .catch(error => {
        document.body.innerHTML = `<p>${error.message}</p>`
    })
   
}



// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
//   // method: "POST" is missing from the object below
//   const configurationObject = {
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     })
//     .catch(function (error) {
//       alert("Bad things! Ragnarők!");
//       console.log(error.message);
//     });