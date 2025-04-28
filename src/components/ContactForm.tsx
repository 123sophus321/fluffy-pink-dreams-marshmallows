import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import ConfirmationModal from "./ConfirmationModal";
import { Phone, User, MessageSquare } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const products = [
    { id: "vanilla", name: "Classic Vanilla Bean" },
    { id: "strawberry", name: "Strawberry Bliss" },
    { id: "chocolate", name: "Chocolate Swirl" },
    { id: "raspberry", name: "Raspberry Delight" },
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setShowModal(true);
      
      console.log({
        name,
        phone,
        selectedProducts,
        message
      });
      
    }, 1500);
  };

  const resetForm = () => {
    setName("");
    setPhone("");
    setSelectedProducts([]);
    setMessage("");
    setShowModal(false);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg">
        <div className="p-8">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
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
                <Label htmlFor="products" className="text-gray-700">
                  {t('products.select')}
                </Label>
                <Select
                  value={selectedProducts.join(',')}
                  onValueChange={(value) => setSelectedProducts(value.split(',').filter(Boolean))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t('products.select')} />
                  </SelectTrigger>
                  <SelectContent>
                    {products.map((product) => (
                      <SelectItem key={product.id} value={product.id}>
                        {product.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
