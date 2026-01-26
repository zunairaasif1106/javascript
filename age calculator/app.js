function calculateAge() {
    var birthDate = document.getElementById("date").value;

    if (!birthDate) {
        alert("Please select your birth date!");
        return;
    }

    var birth = new Date(birthDate);
    var today = new Date();
    var milliDay = 1000 * 60 * 60 * 24;
    var ageInDays = (today - birth) / milliDay;
    var ageInYears = Math.floor(ageInDays / 365);

    document.getElementById("result").innerText = "Your age is: " + ageInYears + " years " + Math.floor(ageInDays) + " " + "days ";
}



