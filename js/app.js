// ==========================================
// 1. STATİK YEDEK VERİLER (CORS & YEREL TEST DESTEĞİ)
// ==========================================

const staticScrollyData = [
  { "time_bracket": "0-30 dk", "user_count": 2271, "avg_fatigue": 4.22, "avg_sleep_onset": 28.57, "avg_total_sleep": 6.88, "avg_awakenings": 2.15, "avg_deep_sleep_pct": 18.12 },
  { "time_bracket": "31-60 dk", "user_count": 3559, "avg_fatigue": 4.46, "avg_sleep_onset": 30.50, "avg_total_sleep": 6.80, "avg_awakenings": 2.24, "avg_deep_sleep_pct": 17.71 },
  { "time_bracket": "61-90 dk", "user_count": 1633, "avg_fatigue": 4.76, "avg_sleep_onset": 33.58, "avg_total_sleep": 6.72, "avg_awakenings": 2.41, "avg_deep_sleep_pct": 17.16 },
  { "time_bracket": "91-120 dk", "user_count": 596, "avg_fatigue": 5.16, "avg_sleep_onset": 36.43, "avg_total_sleep": 6.59, "avg_awakenings": 2.82, "avg_deep_sleep_pct": 16.45 },
  { "time_bracket": "120+ dk", "user_count": 441, "avg_fatigue": 5.38, "avg_sleep_onset": 38.30, "avg_total_sleep": 6.55, "avg_awakenings": 2.96, "avg_deep_sleep_pct": 16.09 }
];

const staticAppData = [
  { "primary_app_category": "Gaming", "user_count": 882, "avg_screen_time": 55.14, "avg_fatigue": 4.67, "avg_onset": 32.96, "avg_deep_sleep": 17.54 },
  { "primary_app_category": "Short-Form Video", "user_count": 2468, "avg_screen_time": 54.32, "avg_fatigue": 4.75, "avg_onset": 34.72, "avg_deep_sleep": 17.52 },
  { "primary_app_category": "Streaming", "user_count": 1193, "avg_screen_time": 54.30, "avg_fatigue": 4.40, "avg_onset": 29.08, "avg_deep_sleep": 17.57 },
  { "primary_app_category": "News", "user_count": 659, "avg_screen_time": 53.89, "avg_fatigue": 4.42, "avg_onset": 28.51, "avg_deep_sleep": 17.54 },
  { "primary_app_category": "Social Media", "user_count": 1834, "avg_screen_time": 52.98, "avg_fatigue": 4.61, "avg_onset": 32.37, "avg_deep_sleep": 17.54 },
  { "primary_app_category": "Messaging", "user_count": 753, "avg_screen_time": 52.49, "avg_fatigue": 4.46, "avg_onset": 30.27, "avg_deep_sleep": 17.53 },
  { "primary_app_category": "E-Reading", "user_count": 711, "avg_screen_time": 52.24, "avg_fatigue": 4.04, "avg_onset": 23.14, "avg_deep_sleep": 17.58 }
];

