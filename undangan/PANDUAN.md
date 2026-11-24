# Panduan: backend RSVP + GitHub Pages

## A. Backend RSVP (Google Sheets, gratis, tanpa server)
Hasilnya: konfirmasi tamu masuk ke Google Sheet-mu, ucapan tampil untuk semua tamu, dan ada halaman rekap `admin.html`.

1. Buka sheets.google.com → buat spreadsheet baru (mis. "RSVP Nadia & Raka").
2. Menu **Extensions (Ekstensi) → Apps Script**. Hapus isi default, tempel isi `backend/apps-script.gs`.
3. **Ganti `ADMIN_KEY`** dengan kata sandi rahasiamu sendiri (jangan taruh di GitHub). Simpan.
4. Klik **Deploy → New deployment → ikon roda gigi → Web app**:
   - Execute as: **Me**
   - Who has access: **Anyone**
   Klik Deploy, lalu izinkan akses. Jika muncul peringatan "belum diverifikasi": **Advanced → Go to (nama proyek)**. Ini aman karena skripnya milikmu sendiri.
5. Salin **Web app URL** (berakhiran `/exec`).
6. Buka `editor.html` → isi **backend → url** dengan URL itu → **Unduh data.js** → timpa `data/data.js`.
7. Tes: buka undangan, kirim RSVP. Baris baru harus muncul di sheet tab `RSVP`.

Catatan:
- Jika mengubah isi skrip: **Deploy → Manage deployments → ikon pensil → Version: New version → Deploy**. URL tetap sama.
- Menyembunyikan ucapan tertentu dari halaman publik: ubah kolom `Tampilkan` di sheet menjadi `Tidak`.
- Rekap: buka `https://USERNAME.github.io/NAMA-REPO/admin.html`, masukkan `ADMIN_KEY`. Datanya juga langsung ada di Google Sheet.
- Tanpa backend (url dikosongkan), RSVP otomatis dikirim lewat WhatsApp.

## B. Publish ke GitHub Pages
GitHub Pages gratis untuk repo **publik** (repo privat butuh paket berbayar). Isi undangan memang publik di web, jadi pastikan tidak ada data rahasia di folder (ADMIN_KEY hanya ada di Apps Script).

1. Buat akun di github.com → **New repository** → nama mis. `undangan-nadia-raka` → **Public** → Create.
2. Upload isi folder ini ke repo (isi folder, bukan folder `undangan` itu sendiri):
   - Cara git (disarankan, ikut mengunggah folder tersembunyi `.github`):
     ```
     cd undangan
     git init
     git add .
     git commit -m "undangan"
     git branch -M main
     git remote add origin https://github.com/USERNAME/NAMA-REPO.git
     git push -u origin main
     ```
   - Cara web: **Add file → Upload files**, seret semua isi folder. Folder `.github` sering tidak ikut terseret; jika begitu pakai opsi "Deploy from a branch" di langkah 3.
3. **Settings → Pages → Build and deployment → Source:**
   - **GitHub Actions** (jika folder `.github` terunggah): situs otomatis terbit tiap push, dan `editor.html`, `backend/`, serta file `.md` tidak ikut dipublikasikan.
   - atau **Deploy from a branch → main → / (root)**: lebih simpel, tapi semua file ikut tampil publik.
4. Tunggu 1-3 menit. Alamat: `https://USERNAME.github.io/NAMA-REPO/`.
5. Isi `urlSitus` di editor (bagian **bagikan**) dengan alamat itu, lalu **Unduh data.js** dan **Unduh index.html (untuk WhatsApp)**, timpa di folder, dan push lagi. Ini yang membuat preview WhatsApp muncul.
6. Kirim link per tamu: `https://USERNAME.github.io/NAMA-REPO/?to=Nama%20Tamu`

Tips: GitHub Pages punya cache beberapa menit, jadi perubahan tidak langsung terlihat. Jika preview WhatsApp masih lama, tambahkan `&v=2` di ujung link.
