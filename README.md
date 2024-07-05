# Trakteer-Listener

## Deskripsi File

- `main.js`: File utama yang memuat dan mengelola event dan perintah bot.
- `src/config.json`: File konfigurasi untuk mengatur prefix, token bot, dan ID channel.
- `src/db.json`: Database sementara untuk menyimpan data.
- `src/events/messageCreate.js`: File untuk memeriksa perintah dengan prefix dan mendengarkan Trakteer.
- `src/events/ready.js`: File untuk mencatat status bot saat siap.
- `src/prefix/check.js`: File untuk menampilkan entri database yang sesuai dengan nama penulis dan membandingkannya dengan db.json.

## Instalasi dan Penggunaan

1. **Instalasi**:
   - Clone repositori ini: `git clone https://github.com/fleurdefontaine/Trakteer-Listener.git Trakteer`
   - Masuk ke direktori proyek: `cd Trakteer`

2. **Konfigurasi**:
   - Edit `src/config.json` untuk mengatur prefix, token bot, dan ID channel sesuai kebutuhan.

3. **Menjalankan Bot**:
   - Pastikan Anda memiliki Node.js diinstal.
   - Install dependensi: `npm install .`
   - Jalankan bot: `node index`

## Catatan Tambahan

Code ini hanyalah contoh untuk Trakteer listener, cocok yang mau membuat auto store dengan deposit melalui Trakteer.
