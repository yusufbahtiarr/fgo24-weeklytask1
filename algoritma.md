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
    flowchart TD
    a@{shape: circle, label: "Mulai"}
    b@{shape: rectangle, label: "textPalindrom, textSplit, resultPalindrom"}
    c@{shape: lean-r, label: "textPalindrom"}
    d@{shape: rect, label: "Konversi textPalindrom ke huruf kecil"}
    f@{shape: rect, label: "resultPalindrom = textSplit + resultPalindrom"}
    g@{shape: diamond, label: "textPalindrom === resultPalindrom"}
    h@{shape: lean-r, label: '"Palindrom"'}
    i@{shape: lean-r, label: '"Bukan Palindrom"'}
    j@{shape: dbl-circ, label: "Selesai"}
    dx@{shape: diamond, label: " i < textSplit.length"}
    db@{shape: rect, label: "increment: i++"}

    a-->b-->c-->d-->dx
    dx--Tidak-->g
    dx--Ya-->f-->db-->dx
    g--Ya-->h-->j
    g--Tidak-->i-->j

```

## 2. Reverse Words

1. Mulai
2. Buat Penampung untuk pemisah kata sebagai 'word', pembalikan kata sebagai 'reverse' dan hasilnya ke 'result'
3. Masukkan kalimat sebagai 'text'
4. Pisahkan 'text' menjadi daftar kata lalu masukan ke dalam 'word'
5. balikkan urutan pada 'word', simpan ke 'textReverse'
6. gabungkan kata pada 'textReverse' yang telah di balik menjadi satu kalimat ke dalam 'result'
7. Tampilkan hasilnya
8. Selesai





**Flowchart**
```mermaid
flowchart TD

a@{shape: circle, label: "Mulai"}
b@{shape: rect, label: "text, word, reverse, result"}
c@{shape: lean-r, label: "text"}
d@{shape: rect, label: "word = text.split(' ')"}
e@{shape: rect, label: "textReverse = word.reverse()"}
f@{shape: rect, label: "result = reverse.join(' ')"}
g@{shape: lean-r, label: '"result"'}
h@{shape: dbl-circ, label: "Selesai"}

a-->b-->c-->d-->e-->f-->g-->h
```




