import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ProjectShowcase = () => {
  const projects = [
    {
      id: 1,
      title: "Реклама банка",
      description:
        "Динамичный саунд-дизайн для рекламного ролика финансовых услуг",
      category: "Реклама",
      duration: "0:30",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      tags: ["Корпоратив", "Динамика"],
    },
    {
      id: 2,
      title: "Продуктовое видео",
      description:
        "Атмосферное звуковое сопровождение для презентации нового продукта",
      category: "Презентация",
      duration: "2:15",
      image:
        "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&h=400&fit=crop",
      tags: ["Продукт", "Премиум"],
    },
    {
      id: 3,
      title: "Бренд-ролик",
      description:
        "Эмоциональная звуковая история для укрепления имиджа бренда",
      category: "Брендинг",
      duration: "1:45",
      image:
        "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop",
      tags: ["Эмоции", "Стиль"],
    },
    {
      id: 4,
      title: "Обучающее видео",
      description:
        "Четкое и приятное звуковое оформление для образовательного контента",
      category: "Образование",
      duration: "5:20",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      tags: ["Обучение", "Четкость"],
    },
    {
      id: 5,
      title: "Событийное видео",
      description:
        "Торжественное звуковое сопровождение корпоративного мероприятия",
      category: "События",
      duration: "3:30",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
      tags: ["События", "Праздник"],
    },
    {
      id: 6,
      title: "Технологический ролик",
      description:
        "Футуристический саунд для IT-компании с акцентом на инновации",
      category: "Технологии",
      duration: "1:20",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      tags: ["Технологии", "Будущее"],
    },
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat">
            Портфолио проектов
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Каждый проект — это уникальная звуковая история, созданная под
            конкретные задачи клиента
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-slate-800 border-slate-700 overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    <Icon name="Play" className="mr-2" size={20} />
                    Воспроизвести
                  </Button>
                </div>
                <Badge className="absolute top-4 right-4 bg-purple-600">
                  {project.duration}
                </Badge>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge
                    variant="outline"
                    className="border-purple-400 text-purple-400"
                  >
                    {project.category}
                  </Badge>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2 font-montserrat">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-slate-700 text-gray-300 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
          >
            <Icon name="ExternalLink" className="mr-2" size={20} />
            Посмотреть все работы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
