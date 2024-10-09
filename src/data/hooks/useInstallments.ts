import { CalculateInstallments } from '@/core';

export default function useInstallments(
    value: number,
    installment: number = 1
) {
    const valueInstallments = new CalculateInstallments().execute(
        value,
        installment
    );

    return valueInstallments;
}
