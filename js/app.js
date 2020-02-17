var age = calcAge("94, 04, 25");
document.getElementById('eta').innerHTML = age;
function calcAge (birthday) {
    birthday = new Date(birthday);
    today     = new Date();

    var years = (today.getFullYear() - birthday.getFullYear());

    if (today.getMonth() < birthday.getMonth() ||
        today.getMonth() == birthday.getMonth() && today.getDate() < birthday.getDate()) {
        years--;
    }

    return years;
}
