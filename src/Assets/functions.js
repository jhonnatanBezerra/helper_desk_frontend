

export const functions = {

  formatMoney: (numberValue) => {

    if (typeof numberValue === 'number') {
      numberValue = numberValue.toString();
    }

    return parseFloat(numberValue)
      .toFixed(2) // casas decimais
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  },

  limit: (text, length) => {
    try {
      return text.length > length ? text.substr(0, length) + ' ...' : text;
    } catch (error) {
      // console.warn('Um erro ocorreu', error);
    }
  },

  ucwords: (text) => {
    text.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase() === undefined ? text : a.toUpperCase();
    });
  },

  isJsonString: (str) => {
    try {
      JSON.parse(str)
      return true;
    } catch (error) {
      return false
    }
  },

  descryptId: (hashId) => {
    return JSON.parse(atob(atob(hashId))).id
  }

}