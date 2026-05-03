'use client';
import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    // In production, you would send this to Google Analytics or Vercel Analytics
    // Example: sendToAnalytics(metric);
    console.log(`Web Vitals Metric: ${metric.name}`, metric);
  });
  return null;
}
