export interface MarketChartHeaderProps {
    isFavoritesActive: boolean,
}

export interface MarketChartHeaderEmits {
    (e: 'update:isFavoritesActive', value: boolean): void,
}
