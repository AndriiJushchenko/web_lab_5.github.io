function trapezium() {
    var a = 13, b = 23, c = 13, b1, h, S;
    b1 = (b - a) / 2;
    h = Math.sqrt(c * c - b1 * b1);
    S = (a + b) * h / 2;
    document.getElementById('trapezium').innerHTML = S;
    document.getElementById('trapezium').style.textAlign = "center";
}

function reverse() {
    var num = document.getElementById('num').value;
    num = num.split('').reverse().join('');
    alert(num);
    document.cookie = `reversedNum=${num}; expires=Fri, 31 Dec 2038 23:59:59 GMT`;
}

function getFromCookies() {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name == 'reversedNum') {
            return parseInt(value);
        }
    }
    return null;
}

function cooockie() {
    const storedNumber = getFromCookies();
    if (storedNumber != null) {
        confirmReload = confirm(`В coockie було знайдене значення: ${storedNumber}. Бажаєте зберегти його?`);
        if (confirmReload) {
            alert("Coockie збережено. Будь ласка, перезавантажте сторінку.");
            document.getElementById('main_form').style.visibility = "hidden";
        } else {
            document.getElementById('main_form').style.visibility = "visible";
        }
    }
}

function go_left2() {
    document.getElementById('barman').style.textAlign = "left";
    localStorage.setItem('block2', 'left');
}

function go_left3() {
    document.getElementById('main_form').style.textAlign = "left";
    document.getElementById('trapezium').style.textAlign = "left";
    localStorage.setItem('block3', 'left');
}

function go_left4() {
    document.getElementById('link1').style.textAlign = "left";
    localStorage.setItem('block4', 'left');
}

function clearL() {
    document.getElementById('barman').style.textAlign = "center";
    document.getElementById('main_form').style.textAlign = "center";
    document.getElementById('trapezium').style.textAlign = "center";
    document.getElementById('link1').style.textAlign = "center";
    localStorage.clear();
}

document.getElementById('barman').style.textAlign = "center";
document.getElementById('main_form').style.textAlign = "center";
document.getElementById('header_title_text').innerHTML = "Історія українського пива";
document.getElementById('footer_title_text').innerHTML = "Пиво в пузо не лізе - пий квас!";
trapezium();
if (localStorage.getItem('block2') == 'left') {
    go_left2();
}
if (localStorage.getItem('block3') == 'left') {
    go_left3();
}
if (localStorage.getItem('block4') == 'left') {
    go_left4();
}

cooockie();

