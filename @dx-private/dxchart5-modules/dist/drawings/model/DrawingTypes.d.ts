/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export declare const availableDrawingTypes: readonly ["trend", "line", "horizontal_line", "horizontal_ray", "vertical_line", "extended_line", "ellipse", "pitchfork", "extended", "ray", "curve", "arc", "info_line", "brush", "path", "date_price_range", "date_range", "price_range", "highlighter", "icon", "rectangle", "gann_box", "gann_square", "fibonacci_ark", "fibonacci_circles", "fibonacci_rays", "gann_fan", "trend_channel", "multichannel", "fibonacci_retracements", "text", "callout", "price_label", "base_isolation_tool", "magnifying_tool_rectangle", "magnifying_tool_time_range", "magnifying_tool_time_range_wheel", "vertical_arrow_up", "vertical_arrow_down", "arrow", "elliott_wave", "elliott_correction_wave", "fibonacci_projection", "fibonacci_channel", "fibonacci_time_zones", "regression_trend", "fibonacci_spiral", "cycle_brackets", "fibonacci_time_extension", "fibonacci_time_ratios"];
export type DrawingType = (typeof availableDrawingTypes)[number];
