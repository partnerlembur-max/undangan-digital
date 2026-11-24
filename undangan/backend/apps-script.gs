/**
 * Backend RSVP + Ucapan untuk undangan (Google Apps Script + Google Sheets).
 * Cara pasang: lihat PANDUAN.md bagian A.
 */
const ADMIN_KEY = 'GANTI-DENGAN-KUNCI-RAHASIA-ANDA'; // wajib diganti! dipakai di admin.html
const SHEET_NAME = 'RSVP';

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let s = ss.getSheetByName(SHEET_NAME);
  if (!s) {
    s = ss.insertSheet(SHEET_NAME);
    s.appendRow(['Waktu', 'Nama', 'Kehadiran', 'Acara', 'Jumlah', 'Ucapan', 'Tampilkan']);
    s.setFrozenRows(1);
  }
  return s;
}
const json_ = o => ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
// buang karakter pembuka rumus (=,+,-,@) agar tidak jadi formula di Sheets
const clean_ = (v, n) => String(v || '').replace(/^[=+\-@\s]+/, '').trim().slice(0, n);

function doPost(e) {
  const p = e.parameter || {};
  if (p.web) return json_({ ok: true });                       // honeypot: bot mengisi kolom tersembunyi
  const nama = clean_(p.n, 60);
  if (!nama) return json_({ ok: false, error: 'Nama wajib diisi' });
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    sheet_().appendRow([
      new Date(), nama,
      p.h === 'Hadir' ? 'Hadir' : 'Tidak hadir',
      clean_(p.a, 40),
      Math.min(10, Math.max(1, parseInt(p.j, 10) || 1)),
      clean_(p.u, 500),
      'Ya'                                                     // ubah jadi "Tidak" di Sheet untuk menyembunyikan ucapan
    ]);
  } finally { lock.releaseLock(); }
  return json_({ ok: true });
}

function doGet(e) {
  const a = (e.parameter || {}).aksi;
  const rows = sheet_().getDataRange().getValues().slice(1);
  if (a === 'ucapan') {                                        // publik: hanya nama, status, ucapan
    const data = rows.filter(r => r[5] && r[6] !== 'Tidak').reverse().slice(0, 50)
      .map(r => ({ n: r[1], h: r[2], u: r[5], t: r[0] }));
    return json_({ ok: true, data });
  }
  if (a === 'admin') {                                         // privat: semua data, butuh kunci
    if (e.parameter.kunci !== ADMIN_KEY) return json_({ ok: false, error: 'Kunci salah' });
    return json_({ ok: true, data: rows.map(r => ({ t: r[0], n: r[1], h: r[2], a: r[3], j: r[4], u: r[5] })) });
  }
  return json_({ ok: true, info: 'Backend undangan aktif' });
}
