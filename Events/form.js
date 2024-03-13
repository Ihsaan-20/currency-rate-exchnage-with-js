const user_details_form = document.querySelector("#user_details_form"); // form
const submitter = document.querySelector("button[value=save]"); // button
const output = document.querySelector("#output");
const span = document.querySelectorAll(".error");

//with formData class object;
const formData = new FormData(user_details_form);
// Convert FormData to object
const formDataObject = {};
formData.forEach((value, key) => {
    formDataObject[key] = value;
});

// Log the object containing form data
console.log("Form Data Object:", formDataObject);
// formData.forEach((value, key) => {
//     console.log(key, value);
// });
//with Event listener;
// user_details_form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     var first_name = user_details_form.first_name.value;
//     var last_name = user_details_form.last_name.value;
//     var profile = user_details_form.profile.value;

//     if(first_name == "")
//     {
//         span[0].innerText = "First name is required";

//     }else if(last_name == "")
//     {
//         span[1].innerText = "last name is required";
//     }else if(profile == "")
//     {
//         span[2].innerText = "profile is required";

//     }

   
    
//     var data = { first_name: first_name, last_name: last_name, profile: profile };
//     localStorage.setItem('data', JSON.stringify(data));

//     var getData = localStorage.getItem('data');
//     getData = JSON.parse(getData);
//     console.log(getData);
// });
