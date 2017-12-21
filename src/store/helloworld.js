export default {
    state: {
          helloWorldMessageText: 'Hello world'
        },
        getters: {
          helloWorldMessage: state => state.helloWorldMessageText
        }
}