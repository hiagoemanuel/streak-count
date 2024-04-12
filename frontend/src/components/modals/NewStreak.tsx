import Modal from '@/components/Modal'

export default function NewStreak() {
  return (
    <Modal
      modalId="new-streak"
      title="Create streak count"
      inputs={{
        submit: { value: 'Create', color: 'orange' },
        refuse: { value: "Don't Create", color: 'red' },
      }}
    >
      <input className="text-input-form" type="text" placeholder="name *" />
    </Modal>
  )
}
