import * as utils from "../Utils.js";

const infoOKCuadroType = 'CUADRO_OK';
const infoKOCuadroType = 'CUADRO_KO';
const initialState = { isChanged: false, arrayFails: [], isok:true };

export const actionCreatorCuadro = {
    validaCuadro: (arrayFinal,arrayOrigen) => async (dispatch, getState) => {
        let arrayFails = utils.CompareAllValuesOfArray(arrayFinal,arrayOrigen);
        let infoCuadroType = (arrayFails != undefined && arrayFails.length != 0) ? infoKOCuadroType : infoOKCuadroType;

        // si hemos entrado, hemos hecho swap de elementos.
        let toogleChange = initialState.isChanged ? false : true;
        initialState.isChanged = !initialState.isChanged;

        dispatch({ type: infoCuadroType, isChanged: toogleChange, arrayFails  });
    }
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === infoOKCuadroType) {
        return {
            ...state,
            arrayFails: [],
            isok: true,
            isChanged:action.isChanged
        };
    }

    if (action.type === infoKOCuadroType) {
        return {
            ...state,
            arrayFails: action.arrayFails,
            isok: false,
            isChanged: action.isChanged
        };
    }

    return state;
};
