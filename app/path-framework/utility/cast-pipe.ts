// https://stackoverflow.com/questions/65486599/error-ts2739-type-abstractcontrol-is-missing-the-following-properties-from-ty/69466380#69466380

import { Pipe, PipeTransform } from '@angular/core';

/**
 * Cast super type into type using generics
 * Return Type obtained by assignment type.
 */

@Pipe({ name: 'cast' })
export class CastPipe implements PipeTransform {
     /**
     * Cast (S: SuperType) into (T: Type) using @Generics.
     * @param value S: SuperType obtained from input type.
     * @returns (T: Type) obtained by assignment type.
     */
    transform<S, T extends S>(value: S): T {
        return <T>value;
    }
}