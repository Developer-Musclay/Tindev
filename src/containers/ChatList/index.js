// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ChatList from 'src/components/ChatList';

// Action Creators
// import { doSomething } from 'src/store/reducer';

/* === State (datas) ===
 * - mapStateToProps retrieves a prop object for the presentation component
 * - mapStateToProps make available 2 params
 *  - state : the state of the store (getState)
 *  - ownProps : the props passed to the container
 * No need transfer data ? const mapStateToProps = null;
 */
// const mapStateToProps = (state, ownProps) => ({


const mapStateToProps = (state, ownProps) => {
  const messages = state.chatlistReducer.lastMessages;
  const matches = state.chatListReducer.myMatches;
  console.log('STATE', state.chatlistReducer);
  return {
    myMatches: matches,
    lastMessages: messages,
  };
};

/* === Actions ===
 * - mapDispatchToProps retrieves a prop object for the presentation component
 * - mapDispatchToProps make available 2 params
 *  - dispatch : the function of the blind to dispatcher an action
 *  - ownProps : the props passed to the container
 * No need transfer dispatch ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = {};

// Container
const ChatListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatList);

// == Export
export default ChatListContainer;

/* = export on the fly
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/
