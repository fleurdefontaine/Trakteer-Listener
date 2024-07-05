o# Trakteer-Listener

## Deskripsi File

- `main.js`: File utama yang memuat dan mengelola event dan perintah bot.
- `src/config.json`: File konfigurasi untuk mengatur prefix, token bot, dan ID channel.
- `src/db.json`: Database sementara untuk menyimpan data.
- `src/events/messageCreate.js`: File untuk memeriksa perintah dengan prefix dan mendengarkan Trakteer.
- `src/events/ready.js`: File untuk mencatat status bot saat siap.
- `src/prefix/check.js`: File untuk menampilkan entri database yang sesuai dengan nama penulis dan membandingkannya dengan db.json.

## Instalasi dan Penggunaan

1. **Instalasi**:
   - Clone repositori ini: `git clone https://github.com/fleurdefontaine/TrakteerListener.git`
   - Masuk ke direktori proyek: `cd TrakteerListener`

2. **Konfigurasi**:
   - Edit `src/config.json` untuk mengatur prefix, token bot, dan ID channel sesuai kebutuhan.

3. **Menjalankan Bot**:
   - Pastikan Anda memiliki Node.js diinstal.
   - Install dependensi: `npm install .`
   - Jalankan bot: `node index`

## Activity Types

Discord.js menyediakan beberapa tipe aktivitas yang bisa digunakan untuk mengatur presence (status dan aktivitas) bot. Berikut adalah nilai-nilai `ActivityType` yang tersedia:

1. **ActivityType.Competing**
   - Digunakan saat bot sedang berkompetisi dalam sesuatu.
   - Contoh penggunaan: `"Competing in a tournament"`

2. **ActivityType.Custom**
   - Digunakan untuk mengatur status khusus.
   - Contoh penggunaan: `"Feeling happy today"`

3. **ActivityType.Listening**
   - Digunakan saat bot sedang mendengarkan sesuatu.
   - Contoh penggunaan: `"Listening to some tunes"`

4. **ActivityType.Playing**
   - Digunakan saat bot sedang bermain game atau beraktivitas.
   - Contoh penggunaan: `"Playing Minecraft"`

5. **ActivityType.Streaming**
   - Digunakan saat bot sedang streaming.
   - Contoh penggunaan: `"Streaming on Twitch"`

6. **ActivityType.Watching**
   - Digunakan saat bot sedang menonton sesuatu.
   - Contoh penggunaan: `"Watching a movie"`

## Untuk mengubah tipe `ActivityType`
edit pada file ./src/events/ready.js

## Contoh Konfigurasi

Berikut adalah contoh cara mengatur presence bot menggunakan nilai `ActivityType`:

### `src/config.json`

```json
{
    "prefix": "!",
    "token": "YOUR_BOT_TOKEN_HERE",
    "channelIdDeposit": "YOUR_CHANNEL_ID_HERE",
    "RichPresenceText": [
        "Listening to some tunes",
        "Enjoying the beats",
        "Chilling with music"
    ]
}
