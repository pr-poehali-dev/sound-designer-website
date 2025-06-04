import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const services = [
    {
      icon: "Volume2",
      title: "Саунд-дизайн",
      description:
        "Создание уникальной звуковой атмосферы для ваших видеопроектов",
      features: [
        "Оригинальные звуковые эффекты",
        "Атмосферные текстуры",
        "Синхронизация со сценарием",
        "Мастеринг и обработка",
      ],
      price: "от 15 000 ₽",
      popular: false,
    },
    {
      icon: "Music",
      title: "Музыкальное оформление",
      description:
        "Подбор и создание музыкального сопровождения под настроение видео",
      features: [
        "Лицензионная музыка",
        "Оригинальные композиции",
        "Адаптация под хронометраж",
        "Безлимитные правки",
      ],
      price: "от 25 000 ₽",
      popular: true,
    },
    {
      icon: "Mic",
      title: "Обработка речи",
      description: "Профессиональная обработка закадрового голоса и диалогов",
      features: [
        "Шумоподавление",
        "Эквализация голоса",
        "Компрессия и лимитинг",
        "Сведение с музыкой",
      ],
      price: "от 8 000 ₽",
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat">
            Услуги и цены
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Комплексный подход к звуковому оформлению — от идеи до финального
            мастеринга
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`relative bg-slate-900 border-2 transition-all duration-300 hover:transform hover:scale-105 ${
                service.popular
                  ? "border-purple-500 shadow-2xl shadow-purple-500/20"
                  : "border-slate-700 hover:border-purple-400"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Популярно
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    service.popular ? "bg-purple-600" : "bg-slate-700"
                  }`}
                >
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-white"
                  />
                </div>
                <CardTitle className="text-2xl font-bold text-white font-montserrat">
                  {service.title}
                </CardTitle>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-300"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-purple-400 mr-3 flex-shrink-0"
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center border-t border-slate-700 pt-6">
                  <div className="text-3xl font-bold text-white mb-4 font-montserrat">
                    {service.price}
                  </div>
                  <Button
                    className={`w-full ${
                      service.popular
                        ? "bg-purple-600 hover:bg-purple-700"
                        : "bg-slate-700 hover:bg-slate-600"
                    }`}
                  >
                    Заказать услугу
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-slate-900 rounded-2xl p-8 max-w-4xl mx-auto border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4 font-montserrat">
              Комплексные проекты
            </h3>
            <p className="text-gray-400 mb-6">
              Для масштабных проектов предлагаем индивидуальные условия и
              фиксированную стоимость
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Icon name="Calculator" className="mr-2" size={20} />
                Рассчитать стоимость
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
              >
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Консультация
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
