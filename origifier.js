(function() {
  var u = window.location.href;
  var suff = u.search(/:\w+/ig);
  var base = (suff > -1) ? u.substring(0, suff) : u;
  var format = /[?&]format=/ig;
  var name = /[?&]name=\w+/ig;
  base = base.replace(format, '.');
  base = base.replace(name, '');
  if (!u.includes(':orig')) { base += ':orig'; }
  if (!u.includes(':orig') || u.match(format) || u.match(name)) { window.location.replace(base); }
})();