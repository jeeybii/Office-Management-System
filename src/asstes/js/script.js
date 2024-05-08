const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});



// logout
document.getElementById('logout').addEventListener('click', function() {
  // Perform logout action here
  alert('Logout clicked!');
  // Add your logout functionality here, like redirecting to the logout page or clearing session data.
});



// Function to handle files selected via input element
function handleFiles(files) {
  // Handle the uploaded files here
  const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

  if (files.length > 0) {
      const file = files[0];
      if (allowedTypes.includes(file.type)) {
          // Valid file type, ask for confirmation
          const confirmUpload = confirm(`Do you want to upload ${file.name}?`);
          if (confirmUpload) {
              // User confirmed, proceed with upload
              console.log('File uploaded:', file.name);
              // Redirect to new page
              window.location.href = 'dashboard.html'; // Change 'view-page.html' to the desired URL
          } else {
              // User canceled, clear the input field
              document.getElementById('fileElem').value = '';
          }
      } else {
          // Invalid file type, display error message
          alert('Please upload a PDF or Word document file.');
          // Clear the input field
          document.getElementById('fileElem').value = '';
      }
  }
}

// Function to handle drag over event
function dragOverHandler(event) {
  event.preventDefault();
  event.stopPropagation();
  // Add styles to indicate drag over
  document.getElementById('drop-area').classList.add('drag-over');
}

// Function to handle drag leave event
function dragLeaveHandler(event) {
  event.preventDefault();
  event.stopPropagation();
  // Remove styles indicating drag over
  document.getElementById('drop-area').classList.remove('drag-over');
}

// Function to handle drop event
function dropHandler(event) {
  event.preventDefault();
  event.stopPropagation();
  // Remove styles indicating drag over
  document.getElementById('drop-area').classList.remove('drag-over');
  // Handle the dropped files
  const files = event.dataTransfer.files;
  if (files.length > 0) {
      const file = files[0];
      const confirmUpload = confirm(`Do you want to upload ${file.name}?`);
      if (confirmUpload) {
          handleFiles(files);
      }
  }
}

document.querySelector('.link-name').addEventListener('click', function() {
  const subTools = document.getElementById('sub-tools');
  subTools.style.display = subTools.style.display === 'none' ? 'block' : 'none';
});