const staticInteractiveData = [
  { "chronotype": "Early Bird", "primary_app_category": "E-Reading", "user_count": 181, "avg_screen_time": 53.01, "avg_fatigue": 3.91, "avg_onset": 24.01, "avg_sleep_hours": 7.02, "avg_deep_sleep_pct": 17.54 },
  { "chronotype": "Early Bird", "primary_app_category": "Gaming", "user_count": 185, "avg_screen_time": 52.14, "avg_fatigue": 4.44, "avg_onset": 33.32, "avg_sleep_hours": 7.08, "avg_deep_sleep_pct": 17.51 },
  { "chronotype": "Early Bird", "primary_app_category": "Messaging", "user_count": 191, "avg_screen_time": 55.07, "avg_fatigue": 4.38, "avg_onset": 31.04, "avg_sleep_hours": 7.00, "avg_deep_sleep_pct": 17.22 },
  { "chronotype": "Early Bird", "primary_app_category": "News", "user_count": 149, "avg_screen_time": 54.09, "avg_fatigue": 4.24, "avg_onset": 29.48, "avg_sleep_hours": 7.05, "avg_deep_sleep_pct": 17.55 },
  { "chronotype": "Early Bird", "primary_app_category": "Short-Form Video", "user_count": 621, "avg_screen_time": 53.23, "avg_fatigue": 4.52, "avg_onset": 34.95, "avg_sleep_hours": 7.16, "avg_deep_sleep_pct": 17.47 },
  { "chronotype": "Early Bird", "primary_app_category": "Social Media", "user_count": 452, "avg_screen_time": 53.09, "avg_fatigue": 4.43, "avg_onset": 32.84, "avg_sleep_hours": 7.10, "avg_deep_sleep_pct": 17.56 },
  { "chronotype": "Early Bird", "primary_app_category": "Streaming", "user_count": 288, "avg_screen_time": 55.18, "avg_fatigue": 4.26, "avg_onset": 29.50, "avg_sleep_hours": 7.02, "avg_deep_sleep_pct": 17.56 },
  { "chronotype": "Intermediate", "primary_app_category": "E-Reading", "user_count": 309, "avg_screen_time": 52.80, "avg_fatigue": 4.00, "avg_onset": 22.92, "avg_sleep_hours": 6.75, "avg_deep_sleep_pct": 17.65 },
  { "chronotype": "Intermediate", "primary_app_category": "Gaming", "user_count": 367, "avg_screen_time": 55.42, "avg_fatigue": 4.62, "avg_onset": 32.99, "avg_sleep_hours": 6.89, "avg_deep_sleep_pct": 17.54 },
  { "chronotype": "Intermediate", "primary_app_category": "Messaging", "user_count": 305, "avg_screen_time": 52.40, "avg_fatigue": 4.41, "avg_onset": 30.52, "avg_sleep_hours": 6.86, "avg_deep_sleep_pct": 17.46 },
  { "chronotype": "Intermediate", "primary_app_category": "News", "user_count": 265, "avg_screen_time": 55.26, "avg_fatigue": 4.37, "avg_onset": 28.67, "avg_sleep_hours": 6.82, "avg_deep_sleep_pct": 17.42 },
  { "chronotype": "Intermediate", "primary_app_category": "Short-Form Video", "user_count": 994, "avg_screen_time": 55.17, "avg_fatigue": 4.74, "avg_onset": 35.16, "avg_sleep_hours": 6.86, "avg_deep_sleep_pct": 17.48 },
  { "chronotype": "Intermediate", "primary_app_category": "Social Media", "user_count": 738, "avg_screen_time": 54.25, "avg_fatigue": 4.57, "avg_onset": 32.32, "avg_sleep_hours": 6.87, "avg_deep_sleep_pct": 17.46 },
  { "chronotype": "Intermediate", "primary_app_category": "Streaming", "user_count": 488, "avg_screen_time": 55.60, "avg_fatigue": 4.37, "avg_onset": 29.13, "avg_sleep_hours": 6.79, "avg_deep_sleep_pct": 17.50 },
  { "chronotype": "Night Owl", "primary_app_category": "E-Reading", "user_count": 221, "avg_screen_time": 50.85, "avg_fatigue": 4.20, "avg_onset": 22.73, "avg_sleep_hours": 6.39, "avg_deep_sleep_pct": 17.50 },
  { "chronotype": "Night Owl", "primary_app_category": "Gaming", "user_count": 330, "avg_screen_time": 56.50, "avg_fatigue": 4.86, "avg_onset": 32.74, "avg_sleep_hours": 6.52, "avg_deep_sleep_pct": 17.56 },
  { "chronotype": "Night Owl", "primary_app_category": "Messaging", "user_count": 257, "avg_screen_time": 50.68, "avg_fatigue": 4.56, "avg_onset": 29.41, "avg_sleep_hours": 6.54, "avg_deep_sleep_pct": 17.84 },
  { "chronotype": "Night Owl", "primary_app_category": "News", "user_count": 245, "avg_screen_time": 52.29, "avg_fatigue": 4.59, "avg_onset": 27.75, "avg_sleep_hours": 6.33, "avg_deep_sleep_pct": 17.67 },
  { "chronotype": "Night Owl", "primary_app_category": "Short-Form Video", "user_count": 853, "avg_screen_time": 54.12, "avg_fatigue": 4.92, "avg_onset": 34.06, "avg_sleep_hours": 6.52, "avg_deep_sleep_pct": 17.60 },
  { "chronotype": "Night Owl", "primary_app_category": "Social Media", "user_count": 644, "avg_screen_time": 51.46, "avg_fatigue": 4.78, "avg_onset": 32.11, "avg_sleep_hours": 6.53, "avg_deep_sleep_pct": 17.62 },
  { "chronotype": "Night Owl", "primary_app_category": "Streaming", "user_count": 417, "avg_screen_time": 52.18, "avg_fatigue": 4.53, "avg_onset": 28.73, "avg_sleep_hours": 6.50, "avg_deep_sleep_pct": 17.67 }
];

