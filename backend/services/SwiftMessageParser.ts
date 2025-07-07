export class SwiftMessageParser {
  parseMT103(message: string) {
    return {
      reference: this.extract(message, ':20:'),
      amount: parseFloat(this.extract(message, ':32A:') || '0'),
      sender: this.extract(message, ':50K:'),
      beneficiary: this.extract(message, ':59:')
    };
  }

  private extract(msg: string, tag: string): string {
    const start = msg.indexOf(tag);
    if (start === -1) return '';
    const end = msg.indexOf('\n:', start + tag.length);
    return msg.substring(start + tag.length, end !== -1 ? end : undefined).trim();
  }
}
