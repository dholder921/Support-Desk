import { useEffect } from "react"
import { FaSpinner } from "react-icons/fa"
import { useSelector, useDispatch } from 'react-redux'
import { getTickets } from "../features/tickets/ticketSlice"
import Spinner from '../components/Spinner'
import { BackButton } from "../components/BackButton"
import { reset } from "nodemon"


function Tickets() {
    const { tickets, isLoading, isSuccess } = useSelector((state) => state.tickets)
    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            if (isSuccess) {
                dispatch(reset)
            }
        }
    }, [dispatch, isSuccess])

    useEffect(() => {
        dispatch(getTickets())
    }, [dispatch])

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div>Tickets</div>
    )
}

export default Tickets