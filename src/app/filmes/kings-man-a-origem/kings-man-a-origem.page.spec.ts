import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KingsManAOrigemPage } from './kings-man-a-origem.page';

describe('KingsManAOrigemPage', () => {
  let component: KingsManAOrigemPage;
  let fixture: ComponentFixture<KingsManAOrigemPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KingsManAOrigemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KingsManAOrigemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
