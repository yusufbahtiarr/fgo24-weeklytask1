## 1. Deteksi Palindrom
1. Mulai
2. Buat penampung untuk split kata sebagai 'textSplit' dan penampung hasil palindrom sebagai "resultPalindrom"
3. Masukkan kata sebagai 'textPalindrom'
4. Ubah textPalindrom ke huruf kecil semua.
5. Pisahkan setiap hurufnya dan Balikkan urutan karakternya dari 'textPalindrom', yang hasilnya masuk ke dalam penampung 'textSplit'
6. Gabungankan kata pada textSplit ke dalam resultPalindrom
7. Bandingkan isi data textPalindrom dan resultPalindrom, Jika sama maka hasil outputnya "Palindrom"
8. Jika tidak maka outputnya "Bukan Palindrom" 
9. Selesai

**Flowchart**
```mermaid
    flowchart LR
    a@{shape: circle, label: "Mulai"}
    b@{shape: rectangle, label: "textPalindrom, textSplit, resultPalindrom"}
    c@{shape: lean-r, label: "textPalindrom"}
    d@{shape: rect, label: "Ubah textPalindrom ke huruf kecil"}
    e@{shape: rect, label: "Pisahkan setiap huruf & Balik urutan textPalindrom ke textSplit"}
    f@{shape: rect, label: "Gabungkan setiap kata di textSplit ke resultPalindrom"}
    g@{shape: diamond, label: "textPalindrom === resultPalindrom"}
    h@{shape: lean-r, label: Output = "Palindrom"}
    i@{shape: lean-r, label: Output = "Bukan Palindrom"}
    j@{shape: dbl-circ, label: "Selesai"}

    a-->b-->c-->d
    d-->e-->f-->g
    g--Ya-->h-->j
    g--Tidak-->i-->j

```

## 2. Reverse Words

1. Mulai
2. Buat Penampung untuk pembalikan kata sebagai 'reverse' dan hasilnya ke 'result'
3. Masukkan kalimat sebagai 'text'
4. Pisahkan 'text' menjadi daftar kata lalu masukan ke dalam 'reverse'
5. pada 'reverse' balik urutan katanya
6. gabungkan kembali kata-kata yang sudah di balik menjadi satu kalimat ke dalam 'result'
7. Tampilkan hasilnya
8. Selesai



**Flowchart**
```mermaid
flowchart LR

a@{shape: circle, label: "Mulai"}
b@{shape: rect, label: "text, reverse, result"}
c@{shape: lean-r, label: "text"}
d@{shape: rect, label: "Pisahkan tiap kata di 'text' ke ' reverse'"}
e@{shape: rect, label: "Balik urutan kata-katanya"}
f@{shape: rect, label: "Gabungkan tiap kata di 'reverse' ke 'result'"}
g@{shape: lean-r, label: '"Result"'}
h@{shape: dbl-circ, label: "Selesai"}

a-->b-->c-->d-->e-->f-->g-->h
```




