import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GramaticasPage } from './gramaticas.page';

describe('GramaticasPage', () => {
  let component: GramaticasPage;
  let fixture: ComponentFixture<GramaticasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GramaticasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GramaticasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
