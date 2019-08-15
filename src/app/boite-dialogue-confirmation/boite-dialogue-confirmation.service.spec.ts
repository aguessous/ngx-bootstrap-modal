/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BoiteDialogueConfirmationService } from './boite-dialogue-confirmation.service';

describe('Service: BoiteDialogueConfirmation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoiteDialogueConfirmationService]
    });
  });

  it('should ...', inject([BoiteDialogueConfirmationService], (service: BoiteDialogueConfirmationService) => {
    expect(service).toBeTruthy();
  }));
});
