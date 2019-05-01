const infoOKCuadroType = 'CUADRO_OK';
const infoKOCuadroType = 'CUADRO_KO';
const initialState = { isok: false, conectorlap: [] };

export const actionCreators = {
    validaCuadro: id => async (dispatch, getState) => {
        // comprobamos si efectivamente el cuadro es ok
        // if(ok cuadro) { dispatch({ type: infoOKCuadroType, isok, conectorlap });  }
        // else  { dispatch({ type: infoKOCuadroType, isok, conectorlap });  }
        let isok = false;
        let conectorlap = [];
        dispatch({ type: infoOKCuadroType, isok, conectorlap });
    }
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === infoOKCuadroType) {
        return {
            ...state,
            id: action.id,
            isok: true
        };
    }

    if (action.type === infoKOCuadroType) {
        return {
            ...state,
            id: action.id,
            cuadrodata: action.cuadrodata,
            isok: false
        };
    }

    return state;
};
