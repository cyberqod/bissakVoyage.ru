
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral">
      <div className="text-center p-6 max-w-md">
        <h1 className="text-6xl font-bold text-primary mb-6">404</h1>
        <p className="text-xl text-gray-700 mb-8">
          Oops! La page que vous cherchez n'existe pas.
        </p>
        <p className="text-gray-600 mb-8">
          La page demandée n'a pas été trouvée ou a peut-être été déplacée.
        </p>
        <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
          <Link to="/">Retour à l'accueil</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
