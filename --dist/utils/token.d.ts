interface payloadData {
    confirmationCode?: string;
    loginConfirmationCode?: string;
    changePasswordConfirmationCode?: string;
    TelegramAuthorizationToken?: boolean;
    iat: number;
    id: number;
}
export declare class Tokens {
    create(payload: payloadData): string;
    check(token: string): string;
    getDecodedToken(token: string): payloadData;
}
export {};
