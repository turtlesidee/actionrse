export default function random_rgba() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}


export const colors = [
  random_rgba(),
  random_rgba(),
  random_rgba(),
  random_rgba(),
  random_rgba(),
  random_rgba(),
  random_rgba(),
  random_rgba(),
  random_rgba(),
  random_rgba(),
  random_rgba(),
  random_rgba(),
  random_rgba(),
  random_rgba(),
  random_rgba(),
  random_rgba(),
  random_rgba(),
  random_rgba(),
  random_rgba(),
  random_rgba(),
  random_rgba(),
  random_rgba(),
  random_rgba(),
  random_rgba(),
  random_rgba(),
  random_rgba(),
  random_rgba(),
]
