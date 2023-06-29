declare const _default: import("vue").DefineComponent<{
    data: {
        type: import("vue").PropType<import("./createBarChart").BarChartData>;
        required: true;
        default: () => never[];
    };
    barLabelFormatter: {
        type: import("vue").PropType<import("./createBarChart").LabelFormatter>;
        default: (value: any) => any;
    };
    xAxisLabelFormatter: {
        type: import("vue").PropType<import("./createBarChart").LabelFormatter>;
        default: (value: any) => any;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: import("vue").PropType<import("./createBarChart").BarChartData>;
        required: true;
        default: () => never[];
    };
    barLabelFormatter: {
        type: import("vue").PropType<import("./createBarChart").LabelFormatter>;
        default: (value: any) => any;
    };
    xAxisLabelFormatter: {
        type: import("vue").PropType<import("./createBarChart").LabelFormatter>;
        default: (value: any) => any;
    };
}>>, {
    data: import("./createBarChart").BarChartData;
    barLabelFormatter: import("./createBarChart").LabelFormatter;
    xAxisLabelFormatter: import("./createBarChart").LabelFormatter;
}, {}>;
export default _default;
