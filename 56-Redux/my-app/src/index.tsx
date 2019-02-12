import * as React from 'react';
import axios from 'axios'
import logger from 'redux-logger';
import { Action, createStore, Dispatch, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import { render } from 'react-dom';
import thunk from 'redux-thunk';

// Define ADD_LINK const and its type
const ADD_LINK = 'ADD_LINK';
type ADD_LINK = typeof ADD_LINK;

// Define how AddLinkAction should look like
interface IAddLinkAction extends Action {
  type: ADD_LINK;
  link: {
    title: string,
    url: string
  };
}

// Define CLEAR_LINK const and its type
const CLEAR_LINK = 'CLEAR_LINK';
type CLEAR_LINK = typeof CLEAR_LINK;

// Define ClearLinkAction. No additional information is needed
interface IClearLinkAction extends Action {
  type: CLEAR_LINK;
}

const DELETE_LINK = 'DELETE_LINK';
type DELETE_LINK = typeof DELETE_LINK;

interface IDeleteLinkAction extends Action {
  type: DELETE_LINK;
  index: number;
}



// Collection of both for easier integration
type LinkActions = IAddLinkAction | IClearLinkAction | IDeleteLinkAction | ILoadLinkSuccessAction | ILoadLinkFailureAction;

interface IRootState {
  links: Array<{
    title: string,
    url: string,
  }>
}

const rootReducer = (state: any = {
  links: [
    { title: 'Google', url: 'http://www.google.com' },
    { title: 'Yahoo', url: 'http://www.yahoo.com' },
  ]
}, action: LinkActions /* add parameter here */) => {
  // Use switch to handle different actions
  switch (action.type) {
    case ADD_LINK:
      return {
        links: state.links.concat([action.link]) // Use concat to add a new link
      }
    case CLEAR_LINK:
      return {
        links: [] // Reset the link
      }
    case DELETE_LINK:
      const newlink = [...state.links];
      newlink.splice(action.index, 1)
      return {
        links: newlink
      }
    case LOAD_LINK_SUCCESS:
      return { links: action.links }; // Override the links
    case LOAD_LINK_FAILURE:
      return { links: [] }; // Override the links
    default:
      return state; // Do not change the state in case of any other actions
  }
};

const store = createStore<IRootState, any, any, any>(rootReducer, applyMiddleware(thunk, logger));

interface ILinkListProps {
  links: Array<{
    title: string,
    url: string
  }>,
  addLink: () => void, // Add a new mapped prop
  clearLink: () => void // Add a new mapped prop
  deleteLink: (index: number) => void // Add a new mapped prop
  reloadLink: () => void
}

const LOAD_LINK_SUCCESS = 'LOAD_LINK_SUCCESS';
type LOAD_LINK_SUCCESS = typeof LOAD_LINK_SUCCESS;

interface ILoadLinkSuccessAction extends Action {
  type: LOAD_LINK_SUCCESS;
  links: [];
}

const LOAD_LINK_FAILURE = 'LOAD_LINK_FAILURE';
type LOAD_LINK_FAILURE = typeof LOAD_LINK_FAILURE;

interface ILoadLinkFailureAction extends Action {
  type: LOAD_LINK_FAILURE;
}

function loadLinkSuccess(links: []): ILoadLinkSuccessAction {
  return {
    type: LOAD_LINK_SUCCESS,
    links
  }
}

function loadLinkFailure(): ILoadLinkFailureAction {
  return {
    type: LOAD_LINK_FAILURE
  }
}


function loadLink(): any {
  return (dispatch: Dispatch<ILoadLinkSuccessAction | ILoadLinkFailureAction>) => {
    return axios('https://www.reddit.com/r/programming.json').then((res) => {
      const threads = res.data;
      const links = threads.data.children.map((t: any) => ({
        title: t.data.title,
        url: t.data.url
      }));
      dispatch(loadLinkSuccess(links));
    }).catch((err) => {
      console.log('Failed', err);
      dispatch(loadLinkFailure());
    });
  };
}

// interface IUserListProps {
//   users: Array<{
//     name: string,
//     country: string
//   }>
// }

const PureLinkList = (props: ILinkListProps) => {
  return (
    <div>
      <button onClick={props.reloadLink}>ReLoad</button>
      <button onClick={props.addLink}>New Link</button>
      <button onClick={props.clearLink}>Clear</button>
      {props.links.map((l, index) => (
        <div key={index}>{l.title} - {l.url}<button onClick={() => props.deleteLink(index)}>{"Delete" + index}</button></div>
      ))}
    </div>
  );
}


const mapStateToProps = (state: IRootState) => {
  return {
    links: state.links
  }
}

const mapDispatchToProps = (dispatch: Dispatch<LinkActions>) => {
  return {
    addLink: () => dispatch({
      type: ADD_LINK,
      link: {
        title: 'Accelerate',
        url: 'http://www.acceleratedhk.com'
      }
    }),
    clearLink: () => dispatch({
      type: CLEAR_LINK
    }),
    deleteLink: (index: number) => dispatch({
      type: DELETE_LINK,
      index
    }),
    reloadLink: () => dispatch(loadLink())
  }
}

const LinkList = connect(mapStateToProps, mapDispatchToProps)(PureLinkList)

const App = () => (
  <Provider store={store}>
    <div>
      <h2>Links</h2>
      <LinkList />
    </div>
  </Provider>
);

render(<App />, document.getElementById("root"));