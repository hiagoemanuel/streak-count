'use client'

import { createContext, useState } from 'react'

interface IModalContext {
  openModal: (modalId: string) => void
  closeModal: (modalId: string) => void
  isModalOpen: (modalId: string) => boolean
}

export const ModalContext = createContext({} as IModalContext)

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modals, setModals] = useState<Record<string, boolean>>({})

  const openModal = (modalId: string) => {
    setModals((prevModals) => ({ ...prevModals, [modalId]: true }))
  }

  const closeModal = (modalId: string) => {
    setModals((prevModals) => ({ ...prevModals, [modalId]: false }))
  }

  const isModalOpen = (modalId: string) => modals[modalId] || false

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isModalOpen }}>
      {children}
    </ModalContext.Provider>
  )
}
