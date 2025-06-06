
import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Shield, Lock, CreditCard, FileText, CheckCircle, AlertTriangle } from "lucide-react";
import FAQSection from "@/components/shared/FAQSection";

const Paiement = () => {
  const faqItems = [
    {
      question: "Que se passe-t-il si ma demande d'admission est rejetée ?",
      answer: ""
    },
    {
      question: "Comment effectuer un paiement depuis un pays africain ?",
      answer: ""
    },
    {
      question: "Est-il possible de payer en plusieurs versements ?",
      answer: ""
    }
  ];
  
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Paiement Sécurisé
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nous garantissons des transactions sécurisées et transparentes pour votre tranquillité d'esprit
          </p>
        </div>
      </section>

      {/* Payment Security */}
      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Notre Engagement de Sécurité"
            subtitle="Comment nous garantissons la sécurité de vos paiements"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Identité Vérifiable</h3>
              <p className="text-gray-600">
                Nous vous fournissons une copie de notre passeport et nos coordonnées complètes avant tout paiement pour établir un lien de confiance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Contrats Formels</h3>
              <p className="text-gray-600">
                Chaque service fait l'objet d'un contrat détaillé stipulant les obligations des deux parties et les conditions de remboursement.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Paiement Par Étapes</h3>
              <p className="text-gray-600">
                Nous utilisons un système de paiement échelonné qui vous permet de ne payer que lorsque certaines étapes sont atteintes dans votre processus d'admission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Process */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Notre Processus de Paiement"
            subtitle="Un système transparent et sécurisé"
          />
          
          <div className="max-w-4xl mx-auto mt-12 bg-neutral p-8 rounded-lg shadow-md">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center mr-3">1</span>
                  Établissement de la confiance
                </h3>
                <div className="ml-11">
                  <p className="text-gray-600 mb-3">
                    Avant tout paiement, nous vous fournissons :
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Une copie de notre passeport</li>
                    <li>Nos coordonnées complètes (adresse en Russie, numéro d'enregistrement d'entreprise)</li>
                    <li>Des témoignages vérifiables d'anciens clients</li>
                    <li>La possibilité de parler avec nos étudiants actuels</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center mr-3">2</span>
                  Signature du contrat
                </h3>
                <div className="ml-11">
                  <p className="text-gray-600 mb-3">
                    Nous vous envoyons un contrat détaillé qui spécifie :
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Les services exacts que nous fournirons</li>
                    <li>Les délais pour chaque étape</li>
                    <li>Le montant total et l'échéancier de paiement</li>
                    <li>Les conditions de remboursement</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center mr-3">3</span>
                  Premier versement (50%)
                </h3>
                <div className="ml-11">
                  <p className="text-gray-600 mb-3">
                    Après la signature du contrat, vous effectuez le premier paiement par :
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Dépôt bancaire dans notre compte</li>
                    <li>Virement bancaire international</li>
                  </ul>
                  <p className="text-gray-600 mt-3">
                    Nous vous fournissons immédiatement un reçu officiel et commençons le travail sur votre dossier d'admission.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center mr-3">4</span>
                  Suivi et étapes intermédiaires
                </h3>
                <div className="ml-11">
                  <p className="text-gray-600">
                    Vous recevez des mises à jour régulières sur l'avancement de votre dossier avec des preuves documentées (copies des soumissions, confirmations, etc.).
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center mr-3">5</span>
                  Deuxième versement (50%)
                </h3>
                <div className="ml-11">
                  <p className="text-gray-600 mb-3">
                    Une fois votre lettre d'admission obtenue, vous effectuez le paiement final pour :
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>La procédure de visa</li>
                    <li>La réservation de logement</li>
                    <li>L'accueil à l'aéroport</li>
                    <li>Les autres services inclus dans votre forfait</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Banking Information */}
      {/* <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Informations Bancaires"
            subtitle="Options de paiement disponibles"
          />
          
          <div className="max-w-3xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-primary">Dépôt Bancaire Local</h3>
                <p className="text-gray-600 mb-4">
                  Pour les clients disposant d'un accès à nos banques partenaires dans les pays suivants :
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
                  <li>France</li>
                  <li>Sénégal</li>
                  <li>Côte d'Ivoire</li>
                  <li>Cameroun</li>
                  <li>Maroc</li>
                </ul>
                <p className="text-gray-600">
                  Les coordonnées bancaires complètes vous seront fournies après la signature du contrat.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-primary">Virement International</h3>
                <p className="text-gray-600 mb-4">
                  Pour les clients résidant dans d'autres pays, nous acceptons les virements internationaux via :
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
                  <li>SWIFT</li>
                  <li>TransferWise (Wise)</li>
                  <li>Western Union Business</li>
                </ul>
                <p className="text-gray-600">
                  Des frais supplémentaires peuvent s'appliquer selon votre banque et le mode de transfert.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-5 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-yellow-800 mb-2">Important</h4>
                  <p className="text-yellow-800">
                    Nous n'acceptons pas les paiements via Western Union ou MoneyGram pour les particuliers, ni les transferts d'argent informels. Tous les paiements doivent être effectués via des canaux bancaires officiels pour garantir votre protection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Customer Assurance */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Vos Garanties"
            subtitle="Notre engagement envers votre sécurité et satisfaction"
          />
          
          <div className="max-w-3xl mx-auto mt-12">
            <div className="bg-neutral p-6 rounded-lg shadow-md">
              <div className="space-y-6">
                <div className="flex">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Contrat Juridiquement Contraignant</h4>
                    <p className="text-gray-600">
                      Notre contrat est conforme aux normes internationales et peut être utilisé comme recours légal en cas de non-respect des obligations.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Politique de Remboursement Claire</h4>
                    <p className="text-gray-600">
                      Si nous ne parvenons pas à obtenir votre admission ou votre visa (cas très rare), nous vous remboursons selon les conditions détaillées dans le contrat.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Transparence Totale</h4>
                    <p className="text-gray-600">
                      Vous recevez des preuves documentées de toutes nos actions entreprises pour votre dossier, y compris les communications avec les universités et les autorités.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Référence d'Anciens Clients</h4>
                    <p className="text-gray-600">
                      Nous pouvons vous mettre en contact avec d'anciens clients qui ont utilisé nos services pour vous rassurer sur notre légitimité.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-5 bg-green-50 border border-green-200 rounded-md">
                <div className="flex">
                  <FileText className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-green-800 mb-2">Exemple de Contrat</h4>
                    <p className="text-green-800">
                      Nous pouvons vous envoyer un exemple de contrat avant tout engagement pour que vous puissiez le faire examiner et vous assurer de sa validité.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

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
            title="Questions Fréquentes sur le Paiement"
            subtitle="Réponses aux préoccupations courantes concernant nos méthodes de paiement"
          />
          
          <div className="max-w-3xl mx-auto mt-12">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Comment puis-je être sûr que mon argent est en sécurité ?</h3>
                <p className="text-gray-600">
                  Nous comprenons vos préoccupations. C'est pourquoi nous fournissons une preuve d'identité avant tout paiement, utilisons des contrats détaillés, et échelonnons les paiements. Vous ne payez que lorsque vous voyez des résultats concrets.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Que se passe-t-il si ma demande d'admission est rejetée ?</h3>
                <p className="text-gray-600">
                  Dans le cas peu probable où votre demande serait rejetée (moins de 2% de nos cas), nous vous proposons soit une autre université, soit un remboursement partiel selon les termes du contrat. Les frais liés au traitement du dossier déjà effectué sont non remboursables.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Comment effectuer un paiement depuis un pays africain ?</h3>
                <p className="text-gray-600">
                  Nous avons des partenariats bancaires dans plusieurs pays africains (Sénégal, Côte d'Ivoire, Cameroun, etc.) qui vous permettent d'effectuer des dépôts locaux sans frais de transfert international. Pour les autres pays, nous acceptons les transferts via des services comme TransferWise ou Western Union Business.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Est-il possible de payer en plusieurs versements ?</h3>
                <p className="text-gray-600">
                  Oui, notre système standard est de deux versements (30% puis 70%). Pour le forfait Premium, nous pouvons proposer un plan de paiement en trois versements sous certaines conditions. Contactez-nous pour discuter des options personnalisées.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Des questions sur notre processus de paiement ?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            N'hésitez pas à nous contacter pour obtenir plus d'informations ou clarifier tout aspect de notre système de paiement sécurisé.
          </p>
          <Button className="bg-white text-primary hover:bg-gray-100" asChild>
            <Link to="/contact">Nous contacter</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Paiement;
