// FROM W3SChools

function loading(loader, quoteContainer) {
  loader.hidden = false;
  quoteContainer.hidden = true;
}
function complete(loader, quoteContainer) {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

export {loading, complete};

