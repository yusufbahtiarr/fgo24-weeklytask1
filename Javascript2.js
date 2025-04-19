function belanja(totalBelanja){
    let diskon = 0
    let totalBayar = 0
    if (totalBelanja >= 1000000) {
        diskon = 0.1
    } else if (totalBelanja >= 500000 && totalBelanja < 1000000) {
        diskon = 0.05
    } else {
        diskon = 0
    }

    totalBayar = totalBelanja - (totalBelanja * diskon)
    if (diskon != 0){
        console.log(`Anda mendapatkan diskon ${diskon * 100}%, total belanja anda menjadi Rp`, totalBayar);
    } else {
        console.log(`Anda tidak mendapatkan diskon, total belanja anda menjadi Rp`, totalBayar);
    }
}

belanja(600000)



