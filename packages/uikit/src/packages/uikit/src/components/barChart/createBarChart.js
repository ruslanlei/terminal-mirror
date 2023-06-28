import { select as B, scaleBand as v, range as H, scaleLinear as k, max as z, axisBottom as F } from "C:/Users/Ruslan/WebstormProjects/@terminal/node_modules/d3/src/index.js";
import { multiply as b, toAbsolute as w, subtract as C, isPositive as Y, subtractRight as u } from "@terminal/common/utils/number";
import { compose as M } from "@terminal/common/utils/fp";
import { toCssPxValue as P } from "../../utils/style.js";
import { getRectField as L } from "../../utils/dom.js";
const R = ({
  svgContainer: i,
  data: a,
  xScale: l,
  height: c,
  topMargin: m,
  tickFontSize: d = 12,
  tickColor: p = "white",
  labelFormatter: g
}) => {
  const x = a.map(([r]) => r), h = F(l).tickFormat((r, s) => g(x[s], s)).tickPadding(10), n = i.append("g").attr("transform", `translate(0, ${c - m})`).call(h);
  return n.call((r) => r.select(".domain").remove()), n.call((r) => r.selectAll("g line").remove()), n.call(
    (r) => r.selectAll(".tick text").style("font-size", P(d)).style("font-weight", "500").style("color", p)
  ), {
    xAxis: h
  };
}, E = ({
  svgContainer: i,
  data: a,
  xScale: l,
  yScale: c,
  borderRadius: m,
  defaultColor: d,
  positiveColor: p,
  negativeColor: g,
  labelGap: x,
  labelFormatter: h,
  barAnimationDuration: n = 300,
  nameColor: r
}) => {
  const s = (t) => (
    /* leave space for label */
    u(20, c(w(t)))
  ), o = i.selectChildren("rect").data(a).enter().append("rect").attr("width", l.bandwidth()).attr("height", ([, t]) => Math.max(
    s(t),
    20
  )).attr("x", (t, e) => l(e)).attr("y", ([, t]) => {
    const [, e] = c.range(), y = Math.max(20, s(t));
    return C(
      e,
      y
    );
  }).attr("rx", m).attr("ry", m).attr("fill", ([, t]) => t === 0 ? d : Y(t) ? p : g);
  return o.attr("opacity", 0).style("transform", "translateY(-120px)").transition().duration(n).style("transform", "translateY(0)").attr("opacity", 1).delay((t, e) => b(a.length - e, 20)).ease(), i.selectChildren("text").data(a).enter().append("text").text(([, t], e) => h(t, e)).attr("x", (t, e) => l(e) + l.bandwidth() / 2).attr("y", ([, t]) => {
    const [, e] = c.range(), y = Math.max(20, s(t));
    return M(
      u(x),
      u(y)
    )(e);
  }).style("font-size", "12px").style("font-weight", "500").style("text-anchor", "middle").style("fill", r).attr("opacity", 0).style("transform", "translateY(-300px) scale(0.8)").transition().duration(n).style("transform", "translateY(0) scale(1)").delay((t, e) => b(a.length - e, 30)).attr("opacity", 1).ease(), {
    bars: o
  };
}, q = ({
  container: i,
  data: a,
  labelGap: l = 10,
  minWidthPerBar: c = 50,
  barBorderRadius: m = 5,
  topMargin: d = 30,
  barLabelFormatter: p = (o) => o,
  xAxisLabelFormatter: g = (o) => o,
  barNameColor: x = "gray",
  positiveBarColor: h = "steelblue",
  negativeBarColor: n = "red",
  defaultBarColor: r = "black",
  height: s = 300
}) => {
  const o = a.length, f = Math.max(700, b(o, c)), t = B(i).append("svg").attr("width", f).attr("height", L("height", i)), e = v().domain(H(a.length)).range([0, f]).padding(0.1).paddingInner(0.2), y = k().domain([0, z(a.map(([, A]) => w(A)))]).range([0, C(s, d)]);
  R({
    svgContainer: t,
    xScale: e,
    height: s,
    topMargin: d,
    data: a,
    labelFormatter: g
  }), E({
    svgContainer: t,
    xScale: e,
    yScale: y,
    borderRadius: m,
    positiveColor: h,
    negativeColor: n,
    defaultColor: r,
    labelGap: l,
    labelFormatter: p,
    nameColor: x,
    data: a
  });
};
export {
  q as createBarChart
};
//# sourceMappingURL=createBarChart.js.map
