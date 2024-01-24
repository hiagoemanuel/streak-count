import Modal from '@/components/Modal'

export default function NewStreak() {
  return (
    <Modal
      title="Create streak count"
      inputs={{
        submit: { value: 'Create', color: 'orange' },
        refuse: { value: "Don't Create", color: 'red' }
      }}
    >
      <input type="text" placeholder="name *" />
    </Modal>
  )
}
