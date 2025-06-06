import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import SectionHeading from "@/components/shared/SectionHeading";
import TestimonialCard from "@/components/shared/TestimonialCard";
import { Button } from "@/components/ui/button";
import img1 from "@/assets/imgs/img1.jpg";
import img2 from "@/assets/imgs/img2.jpg";
import img3 from "@/assets/imgs/img3.jpg";
import img4 from "@/assets/imgs/img4.jpg";
import heroimage from "@/assets/imgs/hero-image.jpeg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CheckCircle, ChevronRight, GraduationCap, MapPin, Home, FileText, CreditCard } from "lucide-react";
import FAQSection from "@/components/shared/FAQSection";

const airportPhotos = [
  {
    url: img1,
    alt: "Accueil des étudiants à l'aéroport"
  },
  {
    url: img2,
    alt: "Accueil des étudiants à l'aéroport"
  },
  {
    url: img3,
    alt: "Orientation des nouveaux étudiants"
  },
  {
    url: img4,
    alt: "Service d'accueil aéroportuaire"
  }
];

const Index = () => {
  const faqItems = [
    {
      question: "Combien de temps dure le processus d'admission ?",
      answer: "La durée moyenne du processus est de 2 à 3 mois, depuis le contact initial jusqu'à l'obtention du visa. Il est recommandé de commencer la procédure au moins 4 mois avant la date de début des cours."
    },
    {
      question: "Dois-je parler russe pour étudier en Russie ?",
      answer: "Non, de nombreux programmes sont disponibles en anglais ou en français. Pour les programmes en russe, des cours préparatoires de langue sont proposés et nous vous aiderons à vous y inscrire."
    },
    {
      question: "Comment sont traités les paiements ?",
      answer: "Les paiements se font par dépôt bancaire ou virement. Nous fournissons des preuves d'identité (passeport) avant tout paiement pour garantir votre sécurité. Pour en savoir plus, consultez notre page dédiée au paiement sécurisé."
    },
    {
      question: "Que se passe-t-il si ma demande de visa est refusée ?",
      answer: "En cas de refus de visa (cas très rare avec notre procédure), nous vous accompagnons dans le processus de recours ou vous proposons des alternatives. Certains frais peuvent être remboursés selon notre politique."
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Votre Parcours Étudiant en Russie Commence Ici
              </h1>
              <p className="text-xl mb-8 max-w-lg">
                Accompagnement complet pour votre admission, visa, logement et plus encore. Simplifiez votre chemin vers les meilleures universités russes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-secondary hover:bg-secondary/90 text-white font-medium px-8 py-6 text-lg" asChild>
                  <Link to="/contact">Démarrer ma procédure</Link>
                </Button>
                <Button className="bg-white text-primary hover:bg-gray-100 font-medium px-8 py-6 text-lg" asChild>
                  <Link to="/procedure">
                    En savoir plus
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src={heroimage} 
                alt="Étudiants en Russie" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Pourquoi Choisir Russie Études ?"
            subtitle="Notre agence vous accompagne à chaque étape de votre parcours pour étudier en Russie, avec transparence et professionnalisme."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg p-6 shadow-md transition-transform hover:transform hover:scale-105">
              <div className="p-3 bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <GraduationCap className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Admission Garantie</h3>
              <p className="text-gray-600">
                Nous collaborons avec les meilleures universités russes pour garantir votre admission dans le programme de votre choix.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md transition-transform hover:transform hover:scale-105">
              <div className="p-3 bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FileText className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Visa Étudiant</h3>
              <p className="text-gray-600">
                Notre équipe s'occupe de toutes les démarches administratives pour l'obtention de votre visa étudiant.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md transition-transform hover:transform hover:scale-105">
              <div className="p-3 bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Home className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Logement Confortable</h3>
              <p className="text-gray-600">
                Des résidences universitaires aux appartements privés, nous trouvons le logement qui correspond à votre budget.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md transition-transform hover:transform hover:scale-105">
              <div className="p-3 bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <MapPin className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Accueil à l'Arrivée</h3>
              <p className="text-gray-600">
                Notre équipe vous accueille directement à l'aéroport et vous accompagne jusqu'à votre logement.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md transition-transform hover:transform hover:scale-105">
              <div className="p-3 bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <CreditCard className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Paiement Sécurisé</h3>
              <p className="text-gray-600">
                Processus de paiement transparent par dépôt bancaire avec garanties et preuves d'identité.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md transition-transform hover:transform hover:scale-105">
              <div className="p-3 bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <CheckCircle className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Suivi Personnalisé</h3>
              <p className="text-gray-600">
                Un conseiller dédié vous accompagne durant tout votre séjour pour répondre à vos questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Airport Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Notre Service d'Accueil à l'Aéroport"
            subtitle="Découvrez comment nous accueillons nos étudiants dès leur arrivée en Russie pour leur assurer un début de séjour serein."
          />
          
          <div className="mt-12 max-w-5xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {airportPhotos.map((photo, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                    <div className="p-1">
                      <img
                        src={photo.url}
                        alt={photo.alt}
                        className="rounded-lg shadow-md w-full h-[650px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-20">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">27+</div>
              <p className="text-primary-foreground/80">Étudiants Accompagnés</p>
            </div>
            {/* <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <p className="text-primary-foreground/80">Universités Partenaires</p>
            </div> */}
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">98%</div>
              <p className="text-primary-foreground/80">Taux de Réussite</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">2+</div>
              <p className="text-primary-foreground/80">Années d'Expérience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Ce Que Disent Nos Étudiants"
            subtitle="Découvrez les témoignages de nos étudiants qui ont réalisé leur rêve d'étudier en Russie grâce à notre accompagnement."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <TestimonialCard
              quote="Grâce à BissakVoyage, mon admission et mon visa ont été obtenus sans aucune difficulté. Leur équipe m'a accompagné à chaque étape et je suis maintenant en 2ème année de médecine à Moscou."
              name="Abdoulaye K."
              role="Étudiant en Médecine, Moscou"
            />
            <TestimonialCard
              quote="J'avais peur du processus complexe pour étudier à l'étranger, mais l'agence a tout géré parfaitement. Même mon logement était prêt à mon arrivée!"
              name="Amina T."
              role="Étudiante en Génie Civil, Moscou"
            />
            <TestimonialCard
              quote="Le suivi personnalisé et la transparence dans les paiements m'ont rassuré. Je recommande cette agence à tous ceux qui veulent étudier en Russie sans stress."
              name="Emmanuel D."
              role="Étudiant en Relations Internationales, Moscou"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
              <Link to="/contact">Commencer votre aventure</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FAQSection
            title="Questions Fréquentes"
            subtitle="Découvrez les réponses aux questions les plus courantes concernant l'admission en Russie"
            items={faqItems}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary to-secondary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à commencer votre parcours en Russie ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ne laissez pas les procédures complexes vous empêcher de réaliser vos rêves académiques. Notre équipe est là pour vous accompagner.
          </p>
          <Button className="bg-white text-secondary hover:bg-gray-100 font-medium px-8 py-6 text-lg" asChild>
            <Link to="/contact">Contactez-nous dès aujourd'hui</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
