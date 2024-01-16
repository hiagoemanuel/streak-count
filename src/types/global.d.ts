export default interface ModalProps {
  children?: React.ReactNode
  title: string
  inputs: {
    submit: { value: string; color?: 'red' | 'orange' }
    refuse: { value: string; color?: 'red' | 'orange' }
  }
}
