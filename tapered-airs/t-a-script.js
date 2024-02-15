g = [], k = "⏹", m = "⏵", c = [], z = 1
i = (l) => document.querySelector('#' + l)
ii = (l, f) => l.addEventListener("input", f)
b = i('b')
d = i('d')
x = i('x')
n = x.value
ii(x, () => n = x.value)
y = i('y')
f = y.value
ii(y, () => { f = y.value; a() })
yy = i('f')
ff = yy.value
ii(yy, () => { ff = yy.value })
t = (w, i, s) => { let m = w.match(/[aeiouy,:;\.\?]/gi); if (m) g[i] = (300 + m.length * 150) / f; if (i - 1 > -1) g[i - 1] += (s.length * 75) / f }
r = (t) => new Promise(r => setTimeout(r, t))
v = (e) => e.classList.remove("i")
u = (e) => e.classList.add("i")
a = () => {
  let h = '', i = 0, o = n, s = o.search(/\S/)
  while (s != -1) {
    let r = o.substr(0, s)
    h += r
    o = o.substr(s)
    l = o.search(/\s/)
    if (l == -1) l = o.length
    w = o.substr(0, l)
    h += `<span>${w}</span>`
    t(w, i++, r)
    o = o.substr(l)
    s = o.search(/\S/)
  }
  d.innerHTML = h
}
a()
p = async () => {
  x.style.display = 'none'
  c = Array.from(d.children)
  c.forEach(e => u(e))
  await r(2000)
  for (const [i, e] of c.entries()) {
    if (z == 0) break
    v(e)
    if (ff > 0) new Promise(() => setTimeout(() => u(e), ff * 700 / f))
    await r(g[i])
  }
  if (z == 1) await r(7000)
  c.forEach(e => u(e))
  if (z == 1) await r(3000)
  x.style.display = 'block'
  b.value = m
}
p()
q = () => {
  if (b.value == m) {
    z = 1
    b.value = k
    p()
    return
  }
  z = 0
  c.forEach(e => u(e))
  b.value = m
}
