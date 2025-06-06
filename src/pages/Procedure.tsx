
import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import SectionHeading from "@/components/shared/SectionHeading";
import StepsTimeline from "@/components/shared/StepsTimeline";
import { Button } from "@/components/ui/button";
import { FileText, GraduationCap, Wallet, Plane, Home, Users } from "lucide-react";

const Procedure = () => {
  const admissionSteps = [
    {
      id: 1,
      title: "Contact Initial",
      description: "Remplissez notre formulaire de contact ou contactez-nous via WhatsApp/Telegram pour discuter de votre projet d'études en Russie.",
      //icon: <Users />
    },
    {
      id: 2,
      title: "Choix du Programme et de l'Université",
      description: "Nous vous conseillons sur les programmes disponibles et vous aidons à choisir l'université qui correspond le mieux à vos objectifs.",
      //icon: <GraduationCap />
    },
    {
      id: 3,
      title: "Préparation du Dossier",
      description: "Nous vous guidons dans la préparation de votre dossier d'admission (documents requis, traductions, légalisations).",
      //icon: <FileText />
    },
    {
      id: 4,
      title: "Demande d'Admission",
      description: "Nous soumettons votre dossier à l'université choisie et suivons le processus d'admission jusqu'à l'obtention de votre lettre d'acceptation/invitation.",
      //icon: <FileText />
    },
    {
      id: 5,
      title: "Paiement des Frais de Service (Premier Versement)",
      description: "Le premier versement s'effectue apres l'invitation, une fois que l'université ai validé votre admission.",
      //icon: <Wallet />
    },
    {
      id: 6,
      title: "Procédure de Visa",
      description: "Après réception de l'invitation officielle, nous vous assistons dans la préparation de votre demande de visa étudiant (documents, formulaires, etc...).",
      //icon: <FileText />
    },
    {
      id: 7,
      title: "Paiement du Solde",
      description: "Réglez le reste des frais de service avant la finalisation des procédures de visa.",
      //icon: <Wallet />
    },
    {
      id: 8,
      title: "Préparation du Voyage",
      description: "Nous vous aidons à réserver votre billet d'avion et organisons votre accueil à l'aéroport.",
      //icon: <Plane />
    },
    {
      id: 9,
      title: "Arrivée et Installation",
      description: "Notre équipe vous accueille à votre arrivée et vous accompagne jusqu'à votre logement.",
      // icon: <Home />
    }
  ];

  const requiredDocuments = [
    "Passeport valide (validité > 18 mois)",
    "Diplôme universitaires et attestation",
    "Relevé de notes",
    "Passeport"
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Notre Procédure d'Admission
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Un processus simplifié et transparent pour votre admission dans les universités russes
          </p>
        </div>
      </section>

      {/* Steps Timeline */}
      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Les Étapes de Votre Admission"
            subtitle="Suivez notre procédure en 9 étapes simples pour réaliser votre projet d'études en Russie"
          />
          
          <div className="mt-12 max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <StepsTimeline steps={admissionSteps} />
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Documents Requis"
            subtitle="Liste des documents nécessaires pour compléter votre dossier d'admission"
          />
          
          <div className="max-w-2xl mx-auto mt-12">
            <div className="bg-neutral p-6 rounded-lg shadow">
              <ul className="space-y-3">
                {requiredDocuments.map((document, index) => (
                  <li key={index} className="flex items-center">
                    <span className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span>{document}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                <p className="text-sm text-yellow-800">
                  <strong>Important :</strong> Tous les documents doivent être traduits en russe et légalisés. Notre agence peut vous accompagner dans ce processus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Schedule */}
      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Échéancier de Paiement"
            subtitle="Notre processus de paiement est transparent et sécurisé"
          />
          
          <div className="max-w-3xl mx-auto mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Premier Versement (50%)</h3>
                <p className="text-gray-600 mb-3">
                  À effectuer après la procédure d'admission.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Deuxième Versement (50%)</h3>
                <p className="text-gray-600 mb-3">
                  À effectuer après obtention de la lettre d'admission et avant la procédure de visa.
                </p>
                <div className="bg-gray-100 p-4 rounded-md">
                  <p className="text-sm">
                    <strong>Ce que cela couvre :</strong> Assistance pour le visa, réservation du logement, accueil à l'aéroport, installation dans le logement, support local.
                  </p>
                </div>
              </div>
              
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-md">
                <p className="text-sm text-blue-800">
                  <strong>Note :</strong> Les frais universitaires (inscription, scolarité) sont à payer directement à l'université selon leurs modalités. Nous vous fournirons toutes les informations nécessaires.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Questions Fréquentes sur la Procédure"
            subtitle="Réponses aux questions les plus courantes concernant l'admission en Russie"
          />
          
          <div className="max-w-3xl mx-auto mt-12">
            <div className="space-y-6">
              <div className="bg-neutral p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Combien de temps dure le processus d'admission ?</h3>
                <p className="text-gray-600">
                  La durée moyenne du processus est de 2 à 3 mois, depuis le contact initial jusqu'à l'obtention du visa. Il est recommandé de commencer la procédure au moins 4 mois avant la date de début des cours.
                </p>
              </div>
              
              <div className="bg-neutral p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Dois-je parler russe pour étudier en Russie ?</h3>
                <p className="text-gray-600">
                  Non, de nombreux programmes sont disponibles en anglais ou en français. Pour les programmes en russe, des cours préparatoires de langue sont proposés et nous vous aiderons à vous y inscrire.
                </p>
              </div>
              
              <div className="bg-neutral p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Comment sont traités les paiements ?</h3>
                <p className="text-gray-600">
                  Les paiements se font par dépôt bancaire ou virement. Nous fournissons des preuves d'identité (passeport) avant tout paiement pour garantir votre sécurité. Pour en savoir plus, consultez notre page dédiée au paiement sécurisé.
                </p>
              </div>
              
              <div className="bg-neutral p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Que se passe-t-il si ma demande de visa est refusée ?</h3>
                <p className="text-gray-600">
                  En cas de refus de visa (cas très rare avec notre procédure), nous vous accompagnons dans le processus de recours ou vous proposons des alternatives. Certains frais peuvent être remboursés selon notre politique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Prêt à commencer votre procédure d'admission ?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Notre équipe est disponible pour répondre à toutes vos questions et vous accompagner dans votre projet d'études en Russie.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button className="bg-white text-primary hover:bg-gray-100" asChild>
              <Link to="/contact">Nous contacter</Link>
            </Button>
            <Button className="bg-secondary hover:bg-secondary/90 text-white" asChild>
              <Link to="/services">Découvrir nos services</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Procedure;