let scrollyData = staticScrollyData;
let appData = staticAppData;
let interactiveData = staticInteractiveData;

let scrollyChartInstance = null;
let doughnutChartInstance = null;
let lineChartInstance = null;
let radarChartInstance = null;

const categoryNamesTr = {
  'Gaming': 'Mobil Oyun',
  'Short-Form Video': 'Kısa Video (Reels / TikTok)',
  'Streaming': 'Dizi & Film (Streaming)',
  'News': 'Haber & Makale',
  'Social Media': 'Sosyal Medya',
  'Messaging': 'Mesajlaşma',
  'E-Reading': 'E-Kitap / Okuma'
};

// HİBRİT VERİ YÜKLEME (Sunucuda fetch dener, yerelde yedeğe geçer)
async function loadData() {
  try {
    const [scrollyRes, appRes, interRes] = await Promise.all([
      fetch('data/scrolly_steps.json'),
      fetch('data/app_distribution.json'),
      fetch('data/interactive_matrix.json')
    ]);
    scrollyData = await scrollyRes.json();
    appData = await appRes.json();
    interactiveData = await interRes.json();
  } catch (err) {
    console.log('Yerel mod: Dahili veri yapısı kullanılıyor.');
  }

  // Grafikleri ve bölümleri başlat
  initScrollyChart();
  initDoughnutChart();
  initLineChart();
  initRadarChart();
  renderAppCards();
  initInteractiveSection();
  initScrollamaScroller();
}

// 1. GRAFİK (Çubuk Grafik): Scrollytelling Grafiği
function initScrollyChart() {
  const chartElement = document.getElementById('scrollyChart');
  if (!chartElement) return;

  const ctx = chartElement.getContext('2d');
  const labels = scrollyData.map(d => d.time_bracket);
  const fatigues = scrollyData.map(d => d.avg_fatigue);

  scrollyChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Ortalama Ertesi Gün Yorgunluğu (1-10)',
        data: fatigues,
        backgroundColor: [
          'rgba(56, 189, 248, 0.4)',
          'rgba(56, 189, 248, 0.4)',
          'rgba(56, 189, 248, 0.4)',
          'rgba(56, 189, 248, 0.4)',
          'rgba(56, 189, 248, 0.4)'
        ],
        borderColor: '#38bdf8',
        borderWidth: 1.5,
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      onClick: (event, activeElements) => {
        if (activeElements && activeElements.length > 0) {
          // Çubuğa tıklandığında 1-5 arasındaki ilgili adıma git
          updateActiveStep(activeElements[0].index + 1);
        }
      },
      plugins: {
        legend: { labels: { color: '#f8fafc', font: { family: 'Inter', size: 12 } } },
        tooltip: {
          callbacks: {
            afterLabel: function(context) {
              const item = scrollyData[context.dataIndex];
              return [
                `Kişi Sayısı: ${item.user_count}`,
                `Uykuya Dalma: ${item.avg_sleep_onset} dk`,
                `Derin Uyku: %${item.avg_deep_sleep_pct}`
              ];
            }
          }
        }
      },
      scales: {
        y: {
          min: 3.5, max: 6.0,
          ticks: { color: '#94a3b8' },
          grid: { color: 'rgba(255, 255, 255, 0.05)' }
        },
        x: {
          ticks: { color: '#94a3b8' },
          grid: { display: false }
        }
      }
    }
  });
}

