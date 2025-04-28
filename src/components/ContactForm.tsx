
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import ConfirmationModal from "./ConfirmationModal";
import { Phone, User, MessageSquare } from "lucide-react";

const ContactForm = () => {
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
                  Your Name
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-gray-700 flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="products" className="text-gray-700 flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Desired Products
                </Label>
                <Input
                  id="products"
                  value={products}
                  onChange={(e) => setProducts(e.target.value)}
                  className="mt-1"
                  placeholder="What marshmallows are you interested in?"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-gray-700">Additional Information (Optional)</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1"
                  placeholder="Any questions or special requests?"
                  rows={4}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full btn-primary"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
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
