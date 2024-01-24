import Modal from '@/components/Modal'

export default function NewStreak() {
  return (
    <Modal
      title="Create streak count"
      inputs={{
        submit: { value: 'Create' },
        refuse: { value: "Don't Create" }
      }}
    >
      <input type="text" placeholder="name *" />
    </Modal>
  )
}