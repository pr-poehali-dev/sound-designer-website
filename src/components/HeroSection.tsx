import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-pink-500 rounded-full filter blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Sound wave visualization */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="flex items-end space-x-1">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="bg-purple-400 animate-pulse"
              style={{
                width: "4px",
                height: `${Math.random() * 200 + 20}px`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${1 + Math.random()}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-montserrat">
            Звуковой
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Дизайн
            </span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-8 font-open-sans">
            Создаю атмосферу для коммерческого видео
          </div>
        </div>

        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Профессиональный саунд-дизайн, который превращает обычное видео в
          незабываемый опыт. От рекламных роликов до корпоративных презентаций.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg"
          >
            <Icon name="Play" className="mr-2" size={20} />
            Послушать портфолио
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg"
          >
            <Icon name="MessageCircle" className="mr-2" size={20} />
            Обсудить проект
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-purple-400 mb-2">150+</div>
            <div className="text-gray-400">Проектов</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400 mb-2">5 лет</div>
            <div className="text-gray-400">Опыта</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400 mb-2">48ч</div>
            <div className="text-gray-400">Сроки</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="text-purple-400" size={32} />
      </div>
    </section>
  );
};

export default HeroSection;
