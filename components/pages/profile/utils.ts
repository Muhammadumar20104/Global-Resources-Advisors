export function maskEmail(email: string) {
    const [localPart, domain] = email.split('@');
    const maskedLocalPart = localPart.slice(0, 2) + '...';
    const [domainExtension] = domain.split('.');
    const maskedDomain = domainExtension.slice(-2);

    return `${maskedLocalPart}${maskedDomain}`;
}
