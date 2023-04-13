import { useDispatch, useSelector } from "react-redux"
import { onCloseDateModal, onOpenDateModal } from "../store"


export const useUiStore = () => {

    const dispatch = useDispatch()
    //Acceso al store
    const {
        isDateModalOpen        
    } = useSelector(state => state.ui)


    const openDateModal = () => {
        dispatch ( onOpenDateModal() )
    }

    const closeDateModal = () => {
        dispatch ( onCloseDateModal() )
    }

    const toggleDateModal = () =>  {
        (isDateModalOpen)
            ? openDateModal()
            : closeDateModal()
    }

    //Debe regresar propiedades y métodos
    return {
        //* Propiedades
        isDateModalOpen,
        //* Métodos
        closeDateModal,
        openDateModal,
        toggleDateModal,
    }
}