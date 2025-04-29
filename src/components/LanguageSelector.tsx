
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/hooks/useLanguage";

const LanguageSelector = () => {
  const { currentLanguage, setLanguage } = useLanguage();
  
  const languages = [
    { code: "pl", name: "Polski", flag: "🇵🇱" },
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "uk", name: "Українська", flag: "🇺🇦" },
    { code: "be", name: "Беларуская", flag: "🇧🇾" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="flex items-center gap-2 py-1 px-3 border-2 border-marshmallow-300 hover:bg-marshmallow-50"
        >
          <span className="text-lg">{languages.find(lang => lang.code === currentLanguage)?.flag}</span>
          <span className="text-sm font-medium">{currentLanguage}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languages.map((language) => (
          <DropdownMenuItem 
            key={language.code}
            onClick={() => setLanguage(language.code)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span>{language.flag}</span>
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
