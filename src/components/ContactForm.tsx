
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import ConfirmationModal from "./ConfirmationModal";
import { Phone, User, MessageSquare, Check, ChevronsUpDown } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { cn } from "@/lib/utils";

const ContactForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const [open, setOpen] = useState(false);

  const products = [
    { id: "vanilla", name: "Classic Vanilla Bean" },
    { id: "strawberry", name: "Strawberry Bliss" },
    { id: "chocolate", name: "Chocolate Swirl" },
    { id: "raspberry", name: "Raspberry Delight" },
  ];

  const generateOrderNumber = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const randomDigits = Math.floor(10000 + Math.random() * 90000);
    return `${year}${month}${day}-${randomDigits}`;
  };

  const sendOrderToTelegram = async (orderData: any, orderNumber: string) => {
    try {
      // Format the message text
      const productNames = orderData.selectedProducts.map((id: string) => 
        products.find(p => p.id === id)?.name || id
      ).join(", ");
      
      const messageText = `New Order #${orderNumber}:\nName: ${orderData.name}\nPhone: ${orderData.phone}\nProducts: ${productNames}\nAdditional Info: ${orderData.message || "None"}`;
      
      // Send to Telegram
      await fetch('https://api.telegram.org/bot7814366701:AAE-NXMtYMI_0FSGPamwgN_miU24EvNyYIw/sendMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "chat_id": "-1002575331808",
          "text": messageText
        })
      });
      
      console.log("Order sent to Telegram");
    } catch (error) {
      console.error("Failed to send order to Telegram:", error);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (selectedProducts.length === 0) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please select at least one product",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Generate order number
    const newOrderNumber = generateOrderNumber();
    setOrderNumber(newOrderNumber);
    
    // Order data
    const orderData = {
      name,
      phone,
      selectedProducts,
      message
    };
    
    try {
      // Send order to Telegram
      await sendOrderToTelegram(orderData, newOrderNumber);
      
      // Show confirmation
      setShowModal(true);
      
      console.log("Order placed:", {
        orderNumber: newOrderNumber,
        ...orderData
      });
    } catch (error) {
      console.error("Error processing order:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to place your order. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleProduct = (productId: string) => {
    setSelectedProducts(current => 
      current.includes(productId)
        ? current.filter(id => id !== productId)
        : [...current, productId]
    );
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
                <Label className="text-gray-700 mb-2 block">
                  {t('products.select')}
                </Label>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-full justify-between"
                    >
                      {selectedProducts.length > 0
                        ? `${selectedProducts.length} products selected`
                        : "Select products..."}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput placeholder="Search products..." />
                      <CommandList>
                        <CommandEmpty>No products found.</CommandEmpty>
                        <CommandGroup>
                          {products.map((product) => (
                            <CommandItem
                              key={product.id}
                              onSelect={() => toggleProduct(product.id)}
                              className="flex items-center gap-2"
                            >
                              <div
                                className={cn(
                                  "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                  selectedProducts.includes(product.id)
                                    ? "bg-primary text-primary-foreground"
                                    : "opacity-50"
                                )}
                              >
                                {selectedProducts.includes(product.id) && (
                                  <Check className="h-3 w-3" />
                                )}
                              </div>
                              <span>{product.name}</span>
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
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
                {isLoading ? t('contact.sending') : t('contact.order')}
              </Button>
            </div>
          </form>
        </div>
      </div>
      
      <ConfirmationModal
        isOpen={showModal}
        onClose={resetForm}
        name={name}
        orderNumber={orderNumber}
      />
    </>
  );
};

export default ContactForm;
