"use client";

import { useEffect } from "react";

/**
 * Blog içeriğine (HTML string) gömülen üçüncü taraf grafikler.
 * İçerikte şu yer tutucu kullanılır:
 *   <div data-embed="statcounter" data-chart-id="all-search_engine-ww-monthly-202510-202610"> ...yedek görsel... </div>
 * Grafik yalnızca okuyucu bölüme yaklaştığında yüklenir (ağır script sayfa hızını düşürmesin diye),
 * genişliği kapsayıcıya göre ayarlanır; yüklenemezse yedek görsel yerinde kalır.
 */

const FUSIONCHARTS_SRC = "https://www.statcounter.com/js/fusioncharts.js";

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[data-src="${src}"]`);
    if (existing?.dataset.loaded === "1") return resolve();
    const s = existing ?? document.createElement("script");
    s.addEventListener("load", () => {
      s.dataset.loaded = "1";
      resolve();
    });
    s.addEventListener("error", () => reject(new Error(src)));
    if (!existing) {
      s.src = src;
      s.async = true;
      s.dataset.src = src;
      document.body.appendChild(s);
    }
  });
}

async function mountStatCounter(holder: HTMLElement) {
  const chartId = holder.dataset.chartId;
  if (!chartId || holder.dataset.mounted) return;
  holder.dataset.mounted = "1";

  // Grafik kenar boşluğu eklediği için kapsayıcıdan biraz dar çizilir; yatay kaydırma çubuğu çıkmasın.
  const width = Math.max(300, Math.min(holder.clientWidth - 12, 760));
  const height = width < 500 ? 320 : 400;

  const chartDiv = document.createElement("div");
  chartDiv.id = chartId;
  chartDiv.setAttribute("width", String(width));
  chartDiv.setAttribute("height", String(height));
  chartDiv.style.width = `${width}px`;
  chartDiv.style.height = `${height}px`;
  chartDiv.style.maxWidth = "100%";
  chartDiv.className = "statcounter-chart";

  const fallback = holder.querySelector<HTMLElement>("[data-embed-fallback]");
  holder.insertBefore(chartDiv, holder.firstChild);

  try {
    await loadScript(FUSIONCHARTS_SRC);
    await loadScript(`https://gs.statcounter.com/chart.php?${chartId}&chartWidth=${width}`);
    if (fallback) fallback.style.display = "none";
  } catch {
    chartDiv.remove();
  }
}

export default function BlogEmbeds() {
  useEffect(() => {
    const holders = Array.from(document.querySelectorAll<HTMLElement>('.blog-content [data-embed="statcounter"]'));
    if (holders.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            void mountStatCounter(entry.target as HTMLElement);
          }
        });
      },
      { rootMargin: "300px 0px" }
    );
    holders.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  return null;
}
