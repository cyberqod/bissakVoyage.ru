
import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import SectionHeading from "@/components/shared/SectionHeading";
import TestimonialCard from "@/components/shared/TestimonialCard";
import { Button } from "@/components/ui/button";
import { GraduationCap, FileText, MapPin, File, Award } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Recherches d'universités adaptées au profil de l'étudiant - Admission - Visa - Accueil à l'aéroport",
      description: "Service complet incluant la recherche d'universités correspondant à votre profil, gestion complète de votre dossier d'admission, assistance pour l'obtention du visa étudiant, et accueil personnalisé à votre arrivée à l'aéroport.",
      features: [
        "Analyse de votre profil académique",
        "Sélection d'universités adaptées",
        "Préparation du dossier d'admission",
        "Suivi jusqu'à l'acceptation",
        "Assistance visa complète",
        "Accueil VIP à l'aéroport",
        "Transport jusqu'au logement"
      ]
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Assistance visa pour ceux qui possèdent déjà une admission",
      description: "Pour les étudiants ayant déjà leur lettre d'admission, nous proposons un service spécialisé d'assistance pour l'obtention du visa étudiant russe avec toutes les démarches administratives.",
      features: [
        "Vérification de votre dossier d'admission",
        "Préparation des documents visa",
        "Prise de rendez-vous consulaire",
        "Accompagnement aux démarches",
        "Suivi du processus",
        "Conseils personnalisés"
      ]
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Accueil aux différents aéroports et soutien à l'inscription",
      description: "Service d'accueil dans les principaux aéroports russes avec accompagnement complet pour votre inscription universitaire et installation dans votre nouvelle ville d'études.",
      features: [
        "Accueil dans tous les aéroports russes",
        "Transport sécurisé",
        "Accompagnement à l'université",
        "Aide à l'inscription administrative",
        "Visite de la ville et des services",
        "Installation dans le logement",
        "Support les premiers jours"
      ]
    },
    {
      icon: <File className="h-8 w-8 text-primary" />,
      title: "Traduction notariale des documents en Russe",
      description: "Service de traduction certifiée et notariée de tous vos documents officiels vers le russe, conforme aux exigences des autorités russes et des universités.",
      features: [
        "Traduction certifiée conforme",
        "Notarisation officielle",
        "Tous types de documents",
        "Délais rapides",
        "Reconnaissance officielle",
        "Service de qualité professionnelle"
      ]
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Procédure de reconnaissance de diplôme étranger (Équivalence de Diplôme)",
      description: "Accompagnement complet pour la reconnaissance officielle de vos diplômes étrangers en Russie, procédure d'équivalence et validation académique.",
      features: [
        "Analyse de vos diplômes",
        "Préparation du dossier d'équivalence",
        "Soumission aux autorités compétentes",
        "Suivi de la procédure",
        "Obtention de la reconnaissance",
        "Conseils pour la suite du parcours"
      ]
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Nos Services
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Des solutions complètes pour votre parcours académique en Russie, de la recherche d'université à la reconnaissance de diplôme
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Nos Services Spécialisés"
            subtitle="Découvrez notre gamme complète de services pour votre réussite académique en Russie"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg transition-transform hover:transform hover:scale-105">
                <div className="flex items-start mb-6">
                  <div className="p-3 bg-primary/10 rounded-full mr-4 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 leading-tight">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-primary">Ce qui est inclus :</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-white" asChild>
                  <Link to="/contact">Demander ce service</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Pourquoi Choisir Nos Services ?"
            subtitle="Notre expertise et notre engagement pour votre réussite"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expertise Reconnue</h3>
              <p className="text-gray-600">
                Plus de 7 ans d'expérience dans l'accompagnement d'étudiants vers les universités russes
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Démarches Simplifiées</h3>
              <p className="text-gray-600">
                Nous nous occupons de toutes les procédures administratives pour vous faire gagner du temps
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Accompagnement Sur Place</h3>
              <p className="text-gray-600">
                Notre équipe locale vous accompagne dès votre arrivée en Russie
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Témoignages de Nos Clients"
            subtitle="Découvrez les expériences de ceux qui nous ont fait confiance"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <TestimonialCard
              quote="L'équipe m'a trouvé l'université parfaite pour mon profil. De l'admission au visa, tout s'est passé sans problème. L'accueil à l'aéroport était un vrai plus !"
              name="Ahmed K."
              role="Étudiant en Médecine, Moscou"
            />
            <TestimonialCard
              quote="J'avais déjà mon admission mais le visa me semblait compliqué. Leur service d'assistance visa m'a permis d'obtenir mon visa rapidement."
              name="Fatima B."
              role="Étudiante en Informatique, Saint-Pétersbourg"
            />
            <TestimonialCard
              quote="La traduction notariale de mes documents et la reconnaissance de mon diplôme ont été traitées avec professionnalisme. Service irréprochable !"
              name="Omar S."
              role="Étudiant en Master, Kazan"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à Commencer Votre Parcours ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nous pouvons vous accompagner
          </p>
          <Button className="bg-white text-primary hover:bg-gray-100 font-medium px-8 py-6 text-lg" asChild>
            <Link to="/contact">Contactez-nous maintenant</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Services;
