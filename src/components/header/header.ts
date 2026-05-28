import {
  Component,
  signal,
  HostListener,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavLink {
  label: string;
  badge?: string;
  active?: boolean;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  protected readonly scrolled = signal(false);
  protected readonly mobileOpen = signal(false);
  protected readonly regionOpen = signal(false);
  protected readonly region = signal('EUW');
  protected readonly searchFocus = signal(false);

  protected readonly regions = [
    { code: 'EUW', label: 'Europa Oeste', ping: 28 },
    { code: 'EUNE', label: 'Europa Nórdica', ping: 41 },
    { code: 'NA', label: 'Norteamérica', ping: 112 },
    { code: 'KR', label: 'Corea', ping: 198 },
    { code: 'BR', label: 'Brasil', ping: 152 },
    { code: 'LAS', label: 'Latam Sur', ping: 168 },
    { code: 'JP', label: 'Japón', ping: 220 },
    { code: 'OCE', label: 'Oceanía', ping: 240 },
  ];

  protected readonly links: NavLink[] = [
    { label: 'Campeones', active: true },
    { label: 'Tier List', badge: 'HOT' },
    { label: 'Partidas' },
    { label: 'Leaderboards' },
    { label: 'Builds' },
    { label: 'Esports' },
    { label: 'Patch 16.10', badge: 'NEW' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    if (typeof window === 'undefined') return;
    this.scrolled.set(window.scrollY > 24);
  }

  toggleMobile() {
    this.mobileOpen.update((v) => !v);
  }

  toggleRegion() {
    this.regionOpen.update((v) => !v);
  }

  selectRegion(code: string) {
    this.region.set(code);
    this.regionOpen.set(false);
  }
}
