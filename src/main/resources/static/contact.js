const putContactData = async () => {
    console.log("boton dato")
    let inputName = document.getElementById("name").value;
    let inputEmail = document.getElementById("emailAddress").value;
    let inputText = document.getElementById("message").value;

    let request = await fetch("/contact", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: inputName,
            email: inputEmail,
            text: inputText
        }),
    });
    console.log(request);
    if(request.ok) {
        mostrarLastContact();
    }
}

const mostrarLastContact = async () => {

    let request = await fetch("/contact", {
        method: 'GET',
    });
    if(request.ok) {
        let contacto = await request.json();
        console.log("hola1");
        console.log(contacto);
        let texto = "<b>Mensaje enviado con exito</b></br><i>" + contacto.name + "! recibiras noticias nuestras en "
            + contacto.email + " próximamente</i>";
        document.getElementById("getMessage").innerHTML = texto;
        document.getElementById("sectionGetMessage").style.display = 'block';
    }
}

document.getElementById("submitButton").addEventListener("click", putContactData)