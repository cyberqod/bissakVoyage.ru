
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactForm from "@/components/shared/ContactForm";
import ContactInfo from "@/components/shared/ContactInfo";
import FAQSection from "@/components/shared/FAQSection";

const Contact = () => {
  const faqItems = [
    {
      question: "Quel est le délai de réponse à ma demande ?",
      answer: ""
    },
    {
      question: "Comment puis-je planifier une consultation personnalisée ?",
      answer: ""
    },
    {
      question: "Puis-je visiter vos bureaux en personne ?",
      answer: ""
    },
    {
      question: "Comment puis-je suivre l'état de ma demande ?",
      answer: ""
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Contactez-Nous
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Nous Sommes à Votre Écoute"
            subtitle="Utilisez le formulaire ci-dessous pour nous contacter ou retrouvez nos coordonnées directes"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Notre Localisation"
            subtitle="Trouvez nos bureaux en Russie"
          />
          
          <div className="mt-12">
            <div className="aspect-w-16 aspect-h-9 h-96 bg-gray-200 rounded-lg overflow-hidden">
              {/* Placeholder for map */}
              <div className="flex items-center justify-center h-full bg-gray-100">
                <p className="text-gray-500">Carte interactive sera affichée ici</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FAQSection
            title="Questions Fréquentes"
            subtitle="Découvrez les réponses aux questions les plus courantes"
            items={faqItems}
          />
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Questions Fréquentes"
            subtitle="Réponses aux questions les plus courantes"
          />
          
          <div className="max-w-3xl mx-auto mt-12">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Quel est le délai de réponse à ma demande ?</h3>
                <p className="text-gray-600">
                  Nous nous engageons à répondre à toutes les demandes dans un délai de 24 à 48 heures ouvrables. Pour les questions urgentes, nous vous recommandons de nous contacter directement par WhatsApp ou Telegram.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Comment puis-je planifier une consultation personnalisée ?</h3>
                <p className="text-gray-600">
                  Vous pouvez demander une consultation personnalisée via notre formulaire de contact en sélectionnant "Consultation" comme sujet. Nous vous contacterons pour organiser un appel vidéo à un moment qui vous convient.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Puis-je visiter vos bureaux en personne ?</h3>
                <p className="text-gray-600">
                  Oui, nos bureaux en Russie sont ouverts aux visites sur rendez-vous. Veuillez nous contacter à l'avance pour organiser votre visite. Pour nos clients internationaux, nous proposons également des consultations virtuelles.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Comment puis-je suivre l'état de ma demande ?</h3>
                <p className="text-gray-600">
                  Une fois votre demande soumise, vous recevrez un numéro de référence unique. Vous pourrez utiliser ce numéro pour suivre l'état de votre dossier via notre système de suivi ou en nous contactant directement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </MainLayout>
  );
};

export default Contact;
