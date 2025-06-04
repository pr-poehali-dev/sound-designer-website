import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Формируем данные для отправки в Formspree
    const formDataToSubmit = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSubmit.append(key, value);
    });

    // Отправляем на Formspree (бесплатная CRM)
    fetch("https://formspree.io/f/xpzgkrpn", {
      method: "POST",
      body: formDataToSubmit,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Заявка отправлена! Свяжусь с вами в течение дня.");
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            budget: "",
            timeline: "",
            message: "",
          });
        } else {
          alert("Ошибка отправки. Попробуйте позже или свяжитесь напрямую.");
        }
      })
      .catch(() => {
        alert("Ошибка отправки. Попробуйте позже или свяжитесь напрямую.");
      });
  };

  const contactInfo = [
    {
      icon: "Mail",
      title: "Email",
      value: "sound@designer.ru",
      action: "mailto:sound@designer.ru",
    },
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (999) 123-45-67",
      action: "tel:+79991234567",
    },
    {
      icon: "MessageCircle",
      title: "Telegram",
      value: "@sounddesigner",
      action: "https://t.me/sounddesigner",
    },
    {
      icon: "Clock",
      title: "Время работы",
      value: "Пн-Пт 10:00-20:00",
      action: null,
    },
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat">
            Обсудим ваш проект
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Расскажите о своих задачах, и я предложу оптимальное решение для
            звукового оформления
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 font-montserrat">
                Контактная информация
              </h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-slate-800 rounded-lg"
                  >
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon
                        name={contact.icon as any}
                        size={20}
                        className="text-white"
                      />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">
                        {contact.title}
                      </div>
                      {contact.action ? (
                        <a
                          href={contact.action}
                          className="text-white hover:text-purple-400 transition-colors font-medium"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <div className="text-white font-medium">
                          {contact.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              <h4 className="text-xl font-semibold text-white mb-4 font-montserrat">
                Быстрый старт
              </h4>
              <p className="text-gray-400 mb-6 text-sm">
                Для ускорения работы подготовьте:
              </p>
              <ul className="space-y-3">
                {[
                  "Черновой монтаж видео",
                  "Техническое задание или бриф",
                  "Референсы звукового стиля",
                  "Информацию о целевой аудитории",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <Icon
                      name="CheckCircle"
                      size={16}
                      className="text-purple-400 mr-3 flex-shrink-0"
                    />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white font-montserrat">
                Заявка на проект
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-300">
                      Имя
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-slate-700 border-slate-600 text-white"
                      placeholder="Ваше имя"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-slate-700 border-slate-600 text-white"
                      placeholder="email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-300">
                    Телефон
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="bg-slate-700 border-slate-600 text-white"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-gray-300">Тип услуги</Label>
                    <Select
                      onValueChange={(value) =>
                        setFormData({ ...formData, service: value })
                      }
                    >
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sound-design">
                          Саунд-дизайн
                        </SelectItem>
                        <SelectItem value="music">
                          Музыкальное оформление
                        </SelectItem>
                        <SelectItem value="voice">Обработка речи</SelectItem>
                        <SelectItem value="complex">
                          Комплексный проект
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-300">Бюджет</Label>
                    <Select
                      onValueChange={(value) =>
                        setFormData({ ...formData, budget: value })
                      }
                    >
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="Выберите бюджет" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10-25">10-25 тысяч ₽</SelectItem>
                        <SelectItem value="25-50">25-50 тысяч ₽</SelectItem>
                        <SelectItem value="50-100">50-100 тысяч ₽</SelectItem>
                        <SelectItem value="100+">Более 100 тысяч ₽</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-300">Сроки</Label>
                  <Select
                    onValueChange={(value) =>
                      setFormData({ ...formData, timeline: value })
                    }
                  >
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue placeholder="Когда нужно завершить?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="urgent">Срочно (1-3 дня)</SelectItem>
                      <SelectItem value="week">В течение недели</SelectItem>
                      <SelectItem value="month">В течение месяца</SelectItem>
                      <SelectItem value="flexible">Сроки гибкие</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-300">
                    Описание проекта
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-slate-700 border-slate-600 text-white min-h-[120px]"
                    placeholder="Расскажите подробнее о проекте, ваших задачах и пожеланиях..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
