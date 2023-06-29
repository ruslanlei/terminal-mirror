export { default as UiPairStatsColumn } from "../../../components/pairStatsColumn/PairStatsColumn";
export interface PairStat {
    label: string;
    value: number | string | null;
    valueState: 'default' | 'positive' | 'negative' | 'auto';
    appendText?: string;
}
export interface PairStatsColumnProps {
    columnData: PairStat[];
}
