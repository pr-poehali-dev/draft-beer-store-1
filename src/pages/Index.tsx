import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const beerTypes = [
    {
      name: "Светлый лагер",
      description: "Легкий освежающий вкус с нотами солода и хмеля",
      alcohol: "4.5%",
      price: "150 ₽/л",
      taste: "Мягкий, с цитрусовыми нотками",
      color: "Золотистый"
    },
    {
      name: "Темный стаут",
      description: "Насыщенный вкус с нотами шоколада и кофе",
      alcohol: "6.2%",
      price: "180 ₽/л",
      taste: "Плотный, кремовый, с горчинкой",
      color: "Темно-коричневый"
    },
    {
      name: "Пшеничное пиво",
      description: "Мягкое нефильтрованное пиво с дрожжевым ароматом",
      alcohol: "5.1%",
      price: "160 ₽/л",
      taste: "Свежий, фруктовый",
      color: "Мутно-желтый"
    },
    {
      name: "IPA",
      description: "Крепкое пиво с ярко выраженным хмелевым вкусом",
      alcohol: "7.8%",
      price: "220 ₽/л",
      taste: "Горький, с тропическими нотами",
      color: "Янтарный"
    }
  ];

  const loyaltyProgram = [
    {
      title: "Бронзовая карта",
      discount: "5%",
      requirement: "От 1 000 ₽",
      benefits: ["Скидка на все пиво", "SMS-уведомления об акциях"]
    },
    {
      title: "Серебряная карта",
      discount: "10%",
      requirement: "От 5 000 ₽",
      benefits: ["Увеличенная скидка", "Бесплатная закуска к каждому литру", "Приоритетное обслуживание"]
    },
    {
      title: "Золотая карта",
      discount: "15%",
      requirement: "От 15 000 ₽",
      benefits: ["Максимальная скидка", "Бесплатная дегустация новинок", "Персональные предложения"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Beer" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-foreground">ПивоЛавка</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#hero" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Ассортимент</a>
            <a href="#loyalty" className="text-foreground hover:text-primary transition-colors">Скидки</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Свежее разливное пиво
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Лучшее разливное пиво в городе
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Более 20 сортов крафтового и классического пива. 
              Всегда свежее, всегда вкусное. Программа лояльности со скидками до 15%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Посмотреть ассортимент
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Icon name="MapPin" size={20} className="mr-2" />
                Как добраться
              </Button>
            </div>
          </div>
          <div className="animate-scale-in">
            <img 
              src="/img/afd9024f-29f2-4a8a-ae6a-3283f8091fe8.jpg" 
              alt="Разливное пиво"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Beer Catalog */}
      <section id="catalog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              Наш ассортимент
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Каталог сортов пива
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Тщательно отобранные сорта от лучших пивоварен. 
              Каждый сорт с подробным описанием вкуса и характеристик.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beerTypes.map((beer, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Icon name="Beer" size={24} className="text-primary" />
                    <Badge variant="secondary">{beer.alcohol}</Badge>
                  </div>
                  <CardTitle className="text-xl">{beer.name}</CardTitle>
                  <CardDescription>{beer.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Вкус:</span>
                      <span className="font-medium">{beer.taste}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Цвет:</span>
                      <span className="font-medium">{beer.color}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{beer.price}</span>
                    <Button size="sm" className="px-6">
                      <Icon name="Plus" size={16} className="mr-1" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty Program */}
      <section id="loyalty" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Программа лояльности
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Скидки для постоянных клиентов
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Чем больше покупаете, тем больше экономите. 
              Накапливайте бонусы и получайте эксклюзивные предложения.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {loyaltyProgram.map((tier, index) => (
              <Card key={index} className={`text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in ${index === 1 ? 'ring-2 ring-primary/20 scale-105' : ''}`}>
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Icon name="Award" size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{tier.title}</CardTitle>
                  <CardDescription className="text-lg">
                    Скидка <span className="text-3xl font-bold text-primary">{tier.discount}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-4">
                      При покупке {tier.requirement}
                    </p>
                    <ul className="text-sm space-y-2">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center">
                          <Icon name="Check" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full">
                    Получить карту
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              Контакты
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Приходите к нам
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы работаем каждый день и всегда рады новым и постоянным клиентам.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Информация о магазине</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Icon name="MapPin" size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Адрес</p>
                      <p className="text-muted-foreground">ул. Пивная, 15, Москва</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Clock" size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Режим работы</p>
                      <p className="text-muted-foreground">Пн-Вс: 10:00-22:00</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Phone" size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Телефон</p>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Mail" size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">info@pivolavka.ru</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex space-x-4">
                  <Button className="flex-1">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Позвонить
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Icon name="Navigation" size={16} className="mr-2" />
                    Маршрут
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <div className="bg-muted/30 rounded-2xl p-2 h-96 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <Icon name="Map" size={48} className="mx-auto mb-4 text-muted-foreground/50" />
                  <p>Интерактивная карта</p>
                  <p className="text-sm">будет здесь</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Beer" size={24} className="text-primary" />
                <h3 className="text-xl font-bold">ПивоЛавка</h3>
              </div>
              <p className="text-background/80">
                Лучшее разливное пиво в городе. 
                Более 20 сортов всегда в наличии.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#hero" className="hover:text-primary transition-colors">Главная</a></li>
                <li><a href="#catalog" className="hover:text-primary transition-colors">Ассортимент</a></li>
                <li><a href="#loyalty" className="hover:text-primary transition-colors">Скидки</a></li>
                <li><a href="#contacts" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-background/80">
                <p>+7 (495) 123-45-67</p>
                <p>info@pivolavka.ru</p>
                <p>ул. Пивная, 15, Москва</p>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 mt-8 text-center text-background/60">
            <p>&copy; 2024 ПивоЛавка. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}