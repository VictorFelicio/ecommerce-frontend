export default class Coin {
    static format(
        value: number,
        location: string = 'pt-BR',
        coin: string = 'BLR'
    ): string {
        return (value ?? 0).toLocaleString(location, {
            style: 'currency',
            currency: coin,
        });
    }
}
