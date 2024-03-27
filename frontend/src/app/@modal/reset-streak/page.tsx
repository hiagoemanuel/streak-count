import Modal from '@/components/Modal'

export default function ResetStreak() {
  return (
    <Modal
      title="Do you want to reset your streak?"
      inputs={{
        submit: { value: 'Yes' },
        refuse: { value: 'No' },
      }}
    />
  )
}
