const phoneNumberFormatter = function(number){
    // 1. menghilangkan karakter selain angka
    let formatted = number.replace(/\D/g, '');

    // 2. menghilangkan angka 0 didepan
    // menggantikan dengan kode negara (62)
    if(formatted.startsWith('0')){
        formatted = '62' + formatted.substr(1);
    }

    if(!formatted.endsWith('@c.us')){
        formatted += '@c.us';
    }

    return formatted;
}

module.exports = {
    phoneNumberFormatter
}