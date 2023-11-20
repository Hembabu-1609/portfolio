function sendEmail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    const serviceID = "service_45592en";
    const templateID = "template_xuf2qfe";

    emailjs.send(serviceID, templateID, params).then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Message sent Successfully");
    })
       .catch((err) => console.log(err));
}