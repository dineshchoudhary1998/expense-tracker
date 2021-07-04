//To specify the application state changes in reponse to action in our site.
//create new state and sent on action such as delete

export default (state, action) =>{
    switch( action.type){
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transactions:state.transactions.filter(
                    transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
           
                
        default:
            return state;
    }
}