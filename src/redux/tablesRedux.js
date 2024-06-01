//selectors
export const getTables = (state) => state.tables;
export const getTableById = ({ tables }, id) => tables.find((table) => table.id === id);

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const EDIT_TABLE = createActionName('EDIT_TABLE');

// action creators
export const updateTables = (payload) => ({ type: UPDATE_TABLES, payload });
export const editTable = (payload) => ({ type: EDIT_TABLE, payload });

export const fetchTables = () => {
  return (dispatch) => {
    fetch(`http://localhost:3131/api/tables`)
      .then((res) => res.json())
      .then((tables) => dispatch(updateTables(tables)));
  };
};

export const editTableRequest = (tableData) => {
  return (dispatch) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tableData),
    };
    fetch(`http://localhost:3131/api/tables/${tableData.id}`, options).then(
      () => dispatch(editTable(tableData))
    );
  };
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload];
    case EDIT_TABLE:
    return statePart.map((table) =>
      table.id === action.payload.id ? { ...table, ...action.payload } : table
    );
    default:
      return statePart;
  };
};
export default tablesReducer;