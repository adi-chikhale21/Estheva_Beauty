import { MessageCircle } from 'lucide-react';
import { cn } from '../lib/utils';

interface WhatsAppButtonProps {
  className?: string;
  text?: string;
}

export function WhatsAppButton({ className, text = "Book via WhatsApp" }: WhatsAppButtonProps) {
  // Replace with actual WhatsApp number
  const phoneNumber = "1234567890"; 
  const message = "Hi Samantha! I'd like to book an appointment at Estheva Beauty.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#128C7E] hover:scale-105 shadow-lg",
        className
      )}
    >
      <MessageCircle className="h-5 w-5" />
      {text}
    </a>
  );
}
