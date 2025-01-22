document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todos los botones de WhatsApp y Maps
    
    const lacima_whatsapp = document.getElementById("c-whatsapp");
    const lacima_maps = document.getElementById("c-maps");
    const lacima_phone1 = document.getElementById("c-telefono1");
    const lacima_phone2 = document.getElementById("c-telefono2");

    const parques_whatsapp = document.getElementById("p-whatsapp");
    const parques_maps = document.getElementById("p-maps");
    const parques_phone1 = document.getElementById("p-telefono");

    const valleimperial_whatsapp = document.getElementById("v-whatsapp");
    const valleimperial_maps = document.getElementById("v-maps");
    const valleimperial_phone1 = document.getElementById("v-telefono");

    const phoneNumbers = {
        "Sucursal La Cima": {
            phone1: "+523338340964",
            phone2: "+523338346189",
            whatsapp: "https://wa.me/+523338008822",
            maps: "https://maps.app.goo.gl/fybAXh7oDw9dPRiQ9"
        },
        "Sucursal Parques": {
            phone1: "+523320146310",
            whatsapp: "https://wa.me/+523326321348",
            maps: "https://maps.app.goo.gl/xagBh7UA5VYznYSG9"
        },
        "Sucursal Valle Imperial": {
            phone1: "+523332684834",
            whatsapp: "https://wa.me/+523314633124",
            maps: "https://maps.app.goo.gl/2tYQxKAq3DrsCTH16"
        }
    };
    // Asigna los eventos de clic a los botones
    lacima_whatsapp.addEventListener("click", function () {
        window.open(phoneNumbers["Sucursal La Cima"].whatsapp);
    });

    lacima_maps.addEventListener("click", function () {
        window.open(phoneNumbers["Sucursal La Cima"].maps);
    });

    lacima_phone1.addEventListener("click", function () {
        window.open("tel:" + phoneNumbers["Sucursal La Cima"].phone1);
    });

    lacima_phone2.addEventListener("click", function () {
        window.open("tel:" + phoneNumbers["Sucursal La Cima"].phone2);
    });

    parques_whatsapp.addEventListener("click", function () {
        window.open(phoneNumbers["Sucursal Parques"].whatsapp);
    });

    parques_maps.addEventListener("click", function () {
        window.open(phoneNumbers["Sucursal Parques"].maps);
    });

    parques_phone1.addEventListener("click", function () {
        window.open("tel:" + phoneNumbers["Sucursal Parques"].phone1);
    });

    valleimperial_whatsapp.addEventListener("click", function () {
        window.open(phoneNumbers["Sucursal Valle Imperial"].whatsapp);
    });

    valleimperial_maps.addEventListener("click", function () {
        window.open(phoneNumbers["Sucursal Valle Imperial"].maps);
    });

    valleimperial_phone1.addEventListener("click", function () {
        window.open("tel:" + phoneNumbers["Sucursal Valle Imperial"].phone1);
    });



});
