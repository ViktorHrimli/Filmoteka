export function updateToQueve(listener, data, KEY_WATHC, KEY_QUEVE) {
  listener.addEventListener('click', e => {
    let watch = [];
    let queve = [];
    queve = JSON.parse(localStorage.getItem(KEY_QUEVE));
    watch = JSON.parse(localStorage.getItem(KEY_WATHC)) || [];
    if (
      queve.map(item => item.id).includes(data.id) &&
      !watch.map(item => item.id).includes(data.id)
    ) {
      watch.push(data);
    }
    localStorage.removeItem(KEY_WATHC);
    localStorage.setItem(KEY_WATHC, JSON.stringify(watch));
  });
}

export function updateToWatch(listener, data, KEY_WATHC, KEY_QUEVE) {
  listener.addEventListener('click', e => {
    let watch = [];
    let queve = [];
    watch = JSON.parse(localStorage.getItem(KEY_WATHC));
    queve = JSON.parse(localStorage.getItem(KEY_QUEVE)) || [];
    if (
      !queve.map(item => item.id).includes(data.id) &&
      watch.map(item => item.id).includes(data.id)
    ) {
      queve.push(data);
    }
    localStorage.removeItem(KEY_QUEVE);
    localStorage.setItem(KEY_QUEVE, JSON.stringify(queve));
  });
}
