import Modal from '@/components/Modal'

export default function ResetStreak() {
  return (
    <Modal
      modalId="reset-streak"
      title="Do you want to reset your streak?"
      inputs={{
        submit: { value: 'Yes' },
        refuse: { value: 'No' },
      }}
    />
  )
}
