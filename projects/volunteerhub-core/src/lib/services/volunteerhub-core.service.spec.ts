import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { Configuration } from './configuration';
import { VolunteerHubCoreService } from './volunteerhub-core.service';
import { BrowserModule } from '@angular/platform-browser';

describe('VolunteerHubCoreService', () => {
  let service: VolunteerHubCoreService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule             // Fixes NG0402 error
      ],
      providers: [
        Configuration,
        provideHttpClient(),
        VolunteerHubCoreService
      ]
    }).compileComponents();

    service = TestBed.inject(VolunteerHubCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
