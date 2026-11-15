import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldAlert } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="bg-td-graphite text-white min-h-[70vh] flex items-center py-20">
      <Container className="text-center max-w-xl space-y-6">
        <div className="h-16 w-16 rounded-2xl bg-td-red/20 text-td-red mx-auto flex items-center justify-center">
          <ShieldAlert className="h-8 w-8" />
        </div>

        <div className="font-mono text-xs font-bold text-td-orange uppercase tracking-wider">
          ERROR 404 // ROUTE NOT FOUND
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white">
          System Endpoint Missing
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed">
          The page or resource you requested could not be located. It may have moved or been updated.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="primary" size="md" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Return to Homepage
          </Button>

          <Button href="/services" variant="outline" size="md">
            Browse Services
          </Button>
        </div>
      </Container>
    </div>
  );
}
