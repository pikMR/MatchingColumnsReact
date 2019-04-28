const requestInformeType = 'REQUEST_INFORME';
const receiveInformeType = 'RECEIVE_INFORME';
const initialState = { informedata: [], isLoading: false };

export const actionCreators = {
    requestInforme: id => async (dispatch, getState) => {
        if (id === getState().informe.id) {
            // Don't issue a duplicate request (we already have or are loading the requested data)
           return;
        }

        dispatch({ type: requestInformeType, id });
        const url = `api/Informe/ObtenerInforme?id=${id}`;
        const response = await fetch(url);
        const informedata = await response.json();
        dispatch({ type: receiveInformeType, id, informedata });
    }
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestInformeType) {
        return {
            ...state,
            id: action.id,
            isLoading: true
        };
    }

    if (action.type === receiveInformeType) {
        return {
            ...state,
            id: action.id,
            informedata: action.informedata,
            isLoading: false
        };
    }

    return state;
};
