import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { LeftColumnComponent } from './left-column/left-column.component';
import { MainCardComponent } from './main-card.component';
import { RightColumnComponent } from './right-column/right-column.component';

describe('MainCardComponent', () => {
	let component: MainCardComponent;
	let fixture: ComponentFixture<MainCardComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [
				MainCardComponent,
				LeftColumnComponent,
				RightColumnComponent
			]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MainCardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
