const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let shoppingCart= {
    item: [],
    price: 0
}

const foods = [
    { name: "Ayam Betutu", price: 60000 },
    { name: "Spicy Chicken", price: 50000 },
    { name: "Honey Butter Rice", price: 45000 },
    { name: "Chicken Katsu", price: 55000 },
    { name: "Chicken Steak", price: 65000 },
]

const appetizers = [
    { name: "Avocado Shrimp Salad", price: 45000 },
    { name: "Mushroom Soup", price: 40000 },
    { name: "Sharing Platter", price: 65000 },
    { name: "Mango Chicken Salad", price: 50000 },
    { name: "Peanut Sesame Salad", price: 55000 },
]

const snacks = [
    { name: "Chicken Wings", price: 40000},
    { name: "Chicken Karage", price: 40000},
    { name: "Cheese Fries", price: 35000},
    { name: "Cajun Fries", price: 35000},
    { name: "Mashroom Fish Ball", price: 40000},
]

const drinks = [
    { name: "Sunshine Blast", price: 35000 },
    { name: "Green Sour", price: 35000 },
    { name: "Pineapple Toe", price: 35000 },
    { name: "Guava Mary", price: 40000 },
    { name: "Tropical Sunset", price: 37000 },
]

function clear(){
    console.clear()
}

function backMainMenu(){
    console.log('0. Kembali ke Menu Utama')
}

function errorMessage(){
    clear()
    console.log("Menu tidak tersedia. Harap tekan menu sesuai dengan pilihan yang ada");
    mainMenu()
}

function mainMenu(){
    console.log(`Menu Utama Twenty Two Cafe\n1. Pilih Menu\n2. Lihat Keranjang\n3. Checkout`)
    rl.question('Masukkan Pilihan [1-3] : ', function(input1) {
        if (input1==1) {
            console.clear();
            console.log("Menu Twenty Two Cafe\n1. Makanan\n2. Appetizer\n3. Snacks\n4. Minuman\n0. Kembali ke Menu Utama")
            rl.question('Masukkan Pilihan [0-4] : ', function(input2) {
                if (input2==1) { clear(); foodsMenu() }
                else if (input2==2) { clear(); appetizersMenu() }
                else if (input2==3) { clear(); snacksMenu() }
                else if (input2==4) { clear(); drinksMenu() }
                else if (input2==0) { clear(); mainMenu() }
                else { errorMessage() }
            })
        } else if (input1==2) { clear(); viewShoppingCart() }
        else if (input1==3) { 
            checkOut() 
            rl.close() 
        } else {
            errorMessage()
        }
    })
}

function foodsMenu() {
    console.log('Makanan')
    for(let i=0; i < foods.length; i++){
        console.log(`${i+1}. ${foods[i].name}  : Rp. ${foods[i].price}`);
    }
    backMainMenu()
    
    rl.question('Masukkan Pilihan [0-5] : ', function(input1) {
        if (input1==0) { clear(); mainMenu() }
        else if (input1>0 && input1 <=5) {
            rl.question(`Apakah yakin untuk memesan ${foods[input1-1].name} dengan harga Rp ${foods[input1-1].price}?\nJawab Ya/Tidak : `, function(input2){
                if (input2=="Ya") { 
                    shoppingCart.item = [...shoppingCart.item, foods[input1-1].name]
                    shoppingCart.price = shoppingCart.price + foods[input1-1].price
                    console.log(`${foods[input1-1].name} berhasil ditambahkan ke Keranjang`)
                    console.clear()
                    mainMenu()
                } else if (input2=="Tidak") { mainMenu() }
                else { errorMessage() }
            })
        }
         else { errorMessage() }
    })
}

