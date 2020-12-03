export const ToFahrenheit = (tempC: number) => {
    return (tempC * 9.0 / 5.0 + 32).toFixed(2);
}