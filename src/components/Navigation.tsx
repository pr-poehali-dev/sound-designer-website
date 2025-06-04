import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <Icon name="Volume2" size={16} className="text-white" />
            </div>
            <span className="text-white font-bold text-lg font-montserrat">
              SoundDesign
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Портфолио
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Контакты
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="sm"
              className="bg-purple-600 hover:bg-purple-700"
            >
              Заказать проект
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-gray-300 hover:text-purple-400 transition-colors text-left"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-gray-300 hover:text-purple-400 transition-colors text-left"
              >
                Портфолио
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-300 hover:text-purple-400 transition-colors text-left"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-purple-400 transition-colors text-left"
              >
                Контакты
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                size="sm"
                className="bg-purple-600 hover:bg-purple-700 w-fit"
              >
                Заказать проект
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
