import React from "react";

interface ModalPopUpProps {
  title: string;
  show: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  confirmText?: string;
  children: React.ReactNode;
}

const ModalPopUp: React.FC<ModalPopUpProps> = ({
  title,
  show,
  onClose,
  onConfirm,
  confirmText = "Save",
  children,
}) => {
  if (!show) return null;

  return (
    <>
      <div className="modal fade show d-block" tabIndex={-1}>
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button type="button" className="btn-close" onClick={onClose} />
            </div>

            <div className="modal-body">{children}</div>

            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={onClose}>
                Close
              </button>

              {onConfirm && (
                <button className="btn btn-primary" onClick={onConfirm}>
                  {confirmText}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default ModalPopUp;
