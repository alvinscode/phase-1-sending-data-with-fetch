function submitData(name, email) {
    const requestInfo = {
      name: name,
      email: email
    };
  
    const configurationObject = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(requestInfo)
    };
  
    return fetch('http://localhost:3000/users', configurationObject)
      .then(response => response.json())
      .then(data => {
        const id = data.id;
        const newUser = document.createElement('div');
        newUser.innerHTML = id;
        document.body.appendChild(newUser);
      })
      .catch(error => {
        const errorMessage = error.message;
        const errorMsg = document.createElement('div');
        errorMsg.innerHTML = errorMessage;
        document.body.appendChild(errorMsg);
      });
  }