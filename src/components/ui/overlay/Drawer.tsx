"use client";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export function Drawer({ isOpen, onClose, children }: DrawerProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <aside>
      <button onClick={onClose}>Close</button>
      <div>{children}</div>
    </aside>
  );
}
