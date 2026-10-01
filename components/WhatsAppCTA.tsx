'use client';

import React from 'react';
import { trackWhatsAppClick } from '@/lib/gtag';
import { SITE } from '@/lib/data';

interface WhatsAppCTAProps {
  phoneNumber?: string; // Format: 628xxxxxxxxxx
  message?: string;
  locationLabel: string; // Misal: "Hero CTA", "Header Navigation", "Halaman Detail Layanan"
  className?: string;
  children: React.ReactNode;
}

export default function WhatsAppCTA({
  phoneNumber = SITE.whatsapp,
  message = 'Halo Galivra, saya ingin berkonsultasi mengenai pembuatan project digital.',
  locationLabel,
  className = '',
  children,
}: WhatsAppCTAProps) {
  const handleClick = () => {
    trackWhatsAppClick(locationLabel, message);
  };

  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}
