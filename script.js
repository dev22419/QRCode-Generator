
var qrcode = new QRCode("qrcode");

function generateQRCode() {
    var text = document.getElementById("text-input").value;
    if (text.trim() === '') {
        alert('Link is not there');
        return;
    }
    qrcode.makeCode(text);
}

document.getElementById("generate-button").addEventListener("click", generateQRCode);

document.getElementById("download-link").addEventListener('click', function(event) {
    var text = document.getElementById("text-input").value;
    var format = document.getElementById("image-format").value;
    if (text.trim() === '') {
        alert('Link is not there');
        event.preventDefault(); // prevent the default action
        return;
    }
    var dataUrl = document.getElementsByTagName('canvas')[0].toDataURL('image/' + format);
    var link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'qrcode.' + format;
    link.click();
});















































// var qrcode = new QRCode("qrcode");

// function generateQRCode() {
//     var text = document.getElementById("text-input").value;
//     if (text.trim() === '') {
//         alert('Link is not there');
//         return;
//     }
//     qrcode.makeCode(text);
// }

// document.getElementById("generate-button").addEventListener("click", generateQRCode);

// document.getElementById("download-link").addEventListener('click', function() {
//     var text = document.getElementById("text-input").value;
//     var format = document.getElementById("image-format").value;
//     if (text.trim() === '') {
//         alert('Link is not there');
//         return;
//     }
//     this.href = document.getElementsByTagName('canvas')[0].toDataURL('image/' + format);
//     this.download = 'qrcode.' + format;
// });original




























// var qrcode = new QRCode("qrcode");

// function generateQRCode() {
//     var text = document.getElementById("text-input").value;
//     qrcode.makeCode(text);
// }

// document.getElementById("generate-button").addEventListener("click", generateQRCode);

// document.getElementById("download-link").addEventListener('click', function() {
//     this.href = document.getElementsByTagName('canvas')[0].toDataURL();
//     this.download = 'qrcode.png';
// });
