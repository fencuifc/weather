import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../actions/menuActions';
import { TOGGLE_MENU }from '../../constants/ActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('menu', () => {
  it('should toggleMenu', () => {
    const expectedAction = {
      type: TOGGLE_MENU
    }
    const store = mockStore({});
     store.dispatch(actions.toggleMenu());
     console.log (store.getActions());
     expect(store.getActions()).toEqual([expectedAction]);
  })
})