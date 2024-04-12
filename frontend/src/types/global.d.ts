export default interface ModalProps {
  children?: React.ReactNode
  modalId: string
  title: string
  inputs: {
    submit: InputsType
    refuse: InputsType
  }
}

interface InputsType {
  value: string
  color?: 'red' | 'orange'
  event?: () => void
}
