function getHeader(prefix) {
  if (typeof prefix === "undefined") {
    prefix = "./";
  }

  document.write("<DIV id=\"header\">");
  document.write("  <A href=\"" + prefix + "../\">");
  document.write("    <IMG border=\"0\" alt=\"Gaje\" src=\"" + prefix + "images/logo_middle.png\"></A>");
  /*
  document.write("  <A href=\"" + prefix + "../analog20/index.html\">");
  document.write("    <IMG border=\"0\" alt=\"analog2.0\" src=\"" + prefix + "../images/a20_logo_small.png\"></A>");
  document.write("  <A href=\"" + prefix + "../sx150/index.html\">");
  document.write("    <IMG border=\"0\" alt=\"sx-150\" src=\"" + prefix + "../images/gakken_logo_small.png\"></A>");
  document.write("  <A href=\"http://gaje.jp/instruments/\">");
  document.write("    <IMG border=\"0\" alt=\"instruments\" src=\"" + prefix + "../images/minimoog4_logo.png\"></A>");
  document.write("  <A href=\"http://gaje.jp/repair/\">");
  document.write("    <IMG border=\"0\" alt=\"repair\" src=\"" + prefix + "../images/repair_logo_small2.png\"></A>");
  */
  document.write("</DIV>");
}
