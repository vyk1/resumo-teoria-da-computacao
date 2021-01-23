import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LivresContextoPage } from './livres-contexto.page';

describe('LivresContextoPage', () => {
  let component: LivresContextoPage;
  let fixture: ComponentFixture<LivresContextoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivresContextoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LivresContextoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
