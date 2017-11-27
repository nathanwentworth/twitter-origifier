(function() {
  var u = window.location.href;
  var suff = u.search(/:\w+/ig);
  var base = (suff > -1) ? u.substring(0, suff) : u;
  base = base.replace('?format=', '.');
  if (!u.includes(':orig')) { base += ':orig'; }
  if (!u.includes(':orig') || u.includes('?format=')) { window.location.replace(base); }
})();