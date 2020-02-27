import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArchwizardModule } from '../archwizard.module';
import { WizardComponent } from './wizard.component';

@Component({
    selector: 'aw-test-wizard',
    template: `
        <aw-wizard>
            <div>
                <aw-wizard-step></aw-wizard-step>
            </div>
            <div>
                <aw-wizard-step></aw-wizard-step>
            </div>
            <div>
                <div>
                    <aw-wizard-step></aw-wizard-step>
                </div>
            </div>
        </aw-wizard>
  `
})
class WizardTestComponent {
    @ViewChild(WizardComponent) public wizard: WizardComponent;
}

describe('WizardComponent', () => {
    let wizardTestFixture: ComponentFixture<WizardTestComponent>;

    let wizardTest: WizardTestComponent;
    let wizard: WizardComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WizardTestComponent],
            imports: [ArchwizardModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        wizardTestFixture = TestBed.createComponent(WizardTestComponent);
        wizardTestFixture.detectChanges();

        wizardTest = wizardTestFixture.componentInstance;
        wizard = wizardTest.wizard;
    });

    it('should create', () => {
        expect(wizardTest).toBeTruthy();
        expect(wizard).toBeTruthy();
    });

    it('should contain 3 steps', () => {
        expect(wizard.wizardSteps.length).toBe(3);
    });

});