// 2. GRAFİK (Halka / Doughnut Grafik): İçerik Türü Dağılımı
function initDoughnutChart() {
  const el = document.getElementById('categoryDoughnutChart');
  if (!el) return;

  const labels = appData.map(d => categoryNamesTr[d.primary_app_category] || d.primary_app_category);
  const data = appData.map(d => d.user_count);

  doughnutChartInstance = new Chart(el.getContext('2d'), {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: [
          '#f43f5e', '#38bdf8', '#a855f7', '#eab308', '#06b6d4', '#10b981', '#64748b'
        ],
        borderWidth: 1,
        borderColor: '#0f172a'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom', labels: { color: '#94a3b8', boxWidth: 12, font: { size: 10 } } }
      }
    }
  });
}

// 3. GRAFİK (Çizgi Grafik): Ekran Süresi ile Uyku Dinamikleri
function initLineChart() {
  const el = document.getElementById('trendLineChart');
  if (!el) return;

  const labels = scrollyData.map(d => d.time_bracket);
  const onsetData = scrollyData.map(d => d.avg_sleep_onset);
  const deepSleepData = scrollyData.map(d => d.avg_deep_sleep_pct);

  lineChartInstance = new Chart(el.getContext('2d'), {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Uykuya Dalma Süresi (Dk)',
          data: onsetData,
          borderColor: '#fb7185',
          backgroundColor: 'rgba(251, 113, 133, 0.2)',
          tension: 0.3,
          fill: true
        },
        {
          label: 'Derin Uyku Oranı (%)',
          data: deepSleepData,
          borderColor: '#38bdf8',
          backgroundColor: 'transparent',
          borderDash: [5, 5],
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: '#94a3b8', font: { size: 11 } } }
      },
      scales: {
        y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
        x: { ticks: { color: '#94a3b8' }, grid: { display: false } }
      }
    }
  });
}

// 4. GRAFİK (Radar Grafik): Kronotiplerin Uyku Profili
function initRadarChart() {
  const el = document.getElementById('chronotypeRadarChart');
  if (!el) return;

  radarChartInstance = new Chart(el.getContext('2d'), {
    type: 'radar',
    data: {
      labels: ['Gece Ekranı (dk)', 'Yorgunluk (x10)', 'Uykuya Dalma (dk)', 'Toplam Uyku (saat x10)', 'Derin Uyku (%)'],
      datasets: [
        {
          label: 'Erken Kalkan (Early Bird)',
          data: [53.5, 43.1, 30.7, 70.6, 17.5],
          borderColor: '#10b981',
          backgroundColor: 'rgba(16, 185, 129, 0.15)'
        },
        {
          label: 'Dengeli (Intermediate)',
          data: [54.4, 44.4, 30.4, 68.3, 17.5],
          borderColor: '#38bdf8',
          backgroundColor: 'rgba(56, 189, 248, 0.15)'
        },
        {
          label: 'Gece Kuşu (Night Owl)',
          data: [53.2, 46.4, 30.2, 64.9, 17.6],
          borderColor: '#f43f5e',
          backgroundColor: 'rgba(244, 63, 94, 0.15)'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          grid: { color: 'rgba(255, 255, 255, 0.08)' },
          pointLabels: { color: '#94a3b8', font: { size: 10 } },
          ticks: { display: false }
        }
      },
      plugins: {
        legend: { labels: { color: '#f8fafc', font: { size: 11 } } }
      }
    }
  });
}

// SCROLLAMA TETİKLEYİCİSİ (KAYDIRDIKÇA OTOMATİK GEÇİŞ)
function initScrollamaScroller() {
  if (typeof scrollama === 'undefined') return;

  const scroller = scrollama();
  scroller
    .setup({
      step: '.step',
      offset: 0.5,
      debug: false
    })
    .onStepEnter(response => {
      updateActiveStep(response.index);
    });

  window.addEventListener('resize', scroller.resize);
}

