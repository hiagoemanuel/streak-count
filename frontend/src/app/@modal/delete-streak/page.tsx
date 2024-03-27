import Modal from '@/components/Modal'

export default function DeleteStreak() {
  return (
    <Modal
      title="Do you want to delete your progress?"
      inputs={{
        submit: { value: 'Yes', color: 'red' },
        refuse: { value: 'No', color: 'orange' },
      }}
    />
  )
}
