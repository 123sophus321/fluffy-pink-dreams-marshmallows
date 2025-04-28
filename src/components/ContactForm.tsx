
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import ConfirmationModal from "./ConfirmationModal";
import { Phone, User, MessageSquare } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const ContactForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [products, setProducts] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setShowModal(true);
      
      // Log the form data to console
      console.log({
        name,
        phone,
        products,
        message
      });
      
    }, 1500);
  };

  const resetForm = () => {
    setName("");
    setPhone("");
    setProducts("");
    setMessage("");
    setShowModal(false);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg">
        <div className="p-8">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-700 flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {t('contact.name')}
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1"
                  placeholder={t('contact.name')}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-gray-700 flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  {t('contact.phone')}
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1"
                  placeholder={t('contact.phone')}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="products" className="text-gray-700 flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  {t('contact.products')}
                </Label>
                <Input
                  id="products"
                  value={products}
                  onChange={(e) => setProducts(e.target.value)}
                  className="mt-1"
                  placeholder={t('contact.products')}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-gray-700">{t('contact.message')}</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1"
                  placeholder={t('contact.message')}
                  rows={4}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full btn-primary"
                disabled={isLoading}
              >
                {isLoading ? t('contact.sending') : t('contact.send')}
              </Button>
            </div>
          </form>
        </div>
      </div>
      
      <ConfirmationModal
        isOpen={showModal}
        onClose={resetForm}
        name={name}
      />
    </>
  );
};

export default ContactForm;