// ADIM GÜNCELLEME VE ÇUBUK VURGULAMA (6 ADIM KONTROLÜ)
function updateActiveStep(stepIndex) {
  document.querySelectorAll('.step').forEach((el, idx) => {
    if (idx === stepIndex) {
      el.classList.add('is-active');
    } else {
      el.classList.remove('is-active');
    }
  });

  if (!scrollyChartInstance) return;

  // Adım 0 ise genel bakış: Tüm çubuklar eşit mavi
  if (stepIndex === 0) {
    scrollyChartInstance.data.datasets[0].backgroundColor = scrollyData.map(() => 'rgba(56, 189, 248, 0.45)');
  } else {
    // 1-5 arasındaki adımlarda ilgili çubuk tek başına parlar
    const barIdx = stepIndex - 1;
    const bgColors = scrollyData.map((_, i) => {
      if (i === barIdx) {
        return barIdx >= 3 ? '#fb7185' : '#38bdf8';
      }
      return 'rgba(148, 163, 184, 0.2)';
    });
    scrollyChartInstance.data.datasets[0].backgroundColor = bgColors;
  }
  scrollyChartInstance.update();
}

// KARTLARI DİNAMİK LİSTELEME
function renderAppCards() {
  const container = document.getElementById('appCardsContainer');
  if (!container) return;

  container.innerHTML = appData.map(app => {
    const turkceKategori = categoryNamesTr[app.primary_app_category] || app.primary_app_category;
    return `
      <div class="app-card">
        <h4>
          <span>${turkceKategori}</span>
          <span style="font-size: 0.85rem; color: #38bdf8;">${app.user_count} kişi</span>
        </h4>
        <div class="app-stat"><span>Ort. Ekran:</span><span>${app.avg_screen_time} dk</span></div>
        <div class="app-stat"><span>Yorgunluk:</span><span>${app.avg_fatigue} / 10</span></div>
        <div class="app-stat"><span>Dalma Süresi:</span><span>${app.avg_onset} dk</span></div>
        <div class="app-stat"><span>Derin Uyku:</span><span>%${app.avg_deep_sleep}</span></div>
      </div>
    `;
  }).join('');
}

// OKUYUCU KEŞFİ ETKİLEŞİMİ
function initInteractiveSection() {
  const chronoSelect = document.getElementById('chronotypeSelect');
  const appSelect = document.getElementById('appSelect');
  const resultDiv = document.getElementById('userResultDisplay');

  if (!chronoSelect || !appSelect || !resultDiv) return;

  function updateResult() {
    const selectedChrono = chronoSelect.value;
    const selectedApp = appSelect.value;

    const match = interactiveData.find(d => 
      d.chronotype === selectedChrono && d.primary_app_category === selectedApp
    );

    if (match) {
      resultDiv.innerHTML = `
        <div class="result-grid">
          <div class="result-item">
            <h5>Ortalama Ekran Süresi</h5>
            <div class="value">${match.avg_screen_time} <span>dk</span></div>
          </div>
          <div class="result-item">
            <h5>Ertesi Gün Yorgunluk Skoru</h5>
            <div class="value" style="color: ${match.avg_fatigue >= 4.5 ? '#fb7185' : '#38bdf8'};">${match.avg_fatigue} <span>/ 10</span></div>
          </div>
          <div class="result-item">
            <h5>Uykuya Dalma Süresi</h5>
            <div class="value">${match.avg_onset} <span>dk</span></div>
          </div>
        </div>
        <div style="margin-top: 1.2rem; text-align: center; font-size: 0.9rem; color: #94a3b8;">
          Bu gruptaki toplam katılımcı: <strong>${match.user_count} kişi</strong> • Ortalama Toplam Uyku: <strong>${match.avg_sleep_hours} saat</strong>
        </div>
      `;
    }
  }

  chronoSelect.addEventListener('change', updateResult);
  appSelect.addEventListener('change', updateResult);
  updateResult();
}

document.addEventListener('DOMContentLoaded', loadData);
