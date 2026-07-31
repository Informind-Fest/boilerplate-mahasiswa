# Boilerplate INFORMIND FEST VOL. II 2026 (Kategori Mahasiswa)

Selamat datang di repositori resmi untuk kompetisi **INFORMIND FEST VOL. II 2026**. Repositori ini telah dikonfigurasi secara khusus dengan ekosistem **React + Vite + TypeScript** dan dilengkapi dengan sistem pengawasan kode (Linter & Anti-Plagiasi) standar industri.

## Persyaratan Sistem
Sebelum memulai, pastikan perangkat Anda telah terinstal:
- [Node.js](https://nodejs.org/) (Versi 18 atau lebih baru)
- Git / GitHub Account

## Cara Memulai (Instalasi)

1. **Clone Repositori Ini**
   Clone repositori ini ke akun GitHub tim Anda masing-masing. **Pastikan repositori Anda disetting ke PUBLIC**.
   
2. **Instalasi Dependencies**
   Buka terminal di dalam folder proyek ini, lalu jalankan:
   ```bash
   npm install

## ATURAN KETAT PENJURIAN (WAJIB DIBACA)
Repositori ini telah ditanamkan sistem **Auto-Grader Panitia**. Kualitas penulisan kode anda akan dinilai secara otomatis oleh mesin sebelum masuk ke tahap wawancara Juri.

Anda **DILARANG KERAS** melakukan modifikasi, menghapus, atau mengubah konfigurasi pada file berikut:
- `eslint.config.js` (atau `.eslintrc.cjs`)
- `.jscpd.json`
- `package.json (khususnya pada bagian scripts)`

Jika panitia menemukan indikasi manipulasi pada file-file pengawas di atas, tim Anda akan **DIGUGURKAN SECARA OTOMATIS (SKOR 0).**

### Parameter Penilaian Mesin
1. **Lolos Build Production**: Aplikasi harus bisa di-build tanpa error (npm run build).
2. **Zero Warning/Error Linter**:
    - Dilarang meninggalkan `console.log()` pada kode final.
    - Dilarang mendeklarasikan variabel yang tidak digunakan.
    - Dilarang menggunakan tipe data any pada TypeScript.
    - Wajib mematuhi aturan dependency array pada React Hooks (useEffect, useCallback).
3. **Anti-Duplikasi (Copy-Paste)**: Sistem akan mendeteksi penulisan UI atau logika yang diulang-ulang secara berlebihan tanpa menggunakan prinsip Reusable Component. Buatlah kode yang modular!

## Pengumpulan Final
Pastikan Anda telah melakukan commit dan push seluruh kode final Anda ke repositori **GitHub Public** masing-masing sebelum batas waktu yang ditentukan. URL repositori tersebut akan diserahkan kepada panitia melalui formulir resmi.

# Happy Coding and May the Best Architecture Win!
**HIMA UNIBI | Divisi Acara INFORMIND FEST 2026**