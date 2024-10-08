import { useRef, useReducer } from "react"

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const reviewState = {
    email: "",
    message: "",
    modalOpen: false,
    emailError: false,
    messageError: false
}

const enum REDUCER_ACTION_TYPE {
    CHANGE_EMAIL,
    CHANGE_MESSAGE,
    CLOSE_MODAL,
    SET_EMAIL_ERROR,
    SET_MESSAGE_ERROR,
    VERIFY_FORM,
}

type reducerAction = {
    type: REDUCER_ACTION_TYPE
    payload?: any
}

const reducer = (state: typeof reviewState, action: reducerAction): typeof reviewState => {
    switch(action.type) {
        case REDUCER_ACTION_TYPE.CHANGE_EMAIL:
            return {...state, email: action.payload}
        case REDUCER_ACTION_TYPE.CHANGE_MESSAGE:
            return {...state, message: action.payload}
        case REDUCER_ACTION_TYPE.CLOSE_MODAL:
            return {...state, modalOpen: false}
        case REDUCER_ACTION_TYPE.SET_EMAIL_ERROR:
            if (!state.email.match(emailRegex)) {
                return { ...state, emailError: true }
            } 
            return { ...state, emailError: false }
        case REDUCER_ACTION_TYPE.SET_MESSAGE_ERROR:
            if (state.message != "") {
                return { ...state, messageError: false }
            }
            return { ...state, messageError: true }
        case REDUCER_ACTION_TYPE.VERIFY_FORM:
            return {modalOpen: true, email: "", message: "", emailError: false, messageError: false }
        default:
            throw new Error()
    }
}

export interface review {
    id: number,
    content: string,
    name: string
}

function Review() {
    const [state, dispatch] = useReducer(reducer, reviewState)

    const emailInput = useRef(null)

    function validateEmail(input: any) {
        if (input.value.match(emailRegex)) {
            return true
        } else {
            return false
        }
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        dispatch({ type: REDUCER_ACTION_TYPE.SET_MESSAGE_ERROR })
        dispatch({ type: REDUCER_ACTION_TYPE.SET_EMAIL_ERROR })

        if (validateEmail(emailInput.current) && state.message != "") {
            dispatch({ type: REDUCER_ACTION_TYPE.VERIFY_FORM })
        } 
    }

    function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
        let value: string = e.target.value
        dispatch({ type: REDUCER_ACTION_TYPE.CHANGE_EMAIL, payload: value })
    }

    function handleReviewChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        let value: string = e.target.value
        dispatch({ type: REDUCER_ACTION_TYPE.CHANGE_MESSAGE, payload: value })
    }

    return (
        <>
            <div className={state.modalOpen ? "fixed bg-white z-10 left-2/4 -translate-x-2/4 mt-40 p-5 transition-all rounded-md" : "fixed bg-white z-10 left-2/4 -translate-x-2/4 p-5 -top-20 scale-0 transition-all rounded-md"}>
                <h2 className="font-bold text-xl font-poppins"><i className="fa-solid fa-circle-check text-green-600 mr-5"></i>Success!</h2>
                <p className="font-poppins mt-4">Your review has been submitted successfully.</p>
                <p className="font-poppins mt-4">Thank you!</p>
            </div>

            <div className={state.modalOpen ? "fixed w-screen h-screen bg-modalbg" : "hidden"} onClick={() => { dispatch({ type: REDUCER_ACTION_TYPE.CLOSE_MODAL }) }}></div> 

            <div>                
                <form name="review-form" className="flex flex-col align-center max-w-256 h-96 mx-auto mt-32 bg-rose-900 p-4 rounded-lg mb-20" onSubmit = {handleSubmit}>
                    { state.emailError ? <p className="text-red-300">Please enter a valid email address.</p> : null }
                    <input ref={emailInput} name="email-input" onChange={handleEmailChange} type="text" placeholder="Email" className="mb-5 h-16 p-2 rounded-md" value={state.email} id="email-input"/>
                    { state.messageError ? <p className="text-red-300">Please enter a message.</p> : null }
                    <textarea onChange = {handleReviewChange} value={state.message} name="review" id="review" placeholder="Type your review here..." className="resize-none p-2 font-poppins rounded-md h-full"></textarea>
                    <button className="mt-5 bg-rose-300 rounded-md h-14 font-poppins text-rose-950 font-semibold uppercase">Submit</button>
                </form>
            </div>
        </>
    );
}

export default Review