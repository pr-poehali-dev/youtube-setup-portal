import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 border-b">
        <div className="flex items-center space-x-2">
          <Icon name="Play" className="text-youtube" size={32} />
          <span className="text-2xl font-bold text-gray-300">YouTube Setup</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#home" className="text-gray-300 hover:text-youtube transition-colors">Главная</a>
          <a href="#support" className="text-gray-300 hover:text-youtube transition-colors">Поддержка</a>
          <Button variant="outline" className="border-youtube text-youtube hover:bg-youtube hover:text-white">
            Войти
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-300 mb-6">
            Настройка YouTube
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Профессиональная настройка и оптимизация вашего YouTube канала. 
            Увеличьте просмотры и подписчиков с нашими экспертными решениями.
          </p>
          <Button 
            className="bg-youtube hover:bg-red-600 text-white px-8 py-3 text-lg"
            size="lg"
          >
            Начать настройку
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-300 mb-12">
            Тарифные планы
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-300">Базовый</CardTitle>
                <CardDescription>
                  <div className="text-3xl font-bold text-youtube mt-2">₽2,990</div>
                  <div className="text-gray-400">за канал</div>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-3" size={16} />
                    <span>Оптимизация профиля</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-3" size={16} />
                    <span>Настройка SEO</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-3" size={16} />
                    <span>Базовый дизайн</span>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-youtube text-youtube hover:bg-youtube hover:text-white"
                >
                  Выбрать план
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-2 border-youtube hover:shadow-lg transition-shadow">
              <CardHeader className="text-center bg-youtube/5">
                <CardTitle className="text-2xl text-gray-300">Профессиональный</CardTitle>
                <CardDescription>
                  <div className="text-3xl font-bold text-youtube mt-2">₽7,990</div>
                  <div className="text-gray-400">за канал</div>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 mt-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-3" size={16} />
                    <span>Всё из базового</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-3" size={16} />
                    <span>Продвинутая аналитика</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-3" size={16} />
                    <span>Настройка монетизации</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-3" size={16} />
                    <span>30 дней поддержки</span>
                  </div>
                </div>
                <Button 
                  className="w-full bg-youtube hover:bg-red-600 text-white"
                >
                  Выбрать план
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-300">Корпоративный</CardTitle>
                <CardDescription>
                  <div className="text-3xl font-bold text-youtube mt-2">₽15,990</div>
                  <div className="text-gray-400">за канал</div>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-3" size={16} />
                    <span>Всё из профессионального</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-3" size={16} />
                    <span>Персональный менеджер</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-3" size={16} />
                    <span>Стратегия контента</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-3" size={16} />
                    <span>Безлимитная поддержка</span>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-youtube text-youtube hover:bg-youtube hover:text-white"
                >
                  Выбрать план
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-300 mb-12">
            Поддержка
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="MessageCircle" className="mr-3 text-youtube" size={24} />
                  Онлайн чат
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Получите мгновенную помощь от наших экспертов 24/7
                </p>
                <Button className="bg-youtube hover:bg-red-600 text-white">
                  Открыть чат
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Mail" className="mr-3 text-youtube" size={24} />
                  Email поддержка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Отправьте детальный запрос и получите ответ в течение 2 часов
                </p>
                <Button 
                  variant="outline" 
                  className="border-youtube text-youtube hover:bg-youtube hover:text-white"
                >
                  Написать email
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="text-2xl font-bold text-gray-300 mb-6 text-center">
              Часто задаваемые вопросы
            </h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  Сколько времени занимает настройка канала?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Базовая настройка занимает 1-2 дня. Профессиональная настройка с аналитикой и оптимизацией - 3-5 дней. Корпоративные проекты обсуждаются индивидуально.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  Какие гарантии вы предоставляете?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Мы гарантируем качественную настройку согласно выбранному тарифу. Если результат не соответствует описанию, мы доработаем бесплатно или вернём деньги.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Нужны ли мне права администратора канала?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Да, для настройки канала нам необходимы права администратора. Мы работаем строго в рамках оговоренных услуг и не вносим изменения без согласования.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  Предоставляете ли вы обучение?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  В рамках профессионального и корпоративного тарифов мы проводим обучение по работе с настроенным каналом и предоставляем руководства.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-300 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Play" className="text-youtube" size={28} />
                <span className="text-xl font-bold">YouTube Setup</span>
              </div>
              <p className="text-gray-100">
                Профессиональная настройка YouTube каналов для максимальной эффективности.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-100">
                <li>Оптимизация канала</li>
                <li>SEO настройка</li>
                <li>Дизайн и брендинг</li>
                <li>Аналитика</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-100">
                <p>support@youtubesetup.ru</p>
                <p>+7 (495) 123-45-67</p>
                <div className="flex space-x-4 mt-4">
                  <Icon name="Mail" size={20} className="hover:text-youtube cursor-pointer" />
                  <Icon name="Phone" size={20} className="hover:text-youtube cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-400 mt-8 pt-8 text-center text-gray-100">
            <p>&copy; 2024 YouTube Setup. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;