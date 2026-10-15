import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JlasSideMenu } from './jlas-side-menu';
import { provideRouter } from '@angular/router';
import { describe, it, expect, vi } from 'vitest';

describe('JlasSideMenu', () => {
  let component: JlasSideMenu;
  let fixture: ComponentFixture<JlasSideMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JlasSideMenu],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(JlasSideMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call signIn when button is clicked', () =>{
    const spy = vi.spyOn(component.signIn, 'emit');
    fixture.componentRef.setInput('isAuthenticated', false);

    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector(
      '[data-login]'
    ) as HTMLButtonElement;

    button.click();
    expect(spy).toHaveBeenCalled();

  } )
});


