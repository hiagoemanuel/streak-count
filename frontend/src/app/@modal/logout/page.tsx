import Modal from '@/components/Modal'

export default function Logout() {
  return (
    <Modal
      title="Do you want to log out of your account?"
      inputs={{
        submit: { value: 'Yes' },
        refuse: { value: 'No' },
      }}
    />
  )
}
