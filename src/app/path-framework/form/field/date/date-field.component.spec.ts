import { DateField } from './date-field.component';
import { IForm } from '../../../pathinterface';
import { TranslationService } from '../../../service/translation.service';

describe('DateField', () => {
  const createDateField = () => new DateField(
    {} as IForm,
    { getUserDateFormat: () => 'YYYY-MM-DD' } as unknown as TranslationService
  );

  it('keeps a date-only value on its calendar day', () => {
    const field = createDateField();

    field.setValue('2026-09-02' as unknown as Date);

    expect(field.value.getUTCFullYear()).toBe(2026);
    expect(field.value.getUTCMonth()).toBe(8);
    expect(field.value.getUTCDate()).toBe(2);
  });

  it('parses ISO timestamps', () => {
    const field = createDateField();

    field.setValue('2026-09-02T15:30:00.000Z' as unknown as Date);

    expect(field.value.getUTCFullYear()).toBe(2026);
    expect(field.value.getUTCMonth()).toBe(8);
    expect(field.value.getUTCDate()).toBe(2);
  });

  it('rejects invalid date-only values', () => {
    const field = createDateField();

    field.setValue('2026-02-30' as unknown as Date);

    expect(field.value).toBeNull();
  });
});
