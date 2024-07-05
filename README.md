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
[Explainitation About `ActivityType`](https://discord-api-types.dev/api/discord-api-types-v10/enum/ActivityType)

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
