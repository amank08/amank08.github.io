function validateForm() {
    const requiredFields = document.querySelectorAll('#byoForm input[required]');
    let isValid = true;
  
    requiredFields.forEach((field) => {
      if (field.value.trim() === '') {
        alert(`${field.id} is required.`);
        isValid = false;
        field.focus();
        return false;
      }
    });
  
    if (!document.getElementById('contract').checked) {
      alert("You must agree to the contract.");
      isValid = false;
    }
  
    return isValid;
  }
  
  // Function to reset the form
  function resetForm() {
    const form = document.getElementById('byoForm');
    form.reset();
  }
  
  // Function to add new course text boxes
  function addCourse() {
    const coursesDiv = document.getElementById('courses');
    const courseCount = coursesDiv.querySelectorAll('.courseField').length;
  
    // Create a new text input for the course
    const newCourse = document.createElement('input');
    newCourse.type = 'text';
    newCourse.classList.add('courseField');
    newCourse.placeholder = `Course ${courseCount + 1}`;
  
    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => {
      coursesDiv.removeChild(newCourseWrapper);
    });
  
    // Create a wrapper for the course field and delete button
    const newCourseWrapper = document.createElement('div');
    newCourseWrapper.appendChild(newCourse);
    newCourseWrapper.appendChild(deleteButton);
  
    // Add the wrapper to the coursesDiv
    coursesDiv.appendChild(newCourseWrapper);
  }
  
  // Function to submit the form and display data
  function submitForm(event) {
    if (!validateForm()) {
      event.preventDefault();
      return;
    }
  
    event.preventDefault();
  
    const formData = new FormData(document.getElementById('byoForm'));
  
    // Construct the output for the user information container
    const userInfo = document.getElementById('userIntro');
    userInfo.innerHTML = '';
  
    formData.forEach((value, key) => {
      if (key === 'image') {
        // Displaying image may require a different approach, this is just a placeholder.
        const img = document.createElement('img');
        img.src = URL.createObjectURL(value);
        img.alt = 'Uploaded Image';
        userInfo.appendChild(img);
      } else {
        const paragraph = document.createElement('p');
        paragraph.innerText = `${key}: ${value}`;
        userInfo.appendChild(paragraph);
      }
    });
  
    // Add a reset button
    const resetLink = document.createElement('button');
    resetLink.innerText = 'Reset';
    resetLink.addEventListener('click', () => {
      document.getElementById('userIntro').innerHTML = '';
      resetForm();
    });
  
    userInfo.appendChild(resetLink);
  
    // Hide the form
    document.getElementById('byoForm').style.display = 'none';
  }
  
  // Event listeners
  document.getElementById('addCourseBtn').addEventListener('click', addCourse);
  document.getElementById('byoForm').addEventListener('submit', submitForm);
  document.getElementById('Reset').addEventListener('click', resetForm);
  