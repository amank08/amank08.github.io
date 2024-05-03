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
  
  function resetForm() {
    const form = document.getElementById('byoForm');
    form.reset();
  }
  
  function addCourse() {
    const coursesDiv = document.getElementById('courses');
    const courseCount = coursesDiv.querySelectorAll('.courseWrapper').length;
  
    const newCourseWrapper = document.createElement('div');
    newCourseWrapper.classList.add('courseWrapper');
  
    const courseName = document.createElement('input');
    courseName.type = 'text';
    courseName.classList.add('courseField');
    courseName.placeholder = `Course Name ${courseCount + 1}`;
    courseName.name = `courseName${courseCount + 1}`;
  
    const courseDescription = document.createElement('input');
    courseDescription.type = 'text';
    courseDescription.classList.add('courseField');
    courseDescription.placeholder = `Course Description ${courseCount + 1}`;
    courseDescription.name = `courseDescription${courseCount + 1}`;
  
    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => {
      coursesDiv.removeChild(newCourseWrapper);
    });
  
    newCourseWrapper.appendChild(courseName);
    newCourseWrapper.appendChild(courseDescription);
    newCourseWrapper.appendChild(deleteButton);
  
    coursesDiv.appendChild(newCourseWrapper);
  }  
function submitForm(event) {
    event.preventDefault(); 
    if (!validateForm()) {
      return;
    }
  
    const form = document.getElementById('byoForm');
    const formData = new FormData(form);
    const userInfo = document.getElementById('userIntro');
  
    const name = formData.get('name');
    const mascot = formData.get('mascot');
    const imageFile = formData.get('image');
    const imageCaption = formData.get('imageCaption');
    const background = formData.get('background');
    const professional = formData.get('professional');
    const academic = formData.get('academic');
    const webDev = formData.get('web-dev');
    const platform = formData.get('platform');
    const funny = formData.get('funny');
    const anything = formData.get('anything');
  
    const courseWrappers = document.querySelectorAll('.courseWrapper');
    const courses = Array.from(courseWrappers).map((wrapper, index) => {
      const courseName = wrapper.querySelectorAll('input')[0].value || `Course ${index + 1}`;
      const courseDescription = wrapper.querySelectorAll('input')[1].value || '';
      return { title: courseName, description: courseDescription };
    });
  
    const output = `
      <h2>${name} || ${mascot}</h2>
      <div id="loadImage"></div>
      <p>${imageCaption}</p>
      <ul>
        <li><strong>Personal Background:</strong> ${background}</li>
        <li><strong>Professional Background:</strong> ${professional}</li>
        <li><strong>Academic Background:</strong> ${academic}</li>
        <li><strong>Background in Web Development:</strong> ${webDev}</li>
        <li><strong>Primary Computer Platform:</strong> ${platform}</li>
        <li><strong>Courses Currently Taking:</strong>
          <ul>
            ${courses.map(course => `<li><strong>${course.title}:</strong> ${course.description}</li>`).join('')}
          </ul>
        </li>
        <li><strong>Funny Thing About You:</strong> ${funny}</li>
        <li><strong>Anything Else You Would Like To Add:</strong> ${anything}</li>
      </ul>
    `;
  
    userInfo.innerHTML = output;
  
    if (imageFile) {
      const img = document.createElement('img');
      img.src = URL.createObjectURL(imageFile);
      img.alt = 'Uploaded Image';
      img.style.maxWidth = '200px';
      document.getElementById('loadImage').appendChild(img);
    }
  
    const resetLink = document.createElement('button');
    resetLink.innerText = 'Reset';
    resetLink.addEventListener('click', () => {
      userInfo.innerHTML = '';
      resetForm();
      document.getElementById('byoForm').style.display = 'block';
    });
  
    userInfo.appendChild(resetLink);
  
    document.getElementById('byoForm').style.display = 'none';
  }
  
  document.getElementById('addCourseBtn').addEventListener('click', addCourse);
  document.getElementById('byoForm').addEventListener('submit', submitForm);
  document.getElementById('Reset').addEventListener('click', resetForm);
  
  