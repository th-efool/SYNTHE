"use client";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <button onClick={onClose}>Close</button>
      <div>{children}</div>
    </div>
  );
}
