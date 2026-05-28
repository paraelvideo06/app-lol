import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly newsletter = signal('');
  protected readonly subscribed = signal(false);

  protected readonly cols = [
    {
      title: 'PLATAFORMA',
      links: ['Campeones', 'Tier List', 'Builds', 'Leaderboards', 'Live Match', 'Draft Engine'],
    },
    {
      title: 'COMPETITIVO',
      links: ['LEC · LCK · LPL', 'Worlds 2026', 'MSI 2026', 'Hextech Cup', 'Estadísticas pro', 'Histórico'],
    },
    {
      title: 'DESARROLLADORES',
      links: ['API Docs', 'Estado del servicio', 'Changelog', 'GraphQL Playground', 'OAuth Riot', 'Open Source'],
    },
    {
      title: 'COMUNIDAD',
      links: ['Discord 142K+', 'Twitter / X', 'GitHub', 'Reddit', 'YouTube', 'Twitch'],
    },
  ];

  protected readonly systemStatus = [
    { name: 'Riot API', value: 'ONLINE', state: 'ok' },
    { name: 'Latencia EUW', value: '42 ms', state: 'ok' },
    { name: 'Cache Redis', value: 'HIT 98.7%', state: 'ok' },
    { name: 'AI Engine', value: 'v3.6 STABLE', state: 'ok' },
    { name: 'Replays', value: 'INDEX OK', state: 'ok' },
    { name: 'CDN Hextech', value: 'GLOBAL', state: 'ok' },
  ];

  subscribe() {
    if (this.newsletter().length > 3) {
      this.subscribed.set(true);
      setTimeout(() => this.subscribed.set(false), 4000);
      this.newsletter.set('');
    }
  }

  updateEmail(e: Event) {
    const t = e.target as HTMLInputElement;
    this.newsletter.set(t.value);
  }
}