function appetizersMenu(){
    console.log("Appetizer");
    for(let i=0; i < appetizers.length; i++){
        console.log(`${i+1}. ${appetizers[i].name}  : Rp ${appetizers[i].price}`);
    }
    backMainMenu()

    rl.question('Masukkan Pilihan [0-5] : ', function(input1){
        if (input1==0){ clear(); mainMenu() }
        else if (input1>0 && input1 <=5){
            rl.question(`Apakah yakin untuk memesan ${appetizers[input1-1].name} dengan harga Rp ${appetizers[input1-1].price}?\nJawab Ya/Tidak : `, function(input2){
                if (input2=="Ya") {
                    shoppingCart.item = [...shoppingCart.item, appetizers[input1-1].name]
                    shoppingCart.price = shoppingCart.price + appetizers[input1-1].price
                    console.log(`${appetizers[input1-1].name} berhasil ditambahkan ke keranjang.`);
                    clear()
                    mainMenu()
                } else if (input2=="Tidak") { clear(); mainMenu()}
                else { errorMessage() }
            })
        }
        else{ errorMessage() }
    })
}

function snacksMenu(){
    console.log("Snacks");
    for(let i=0; i < snacks.length; i++){
        console.log(`${i+1}. ${snacks[i].name}  : Rp ${snacks[i].price}`);
    }
    backMainMenu()

    rl.question('Masukkan Pilihan [0-5] : ', function(input1){
        if(input1==0){ clear(); mainMenu() }
        if (input1>0 && input1 <=5){
            rl.question(`Apakah yakin untuk memesan ${snacks[input1-1].name} dengan harga Rp ${snacks[input1-1].price}?\nJawab Ya/Tidak : `, function(input2){
                if (input2=="Ya") {
                    shoppingCart.item = [...shoppingCart.item, snacks[input1-1].name]
                    shoppingCart.price = shoppingCart.price + snacks[input1-1].price
                    console.log(`${snacks[input1-1].name} berhasil ditambahkan ke keranjang.`);
                    clear()
                    mainMenu()
                } else if (input2=="Tidak") { clear(); mainMenu()}
                else { errorMessage() }
            })
        }
        else{ errorMessage() }
    })
}

function drinksMenu(){
    console.log("Drinks");
    for(let i=0; i < drinks.length; i++){
        console.log(`${i+1}. ${drinks[i].name}  : Rp ${drinks[i].price}`);
    }
    backMainMenu()

    rl.question('Masukkan Pilihan [0-5] : ', function(input1){
        if(input1==0){ clear(); mainMenu() }
        else if (input1>0 && input1 <=5){
            rl.question(`Apakah yakin untuk memesan ${drinks[input1-1].name} dengan harga Rp ${drinks[input1-1].price}?\nJawab Ya/Tidak : `, function(input2){
                if (input2=="Ya") {
                    shoppingCart.item = [...shoppingCart.item, drinks[input1-1].name]
                    shoppingCart.price = shoppingCart.price + drinks[input1-1].price
                    console.log(`${drinks[input1-1].name} berhasil ditambahkan ke keranjang.`);
                    clear()
                    mainMenu()
                } else if (input2=="Tidak") { clear(); mainMenu()}
                else { errorMessage() }
            })
        }
        else{ errorMessage() }
    })
}

function viewShoppingCart() {
    clear()
    let len = shoppingCart.item.length
    console.log(`Keranjang:`)
    for (let i = 0; i < len; i++) {
        console.log(`${i+1}. ${shoppingCart.item[i]}`)
    }
    console.log(`Total Harga: Rp ${shoppingCart.price}`)
    backMainMenu()
    rl.question('Tekan Nomor [0] : ', function(input1) {
        if (input1==0) { 
            console.clear()
            mainMenu() 
        }else{
            errorMessage()
        }
})
}

function checkOut() {
    clear()
    let len = shoppingCart.item.length
    console.log(`Menu yang dibeli:`)
    for (let i = 0; i < len; i++) {
        console.log(`${i+1}. ${shoppingCart.item[i]}`)
    }
    console.log(`Total Harga: Rp ${shoppingCart.price}\nTerima kasih sudah memesan!`)
}

mainMenu()