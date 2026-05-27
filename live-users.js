/* ════════════════════════════════════════════════════
   LIVE USERS POPUP — แก้ที่นี่ที่เดียว ทุกหน้าจะเปลี่ยนตาม
   ════════════════════════════════════════════════════ */
var POPUP_INTERVAL_MS = 10000;  // แสดงทุกกี่มิลลิวินาที  (10000 = 10 วิ)
var POPUP_DURATION_MS = 3000;   // ค้างไว้กี่มิลลิวินาที  (3000  =  3 วิ)
var POPUP_COUNT_MIN   = 0;      // จำนวนคนต่ำสุด
var POPUP_COUNT_MAX   = 15;     // จำนวนคนสูงสุด

function showUserPopup() {
  var popup = document.getElementById('live-users-popup');
  if (!popup) return;
  var count = Math.floor(Math.random() * (POPUP_COUNT_MAX - POPUP_COUNT_MIN + 1)) + POPUP_COUNT_MIN;
  document.getElementById('user-count').innerText = count;
  popup.style.display = 'block';
  setTimeout(function () { popup.style.display = 'none'; }, POPUP_DURATION_MS);
}
setInterval(showUserPopup, POPUP_INTERVAL_MS);
