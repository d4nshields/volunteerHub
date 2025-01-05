import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { Configuration } from './configuration';
import { VolunteerHubCoreService } from './volunteerhub-core.service';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('VolunteerHubCoreService', () => {
  let service: VolunteerHubCoreService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserDynamicTestingModule             // Replaces BrowserModule
      ],
      providers: [
        Configuration,
        VolunteerHubCoreService,
        provideHttpClient()
      ]
    }).compileComponents();

    service = TestBed.inject(VolunteerHubCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
