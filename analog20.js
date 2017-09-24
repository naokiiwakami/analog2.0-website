function getAmazon()
{
    document.write('<br><center><iframe src="http://rcm-jp.amazon.co.jp/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=synthdiy-22&o=9&p=8&l=as1&m=amazon&f=ifr&asins=4899772823" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe></center>');
}

function getA20BookSupportMenu(prefix) {

  if (typeof prefix === 'undefined') {
    prefix = "./";
  }

  document.write('<DIV class="content_menu" id="a20_menu">');
  document.write('<U>書籍サポートメニュー</U><BR>');
  document.write('<UL type="square">');
  document.write('  <LI><a href="' + prefix + 'book.html">サポートホーム</a>');
  document.write('  <LI><a href="' + prefix + 'book_errata.html">正誤表</a>');
  document.write('  <LI><a href="' + prefix + 'book_parts.html">部品入手案内</a>');
  document.write('</UL>');
  getAmazon();
  document.write('</DIV>');

}

function getA20Menubar(prefix) {
  if (typeof prefix === 'undefined') {
    prefix = "./";
  }

  document.write('<DIV class="menubar" id="menubar">');

  document.write('<DIV class="menu_item" id="Layer4" >');
  document.write('  <A href="' + prefix + 'index.html"><IMG alt="アイコン" width="100" height="50"   border="0" src="' + prefix + 'images/a20_logo_small.png"><br>Analog2.0ホーム</A>');
  document.write('</DIV>');

  document.write('<DIV class="menu_item" id="Layer4" >');
  document.write('  <A href="' + prefix + 'about.html">Analog2.0 とは？</A>');
  document.write('</DIV>');

  document.write('<DIV class="menu_item" id="Layer4" >');
  document.write('  <A href="https://github.com/naokiiwakami/analog2.0/wiki"><b>製作ガイド</b><A><br>(GitHub)');
  document.write('</DIV>');

  document.write('<DIV class="menu_item" id="Layer4" >');
  document.write('  <A href="' + prefix + 'book_intro.html"><b>書籍紹介</b><A><br>');
  document.write('</DIV>');

  document.write('<DIV class="menu_item" id="Layer4" >');
  document.write('  <A href="' + prefix + 'book.html"><b>書籍サポート</b><A><br>');
  document.write('</DIV>');

  /*
  document.write('<DIV class="menu_item" id="Layer4" >');
  document.write('  <A href="' + prefix + 'kit.html"><b>基板・部品販売</b><A><br>');
  document.write('</DIV>');
  */

  document.write('<DIV class="menu_item" id="Layer4" >');
  document.write('  <A href=http://gaje.jp/forum/><b>湾岸電子音工房</b><A><br>（フォーラム）');
  document.write('</DIV>');

  /*
  document.write('<DIV class="menu_item" id="Layer4" >');
  document.write('  <A href="' + prefix + 'resources/analog20_manuals_v2/errata.html">マニュアルの<br>正誤表<A><br>');
  document.write('  2009/12/10 更新');
  document.write('</DIV>');
  */

  /*
  document.write('<DIV class="menu_item" id="Layer5"><A href="' + prefix + 'index.html">');
  document.write('  <IMG alt="アイコン" width="64" height="32" align="middle" border="0" src="a20_logo.png"><BR>');
  document.write('  デモ</A>');
  document.write('</DIV>');
  */

  /*
  document.write('<DIV class="menu_item" id="Layer6">');
  document.write('  <A href="http://gaje.jp//sub3.html"><IMG alt="アイコン" width="64" height="64" align="middle" border="0" src="pe02_i3.gif"><BR>');
  document.write('  製作に必要なもの</A></DIV>');
  document.write('</DIV>');
  document.write('</DIV>');
  */

};

function getA20CommonTop(prefix)
{
  document.write('<DIV id="container">');
  getHeader(prefix);
  document.write('  <DIV class="content" id="content">');

  document.write('    <DIV class="content_main" id="content_main">');
}

function getA20BookSupportTop(prefix)
{
  document.write('<DIV id="container">');
  getHeader(prefix);
  document.write('  <DIV class="content" id="content">');

  getA20BookSupportMenu(prefix);

  document.write('    <DIV class="content_main" id="content_main">');
}

function getA20CommonTopWithoutMenu(prefix)
{
  document.write('<DIV id="container">');
  getHeader(prefix);
  document.write('  <DIV class="content" id="content">');
}


function getA20CommonBottom(prefix)
{
  document.write('    </DIV>');     // content_main
  document.write('  </DIV>');     // content

  getA20Menubar(prefix);

  document.write('</DIV>');     // container
}

function getA20CommonBottomWithoutMenu(prefix)
{
  document.write('  </DIV>');     // content

  getA20Menubar(prefix);

  document.write('</DIV>');     // container
}
