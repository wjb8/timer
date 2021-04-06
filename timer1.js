const args = process.argv.slice(2);

const timer = function() {
  if (args === []) {
    return;
  }
  for (let el of args) {
    if (el >= 0 && Number.isInteger(parseInt(el))) {
      setTimeout(() => process.stdout.write('.'), el * 1000);
    }
  }
};

timer();