// Window interface declaration untuk TypeScript
declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

/**
 * Mengirimkan event klik WhatsApp ke Google Analytics 4
 * @param locationLabel - Lokasi tombol (contoh: "Hero Section", "Navbar", "Footer", "Halaman Harga")
 * @param customMessage - Pesan pembuka WhatsApp yang dikirim calon klien
 */
export const trackWhatsAppClick = (locationLabel: string, customMessage?: string) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'click_whatsapp', {
      event_category: 'Lead Generation',
      event_label: locationLabel,
      message_template: customMessage || 'Default WA Message',
      value: 1,
    });
  }
};
