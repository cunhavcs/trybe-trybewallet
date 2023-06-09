export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';
export const SAVE_TOTAL = 'SAVE_TOTAL';
export const START_EDIT = 'START_EDIT';
export const SAVE_EDIT = 'SAVE_EDIT';

export const removeExpense = (expenses, id) => ({
  type: REMOVE_EXPENSE,
  payload: expenses,
  payload2: parseFloat(id),
});

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  payload: email,
});

const saveCurrencies = (currencies) => ({
  type: SAVE_CURRENCIES,
  payload: currencies,
});

export const fetchCurrencies = () => (dispatch) => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  fetch(URL)
    .then((response) => response.json())
    .then((currencies) => dispatch(saveCurrencies(Object.keys(currencies))));
};

export const saveExpense = (expense) => ({
  type: SAVE_EXPENSE,
  payload: expense,
});

export const saveTotal = (total) => ({
  type: SAVE_TOTAL,
  payload: total,
});

export const startEdit = (payload) => ({
  type: START_EDIT,
  payload,
});

export const saveEdit = (payload) => ({
  type: SAVE_EDIT,
  payload,
});
