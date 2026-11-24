# Undangan Digital
- `data/data.js`  → semua data (nama, tanggal, tempat, rekening, dll)
- `editor.html`   → ubah data lewat form + preview HP / HP landscape / tablet / PC, lalu "Unduh data.js" dan timpa `data/data.js`
- `assets/`       → foto-utama.jpg, galeri-1..3.jpg, musik.mp3
- Link per tamu: `index.html?to=Nama%20Tamu` (atau pakai "Buat link untuk banyak tamu" di editor)
- Preview link WhatsApp: ubah tag `og:` di `index.html` secara manual.

## Tips performa
- Foto: lebar maks 1200px, format .webp/.jpg, ukuran ≤ 200 KB per foto.
- Musik: .mp3 128 kbps, ≤ 3 MB. Musik hanya dimuat setelah tamu menekan "Buka Undangan".
- Hosting: Netlify / GitHub Pages / Cloudflare Pages (gratis, sudah HTTPS dan CDN).

## Publish & backend
Lihat **PANDUAN.md** (Google Sheets untuk RSVP, GitHub Pages untuk hosting, preview WhatsApp).

## Foto di bingkai cover
- Kiri = mempelai B (pria), kanan = mempelai A (wanita). Isi `fotoPria` dan `fotoWanita` di data, atau pilih langsung dari perangkat di `editor.html` (otomatis dikompres dan ditanam di data.js).
- Teks cover (welcome / to our wedding / open invitation) bisa diubah di bagian `cover`.
