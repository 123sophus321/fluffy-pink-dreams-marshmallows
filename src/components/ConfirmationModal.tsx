
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
}

const ConfirmationModal = ({ isOpen, onClose, name }: ConfirmationModalProps) => {
  const { t } = useLanguage();
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95">
        <div className="p-6 bg-gradient-to-r from-marshmallow-100 to-marshmallow-50">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-marshmallow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-center mb-1">{t('modal.thanks')}</h3>
          <p className="text-center text-gray-500 mb-0">{t('modal.message')}</p>
        </div>
        
        <div className="p-6">
          <p className="mb-6 text-center">
            {t('modal.confirmation').replace('{name}', name)}
          </p>
          
          <Button 
            onClick={onClose}
            className="w-full btn-primary"
          >
            {t('modal.close')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
