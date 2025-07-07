// 📁 backend/services/SwiftMessageParser.ts
class SwiftMessageParser {
    parseMT103(message: string) {
        return {
            transactionReference: this.extractField(message, ':20:'),
            amount: this.extractField(message, ':32A:'),
            orderingCustomer: this.extractField(message, ':50K:'),
            beneficiary: this.extractField(message, ':59:')
        };
    }

    private extractField(message: string, tag: string): string {
        const start = message.indexOf(tag);
        if (start === -1) return '';
        const end = message.indexOf('\n:', start + tag.length);
        return message.substring(start + tag.length, end !== -1 ? end : undefined).trim();
    }
}
