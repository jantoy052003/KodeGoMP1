document.getElementById("#book-now").addEventListener('click', book);
function book() {
    window.location.href="date-booking.html";
}

document.getElementById("take-me").addEventListener('click', takeMe);
function takeMe() {
    window.location.href="https://www.google.com/maps/place/Oceanside+Villas/@16.7043063,120.3360199,17z/data=!3m1!4b1!4m6!3m5!1s0x33918de56404fc0d:0xed8a04430aecc7db!8m2!3d16.7043012!4d120.3382086!16s%2Fg%2F11pzh05llg";
}

// const isEmpty = str => !str.trim().length;
document.getElementById("book-btn").addEventListener('click', bookNow);
function bookNow() {
    let checkIn = document.forms["form"]["checkIn"].value;
    let checkOut = document.forms["form"]["checkOut"].value;
    let rooms = document.forms["form"]["rooms"].value;
    let adults = document.forms["form"]["adults"].value;
    let offspring = document.forms["form"]["offspring"].value;
    let email = document.forms["form"]["email"].value;
    let phone = document.forms["form"]["phone"].value;
    // if (checkIn == "" || checkOut == "" || rooms == 0 || adults == "" || offspring == "" || email == "" || phone == ""){
    //     alert("Please complete the reservation form");
    //     return false;
    // }else {
    //     window.location.href="https://www.airbnb.com/rooms/794422134501154265?adults=2&children=2&check_in=2023-03-17&check_out=2023-03-19&federated_search_id=e1079ee8-cdab-4323-a7e1-9b8d26c82a36&source_impression_id=p3_1677148542_V13GOIsBymUitAOv";
    // }

    // if(offspring == "" || rooms == 0 || adults == "" || email == "" || phone == ""){
    //     alert("Please complete the reservation form");
    //     return false;
    // } else {
    //     alert("You are now being redirected to AirBnb website");
    //     window.location.href="https://www.airbnb.com/rooms/794422134501154265?adults=2&children=2&check_in=2023-03-17&check_out=2023-03-19&federated_search_id=e1079ee8-cdab-4323-a7e1-9b8d26c82a36&source_impression_id=p3_1677148542_V13GOIsBymUitAOv";
    // }

    if (checkIn == "" || checkOut == "" || rooms == 0 || adults == "" || offspring == "" || email == "" || phone == ""){
        alert("Please complete the reservation form");
        return false;
    } else {
        alert("You are now being redirected to AirBnb website");
        window.location="https://www.airbnb.com/rooms/794422134501154265?adults=2&children=2&check_in=2023-03-17&check_out=2023-03-19&federated_search_id=e1079ee8-cdab-4323-a7e1-9b8d26c82a36&source_impression_id=p3_1677148542_V13GOIsBymUitAOv";
        return false;
    }
    
}