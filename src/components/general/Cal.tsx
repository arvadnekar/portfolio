'use client';

import { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

import { Button } from '../ui/button';
import { CalendarDays, ChevronRight } from 'lucide-react';

type CalProps = React.ComponentProps<'button'>;

export default function Cal({ className = '', style, ...props }: CalProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '30min' });
      cal('ui', {
        cssVarsPerTheme: {
          light: { 'cal-brand': '#2563eb' },
          dark: { 'cal-brand': '#fafafa' },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);

  return (
    <Button
      type="button"
      variant="outline"
      data-cal-namespace="30min"
      data-cal-link="aakanksha-vadnerkar-k7tbb0/30min"
      data-cal-config='{"layout":"month_view","theme":"light"}'
      style={style}
      className={className}
      {...props}
    >
      <CalendarDays size={24} />
      Schedule a call
      <ChevronRight />
    </Button>
  );
}
