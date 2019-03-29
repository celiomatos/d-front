export class M6S {
  private static messages = { NAME: 'Nome' };

  static message(key: string, ...interpolations: string[]): string {
    let msg = this.messages[key];

    if (interpolations.length > 0) {
      msg = this.format(msg, ...interpolations);
    }
    return msg;
  }

  public static format(str: string, ...parameters: string[]) {
    if (str) {
      if (parameters) {
        let i = 0;
        for (const parameter of parameters) {
          str = str.replace('{' + i + '}', parameter);
          i++;
        }
      }
    }
    return str;
  }
}
