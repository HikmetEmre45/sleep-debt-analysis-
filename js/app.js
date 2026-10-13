// GLOBAL DEĞİŞKENLER
let scrollyData = [];
let appData = [];
let interactiveData = [];
let chartInstance = null;

// KATEGORİ TÜRKÇE ÇEVİRİ SÖZLÜĞÜ
const categoryNamesTr = {
  'Gaming': 'Mobil Oyun',
  'Short-Form Video': 'Kısa Video (Reels / TikTok)',
  'Streaming': 'Dizi & Film (Streaming)',
  'News': 'Haber & Makale',
  'Social Media': 'Sosyal Medya',
  'Messaging': 'Mesajlaşma',
  'E-Reading': 'E-Kitap / Okuma'
};

// 1. JSON VERİLERİNİ ÇEKME
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

    initChart();
    renderAppCards();
    initInteractiveSection();
    initDrawerMenu();
  } catch (err) {
    console.error('Veri yüklenirken hata oluştu:', err);
  }
}

// 2. CHART.JS İLE TIKLANABİLİR GRAFİK OLUŞTURMA
function initChart() {
  const chartElement = document.getElementById('scrollyChart');
  if (!chartElement) return;

  const ctx = chartElement.getContext('2d');
  const labels = scrollyData.map(d => d.time_bracket);
  const fatigues = scrollyData.map(d => d.avg_fatigue);

  chartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Ortalama Ertesi Gün Yorgunluğu (1-10)',
        data: fatigues,
        backgroundColor: [
          '#38bdf8', // İlk çubuk varsayılan aktif
          'rgba(148, 163, 184, 0.25)',
          'rgba(148, 163, 184, 0.25)',
          'rgba(148, 163, 184, 0.25)',
          'rgba(148, 163, 184, 0.25)'
        ],
        borderColor: [
          '#38bdf8',
          'rgba(148, 163, 184, 0.4)',
          'rgba(148, 163, 184, 0.4)',
          'rgba(148, 163, 184, 0.4)',
          'rgba(148, 163, 184, 0.4)'
        ],
        borderWidth: 1.5,
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      onClick: (event, activeElements) => {
        if (activeElements && activeElements.length > 0) {
          const clickedIndex = activeElements[0].index;
          updateActiveStep(clickedIndex);
        }
      },
      onHover: (event, chartElement) => {
        if (event && event.native && event.native.target) {
          event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
        }
      },
      plugins: {
        legend: {
          labels: { color: '#f8fafc', font: { family: 'Inter', size: 12 } }
        },
        tooltip: {
          callbacks: {
            afterLabel: function(context) {
              const idx = context.dataIndex;
              const item = scrollyData[idx];
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
          min: 3.5,
          max: 6.0,
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

// SEÇİLEN SÜTUNU VE SAĞDAKİ KARTI GÜNCELLEME
function updateActiveStep(stepIndex) {
  document.querySelectorAll('.step').forEach((el, idx) => {
    if (idx === stepIndex) {
      el.classList.add('is-active');
    } else {
      el.classList.remove('is-active');
    }
  });

  if (chartInstance) {
    const bgColors = scrollyData.map((_, i) => {
      if (i === stepIndex) {
        return stepIndex >= 3 ? '#fb7185' : '#38bdf8';
      }
      return 'rgba(148, 163, 184, 0.25)';
    });
    chartInstance.data.datasets[0].backgroundColor = bgColors;
    chartInstance.update();
  }
}

// 3. İÇERİK TÜRÜ KARTLARINI BASMA
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
        <div class="app-stat">
          <span>Ortalama Gece Ekranı:</span>
          <span>${app.avg_screen_time} dk</span>
        </div>
        <div class="app-stat">
          <span>Yorgunluk Skoru:</span>
          <span>${app.avg_fatigue} / 10</span>
        </div>
        <div class="app-stat">
          <span>Uykuya Dalma Süresi:</span>
          <span>${app.avg_onset} dk</span>
        </div>
        <div class="app-stat">
          <span>Derin Uyku Oranı:</span>
          <span>%${app.avg_deep_sleep}</span>
        </div>
      </div>
    `;
  }).join('');
}

// 4. ETKİLEŞİMLİ KEŞİF
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

// 5. ÇEKMECE MENÜ KONTROLÜ
function initDrawerMenu() {
  const openBtn = document.getElementById('floatingMenuBtn');
  const closeBtn = document.getElementById('closeMenuBtn');
  const overlay = document.getElementById('menuOverlay');
  const links = document.querySelectorAll('.drawer-link');

  if (!openBtn || !overlay) return;

  openBtn.addEventListener('click', () => {
    overlay.classList.add('is-open');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('is-open');
    });
  }

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('is-open');
    }
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      overlay.classList.remove('is-open');
    });
  });
  // YUKARI/AŞAĞI KAYDIKÇA VE TIKLANDIKÇA MENÜ ELEMANLARINI AKTİFLEŞTİRME
function initNavbarHighlight() {
  const links = document.querySelectorAll('.top-nav-link');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      // Önceki aktifi kaldır, tıklanana aktif ver
      document.querySelector('.top-nav-link.active')?.classList.remove('active');
      link.classList.add('active');
    });
  });
}

}


// Sayfa hazır olduğunda çalıştır
document.addEventListener('DOMContentLoaded', loadData);