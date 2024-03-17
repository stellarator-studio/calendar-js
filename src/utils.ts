

function getRemainder(value: number, divisor: number): number {
  return (value % divisor + divisor) % divisor
}

export class Sexagenary {
  private static heavenly: string = '甲乙丙丁戊己庚辛壬癸';
  private static terrestrial: string = '子丑寅卯辰巳午未申酉戌亥';

  /**
   * Get Heavenly Stem from a number.
   *
   * @param value A number from 0 to 9.
   * @returns A Heavenly Stem.
   */
  public static getHeavenlyStem(value: number): string {
    let order = getRemainder(value, this.heavenly.length);
    return this.heavenly[order];
  }

  /**
   * Get Earthly Branch from a number.
   *
   * @param value A number from 0 to 11.
   * @returns A Earthly Branch.
   */
  public static getEarthlyBranches(value: number): string {
    let order = getRemainder(value, this.terrestrial.length);
    return this.terrestrial[order];
  }

  /**
   * Get Sexagenaty term from a number.
   *
   * @param value A number from 0 to 59.
   * @returns A Sexagenary term.
   */
  public static getSexagenary(value: number): string {
    return this.getHeavenlyStem(value) + this.getEarthlyBranches(value);
  }
}
