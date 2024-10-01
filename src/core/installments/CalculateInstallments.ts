import { MONTH_INTEREST_RATE, QTY_MAX_INSTALLMENT } from '../constants';
import Installments from './Installments';

export default class CalculateInstallments {
    execute(
        valueToCalculate: number,
        qtyInstallments: number = QTY_MAX_INSTALLMENT,
        interestRate: number = MONTH_INTEREST_RATE
    ): Installments {
        if (qtyInstallments < 2 || qtyInstallments > QTY_MAX_INSTALLMENT) {
            throw new Error(
                `Quantidade de parcelas deve ser de 2 a ${QTY_MAX_INSTALLMENT} parcelas`
            );
        }

        const totalWithInterest = this.calculateInterestCompound(
            valueToCalculate,
            interestRate,
            qtyInstallments
        );

        return {
            valueInstallment: this.twoDecimalsNumber(
                totalWithInterest / qtyInstallments
            ),
            valueTotal: this.twoDecimalsNumber(totalWithInterest),
            qtyInstallments,
            interestRate,
        };
    }

    private calculateInterestCompound(
        valueTotal: number,
        monthInterestRate: number,
        qtyInstallments: number
    ): number {
        return valueTotal * Math.pow(1 + monthInterestRate, qtyInstallments);
    }

    private twoDecimalsNumber(value: number): number {
        return Math.round(value * 100) / 100;
    }
}
