function belanja(totalBelanja){
    let diskon = 0
    let totalBayar = 0
    if (totalBelanja >= 1000000) {
        diskon = 0.1
    } 
    if (totalBelanja >= 500000 && totalBelanja < 1000000) {
        diskon = 0.05

    totalBayar = totalBelanja - (totalBelanja * diskon)
    if (diskon){
        console.log(`Anda mendapatkan diskon ${diskon * 100}%, total belanja anda menjadi Rp`, totalBayar);
    } else {
        console.log(`Anda tidak mendapatkan diskon, total belanja anda menjadi Rp`, totalBayar);
    }
}

belanja(600000)



